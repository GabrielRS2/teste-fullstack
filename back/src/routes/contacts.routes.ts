
import { Router } from 'express'
import { CreateContactController, deleteContactController, listContactsController, updateContactController } from '../controllers/contacts.controller';
import authTokenMiddleware from '../middlewares/authToken.middleware';
// import { ensureAuthMiddleware } from '../middlewares/ensureAuth.middleware'
// import { validationMiddleware } from '../middlewares/validation.middleware'
// import { userSchema } from '../schemas/users.schema'

const contactsRoutes = Router()

contactsRoutes.post('', authTokenMiddleware, CreateContactController)
contactsRoutes.get('', authTokenMiddleware, listContactsController)
contactsRoutes.delete('/:id', authTokenMiddleware, deleteContactController)
contactsRoutes.patch('/:id', authTokenMiddleware, updateContactController)

export default contactsRoutes