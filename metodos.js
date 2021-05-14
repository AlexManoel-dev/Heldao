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

/*---------------------------------------------------------------------------------------------------------------------*/

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

class Professor extends aluno{
    constructor(id, nome, telefone, assunto, grade){
        super(id, nome, telefone)

        this.assunto = assunto
        this.grade = grade
    }
}

let pp = new Professor(1, 'Helder', '1029473856', 'JS', 'sei lá')

/*---------------------------------------------------------------------------------------------------------------------*/

// Classe funcionário (herança)

class funcionário{
    constructor(id, telefone, nome){
        this.id = id
        this.telefone = telefone
        this.nome = nome
    }
    cadastrar(){
        return `${this.nome} cadastrado com sucesso!`
    }
    consultar(){
        return `Para entrar em contato com o(a) ${this.nome} ligue no número ${this.telefone}`
    }
}

class programador extends funcionário{
    constructor(id, telefone, nome, departamento, telefone_contato){
        super(id, telefone, nome)
        this.departamento = departamento
        this.telefone_contato = telefone_contato
    }
}

class vendedor extends funcionário{
    constructor(id, telefone, nome, departamento, telefone_contato){
        super(id, telefone, nome)
        this.departamento = departamento
        this.telefone_contato = telefone_contato
    }
}


let programmer = new programador(1, 19993456789, 'João', 'Back-End', 20392948)
let seller = new vendedor(2, 19993827453, 'Pedro', 'Front-End', 19473827)

console.log(programmer.consultar())
console.log(seller.consultar())

/*---------------------------------------------------------------------------------------------------------------------*/

// Herança com notação literal - mais usado

var pai = {
    getValor: function funcao(){
        return this.valor
    },
    valor: 10
}

var filho = Object.create(pai)
filho.valor = 20
filho.getValor2 = function outraFuncao(){
    return this.valor + 5
}

var neto = Object.create(filho)
neto.valor2 = 50
alert(pai.getValor())
alert(filho.getValor())
alert(neto.getValor())
alert(neto.valor2)
alert(filho.getValor2())

/*---------------------------------------------------------------------------------------------------------------------*/

// Polimorfismo do exercício anterior

var pai = {
    getValor: function funcao(){
        return this.valor
    },
    valor: 2
}

var filho1 = Object.create(pai)
filho1.valor = 10
filho1.getValor() // retorna 10

var filho2 = Object.create(pai)
filho2.valor = 2
filho2.getValor() // retorna 2

var paiPoliformisado = Object.create(pai)
paiPoliformisado.getValor = function funcao() {
    return pai.getValor.call(this) + 5
}

alert(paiPoliformisado.getValor())
var filhoPoliformisado1 = Object.create(paiPoliformisado)
filhoPoliformisado1.valor = 20
alert(filhoPoliformisado1.getValor()) // retorna 25
var filhoPoliformisado2 = Object.create(paiPoliformisado)
filhoPoliformisado2.valor = 4
alert(filhoPoliformisado2.getValor()) // retorna 9

/*---------------------------------------------------------------------------------------------------------------------*/

// Utilizando instanceof e a propriedade prototype

function Pai(valor) { // propriedade privada
    this.valor = valor
}

Pai.prototype.get = function funcao() { // método público para acessar a propriedade privada
    return this.valor
}

var instanciaPai = new Pai(20)
alert(instanciaPai.get()) // retorna 20
alert(instanciaPai instanceof Pai) // retorna true
