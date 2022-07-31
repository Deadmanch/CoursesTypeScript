// class User {
// 	name: string;
// 	age: number;
//
// 	constructor();
// 	constructor(name: string);
// 	constructor(age: number);
// 	constructor(name: string, age: number);
// 	constructor(ageOrName?: string | number, age?: number) {
// 		if (typeof ageOrName === 'string') {
// 			this.name = ageOrName
// 		} else if (typeof ageOrName === 'number') {
// 			this.age = ageOrName
// 		} if (typeof age === 'number') {
// 			this.age = age
// 		}
// 	}
// }
//
// const user: User = new User('Danil');
// const user2: User = new User();
// const user3: User = new User(33);
// const user4: User = new User('Danil', 33);