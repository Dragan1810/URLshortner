const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const URLSchema = new Schema({
    url: {
        type: String,
        required: [true,"ENTEEEER"]
    },

    shorty: {
        type: Number
    }
    
})

// Geo_Loc
const URLy = mongoose.model('URL',URLSchema);

module.exports = URLy;