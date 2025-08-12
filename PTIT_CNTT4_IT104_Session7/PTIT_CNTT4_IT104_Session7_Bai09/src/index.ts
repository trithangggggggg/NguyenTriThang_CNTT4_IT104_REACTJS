class PostComment {
    public id: number;
    public userId: number;
    public content: string;
    public replies: PostComment[] = [];

    private static nextId: number = 1;

    constructor(userId: number, content: string) {
        this.id = PostComment.nextId++;
        this.userId = userId;
        this.content = content;
    }

    addReply(reply: PostComment) {
        this.replies.push(reply);
    }
}

class Post {
    public id: number;
    public userId: number;
    public content: string;
    public likes: number[] = []; // lưu userId của người thích
    public comments: PostComment[] = [];

    private static nextId: number = 1;

    constructor(userId: number, content: string) {
        this.id = Post.nextId++;
        this.userId = userId;
        this.content = content;
    }

    addLike(userId: number) {
        if (this.likes.indexOf(userId) === -1) {
            this.likes.push(userId);
        }
    }

    addComment(comment: PostComment) {
        this.comments.push(comment);
    }
}

class User {
    public id: number;
    public posts: Post[] = [];
    public followers: User[] = [];

    private static nextId: number = 1;

    constructor() {
        this.id = User.nextId++;
    }

    createPost(content: string) {
        const post = new Post(this.id, content);
        this.posts.push(post);
        return post;
    }

    comment(post: Post, commentContent: string) {
        const comment = new PostComment(this.id, commentContent);
        post.addComment(comment);
        return comment;
    }

    follow(user: User) {
        if (this.followers.indexOf(user) === -1) {
            this.followers.push(user);
        }
    }

    likePost(post: Post) {
        post.addLike(this.id);
    }

    viewFeed(): Post[] {
        let feed: Post[] = [];
        for (let followedUser of this.followers) {
            feed = feed.concat(followedUser.posts);
        }
        return feed;
    }
}

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







