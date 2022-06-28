function calculaIdade(anos) {
    return `Daqui a ${anos}, anos, ${this.nome} terá ${this.idade + anos} anos de iade`}

    const pessoa1={
        nome: 'Nicolas',
        idade: 18,
    }


    const pessoa2={
        nome: 'William',
        idade: 22,
    }

console.log(calculaIdade.call(pessoa2, 10));