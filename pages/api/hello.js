// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const request = require("request")
const fs = require("fs")
const path = require("path")
const process= require("process")
const {authenticate} = require('@google-cloud/local-auth');

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
  return (
    <>hello</>
  )
}
