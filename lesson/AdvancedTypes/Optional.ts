// // Не обязательное использование свойств у интерфейсов
// interface UserAuth {
// 	login: string,
// 	password?: string;
// }
//
// const user3: UserAuth = {
// 	login: '123',
// 	password: '123'
// }
// // Не обязательное условие у функции
// function multiply(first: number, second?: number): number {
// 	if(!second) {
// 		return first * first;
// 	}
// 	return first * second;
// }
//
// multiply(5);
// // Не обязательное условие у объекта
// interface UserPro {
// 	login:string,
// 	password?: {
// 		type: 'primary' | 'secondary'
// 	}
// }
//
// function testPath(user: UserPro) {
// 	const t = user.password!.type; // когда точно уверенны что тут будет пароль, если нет то нужно использовать '?'
// }
//
// function test(param?:string) {
// 	const t = param ?? multiply(5);
// }