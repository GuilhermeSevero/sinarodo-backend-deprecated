import path from 'path'
import fs from 'fs'

export default (app) => {
    const dir = path.join(__dirname, './views')
    fs.readdirSync(dir).forEach(file => {
        let rota = require(path.join(dir, file))
        rota.default(app)
    })
}