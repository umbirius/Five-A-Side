import mongoose from 'mongoose'


const fieldSchema = new mongoose.Schema({

    name: String, 
    location: String, 
    cost: {
        type: Number, 
        default: 0
    }, 
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Field = mongoose.model('Field', fieldSchema)

export default Field


