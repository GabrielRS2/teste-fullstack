import { Router } from 'express'
import { addUserToContactListController } from '../controllers/contactsUser.controllers'
import { createUserController } from '../controllers/user.controllers'
// import { ensureAuthMiddleware } from '../middlewares/ensureAuth.middleware'
// import { validationMiddleware } from '../middlewares/validation.middleware'
// import { userSchema } from '../schemas/users.schema'

const contactsUserRoutes = Router()

contactsUserRoutes.post('', addUserToContactListController)
// userRoutes.get('', ensureAuthMiddleware, listUserController)
// userRoutes.delete('/:id', ensureAuthMiddleware, softDeleteUserController)
export default contactsUserRoutes