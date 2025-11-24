const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    paymentId: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        required: true,
        default: 'pending'
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    }
}, { timestamps: true });

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;