import express from "express"

import database from "./src/config/database.js"


import partida from "./src/router/partida.js"



const app = express()


app.use(express.json())



app.use("/api/v1/partida" , partida)


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