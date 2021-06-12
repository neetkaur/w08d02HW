const express = require('express')
const app = express()
const PORT = 8080

app.get('/greeting',(req,res)=> {
  res.send("Hello Stranger")
})

app.get('/greeting/:name',(req,res)=>{
  res.send(`Wow! Hello there, ${req.params.name}`)
})



app.listen(PORT,()=>console.log("Listening @ 8080"))
