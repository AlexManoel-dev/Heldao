var aluno = {
    id: 1, 
    nome: "Alex", 
    telefone: 19993521344, 
    cadastrar: function(){
        return "Aluno cadastrado com os dados: " + this.id + ", " + this.nome + ", " + this.telefone
    }
}

console.log(aluno.cadastrar()) // usando método literal






function aluno(id, nome, telefone) { // usando método construtor
    this.id = id
    this.nome = nome
    this.telefone = telefone
    this.cadastrar = function () {
        return "Aluno cadastrado com os dados: " + this.id + ", " + this.nome + ", " + this.telefone
    }
}

var p1 = new aluno(1, 'Alex', 19993521344)
console.log(p1.id)
console.log(p1.nome)
console.log(p1.telefone)
console.log(p1.cadastrar())





class aluno { // usando class
    constructor(id, nome, telefone){
        this.id = id
        this.nome = nome
        this.telefone = telefone
    }
    cadastrar(){
        return `Aluno cadastrado com os dados: ${this.id}, ${this.nome}, ${this.telefone}` // usando template literals
    }
}

var a1 = new aluno(1, 'Alex', 19993521344)
console.log(a1.cadastrar())

