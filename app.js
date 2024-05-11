const express = require("express")

const app = express()

app.use("/post", (req, res, next) => {
    res.send("Post")
})

app.use("/", (req, res, next) => {
    res.send("Hello World")
})

app.use((error, req, res, next) => {
    console.log(error);
    res.send("An error occured.")
})



app.listen(3000, () => console.log("Server start at port: 3000"))