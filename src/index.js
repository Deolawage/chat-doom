import './styles/styles.css';

import PostState from './state/Poststate.js';
import permanentPosts from './logic/permanentPosts.js';
import StorageManager from './storage/storage.js';
import PostController from './logic/postController.js';
import createTimeline from './logic/timeline.js';

// Initialize dependencies
const postState = new PostState();
const storage = new StorageManager();

// Initialize permanent posts
postState.setPermanentPosts(permanentPosts);

// Initialize controller
const postController = new PostController(postState, storage);

// Restore saved posts
postController.initialize();

// Temporary testing access
window.postController = postController;

const timeline = createTimeline(postController);

window.timeline = timeline;

console.log(postController.getDisplayPosts());