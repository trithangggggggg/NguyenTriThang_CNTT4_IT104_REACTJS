function partialUpdate<T>(obj: T, updates: Partial<T>): T {
    return { ...obj, ...updates };
}

type User = {
    name: string;
    age: number;
    email: string;
};

const user: User = {
    name: "thang",
    age: 21,
    email: "thang@mail.com"
};

const updatedUser = partialUpdate(user, { age: 19 });

console.log(updatedUser);


