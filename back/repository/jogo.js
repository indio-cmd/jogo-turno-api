import Jogo from '../model/jogo.js'

class RepositoryJogo{

async Buscar(){
return Jogo.findAll()
}

async Buscarum(id){
return Jogo.findByPk(id)
}

async Criar(descricao, data, vencedor){
   await Jogo.create({descricao, data, vencedor})
}

async Altera(id, descricao, data, vencedor){
  const jogo = await Jogo.findByPk(id)

if(!jogo){
    throw new Error("Jogo não encontrado")
}

jogo.descricao = descricao || jogo.descricao
jogo.data = data || jogo.data
jogo.vencedor = vencedor || jogo.vencedor

await jogo.save()
}

async Deletar(id){
 const jogo = await Jogo.findByPk(id)

 if(!jogo){
    throw new Error("Jogo não encontrado")
}

await jogo.destroy()

}


}

export default new RepositoryJogo() 