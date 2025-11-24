const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    courseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course',
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
},{timestamps:true});

const Cart = mongoose.model('Cart',cartSchema);

module.exports = Cart;