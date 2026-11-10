const db = require("../db/booksQuery")



async function getAllBook (req, res){
    const {subject } = req.params
    const books = await db.getAllBooks(subject);
    res.render("books", {books, subject})
}

function getBooksForm(req, res){
    res.render("booksForm", {subject: req.params.subject})

}

async function postBooksForm(req, res) {
    const {subject} = req.params;
    const {bookTitle, bookAuthor, bookPages} = req.body
    await db.insertBooks(subject, bookTitle, bookAuthor, bookPages)
    res.redirect(`/${subject}`)
    
}

async function deleteBook(req, res) {
    const {subject, id} = req.params;
    await db.deleteBook(subject, id)
    res.redirect(`/${subject}`)
    
}

module.exports = {
    getAllBook,
    getBooksForm,
    postBooksForm,
    deleteBook
}