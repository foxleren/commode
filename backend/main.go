package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
	"net/smtp"
	"os"
)

type client struct {
	Name        string `json:"name"`
	PhoneNumber string `json:"phoneNumber"`
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {

		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Headers", "*")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

func main() {

	router := gin.Default()
	router.Use(CORSMiddleware())

	router.POST("/emails", postEmail)
	router.Run("localhost:8080")
}

func postEmail(c *gin.Context) {
	var cl client
	if err := c.BindJSON(&cl); err != nil {
		return
	}

	sendEmail(&cl)

	c.IndentedJSON(http.StatusOK, cl)

}

type smtpServer struct {
	host string
	port string
}

func (s *smtpServer) Address() string {
	return s.host + ":" + s.port
}

func sendEmail(c *client) {
	from := "foxleren.stuff@gmail.com"
	password := "vyxujehcfhzxxhrg"

	to := []string{"foxleren.stuff@gmail.com"}

	smtpServer := smtpServer{host: "smtp.gmail.com", port: "587"}

	message := BuildMessage(c)

	auth := smtp.PlainAuth("", from, password, smtpServer.host)
	err := smtp.SendMail(smtpServer.Address(), auth, from, to, []byte(message))

	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}

func BuildMessage(c *client) string {
	msg := fmt.Sprintf("Subject: Бронирование столика \n\n\n\n")
	if len(c.Name) != 0 {
		msg += fmt.Sprintf("Получена заявка на бронь столика от %s.\n\n", c.Name)
	} else {
		msg += fmt.Sprintf("Получена заявка на бронь столика от неизвестного клиента.\n\n")
	}

	msg += fmt.Sprintf("Контактный номер: %s\n\n\n\n", c.PhoneNumber)
	msg += fmt.Sprintf("С уважением, ваша служба доставки сообщений.")
	return msg
}
