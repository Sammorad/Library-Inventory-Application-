const { Router } = require("express")
const booksRouter = Router()
const db = require("../db/booksQuery")

booksRouter.get("/:books", async (req, res) =>{
    const books  = req.params.books
    try{
        await db(books)
        res.render("books", { books })
    } catch (err){
        console.error(err)
        res.status(404.).send(err.message)
    }
    
  
})

module.exports = booksRouter;