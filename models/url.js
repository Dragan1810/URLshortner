const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const URLSchema = new Schema({
    oldURL: {
        type: String,
        required: [true,"ENTEEEER"]
    },

    newURL: {
        type: Number
    }
    
})

// Geo_Loc
const URLi = mongoose.model('URL',URLSchema);

module.exports = URLi;