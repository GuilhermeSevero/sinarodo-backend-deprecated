export default {
    database: 'sinarodo',
    username: 'root',
    password: '196320',
    params: {
        dialect: 'mysql',
        host: 'localhost',
        define: {
            underscored: true
        }
    },
    jwtSecret: 'SinaRodo',
    jwtSession: { session: false }
}
