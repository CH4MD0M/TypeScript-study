// const person: {
//     name: string;
//     age: number;
// } = {
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: "Dommy",
    age: 27,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
};

person.role.push("admin");
// person.role[1] = 10;
console.log(person.role);

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby);
}