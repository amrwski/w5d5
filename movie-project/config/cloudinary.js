const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
});

const storage = cloudinaryStorage({
  cloudinary,
  folder: 'movie-posters',
  allowedFormats: ['jpg', 'png'],
  filename: (req, file, done) => {
    done(null, file.originalname);
  }
});

const uploadCloud = multer({ storage: storage });

module.exports = uploadCloud;
