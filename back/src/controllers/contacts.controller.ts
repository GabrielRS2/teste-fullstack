import { Request, Response } from 'express'
import { instanceToPlain } from 'class-transformer'
import { IContactsUserRequest } from '../interfaces/contactsUser'
import addUserToContactListService from '../services/contactsUser/addContactUser.service'
import listAllContactsUserService from '../services/contacts/listAllContactsUser.service'


export const listContactsController = async (req: Request, res: Response) => {
    const id = req.params.id;
    const contactList = await listAllContactsUserService(id)
    return res.status(200).json(instanceToPlain(contactList))

}