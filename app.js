const express = require ("express");
const app = express();
const path = require ("node:path")


app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

const PORT  = process.env.PORT || 3000;

app.listen(PORT, (error) => {
    if (error){
        throw error
    }
    console.log(`am good at Port : ${PORT}`)
})

app.get("/", (req, res) =>{
    res.send("Welcome to Library")
})
