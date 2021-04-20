import mongoose from 'mongoose';

const languageSchema = mongoose.Schema({
    label: String,
    value: String
})

const language = mongoose.model('language',languageSchema);

export default language;