import express from "express"

import database from "./src/config/database.js"

//import jogo from "./src/router/jogo.js"
import partida from "./src/router/partida.js"

//import cors from "cors"

const app = express()

app.use(express.json())

//app.use(cors())

app.use("/api/v1/partida" , partida)

//app.use("/api/v1/jogo" , jogo)

database.db.sync({force:false})

.then(() => {

    app.listen(3000, ()=>{

    console.log(
        
        "servidor ouvindooooooooooooooooooooooooooooooooooooooo 3000 aeeeeeeeeeeeeeeeeee"
    
    )

})

})

.catch((e) => {

    console.log(e)

})