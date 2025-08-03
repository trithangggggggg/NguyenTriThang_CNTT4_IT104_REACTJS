function createUser(name, age = 18, role = "user") {
  return {
    name,
    age,
    role,
  }
}
console.log(createUser("Putin"));
console.log(createUser("Trump", 99, "admin"));

