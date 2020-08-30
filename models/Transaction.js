const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Dodaja tekst']
    },
    amount: {
        type: Number,
        required: [true, 'Podaj cyfrę dodatnią lub ujemną']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Transactions', TransactionSchema)