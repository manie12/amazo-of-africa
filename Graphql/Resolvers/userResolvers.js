import post from '../../Models/postModels.js';

const postResolver = {
    Query: {
        async getposts() {
            try {
                const Post = await post.find();
                return Post;

            } catch (error) {
                throw new Error(error)
            }

        }
    }
}
export default postResolver;