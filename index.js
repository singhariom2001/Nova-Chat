const express = require('express');
const app = express();
const cors = require('cors'); // Import CORS


//importing dotenv objects so that they can be accessed
require('dotenv').config();
const PORT = process.env.PORT || 4001;

//adding middleware
app.use(express.json());

//adding cors middleware
app.use(cors());

//adding middleware for file upload
const fileupload = require("express-fileupload");
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

//connecting to db
const db = require('./config/database');
db.connect();

//mounting of api route
const Upload = require('./routes/Router');
app.use('/api/v1/novaChat', Upload);

//server activation
app.listen(PORT, () => {
    console.log(`App is running at PORT: ${PORT}`);
});
