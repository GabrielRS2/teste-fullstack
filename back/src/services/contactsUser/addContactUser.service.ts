// import { AppError } from '../../errors/AppError'
import { AppDataSource } from '../../data-source'
import User from '../../entities/user.entity'
import Contacts from '../../entities/contacts.entity'
import { IContactsUserRequest } from '../../interfaces/contactsUser'
import ContactsUser from '../../entities/contactsUser.entity'
import AppError from '../../errors/appError'

const addUserToContactListService = async ({idOwner, idUser}: IContactsUserRequest): Promise<ContactsUser> => {

    const userRepository = AppDataSource.getRepository(User)
    
    const owner = await userRepository.findOneBy({id: idOwner})
    
    const user = await userRepository.findOneBy({id: idUser})
    const contactsRepository = AppDataSource.getRepository(Contacts)
    
    if(!owner){
        throw new AppError(404,'List owner not found')
	}

    if(!user){
		throw new AppError(404,'User not found')
	}

    const contactsUserRepository = AppDataSource.getRepository(ContactsUser)
    const contactListOwner = await contactsRepository.findOneBy({id: owner.contacts.id})

    if(!contactListOwner){
		throw new AppError(404,'List owner not found')
	}
    console.log(user);
    
    const contactsUser = contactsUserRepository.create({
        user: user,
        contactList: contactListOwner
    })

    await contactsUserRepository.save(contactsUser)

    return contactsUser

}

export default addUserToContactListService