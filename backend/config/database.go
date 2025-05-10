package config

import (
	"context"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// 数据库配置常量
const (
	// 数据库连接URI
	MongoURI = "mongodb://localhost:27017"
	// 数据库名称
	DBName = "Gateway_JLUnity"
	// 用户集合名称
	UserCollection = "users"
)

// 全局数据库连接变量
var (
	// MongoDB客户端
	Client *mongo.Client
	// 用户集合
	UsersCollection *mongo.Collection
)

// 初始化数据库连接
func InitDB() {
	// 设置客户端连接配置
	clientOptions := options.Client().ApplyURI(MongoURI)

	// 连接到MongoDB
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	var err error
	Client, err = mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatal("无法连接到MongoDB:", err)
	}

	// 检查连接
	err = Client.Ping(ctx, nil)
	if err != nil {
		log.Fatal("无法连接到MongoDB:", err)
	}

	log.Println("成功连接到MongoDB!")

	// 初始化集合
	UsersCollection = Client.Database(DBName).Collection(UserCollection)
	log.Println("用户集合初始化完成")
}

// 断开数据库连接
func CloseDB() {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	if err := Client.Disconnect(ctx); err != nil {
		log.Fatal("无法断开MongoDB连接:", err)
	}
	log.Println("成功断开MongoDB连接")
} 