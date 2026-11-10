const express = require ("express");
const app = express();
const path = require ("node:path")
const courseRoute = require("./routes/courseRouter")
const booksRouter = require('./routes/booksRouters')
const queries = require("./db/queries")



app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")));

const PORT  = process.env.PORT || 3000;

app.listen(PORT, (error) => {
    if (error){
        throw error
    }
    console.log(`am good at Port : ${PORT}`)
})

app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    const courseLength = await queries.lengthCourse()
    res.render("index", {courseLength})
})
app.use("/courses", courseRoute)
app.use("/:subject", booksRouter)


