// import { compare } from "bcryptjs";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import AppError from "../../errors/appError";
import "dotenv/config";
import { IUserLogin } from "../../interfaces/user";

export const createSessionService = async ({
    email,
    password,
}: IUserLogin): Promise<string> => {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOne({
        where: {
            email,
        },
    });

    if (!user) {
        throw new AppError(403, "Invalid email or password.");
    }

    const matchPassword = await compare(password, user.password);

    if (!matchPassword) {
        throw new AppError(403, "Invalid email or password.");
    }

    const token = jwt.sign(
        {},
        process.env.SECRET_KEY as string,
        {
            subject: user.id,
            expiresIn: '2h'
        }
    )

    return token;
};