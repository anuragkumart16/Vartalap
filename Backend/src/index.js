import dotenv from "dotenv";
import connectDb from "./db/index.js";
import app from "./app.js"
import http from "http"
import { Server } from "socket.io"

dotenv.config({
    path: './.env'
})

const server = http.createServer(app)

export const io = new Server(server, {
    cors: {
        origin: process.env.ALLOWED_ORIGINS,
        credentials: true
    }
})

connectDb()
.then(()=>{
    server.listen(process.env.PORT || 8000,'0.0.0.0',()=>{
        console.log('Express App Started Successfully and Running!')
        console.log(`Server Started at http://localhost:${process.env.PORT || 8000}`)
    })
    
})
.catch(err => console.log('DataBase connection failed'+err) )