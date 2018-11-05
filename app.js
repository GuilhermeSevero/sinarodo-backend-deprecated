import express from 'express'
import bodyParser from 'body-parser'
import config from './config/config'
import datasource from './config/datasource'
import setRoutes from './routes'
import autorization from './auth'

const app = express()

app.config = config
app.datasource = datasource(app)
app.set('port', 8000)
app.use(bodyParser.json())

setRoutes(app)

export default app
