function partialUpdate(obj, updates) {
    return Object.assign(Object.assign({}, obj), updates);
}
const user = {
    name: "thang",
    age: 21,
    email: "thang@mail.com"
};
const updatedUser = partialUpdate(user, { age: 19 });
console.log(updatedUser);
