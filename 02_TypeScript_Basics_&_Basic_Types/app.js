// const person: {
//     name: string;
//     age: number;
// } = {
var person = {
    name: "Dommy",
    age: 27,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"]
};
person.role.push("admin");
// person.role[1] = 10;
console.log(person.role);
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}