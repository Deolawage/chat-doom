// Storage.js

class StorageManager {
    constructor() {
        this.storageKey = 'posts';
        

    }

    savePosts(posts) {
        try {
            const serializedPosts = JSON.stringify(posts);
            localStorage.setItem(this.storageKey, serializedPosts);
        } catch (error) {
            console.error('Error saving posts to localStorage:', error);
        }
    }

    loadPosts() {
        try {
            const serializedPosts = localStorage.getItem(this.storageKey);
            if (serializedPosts) {
                return JSON.parse(serializedPosts);
            }
            return [];
        } catch (error) {
            console.error('Error loading posts from localStorage:', error);
            return [];
        }
}
}
export default StorageManager;