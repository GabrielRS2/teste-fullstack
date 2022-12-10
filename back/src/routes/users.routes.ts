
import { Router } from 'express'
import { createUserController, listUsersController } from '../controllers/user.controllers'
// import { ensureAuthMiddleware } from '../middlewares/ensureAuth.middleware'
// import { validationMiddleware } from '../middlewares/validation.middleware'
// import { userSchema } from '../schemas/users.schema'

const userRoutes = Router()

userRoutes.post('', createUserController)
userRoutes.get('', listUsersController)
// userRoutes.delete('/:id', ensureAuthMiddleware, softDeleteUserController)
export default userRoutes