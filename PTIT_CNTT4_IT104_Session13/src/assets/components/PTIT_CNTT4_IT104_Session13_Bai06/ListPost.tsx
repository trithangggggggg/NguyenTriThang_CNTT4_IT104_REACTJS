import React, { Component } from "react";
import DetailPost from "./DetailPost ";

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
};

type StateList = {
  posts: Post[];
};

export default class ListPost extends Component<{}, StateList> {
  constructor(props: {}) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          title: "Tại sao nên học ReactJS",
          content: "Học ReactJS dễ đi làm",
          author: "David",
        },
        {
          id: 2,
          title: "Props trong ReactJS",
          content:
            "Props giúp truyền dữ liệu từ component con xuống component cha",
          author: "Linda",
        },
        {
          id: 3,
          title: "State trong ReactJS là gì?",
          content: "State giúp trữ trạng thái dữ liệu bên trong một component",
          author: "David",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h2 style={{ fontWeight: "bold" }}>Danh sách bài viết</h2>
        {this.state.posts.map((item) => (
          <DetailPost key={item.id} post={item} />
        ))}
      </div>
    );
  }
}
