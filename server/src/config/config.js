module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'CRUD',
        user: process.env.DB_USER || 'furkan',
        password: process.env.DB_PASS || 'furkan',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './CRUD.sqlite'
        }
    }
}