const express = require("express")

const app = express()
const port = '3000'
 app.get('/',(req,res)=>{
  res.send('Hi')
 })

 let githubdata = {
  "name": "John Doe",
  "age": 30,
  "city": "New York"
  
 }

 app.get('/githubdata',(req,res)=>{
  res.json(githubdata)
 })

 app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
 })