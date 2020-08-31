const mongoose = require('mongoose');

const partSchema = mongoose.Schema({
    serialNo: {
        type: Number
    },
    partName: {
        type: String
    },
    cost: {
        type: Number
    },
    manufacturer: {
        type: String
    }
});

const part = mongoose.model('Part', partSchema);

module.exports = part;