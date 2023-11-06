module.exports = {
    type: 'mysql',
    host: 'localhost',
    port: '4545',
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    databadr: process.env.MYSQL_DATABASE,
    synchronize: true,
    entities: [],
}