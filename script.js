const form = document.getElementById('form-contatos')
const nomes = []
let linhas = ''
const nomeContato = document.getElementById('nome-contato')
const numeroContato = document.getElementById('numero-do-contato')

form.addEventListener('submit', function(e){
    e.preventDefault()

    if(numeroContato.value.length >= 10 && numeroContato.value.length <= 11){
        adicionaLinha()
        atualizaTabela()
        limpainput()
    } else {
        alert(`A quantidade de caracteres deve ser 10 ou 11!`)
        console.log(numeroContato.value + numeroContato.value)
    }
})

function adicionaLinha(){
    
        if (nomes.includes(nomeContato.value)){
            alert(`O contato ${nomeContato.value} ja foi adicionado`)
        } else {
            nomes.push(nomeContato.value)    
        
            let linha = '<tr>'
            linha += `<td>${nomeContato.value}</td>`
            linha += `<td>${numeroContato.value}</td>`
            linha += `</tr>`
            linhas += linha
        } 
        
        limpainput()
}

function limpainput(){
    nomeContato.value = ''
    numeroContato.value = ''
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

