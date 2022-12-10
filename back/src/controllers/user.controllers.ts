import { Request, Response } from 'express'
import { instanceToPlain } from 'class-transformer'
import { IUserRequest } from '../interfaces/user'
import createUserService from '../services/user/createUser.service'


export const createUserController = async (req: Request, res: Response) => {

    const { email, cellphone, name, password }: IUserRequest = req.body
    const user = await createUserService({email, cellphone, name, password})
    return res.status(201).json(instanceToPlain(user))

}