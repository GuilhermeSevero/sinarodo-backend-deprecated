import passport from 'passport'
import { Strategy, ExtractJwt } from 'passport-jwt'

export default app => {
    const Aplicativos = app.datasource.models.Aplicativos
    const opts = {}
    opts.secretOrKey = app.config.jwtSecret
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt')

    const strategy = new Strategy(opts, (payload, done) => {
        Aplicativos.findByPk(payload.id)
            .then(aplicativo => {
                if(aplicativo) {
                    return done(null, {
                        id: aplicativo.id,
                        app: aplicativo.app
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
