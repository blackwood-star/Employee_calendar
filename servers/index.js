const next = require("next")
const express = require("express");
const PORT = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()
const Router = require("router")
const router = Router()


app.prepare()
    .then(() => {
        const server = express()

        server.get("/", (req, res) => {
            res.end("we made it");
        })

        server.listen(PORT, err => {
            if(err) throw err;
            console.log(`> Ready on ${PORT}`)
        })  
    })
    .catch(ex => {
        console.error(ex.stack)
        process.exit(1)
        
    })
