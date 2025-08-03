const response = {
  data: {
    id: 1,
    title: "JavaScript",
    author: {
      name: "putin ",
      email: "dsadas@gmail.com",
    },
  },
}

function extractData({ data }) {
  const { title, author } = data
  const { name: authorName, email: authorEmail } = author

  console.log(`title: ${title}`)
  console.log(`author: ${author}`);
  console.log(`authorName:  ${authorName}`)
  console.log(authorEmail)
}

extractData(response)
