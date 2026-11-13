const pool = require("./pool") 




async function insertBooks(title, author, pages, course_id) {
  await pool.query(`INSERT INTO books (title, author, pages, course_id) VALUES ($1, $2, $3, $4)`, [title, author, pages, course_id]);
}

async function getAllBooks() {
    const {rows} = await pool.query(`SELECT books.*, courses.course 
            FROM books
            JOIN courses ON books.course_id = courses.id `);
    return rows
    
}

async function lengthBooks() {
    const {rows} = await pool.query("SELECT COUNT (*) AS total FROM books")
    return Number(rows[0].total)}


async function getBooks(courseId) {
    const {rows} = await pool.query("SELECT * FROM books WHERE course_id = $1",[courseId]);
    return rows
    
}

async function deleteBook(id, course_id){
   //to delete books based on bourse courses and book id 
    await pool.query("DELETE FROM books WHERE id =  $1 AND course_id = $2", [id, course_id]

    )

}

async function delBook(course_id){
    //to delete books based on courses 
    await pool.query('DELETE FROM books WHERE course_id = $1',[course_id])
}



module.exports = {
    delBook,
    lengthBooks,
    getBooks,
    insertBooks,
    getAllBooks,
    deleteBook
}