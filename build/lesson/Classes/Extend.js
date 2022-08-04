"use strict";
// // class User {
// // 	name:string='user';
// //
// // 	constructor() {
// // 		console.log(this.name)
// // 	}
// // }
// //
// // class Admin extends User{
// // 	name:string='admin';
// //
// // 	constructor() {
// // 		super();
// // 		console.log(this.name)
// // 	}
// // }
// //
// // new Admin();
// //
// // class HttpError extends Error {
// // 	code: number;
// // 	constructor(message:string, code?: number) {
// // 		super(message);
// // 		this.code = code ?? 500;
// // 	}
// // }
// // Когда композиция лучше наследования
// class User {
// 	name: string;
// 	constructor(name: string) {
// 		this.name = name;
// 	}
// }
// // Пример плохого наследования
// class Users extends Array<User> {
// 	searchByName(name: string) {
// 		return this.filter(u => u.name === name);
// 	}
// }
// const users = new Users;
// users.push(new User('Danil'));
// // Лучше так
// class UserList {
// 	users: User[];
// 	push(u: User) {
// 		this.users.push(u)
// 	}
// 	constructor(users: User[]) {
// 		this.users = users;
// 	}
// }
// // Как делать не нужно!!
// class Payment {
// 	date: Date
// }
// class UserWithPayment extends Payment {
// 	name: string;
// }
// // Так правильнее
// class UserWithPayment2 {
// 	user: User;
// 	payment: Payment;
// 	constructor(user: User, payment: Payment) {
// 		this.payment = payment;
// 		this.user = user;
// 	}
// }
