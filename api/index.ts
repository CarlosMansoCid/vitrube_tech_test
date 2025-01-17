import { Request, Response } from "express"

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('../ui/dist'));

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
