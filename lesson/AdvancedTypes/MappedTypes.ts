type Modifier = 'read'| 'write'| 'update';

type UserRole = {
	customers?: Modifier,
	projects?: Modifier,
	adminPanel?: Modifier
}

type ModifierToAccess<Type> = {
	[Property in keyof Type as Exclude<`canAccess${string & Property}`, `canAccessadminPanel`>]-?: boolean
}

type UserAccess = ModifierToAccess<UserRole>;