package controller

import (
  "github.com/labstack/echo"
  "net/http"
  "fmt"
)

func Api(e *echo.Echo) error {
  g := e.Group("/api")

  g.Use(func (next echo.HandlerFunc) echo.HandlerFunc {
    return func(c echo.Context) error {
      fmt.Println("HI")

      return next(c)
    }
  })

  g.GET("/hello", func (c echo.Context) error {
    return c.String(http.StatusOK, "Hello")
  })

  g.GET("/*", func (c echo.Context) error {
    fmt.Println("hi3")
    return c.String(http.StatusNotFound, "Not Found")
  })

  return nil
}