import mongoose from 'mongoose';

const sliderSchema = new mongoose.Schema({
    photo: {
        type: String
    },
    status: {
        type: String,
        trim: true
    },
    ordinal_number: {
        type: String,
        trim: true
    }
}, { timestamps: true });
module.exports = mongoose.model('slides', sliderSchema);