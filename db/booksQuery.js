const pool = require("./pool")




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

async function insertBooks(subject, Title, Author, Pages) {
  await pool.query(`INSERT INTO ${subject} (Title, Author, Pages) VALUES ($1, $2, $3)`, [Title, Author, Pages]);
}

async function getAllBooks(books) {
    const {rows} = await pool.query(`SELECT * FROM ${books}`)
    return rows
    
}



module.exports = {
    createTable,
    insertBooks,
    getAllBooks
}