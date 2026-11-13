const db = require("../db/booksQuery")
const dbCourses = require("../db/queries")






async function getAllBook (req, res){
    const {subject } = req.params
    const books = await db.getAllBooks(subject);
    res.render("books", {books, subject})
}

async function getBooks(req, res) {
    const {subject:courseId} = req.params
    const books = await db.getBooks(courseId)
    const courses = await dbCourses.getAllcourses()
    res.render("books", {books, courseId, courses })
    
}

async function getBooksForm(req, res){
    const courses = await dbCourses.getAllcourses()
    res.render("booksForm", {subject: req.params.subject, courses})

}

async function postBooksForm(req, res) {
    const {subject: courseId} = req.params;
    const {bookTitle, bookAuthor, bookPages} = req.body
    await db.insertBooks(bookTitle, bookAuthor, bookPages, courseId)
    res.redirect(`/${courseId}`)
    
}

async function deleteBook(req, res) {
    const {subject: courseId, id} = req.params;
    await db.deleteBook(id, courseId)
    res.redirect(`/${courseId}`)
    
}

module.exports = {
    getBooks,
    getAllBook,
    getBooksForm,
    postBooksForm,
    deleteBook
}