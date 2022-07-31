"use strict";
// let a = 5
// let b: string = a.toString(); // Преобразование числа в строку
// let e = new String(a).valueOf();
//
// let c = 'sd gra'
// let d: number = parseInt(c); // Преобразование строки в число
//
// interface User {
// 	name: string,
// 	email: string,
// 	login: string
// }
//
// const user: User = {
// 	name: 'Вася',
// 	email: 'vasily@gmail.com',
// 	login: 'vasia'
// }
//
// interface Admin {
// 	name: string,
// 	role: number
// }
// // Не правильный вариант преобразования 1 объекта к другому - так как в js админу будут доступны поля логин и почты!
// const admin: Admin = {
// 	...user,
// 	role: 1
// }
// 	// Правильное через функцию!!
// function userToAdmin(user: User):Admin {
// 	return  {
// 		name: user.name,
// 		role: 1
// 	}
// }
