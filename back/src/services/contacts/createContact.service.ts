import { AppDataSource } from '../../data-source'
import User from '../../entities/user.entity'
import Contact from '../../entities/contact.entity'
import AppError from '../../errors/appError'
import { IContactRequest } from '../../interfaces/contact'

const createContactService = async ({email, cellphone, name, id}: IContactRequest): Promise<Contact> => {

    const userRepository = AppDataSource.getRepository(User)
    const contactRepository = AppDataSource.getRepository(Contact)
    const user = await userRepository.findOneBy({id: id})

    if(!user){
        throw new AppError(404, "User not found.")
    }

    if(!name){
        throw new AppError(400, "Name is a required field.")
    }

    if(!email){
        throw new AppError(400, "Email is a required field.")
    }

    if(!cellphone){
        throw new AppError(400, "Cellphone is a required field.")
    }


    const contact = contactRepository.create({
        name,
        email,
        cellphone,
        user: user
    })

    await contactRepository.save(contact)

    return contact

}

export default createContactService