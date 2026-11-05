const db = require("../db/queries");

async function getCourses(req, res){
    const courses = await db.getAllcourses();
    res.render("index", { courses })
}

async function insertCourse(req, res) {
    const course = req.body 
    await db.insertCourses(course);
    res.redirect("/")
    
}

module.exports = {
    insertCourse,
    getCourses
}