import mongoose from 'mongoose';

await mongoose.connect('mongodb://localhost:27017/my_db');

const InfoSchema = new mongoose.Schema({
    name: String,
    email: String,
    classes: String,
    level: String,
    expectations: String,
});

const Info = mongoose.model('Info', InfoSchema);

export default Info;