const multer =require('multer')
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '\csvFiles');
    },
    filename: (req, file, cb) => {
      cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    }
  });
  const upload= multer({ storage: fileStorage }).single('file')
  module.exports = upload