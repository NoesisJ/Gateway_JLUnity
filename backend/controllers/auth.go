package controllers

import (
	"context"
	"net/http"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"golang.org/x/crypto/bcrypt"

	"github.com/jlu/gateway/models"
)

// AuthController 处理认证相关请求
type AuthController struct {
    collection *mongo.Collection
}

// NewAuthController 创建新的认证控制器
func NewAuthController(db *mongo.Database) *AuthController {
    return &AuthController{
        collection: db.Collection("users"),
    }
}

// Register 处理用户注册
func (ac *AuthController) Register(c *gin.Context) {
    var user models.User
    if err := c.ShouldBindJSON(&user); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "请求数据无效"})
        return
    }
    
    // 检查用户名是否已存在
    count, err := ac.collection.CountDocuments(
        context.Background(),
        bson.M{"username": user.Username},
    )
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "服务器错误"})
        return
    }
    if count > 0 {
        c.JSON(http.StatusBadRequest, gin.H{"error": "用户名已存在"})
        return
    }
    
    // 哈希密码
    hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "密码处理失败"})
        return
    }
    
    // 创建用户
    user.Password = string(hashedPassword)
    user.CreatedAt = time.Now()
    
    _, err = ac.collection.InsertOne(context.Background(), user)
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "用户创建失败"})
        return
    }
    
    c.JSON(http.StatusOK, gin.H{
        "message": "注册成功",
        "username": user.Username,
    })
}

// Login 处理用户登录
func (ac *AuthController) Login(c *gin.Context) {
    var credentials struct {
        Username string `json:"username"`
        Password string `json:"password"`
    }
    
    if err := c.ShouldBindJSON(&credentials); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "请求数据无效"})
        return
    }
    
    // 查找用户
    var user models.User
    err := ac.collection.FindOne(
        context.Background(),
        bson.M{"username": credentials.Username},
    ).Decode(&user)
    
    if err != nil {
        c.JSON(http.StatusUnauthorized, gin.H{"error": "用户名或密码错误"})
        return
    }
    
    // 验证密码
    err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(credentials.Password))
    if err != nil {
        c.JSON(http.StatusUnauthorized, gin.H{"error": "用户名或密码错误"})
        return
    }
    
    // 创建JWT Token
    token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
        "id":       user.ID.Hex(),
        "username": user.Username,
        "exp":      time.Now().Add(time.Hour * 24).Unix(),
    })
    
    tokenString, err := token.SignedString([]byte("your_secret_key"))
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "生成token失败"})
        return
    }
    
    c.JSON(http.StatusOK, gin.H{
        "message": "登录成功",
        "token":   tokenString,
        "user": gin.H{
            "id":       user.ID.Hex(),
            "username": user.Username,
            "email":    user.Email,
        },
    })
}
