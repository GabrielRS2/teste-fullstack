import "express-async-errors"
import 'reflect-metadata'
import express from 'express'
import userRoutes from './routes/users.routes'
import contactsRoutes from './routes/contacts.routes'
import sessionRoutes from './routes/session.routes'
import handleErrorMiddleware from './middlewares/handleError.middleware'

const app = express()

app.use(express.json())
app.use('/users',userRoutes)
app.use('/contacts', contactsRoutes)
app.use('/login', sessionRoutes)

app.use(handleErrorMiddleware);

export default app;