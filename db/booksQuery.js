const pool = require("./pool")
const bookRouter = require("../routes/booksRouters")



async function createTable(books) {
    if (!/^[a-z_][a-z0-9_]{0,62}$/i.test(books)){
        throw new Error ("Invalid table name") 
    }
    await pool.query(
        `
        CREATE TABLE IF NOT EXISTS ${books}(
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        Title VARCHAR (255), 
        Author VARCHAR (255), 
        Pages INT
        );            
`
    )
    
}

async function insertBooks(books, Title, Author, Pages) {
  await pool.query("INSERT INTO books (Title, Author, Pages) VALUES ($1, $2, $3)", [Title, Author, Pages]);
}

module.exports = {
    createTable,
    insertBooks
}