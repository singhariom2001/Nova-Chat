const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('DB Connection Successful'))
    .catch((err) => {
        console.log('Error in DB Connection');
        console.error(err);
        process.exit(1);
    });
}