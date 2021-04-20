import mongoose from 'mongoose';

const teacherSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    services: {
        type: [String],
        required: true
    },
    languages: {
        type: [String],
        required: true
    },
    experience: {
        type: Number,
        required: true,
    },
    pic: {
        type: String,
        required:true
    }
});

const Teacher = mongoose.model('Teacher', teacherSchema
);

export default Teacher;