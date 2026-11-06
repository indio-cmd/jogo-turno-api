import database from "../config/database.js";


class partida{
    constructor() {
        this.model = database.db.define("JogoTurnoApi", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            descricao: {
                type: database.db.Sequelize.STRING,
                alowNull: false
            },
           data: {
                type: database.db.Sequelize.STRING,
                alowNull: false,
                unique: true
            },
            vencedor: {
                type: database.db.Sequelize.STRING,
                alowNull: false,
            }
        })
    }

}

export default new partida().model