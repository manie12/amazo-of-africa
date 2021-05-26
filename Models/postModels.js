import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    username: String,
    body: String,
    createdAt: String,


});

const post = mongoose.model('Post', postSchema);
export default post;