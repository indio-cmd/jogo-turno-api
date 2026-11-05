import { Sequelize } from "sequelize";

class DataBase{
    constructor(){
        this.init()

    }

    init(){
        this.db = new Sequelize({
            dialect: 'mysql',
            database: 'JogoTurnoApi',
            host: 'localhost',
            username: 'root',
            password: ''
        })
    }
}
export default new DataBase()