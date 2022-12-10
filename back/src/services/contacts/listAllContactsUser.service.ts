// import { AppError } from '../../errors/AppError'
import { AppDataSource } from '../../data-source'
import User from '../../entities/user.entity'
import Contacts from '../../entities/contacts.entity'
import { IContactsUserRequest } from '../../interfaces/contactsUser'
import ContactsUser from '../../entities/contactsUser.entity'
import AppError from '../../errors/appError'

const listAllContactsUserService = async (idUser:string): Promise<ContactsUser[]> => {
    
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({id: idUser})
    const contactsRepository = AppDataSource.getRepository(Contacts)
    const contactsUserRepository = AppDataSource.getRepository(ContactsUser)
    
    if(!user){
        throw new AppError(404,'List owner not found')
	}

    const contacts = await contactsRepository.findOneBy({id: user.contacts.id})
    
    if(!contacts){
        throw new AppError(404,'List owner not found')
	}

    const contactList = await contactsUserRepository.findBy({contactList: {id: contacts.id}}) || []

    if(!contacts){
        return []
	}

    return contactList

}

export default listAllContactsUserService