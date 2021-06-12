const express = require('express')
const app = express()
const PORT = 8080

app.get('/greeting',(req,res)=> {
  res.send("Hello Stranger")
})

app.get('/greeting/:name',(req,res)=>{
  res.send(`Wow! Hello there, ${req.params.name}`)
})

app.get('/tip/:total/:percentage',(req,res)=>{
  res.send(`Your tip amount is ${req.params.total/100*req.params.percentage}`)
})

magicAnswer = ["It is certain", "It is decidedly so", "Without a doubt",
"Yes definitely","You may rely on it", "As I see it yes", "Most likely",
"Outlook good","Yes", "Signs point to yes", "Reply hazy try again",
"Ask again later","Better not tell you now", "Cannot predict now",
"Concentrate and ask again","Don't count on it", "My reply is no",
"My sources say no","Outlook not so good", "Very doubtful"]

app.get('/magic/Will%20I%20Be%20A%20Millionaire',(req,res)=>{
  res.send(`Will I be a Millionaire \n
    <h1> ${magicAnswer[magicAnswer.length * Math.random() | 0]}</h1>`)
})
app.listen(PORT,()=>console.log("Listening @ 8080"))
