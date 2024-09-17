const express = require('express');
const router = express.Router();

//importing the handler
const {addUser} = require("../controllers/auth");
const {login} = require("../controllers/auth");
const {pdfUpload} = require("../controllers/FileUpload");

//importing the middlewares
const {auth, isUser} = require("../middlewares/auth");

//api routes
router.post('/auth/addUser', addUser);
router.post('/auth/login', login);
//api route for file upload
router.post('/upload/pdfUpload', pdfUpload);

//protected route-- one who has the certain role can access the route
router.get('/auth/users', auth, isUser, (req, res) => {
   return res.json({
    success: true,
    message: 'Welcome to the dashboard for Users'
   });
})



module.exports = router;