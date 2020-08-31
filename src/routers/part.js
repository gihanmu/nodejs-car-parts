const express = require('express');
const multer = require('multer');
const Part = require('../models/part');
const csv = require('csvtojson');
const router = express.Router();

const upload = multer({
});

router.post('/part/upload', upload.single('parts'), async (req, res) => {
    try {
        const partsJson = await csv().fromString(req.file.buffer.toString());
        const parts = await Part.insertMany(partsJson);
        res.status(201).send({message: 'Parts uploaded successfully', parts})
    }catch(error) {
        res.status(500),send({message: 'Error in parts upload', error})
    }
   
    
});

module.exports = router;