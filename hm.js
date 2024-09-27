// Завдання 2: Клас "Коло"
// Створіть клас `Circle`, який моделює коло. Клас має містити:
// 1. Властивість `radius` для зберігання радіусу кола.
// 2. Метод `getArea()`, який обчислює площу кола.
// 3. Метод `getCircumference()`, який обчислює периметр кола.
// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }
//   getArea() {
//     const area = Math.PI * Math.pow(this.radius, 2);
//     return area.toFixed(2);
//   }
//   getCircumference() {
//     const circumference = 2 * Math.PI * this.radius;
//     return circumference.toFixed(2);
//   }
// }
// const circle1 = new Circle(5);
// console.log("Площа: ", circle1.getArea());
// console.log("Периметр: ", circle1.getCircumference());
// Завдання 3: Клас "Користувач"
// Створіть клас `User`, який моделює користувача. Клас має містити:
// 1. Властивості `name`, `age` та `email`.
// 2. Метод `greet()`, який виводить привітання.
// 3. Метод `isAdult()`, який перевіряє, чи є користувач повнолітнім.
// class User {
//   constructor(name, age, email) {
//     this.name = name;
//     this.age = age;
//     this.email = email;
//   }
//   greet() {
//     return `Привіт, мене звати ${this.name}`;
//   }
//   isAdult() {
//     return this.age >= 18;
//   }
// }
// const user = new User("Олена", 20, "olena@gmail.com");
// console.log(user.greet());
// console.log("Чи особа повнолітня?", user.isAdult());
