import { AppDataSource } from '../../data-source'
import User from '../../entities/user.entity'
import Contact from '../../entities/contact.entity'
import { hash } from 'bcrypt'
import { IUserRequest } from '../../interfaces/user'
import AppError from '../../errors/appError'

const createUserService = async ({email, cellphone, name, password}: IUserRequest): Promise<User> => {

    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()

    if(!name){
        throw new AppError(400, "Name is a required field.")
    }

    if(!email){
        throw new AppError(400, "Email is a required field.")
    }

    if(!cellphone){
        throw new AppError(400, "Cellphone is a required field.")
    }

    if(!password){
        throw new AppError(400, "Password is a required field.")
    }

    users.map(elem => {
            if(elem.email === email) {
                throw new AppError(409, "Email alredy exists.")
            }
        })

    const hashedPassword = await hash(password, 10)

    const user = userRepository.create({
        name,
        email,
        cellphone,
        password: hashedPassword,
    })

    await userRepository.save(user)

    return user

}

export default createUserService