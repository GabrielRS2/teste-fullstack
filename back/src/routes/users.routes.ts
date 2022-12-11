
import { Router } from 'express'
import { createUserController, deleteUserController, listOneUserController, listUsersController, updateUserController } from '../controllers/user.controllers'
// import { ensureAuthMiddleware } from '../middlewares/ensureAuth.middleware'
// import { validationMiddleware } from '../middlewares/validation.middleware'
// import { userSchema } from '../schemas/users.schema'
import authTokenMiddleware from '../middlewares/authToken.middleware';
const userRoutes = Router()

userRoutes.post('', createUserController)
userRoutes.get('', listUsersController)
userRoutes.get('/:id', listOneUserController)
userRoutes.patch('', authTokenMiddleware, updateUserController)
userRoutes.delete('/:id', authTokenMiddleware, deleteUserController)

export default userRoutes