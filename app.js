let dados= [{id: 1 , numero: '55', rua: 'João Holzmann' }]

let adicionar = require('./geral')

function processar(requisisao){
    let {acao, ID, numero, rua}= requisisao
    switch(acao){
        case 'consultar':
            return dados.find(dados => dados.rua.toLowerCase() === rua.toLowerCase()) || { mensagem: "Pergunta não encontrada." }
        case 'adicionar':
            let id=1
            for(let i=0; i < dados.length; i++){
                if(id === dados[i].id){
                    id++
                }
            }
            let novodado= {id: id, numero, rua}
            dados.push(novodado)
            return {mensagem: 'Adicionado com sucesso', dado: novodado}
        case 'listar': 
            return dados
        case 'remover':
            let idDados = dados.findIndex(dados => dados.id === ID)
            dados.splice(idDados, 1)
            return {mensagem: 'Deletado com Sucesso', dados: dados}
        default:
            throw new Error('Invalido')
    }
}


module.exports = processar