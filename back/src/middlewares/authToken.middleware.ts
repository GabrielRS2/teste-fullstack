import { NextFunction, Request, Response } from "express";
import jwt, { decode } from 'jsonwebtoken'
import { Subject } from "typeorm/persistence/Subject";
import AppError from "../errors/appError";

const authTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    let token = req.headers.authorization;

    if (!token) {
      throw new AppError(401,"Invalid token");
    }

    token = token.split(" ")[1];

    jwt.verify(
        token,
        process.env.SECRET_KEY as string,
        (error: any, decoded: any) => {
            if (error) {
                throw new AppError(401,"Invalid token");
            }

            req.id = decoded.subject

            next();
            }
        );
    };

export default authTokenMiddleware;