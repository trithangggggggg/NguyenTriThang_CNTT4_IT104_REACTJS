class PostComment {
    constructor(userId, content) {
        this.replies = [];
        this.id = PostComment.nextId++;
        this.userId = userId;
        this.content = content;
    }
    addReply(reply) {
        this.replies.push(reply);
    }
}
PostComment.nextId = 1;
class Post {
    constructor(userId, content) {
        this.likes = []; // lưu userId của người thích
        this.comments = [];
        this.id = Post.nextId++;
        this.userId = userId;
        this.content = content;
    }
    addLike(userId) {
        if (this.likes.indexOf(userId) === -1) {
            this.likes.push(userId);
        }
    }
    addComment(comment) {
        this.comments.push(comment);
    }
}
Post.nextId = 1;
class User {
    constructor() {
        this.posts = [];
        this.followers = [];
        this.id = User.nextId++;
    }
    createPost(content) {
        const post = new Post(this.id, content);
        this.posts.push(post);
        return post;
    }
    comment(post, commentContent) {
        const comment = new PostComment(this.id, commentContent);
        post.addComment(comment);
        return comment;
    }
    follow(user) {
        if (this.followers.indexOf(user) === -1) {
            this.followers.push(user);
        }
    }
    likePost(post) {
        post.addLike(this.id);
    }
    viewFeed() {
        let feed = [];
        for (let followedUser of this.followers) {
            feed = feed.concat(followedUser.posts);
        }
        return feed;
    }
}
User.nextId = 1;
const userA = new User();
const userB = new User();
const userC = new User();
userA.follow(userB);
userA.follow(userC);
const postB1 = userB.createPost("Hello");
const postB2 = userB.createPost("How Are Where ");
const postC1 = userC.createPost("Duolingo");
userA.likePost(postB1);
userA.comment(postB1, "Nice to meet you ");
console.log("Feed của A:", userA.viewFeed());
