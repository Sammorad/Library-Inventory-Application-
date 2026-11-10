const pool = require("./pool")

async function getAllcourses() {
    const {rows} = await pool.query("SELECT * FROM courses");
    return rows
    
}

async function insertCourses(course) {
    await pool.query("INSERT INTO courses (course) VALUES ($1)",[course])
    
}

async function lengthCourse() {
    const {rows} = await pool.query("SELECT COUNT (*) AS total FROM courses")
    return Number(rows[0].total)
    
}

async function deleteCourse (course){
    if(!/^[a-z_][a-z0-9_]{0,62}$/i.test(course)){
        throw new Error("Invalid table name")
    }
     await pool.query(`DROP TABLE IF EXISTS ${course}`)
    await pool.query('DELETE FROM courses WHERE course =  $1', [course])
   


}

module.exports = {
    getAllcourses,
    insertCourses,
    lengthCourse,
    deleteCourse

}
