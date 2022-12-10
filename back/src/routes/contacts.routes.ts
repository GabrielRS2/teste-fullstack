
import { Router } from 'express'
import { listContactsController } from '../controllers/contacts.controller';
import { addUserToContactListController } from '../controllers/contactsUser.controllers'
import { createUserController } from '../controllers/user.controllers'
import listAllContactsUserService from '../services/contacts/listAllContactsUser.service';
// import { ensureAuthMiddleware } from '../middlewares/ensureAuth.middleware'
// import { validationMiddleware } from '../middlewares/validation.middleware'
// import { userSchema } from '../schemas/users.schema'

const contactsRoutes = Router()

contactsRoutes.get('/:id', listContactsController)

export default contactsRoutes