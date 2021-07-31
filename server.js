const express = require("express")
const app = express()
// console.log(app)
const midleware = require("./midleware")
app.use(midleware)


app.get("/",(req,res) => {
    // console.log(req)
    res.sendFile(__dirname+"/public/home.html")
})
app.get("/services",(req,res) => {
    // console.log(req)
    res.sendFile(__dirname+"/public/services.html")
})
app.get("/contact",(req,res) => {
    // console.log(req)
    res.sendFile(__dirname+"/public/contact.html")
})


app.listen(5000,()=>{
    console.log("server is running",5000)
})