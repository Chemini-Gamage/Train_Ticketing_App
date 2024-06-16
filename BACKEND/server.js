const express = require(`express`)
const bodyParser = require(`body-parser`)
const mongoose = require(`mongoose`)
const dotenv = require(`dotenv`)
require(`dotenv`).config()
const cors = require('cors')
const app = express()
app.use(bodyParser.json())
app.use(cors());
app.use(express.json())

const PORT = process.env.PORT || 8070
const URL = process.env.MONGODB_URL
const connection = mongoose.connection
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
connection.once("open", () => {
    console.log(`mongodb connection successful`)
})
app.listen(PORT, () => {
    console.log(`app runs on ${PORT}`)


})

const trainRoute = require(`./routes/trains`)
app.use("/train", trainRoute)
const ticketRoute =require(`./routes/tickets`)
app.use(`/ticket`,ticketRoute);