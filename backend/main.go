package main

import (
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/jlu/gateway/config"
	"github.com/jlu/gateway/controllers"
)

func main() {
	// 连接数据库
	config.InitDB()
	defer config.CloseDB()

	// 创建路由
	mux := http.NewServeMux()
	
	// 注册API路由
	mux.HandleFunc("/api/register", controllers.Register)
	mux.HandleFunc("/api/login", controllers.Login)

	// 创建HTTP服务器
	server := &http.Server{
		Addr:         ":8080",
		Handler:      mux,
		ReadTimeout:  15 * time.Second,
		WriteTimeout: 15 * time.Second,
		IdleTimeout:  60 * time.Second,
	}

	// 在独立的goroutine中运行服务器
	go func() {
		log.Println("服务器启动成功，监听端口 :8080")
		if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("服务器启动失败: %v", err)
		}
	}()

	// 设置优雅关闭
	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
	<-quit
	log.Println("正在关闭服务器...")

	log.Println("服务器已关闭")
}
