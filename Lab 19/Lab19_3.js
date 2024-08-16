
// 3. Create a webapp in NodeJS which reads ƒles like about.txt, contact.txt and display it 
// using express (C )


const express = require('express')
const app = express()
const port = 3000

const fs = require('fs');
const data = fs.readFileSync('crud2.html')
app.get('/', (req, res) => {
  res.send(data.toString())
})
const data2 = fs.readFileSync('validation.html')
app.get('/validation', (req, res) => {
  res.send(data2.toString())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})