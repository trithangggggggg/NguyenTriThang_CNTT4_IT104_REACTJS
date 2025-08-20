import React, { Component } from 'react'

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

interface DetailPostProps {
  post: Post;
}

export default class DetailPost  extends Component <DetailPostProps> {
  render() {
    const {id, title, content, author} = this.props.post
    return (
      <div>
            <p>ID: {id}</p>
            <p>Ten: {title}</p>
            <p>Content: {content}</p>
            <p>Author: {author}</p>
      </div>
    )
  }
}
