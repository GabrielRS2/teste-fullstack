export interface IUserRequest {
    name: string
    email: string
    password: string
    cellphone: string
}

export interface IUserLogin {
    email: string
    password: string
}

export interface IUpdateUser{
	name?: string;
	email?: string;
	password?: string;
    cellphone?: string;
}
