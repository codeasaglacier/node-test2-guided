const express = require("express")
const cors = require("cors")
const hobbitsRouter = require("./hobbits/hobbits-router")

const server = express()
const port = process.env.PORT || 5000

server.use(cors())
server.use(express.json())

server.use("/hobbits", hobbitsRouter)
server.get("/", (req, res) => {
	res.json({
		// 11) change message to check test 
		// message: "Welcome to our API",
		// message: "Hello" <--- commented out for #12
		// 12) change message back to get passing test ( g2 test )
		message: "Welcome to our API",
	})
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

// 4) add if statement so the server doesn't start twice ( g2 test.js )
if ( !module.parent ) {
	server.listen(port, () => {
		console.log(`Running at http://localhost:${port}`)
	})
}

// 3) export as server to allow import to test
module.exports = server