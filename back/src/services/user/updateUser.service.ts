import { hash, compareSync, hashSync } from 'bcrypt'
import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import AppError from '../../errors/appError';
import { IUpdateUser } from '../../interfaces/user';

export const updateUserService = async (id:string,{ name, email, password, cellphone }:IUpdateUser) => {
	const userRepository = AppDataSource.getRepository(User);
	const user = await userRepository.findOneBy({id});

    if(!user){
        throw new AppError(404,'User not found')
    }
    
    let newPassword = ''
    if(password){
        if(compareSync(password, user!.password)) {
            throw new AppError(400,"Inform a different password.")
        }
        newPassword = hashSync(password,10)
    }

    const updateUser = new User()
    updateUser.name = name? name : user.name
    updateUser.email = email? email : user.email
    updateUser.password = password? newPassword : user.password
    updateUser.cellphone = cellphone? cellphone : user.cellphone

    await userRepository.update(user!.id, updateUser)
    const updatedUser = await userRepository.findOneBy({id})

	return updatedUser
};