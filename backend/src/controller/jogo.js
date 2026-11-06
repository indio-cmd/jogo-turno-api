import servicejogo from "../service/jogo.js"


class jogo{

status (req,res){
   try {
    
    const status = servicejogo.Status()

    res.status(200).send({
        status
    })

   } catch (error) {
    res.status(404).send({
        mensage: error
    })
   }

}

atacar (req, res){
    
// inimigo.hp = inimigo.hp - campeao.ataque 

// if(inimigo.hp <=0){
//     inimigo.hp = 0


const resultado = campeao, inimigo


    return res.json({mensagem: "Voce venceu",
        campeao:campeao.hp,
        inimigo:inimigo.hp
    })
}

}
defender (){
    
}
curar(){
    
}
    
}

export default new jogo