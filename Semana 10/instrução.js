var pais = 'Brasil';

if (pais != 'Brasil') {
    console.log('Você é estrangeiro');
} else {
    console.log('Você é brasileiro');
}

var idade = 22;

if (idade < 16) {
    console.log('Não vota');
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional');
} else {
    console.log('Voto obrigatório');
}


var diaSem = 'Segunda';

switch (diaSem) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda');
        break;
    case 3:
        console.log('Terça');
        break;
    case 4:
        console.log('Quarta');
        break;
    case 5:
        console.log('Quinta');
        break;
    case 6:
        console.log('Sexta');
        break;
    default:
        console.log('Esse dia da semana não Existe')
}


var a = [10, 20, 30, 40, 50, 60];

a.forEach(valor => console.log(valor));

var tot = 0;
a.forEach(valor => {
    tot += valor;
})

console.log(tot);

a.forEach(function (valor, indice, array) {
    console.log(array[indice]);
};


var carro = [
    { modelo: 'Audi A3', marca: 'Audi', ano = 2022 },
    { modelo: 'Compass', marca: 'Jeep', ano = 2023 }
];

for (let caracteristica in carro) {
    console.log(carro[caracteristica])
}


for (let c of carro) {
    console.log(c.ano);
}

var c = 1;

while (c <= 500) {
    console.log(c);
    c++;
};

var t = 1;
do {
    console.log(t);
    t++;
} while (t < 6)