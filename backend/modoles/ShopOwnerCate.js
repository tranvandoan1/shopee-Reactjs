import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema;
const ShopOwnerCate = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    id_cateShope: {
        type: ObjectId,
        ref: 'categories',
    },
    photo: {
        type: String
    },
    shop_id: {
        type: String,
        trim: true
    }
}, { timestamps: true });
module.exports = mongoose.model('shopownercate', ShopOwnerCate);