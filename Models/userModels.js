import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    confirmPassword: String
});

const user = mongoose.model('User', userSchema);