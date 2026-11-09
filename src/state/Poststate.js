// Poststate.js

export default class PostState {
    constructor() {
         this.permanentPosts = new Map();
    this.regularPosts = new Map();
    }

    setPermanentPosts(posts) {
        this.permanentPosts.clear();

        posts.forEach(post => {
            this.permanentPosts.set(post.postId, post);
        });
    }

    setRegularPosts(posts) {
        this.regularPosts.clear();
        
        posts.forEach(post => {
            this.regularPosts.set(post.postId, post);
        });
    }

    addRegularPost(post) {
     if (!post || !post.postId) return;

        this.regularPosts.set(post.postId, post);
    }

    removeRegularPost(postId) {
        this.regularPosts.delete(postId);
    }

    removeExpiredPosts(currentTime = Date.now()){
        for (const [postId, post] of this.regularPosts.entries()){
                const isExpired = currentTime - post.createdAt >= post.lifespan;

                if (isExpired){
                    this.regularPosts.delete(postId);
                }
        }
    }
     
    getRegularPosts() {
        return [...this.regularPosts.values()];
    }


    getDisplayPosts() {
        return [
            ...this.permanentPosts.values(),
            ...this.regularPosts.values(),
        ];
    }

}
