import mongoose from 'mongoose';

const serviceSchema = mongoose.Schema({
    label: String,
    value: String
})

const service = mongoose.model('service',serviceSchema);

export default service;