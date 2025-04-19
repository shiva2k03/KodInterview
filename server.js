const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());

// Serve static files from the current directory
app.use(express.static('./'));

// Configure multer for handling file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'recordings/');
    },
    filename: function (req, file, cb) {
        cb(null, 'recording-' + Date.now() + '.webm');
    }
});

const upload = multer({ storage: storage });

// Handle file upload
app.post('/upload', upload.single('video'), (req, res) => {
    res.json({ message: 'File uploaded successfully' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 