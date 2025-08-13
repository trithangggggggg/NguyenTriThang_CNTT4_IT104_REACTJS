function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const person = { name: "undefined", age: 19 };
const job = { title: "Developer", salary: 5000 };
const merged = mergeObjects(person, job);
console.log(merged);
