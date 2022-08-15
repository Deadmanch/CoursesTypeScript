interface IForm {
	name: string;
	password: string
}

const form: IForm = {
	name: 'Danil',
	password: '123'
}

const formValidation: ModifierFormValidation<IForm> = {
	name: {isValid: true},
	password: {isValid: false, errorMessage: 'Пароль должен быть длиннее 5 символов'}
}

type ModifierFormValidation<Type> = {
	[K in keyof Type ]: {
		isValid: true
	} | {
		isValid: false;
		errorMessage: string
}
}