const cors = require('cors')
const express = require('express')
const app = express()
const fs = require('fs')
require('dotenv').config()
const https = require('https')
const path = require('path')
const jwt = require('jsonwebtoken')
var mysql = require('mysql2');

// Some use calls.
app.use(cors())
app.use(express.json())
app.use("/auth", require("./auth/route"))

// HTTPs credential setup.

const key = fs.readFileSync('https/private.key')
const cert = fs.readFileSync('https/certificate.crt')

const cred = {
   key,
   cert
}

app.listen(3302)

const httpsServer = https.createServer(cred, app)
httpsServer.listen(8443)

////////////////////////////

// Endpoints.
app.get('/getReports', (req, res) => {
  res.json('Reports displayed here');

 const pass = "aWq*1S98W#Dr";

    var connection = mysql.createConnection({
      host     : 'vehicle-inspection-reports.clucv6sggldw.eu-west-1.rds.amazonaws.com',
      user     : 'company',
      password : pass,
      port     : 3306,
      database : "reports"
    });

    var command = "SELECT * FROM reportsTable"

    var command2 = "SELECT 'userName', 'userPass', 'userRole' FROM usersTable"

    connection.query(command, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }

      console.log(results)
    })

    connection.end()
})

app.get('/login', (req, res) => {
  res.json('Login functionality here');
})

function authenticateToken(req, res, nex) {
   const authHeader = req.headers['authorization']
   const token = authHeader && authHeader.split(' ')[1]

   if (token == null) return res.sendStatus(401)

   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
     if (err) return res.sendStatus(403)

     req.user = user
     next()
   })
}
