const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    actors: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Actor'
    }],
    // actorCount:{
    //     type: Number,
    //     required: true
    // }
});

module.exports = mongoose.model('Movie', movieSchema);