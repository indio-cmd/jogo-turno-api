import partida from '../model/partida.js'

class ServicePartida{

async Buscar(){

return partida.findAll()

}

async Detalhe(id){

  return partida.findByPk(id)

}

async Criar(descricao, data, vencedor){

  await partida.create({descricao, data, vencedor})

}

async Altera(id, descricao, data, vencedor){

  const jogo = await partida.findByPk(id)

if(!jogo){

  throw new Error("partida não encontrado")

}

jogo.descricao = descricao || jogo.descricao
jogo.data = data || jogo.data
jogo.vencedor = vencedor || jogo.vencedor


await jogo.save()

}

async Deletar(id){

  const jogo = await partida.findByPk(id)

 if(!jogo){

  throw new Error("partida não encontrado")

}

await jogo.destroy()

}


}

export default new ServicePartida() 