import { Request, Response } from 'express'
import { instanceToPlain } from 'class-transformer'
import { IUserRequest } from '../interfaces/user'
import createUserService from '../services/user/createUser.service'
import { IContactsUserRequest } from '../interfaces/contactsUser'
import addUserToContactListService from '../services/contactsUser/addContactUser.service'


export const addUserToContactListController = async (req: Request, res: Response) => {

    const { idOwner, idUser }: IContactsUserRequest = req.body
    const contactList = await addUserToContactListService({idOwner, idUser})
    return res.status(200).json(instanceToPlain(contactList))

}