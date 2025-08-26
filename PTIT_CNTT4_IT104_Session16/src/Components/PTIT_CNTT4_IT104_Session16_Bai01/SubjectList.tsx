import React, { Component } from "react";

export default class SubjectList extends Component {
  subjects: string[] = ["Toan", "Ly", "Hoa", "Sinh", "Van", "React"];
  render() {
    return (
      <div className="bai1">
        <h3>Danh Sách Môn Học</h3>
        <ul>
          {this.subjects.map((subjects, index) => (
            <li key={index}>{subjects}</li>
          ))}
        </ul>
      </div>
    );
  }
}
