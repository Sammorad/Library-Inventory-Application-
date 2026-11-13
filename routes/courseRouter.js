const {Router} = require("express")
const courseRouter = Router()

const courseControl = require("../controller/courseControl")

courseRouter.get("/", courseControl.getCourses)
courseRouter.post("/", courseControl.insertCourse)
courseRouter.get("/courseForm", courseControl.getCourseForm)
courseRouter.post("/courseForm", courseControl.postCourseform)
courseRouter.post('/:courseId/delete', courseControl.deleteCourse)

module.exports = courseRouter;