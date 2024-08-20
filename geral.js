let processar = require('./app')

function consultar(rua){
    const requisisao = {acao: 'consultar', rua}
    const respostaServidor = processar(requisisao)
    console.log('rua:', respostaServidor)
}

function adicionar(numero, rua){
    const requisisao = {acao: 'adicionar', numero, rua}
    const respostServidor = processar(requisisao)
    console.log('resposta:', respostServidor)
}

function listar(){
    const requisisao = {acao: 'listar'}
    const respostaServidor = processar(requisisao)
    console.log('listando:', respostaServidor)
}

function remover(ID){
    const requisisao = {acao: 'remover', ID}
    const respostaServidor = processar(requisisao) 
    console.log(respostaServidor)  
}


adicionar(66, 'Bem ali')
console.log('')
listar()
console.log('')
remover(1)
console.log('')
consultar('Bem Ali')