//timeline.js

export  default function CreateTimeline(postController){
    function getTimelinePosts() {
        const posts = postController.getDisplayPosts();

        return[...posts].sort((a, b) => b.createAt - a.ceateAt);
    }

    return{
        getTimelinePosts,
    };

}