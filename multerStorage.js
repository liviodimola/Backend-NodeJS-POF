const multer = require('multer');
const handlingError = require('http-errors');

const storage = multer.diskStorage({
    destination: function(req,file,callback){
        if (!file) {
            callback(handlingError(400, 'File non valido'))
        } else {
            callback(null, `Images`)
        };
    },
    filename: function(req,file,callback){
        callback(null, Date.now() + `${file.originalname}`);
    }});


module.exports = storage;