package main

import (
	"github.com/labstack/echo"
	. "github.com/labstack/echo/middleware"
  "os"
  "awesome-scoreboard/controller"
  "fmt"
)

const(
  DEV_ENV = "development"
  PROD_ENV = "production"
)

func main() {
  ENV := os.Getenv("GO_ENV")

  e := echo.New()
  e.Pre(AddTrailingSlash())

  switch ENV {
  case PROD_ENV:
    fmt.Println("Ready for production mode")
    e.Use(Recover())

  case DEV_ENV:
    fmt.Println("Ready for development mode")
    e.Debug = true
    e.Use(Logger())
  }

  e.Use(StaticWithConfig(StaticConfig{
    Root: "public",
    Index: "nope",
  }))

  controller.Api(e)

  e.File("/*", "public/index.html")

	e.Logger.Fatal(e.Start(":3000"))
}
