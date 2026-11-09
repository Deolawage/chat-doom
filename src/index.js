import './styles/styles.css';
import PostState from './state/PostState.js';
import permanentPosts from './logic/permanentPosts.js';
import createPost from './logic/postFactory.js';
import StorageManager from './storage/storage.js';

// Initialize application state
const postState = new PostState();

// Initialize permanent posts
postState.setPermanentPosts(permanentPosts);

// Initialize storage
const storage = new StorageManager();

// Restore regular posts
const savedPosts = storage.loadPosts();
postState.setRegularPosts(savedPosts);

// Remove expired posts
postState.removeExpiredPosts();

// Save the cleaned collection
storage.savePosts(postState.getRegularPosts());

// Expose for temporary console testing
window.postState = postState;
window.createPost = createPost;
window.storage = storage;

// Inspect application state
console.log(postState.getDisplayPosts());