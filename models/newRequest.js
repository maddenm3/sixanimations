import { Schema, model, models } from 'mongoose'

const requestSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    business: {
        type: String,
        required: false
    },
    budget: {
        type: String,
        required: false
    },
    message: {
        type: String,
        required: false
    }
})

const Request = models.Request || model('Request', requestSchema)

export default Request