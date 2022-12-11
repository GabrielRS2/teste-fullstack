export interface IContactRequest {
    name: string
    email: string
    cellphone: string
    id: string
}

export interface IUpdateContact{
	name?: string;
	email?: string;
    cellphone?: string;
}
