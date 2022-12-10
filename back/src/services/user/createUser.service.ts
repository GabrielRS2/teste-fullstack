// import { AppError } from '../../errors/AppError'
import { AppDataSource } from '../../data-source'
import User from '../../entities/user.entity'
import Contacts from '../../entities/contacts.entity'
import { hash } from 'bcrypt'
import { IUserRequest } from '../../interfaces/user'

const createUserService = async ({email, cellphone, name, password}: IUserRequest): Promise<User> => {

    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()
    const contactsRepository = AppDataSource.getRepository(Contacts)


    // users.map(elem => {
    //     if(elem.email === email) {
    //         throw new AppError("email alredy exists")
    //     }
    //   })

    // if(!password){
    //     throw new AppError("Password is a required field")
    // }

    const hashedPassword = await hash(password, 10)

    const contacts = contactsRepository.create()
    await contactsRepository.save(contacts)
    const user = userRepository.create({
        name,
        email,
        cellphone,
        password: hashedPassword,
        contacts: contacts
    })


    await userRepository.save(user)

    return user

}

export default createUserService