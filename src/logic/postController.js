//postController.js

import createPostFactory from './postFactory.js';

class PostController {
    constructor(postStateInstance, storageInstance) {
this.postStateInstance = postStateInstance;
this.storageInstance = storageInstance;

    }

     initialize() {
      const savedPosts = this.storageInstance.loadPosts();

      this.postStateInstance.setRegularPosts(savedPosts);

      this.storageInstance.savePosts(this.postStateInstance.getRegularPosts()
    );

    }


createPost(content) {
    const newPost = createPostFactory(content);

    this.postStateInstance.addRegularPost(newPost);

    this.storageInstance.savePosts(
        this.postStateInstance.getRegularPosts()
    );

    return newPost;
}

    deletePost(postId) {
        this.postStateInstance.removeRegularPost(postId);

        this.storageInstance.savePosts(this.postStateInstance.getRegularPosts()
    );
    }   

    removeExpiredPosts() {
        this.postStateInstance.removeExpiredPosts();

        this.storageInstance.savePosts( this.postStateInstance.getRegularPosts()
    );
    }

    getDisplayPosts() {
        return this.postStateInstance.getDisplayPosts();
    }

}

export default PostController;
