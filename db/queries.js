const pool = require("./pool")

async function getAllcourses() {
    const {rows} = await pool.query("SELECT * FROM courses");
    return rows
    
}

async function insertCourses(course) {
    await pool.query("INSERT INTO courses (course) VALUES ($1)",[course])
    
}

module.exports = {
    getAllcourses,
    insertCourses
}