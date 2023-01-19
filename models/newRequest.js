import { Schema, model, models } from 'mongoose'

const requestSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    business: {
        type: String,
        required: true
    },
    budget: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

const Request = models.Request || model('Request', requestSchema)

export default Request