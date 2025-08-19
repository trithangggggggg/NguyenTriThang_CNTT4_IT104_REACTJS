import React from 'react'

export default function ListCourse() {
  const course = ["HTML", "CSS", "JavaScript", "ReactJS"];
  return (
    <div>
      <h1>ListCourse</h1>
      <ol>
        {course.map((item, index) =>(
          <li key = {index}> {item} </li>
        ))}
      </ol>
    </div>
  )
}
