class Pessoa {

    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log("Olá" + this.nome)
    }
    get nomeCompleto() {
        console.log("Olá" + this.nome + " " + this.sobrenome);
    }
}


p1 = new Pessoa("Fabio", "Silva");
p1.falar();
p1.nomeCompleto;



//Herança

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log("Já está Ligado")
            return;
        }
        this.ligado = true;
    }
}


class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}


var s1 = new Smartphone("Apple", "Branco", "14");

console.log(s1);
s1.ligar();
s1.ligar();