import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import AppError from "../../errors/appError";


const deleteUserService = async (id: string): Promise<void> => {
	const userRepository = AppDataSource.getRepository(User);
    
    if(id.length !== 36){
        throw new AppError(404, "User not found.")
    }
    
	const user = await userRepository.findOneBy({ id });
    
	if (!user) {
        throw new AppError(404, "User not found.");
	}
    
	await userRepository.delete({ id });
};

export default deleteUserService;