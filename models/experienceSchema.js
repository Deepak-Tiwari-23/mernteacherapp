import mongoose from 'mongoose';

const experienceSchema = mongoose.Schema({
    label: Number,
})

const experience = mongoose.model('experience',experienceSchema);

export default experience;