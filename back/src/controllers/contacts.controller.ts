import { Request, Response } from 'express'
import { instanceToPlain } from 'class-transformer'
import listAllContactsUserService from '../services/contacts/listAllContactsUser.service'
import createContactService from '../services/contacts/createContact.service';
import deleteContactService from '../services/contacts/deleteContact.service';
import { IUpdateContact } from '../interfaces/contact';
import { updateContactService } from '../services/contacts/updateContact.service';


export const CreateContactController = async (req: Request, res: Response) => {

    const id = req.id;
    const {email, cellphone, name} = req.body
    const contactList = await createContactService({email, cellphone, name, id})

    return res.status(200).json(instanceToPlain(contactList))

}

export const listContactsController = async (req: Request, res: Response) => {

    const id = req.id;
    const contactList = await listAllContactsUserService(id)

    return res.status(200).json(instanceToPlain(contactList))

}


export const deleteContactController = async (req: Request, res: Response) => {
	const id = req.params.id;
    
	await deleteContactService(id);

	return res.status(204).send();
};

export const updateContactController = async (
	req: Request,
	res: Response
) => {
	const id = req.params.id;
	const { name, email, cellphone }: IUpdateContact = req.body;

	const contact = await updateContactService(id, {
		name,
		email,
        cellphone,
	});
	return res.status(200).json(instanceToPlain(contact));
};
