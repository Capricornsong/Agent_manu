/*
 * @Author: Liusong He
 * @Date: 2022-08-06 12:44:45
 * @LastEditTime: 2022-08-06 16:53:59
 * @FilePath: \Agent_manu\server.js
 * @Email: lh2u21@soton.ac.uk
 * @Description: 
 */

const express = require('express')
const app = express()
// app.use(express.urlencoded({ extended: true }))
app.use(express.json())
let respString = ''

app.get('/userinfo', (req, res) => {
    console.log(respString)
    res.send(respString)

})

app.post('/level', (req, res) => {
    console.log(req.body)
    respString = req.body
    // res.send('POST request to the homepage')
})


app.listen(3000)