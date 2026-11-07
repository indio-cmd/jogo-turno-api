import servicejogo from "../service/jogo.js"


class cntrollerjogo {

    status(req, res) {
        const status = servicejogo.status
        res.send(status)
    }
    atacar(req, res) {
        const atacar = servicejogo.atacar
        res.send(atacar)
    }
    defender(req, res) {
        const defender = servicejogo.defender
        res.send(defender)
    }
    curar(req, res) {
        const heal = servicejogo.curar
        res.send(heal)
    }
    inimigoJoga(req, res) {
        const vez = servicejogo.inimigoJoga
        res.send(vez)
    }


}

export default new cntrollerjogo