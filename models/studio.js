const mongoose = require('mongoose');
// Shortcut to mongoose.Schema class
const Schema = mongoose.Schema;

const reviewSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true 
});

const studioSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
    },
    img: {
        type: String,
    },
    session: {
        type: Date,
        default: function() {
        let today = new Date();
        return today.setFullYear(today.getFullYear()+1);
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        enum: ['Podcast', 'Rehearsal', 'Recording', 'Film']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      userName: String,
      userAvatar: String
    },
    reviews: [reviewSchema]
    }, {
      timestamps: true,
});


module.exports = mongoose.model('Studio', studioSchema);
