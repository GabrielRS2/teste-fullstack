import { AppDataSource } from '../../data-source'
import User from '../../entities/user.entity'
import Contact from '../../entities/contact.entity'
import AppError from '../../errors/appError'

const listAllContactsUserService = async (idUser:string): Promise<Contact[]> => {
    
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({id: idUser})
    const contactsRepository = AppDataSource.getRepository(Contact)
    
    if(!user){
        throw new AppError(404,'List owner not found.')
	}

    const contacts = await contactsRepository.findBy({user: user})
    
    if(!contacts){
        throw new AppError(404,'List owner not found.')
	}
    
    return user.contacts

}

export default listAllContactsUserService