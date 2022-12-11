import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import AppError from "../../errors/appError";

export const listOneUserService = async (id: string)=> {

    if(id.length !== 36){
        throw new AppError(404, "User not found.")
    }
	
	const userRepository = AppDataSource.getRepository(User);
	const user = await userRepository.findOneBy({id});

	return user
};