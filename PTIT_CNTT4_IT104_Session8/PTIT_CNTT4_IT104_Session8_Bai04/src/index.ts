function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const person = { name: "undefined", age: 19 };
const job = { title: "Developer", salary: 5000 };

const merged = mergeObjects(person, job);

console.log(merged);

