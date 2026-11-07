export const campeao = {
    hpBase: 300,
    hp: 300,
    ataque: 18,
    CuraBase: 80,
    defesa: 10
}

export const inimigo = {
    hpBase: 200,
    hp: 200,
    DanoBase: 25,
    CuraBase: 50
}

class servicejogo {

 status() {
    res.json({
        campeao: campeao,
        inimigo:inimigo

    })
}

 atacar() {

    inimigo.hp = inimigo.hp - campeao.ataque 

if(inimigo.hp <=0){
    inimigo.hp = 0

    return res.json({mensagem: "Voce venceu",
        campeao:campeao.hp,
        inimigo:inimigo.hp
    })
}

inimigoJoga()
    
return res.json({mensagem: "Voce atacou", 
    campeao:campeao.hp,
    inimigo:inimigo.hp
})
}

 defender(){
    campeao.defesa = 10 

    inimigoJoga()
    
   return res.json({mensagem: "Voce defendeu",
    campeao:campeao.hp,
    inimigo:inimigo.hp

    })
}
 curar(){
    campeao.hp = campeao.hp + campeao.CuraBase

    if(campeao.hp > campeao.hpBase){
        campeao.hp = campeao.hpBase
    }

    res.json({mensagem: "Voce curou",
        campeao:campeao.hp,
        inimigo:inimigo.hp
    })
}
     inimigoJoga() {
    const jogada = Math.floor(Math.random() * 3)

    if (jogada === 0) {
        const dano = Math.max(inimigo.DanoBase - campeao.defesa, 0)
        campeao.hp = campeao.hp - dano
        if (campeao.hp < 0) campeao.hp = 0
    }

    if (jogada === 1) {
        inimigo.hp = inimigo.hp + inimigo.CuraBase
        if (inimigo.hp > inimigo.hpBase) {
            inimigo.hp = inimigo.hpBase
        }
    }

}}


export default new servicejogo