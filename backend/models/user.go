package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

// User 用户模型
type User struct {
	ID        primitive.ObjectID `json:"id,omitempty" bson:"_id,omitempty"`
	Username  string             `json:"username" bson:"username"`
	Email     string             `json:"email" bson:"email"`
	Password  string             `json:"password,omitempty" bson:"password"`
	CreatedAt time.Time          `json:"created_at" bson:"created_at"`
	UpdatedAt time.Time          `json:"updated_at" bson:"updated_at"`
}

// UserResponse 用于返回给前端的用户信息（不含密码）
type UserResponse struct {
	ID       primitive.ObjectID `json:"id,omitempty"`
	Username string             `json:"username"`
	Email    string             `json:"email"`
}

// ToResponse 将完整用户模型转换为安全的响应模型
func (u *User) ToResponse() UserResponse {
	return UserResponse{
		ID:       u.ID,
		Username: u.Username,
		Email:    u.Email,
	}
}
