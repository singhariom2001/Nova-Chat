const File = require('../models/File');

exports.pdfUpload = async (req, res) => {
    try{
        //pdf fetch
        const file = req.files.pdf;
        console.log(file);

        //specifying the path on the server where pdf will be uploaded
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        console.log('Path -> ', path);
        
        //moving the pdf file to the specified path
        file.mv(path, async (err) => {
            if (err) {
                console.error('Error during file upload:', err);
                return res.status(500).json({
                    success: false,
                    message: 'File upload failed',
                });
            }

            // Saving the path in the database
            const fileData = await File.create({
                pdfUrl: path,
            });

            // Sending a successful response
            return res.status(200).json({
                success: true,
                pdfUrl: path,
                message: 'PDF uploaded successfully',
            });
        });


    } catch(err){
        console.log(err);
        res.status(400).json({
            success: false,
            message: 'Something went wrong'
        })

    }
}