// PostFactory.js


import generatePseudoName from './pseudoNameGenerator.js';

//const DEFAULT_LIFESPAN = 24 * 60 * 60 * 1000;
const DEFAULT_LIFESPAN = 4 * 60 * 1000;

export default function createPost(content) {
  return {
    postId: crypto.randomUUID(),
    pseudoName: generatePseudoName(),
    content,
    createdAt: Date.now(),
    lifespan: DEFAULT_LIFESPAN,
  };
}
