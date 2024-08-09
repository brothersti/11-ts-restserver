import { Sequelize } from 'sequelize'

const urlDB = 'mysql://admin:@12LkfU09*as@localhost:3306/curso-node'


const db = new Sequelize(urlDB)


export default db
