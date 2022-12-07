//enum
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
const person = {
  name: "SY",
  age: 31,
  hobbies: ["Sports", "Cocking"],
  role: Role.ADMIN,
};

if (person.role === Role.AUTHOR) {
  console.log("is author");
}

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "SY",
//   age: 31,
//   hobbies: ["Sports", "Cocking"],
//   role: [2, "author"],
// };
// console.log(person.role);

// let favoriteActivities: string[];
// favoriteActivities = ["Sports"];

// console.log(person.name);

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
// }
