const db = require("../db/queries");
const booksDb = require("../db/booksQuery")

async function getCourses(req, res){
    const courses = await db.getAllcourses();
    res.render("courses", { courses })
}

function getCourseForm(req, res){
    res.render("courseForm")
}

async function insertCourse(req, res) {
    const course = req.body 
    await db.insertCourses(course);
    res.redirect("/")
    
}

async function postCourseform(req, res) {
    const { newCourse } = req.body
    console.log(`I am ${newCourse}`)
    booksDb.createTable(newCourse)
    await db.insertCourses(newCourse)
    res.redirect("/courses")
    
    
}

module.exports = {
    insertCourse,
    getCourses,
    getCourseForm,
    postCourseform
}