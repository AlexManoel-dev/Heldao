const btn = document.querySelector('button')
function novoItem() {
    var campos = document.getElementsByTagName('input')
    var novaLinha = document.createElement('tr')
    for (let i = 0; i < campos.length; i++) {
        var novaColuna = document.createElement('td')
        novaColuna.innerHTML = campos[i].value
        novaLinha.appendChild(novaColuna)
    }
    var tabela = document.getElementById('tb')
    tabela.appendChild(novaLinha)
}
btn.addEventListener('click', novoItem)



const btn2 = document.querySelector('button.r')

function removeItem() {
    var tabela = document.getElementById('tb')
    var linhas = tabela.getElementsByTagName('tr')
    tabela.deleteRow(linhas.length-1)
}
btn2.addEventListener('click', removeItem)