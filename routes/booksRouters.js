const { Router } = require("express")
const booksRouter = Router({ mergeParams: true })
const booksController = require("../controller/booksController")

booksRouter.get("/", booksController.getAllBook )
booksRouter.get("/booksForm", booksController.getBooksForm)
booksRouter.post("/booksForm", booksController.postBooksForm)



module.exports = booksRouter;