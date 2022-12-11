import { Request, Response } from 'express'
import { instanceToPlain } from 'class-transformer'
import { IUpdateUser, IUserRequest } from '../interfaces/user'
import createUserService from '../services/user/createUser.service'
import { listUsersService } from '../services/user/listUsers.service'
import { listOneUserService } from '../services/user/listOneUser.service'
import { updateUserService } from '../services/user/updateUser.service'
import deleteUserService from '../services/user/deleteUser.service'


export const createUserController = async (req: Request, res: Response) => {

    const { email, cellphone, name, password }: IUserRequest = req.body
    const user = await createUserService({email, cellphone, name, password})

    return res.status(201).json(instanceToPlain(user))

}


export const listUsersController = async (req: Request, res: Response) => {

	const users = await listUsersService();

	return res.status(200).json(instanceToPlain(users));

};

export const listOneUserController = async (req: Request, res: Response) => {

    const id = req.params.id
	const users = await listOneUserService(id);
    
	return res.status(200).json(instanceToPlain(users));

};

export const updateUserController = async (
	req: Request,
	res: Response
) => {
	const id = req.id;
	const { name, email, password, cellphone }: IUpdateUser = req.body;

	const user = await updateUserService(id, {
		name,
		email,
		password,
        cellphone,
	});
	return res.status(200).json(instanceToPlain(user));
};

export const deleteUserController = async (req: Request, res: Response) => {
	const id = req.params.id;
    
	await deleteUserService(id);

	return res.status(204).send();
};