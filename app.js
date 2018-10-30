import express from 'express'
import bodyParser from 'body-parser'
import config from './config/config'
import datasource from './config/datasource'
import booksRouter from './routes/books'
import usuariosRouter from './routes/usuarios'
import authRouter from './routes/auth'
import autorization from './auth'

const app = express()

app.config = config
app.datasource = datasource(app)
app.set('port', 8000)
app.use(bodyParser.json())

const auth = autorization(app)
app.use(auth.initialize())
app.auth = auth

booksRouter(app)
usuariosRouter(app)
authRouter(app)

export default app
