import passport from 'passport'
import { Strategy, ExtractJwt } from 'passport-jwt'
import usuarios from './routes/usuarios';

export default app => {
    const Usuarios = app.datasource.models.Usuarios
    const opts = {}
    opts.secretOrKey = app.config.jwtSecret
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt')

    const strategy = new Strategy(opts, (payload, done) => {
        Usuarios.findById(payload.id)
            .then(user => {
                if(user) {
                    return done(null, {
                        id: user.id,
                        login: usuarios.login
                    })
                }
                return done(null, false)
            })
            .catch(error => {
                console.log(error)
                done(error, null)
            })
    })
    passport.use(strategy)

    return {
        initialize: () => passport.initialize(),
        authenticate: () => passport.authenticate('jwt', app.config.jwtSession)
    }
}
