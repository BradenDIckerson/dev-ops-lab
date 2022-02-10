require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path');
const cors = require('cors')

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

app.use(express.json());







const port = process.env.PORT || process.env.SERVER_PORT

app.listen(port, () => console.log(`Server serving on ${port}`)) 