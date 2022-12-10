
import 'reflect-metadata'
import express from 'express'
import userRoutes from './routes/users.routes'
import contactsUserRoutes from './routes/contactsUser.routes'
import contactsRoutes from './routes/contacts.routes'

const app = express()

app.use(express.json())
app.use('/users', userRoutes)
app.use('/addContacts', contactsUserRoutes)
app.use('/contacts', contactsRoutes)

export default app;