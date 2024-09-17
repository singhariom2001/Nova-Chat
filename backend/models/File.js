const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    pdfUrl: {
        type: String
    }
});

const File = mongoose.model("File", schema);
module.exports = File;