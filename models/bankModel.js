const mongoose = require('mongoose')

const bankSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    customerEmail: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value),
            message: (props) => `${props.value} is not a valid email address`
        },
    },
    phoneNumber: String,
    address: String,
    depositAmount: {
        type: Number,
        min: 1,
        max: 5000
    },
    balance: Number,
    branch: {
        type: String,
        enum: ['Main St', 'West St', 'East St'],
        required: true
    },
    insertedDate: {
        type: Date,
        default: Date.now
    }
})

const Bank = mongoose.model('Bank', bankSchema)
module.exports = Bank