const {Router} = require("express")
const courseRouter = Router()

const courseControl = require("../controller/courseControl")

courseRouter.get("/", courseControl.getCourses)
courseRouter.post("/", courseControl.insertCourse)
courseRouter.get("/courseForm", courseControl.getCourseForm)
courseRouter.post("/courseForm", courseControl.postCourseform)

module.exports = courseRouter;