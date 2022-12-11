import { AppDataSource } from "../../data-source";
import Contact from '../../entities/contact.entity';
import AppError from '../../errors/appError';
import { IUpdateContact } from '../../interfaces/contact';

export const updateContactService = async (id:string,{ name, email, cellphone }:IUpdateContact) => {
	const contactRepository = AppDataSource.getRepository(Contact);

    if(id.length !== 36){
        throw new AppError(404, "Contact not found.")
    }

	const contact = await contactRepository.findOneBy({id});

    if(!contact){
        throw new AppError(404,'Contact not found')
    }

    const updateContact = new Contact()
    updateContact.name = name? name : contact.name
    updateContact.email = email? email : contact.email
    updateContact.cellphone = cellphone? cellphone : contact.cellphone

    await contactRepository.update(contact!.id, updateContact)
    const updatedUser = await contactRepository.findOneBy({id})

	return updatedUser
};