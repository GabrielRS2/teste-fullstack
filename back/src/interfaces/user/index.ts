
export interface IUserRequest {
    name: string
    email: string
    password: string
    cellphone: string
}

export interface IUser {
    id: string
    name: string
    email: string
    isAdm: boolean
    createdAt: Date
    updatedAt: Date
}


export interface IUserLogin {
    email: string
    password: string
}

export interface IUserAuth {
    isAdm: boolean,
    id: string
}