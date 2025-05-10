package config

import (
	"context"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// ConnectDB 连接到MongoDB
func ConnectDB() (*mongo.Database, error) {
    ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
    defer cancel()
    
    // 连接到MongoDB
    client, err := mongo.Connect(ctx, options.Client().ApplyURI("mongodb://localhost:27017"))
    if err != nil {
        return nil, err
    }
    
    // 检查连接
    err = client.Ping(ctx, nil)
    if err != nil {
        return nil, err
    }
    
    return client.Database("Gateway_JLUnity"), nil
}
