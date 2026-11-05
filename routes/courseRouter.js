const {Router} = require("express")
const courseRouter = Router()

const courseControl = require("../controller/courseControl")

courseRouter.get("/", courseControl.getCourses)
courseRouter.post("/", courseControl.insertCourse)

module.exports = courseRouter;