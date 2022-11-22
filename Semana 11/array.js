var valores = [8, 1, 7, 9];

console.log(valores[3]);

console.log("Array invertido: " + valores.reverse());

for (var pos = 0; pos < valores.length; pos++) {
    console.log("Posição: " + pos + "Valor" + valores[pos]);
}

var carros = [];

carros[0] = "Volvo";
carros[1] = "Jeep";

var motos = new Array("BMW", "Yamaha", "Honda");

//Calcular a média dos números do Array

var soma = 0;

for (var pos = 0; pos < valores.length; pos++) {
    soma += valores[pos];
    soma = soma + valores[pos];
}

var media = soma / valores.length;

console.log(media);

var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr1.join('|'));

var retirado = arr1.shift();

console.log(retirado);

console.log(arr1);

console.log("Posição do número 3:" + arr1.indexOf(3));

arr1.push(7);

console.log(arr1);

arr1.pop();
console.log(arr1);

var arr2 = [1, 2, 3, 4, 5];

arr2.splice(1, 1);

console.log(arr2);

var nomes = ["Maria", "Jonas", "Ana", "Icaro"];

var novos = nomes.splice(2, 1, "Luis");

console.log(novos);

var pais = ["Brasil", "Argetina", "Portugal"];

pais.unshift("Wakanda");

console.log(pais);

var pessoa = ["Maria", "Jonas", "Ana", "Icaro"];
var gerente = ["Alberto", "Wallace"];

console.log(pessoa);

console.log(gerente);

var empresa = pessoa.concat(gerente);

console.log(empresa);

//Filter

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var resultados = numeros.filter(item => item % 2 == 0);

console.log(resultados);

var numerosFiltrados = numeros.filter(
    function (valor) {
        return valor > 5;
    }
);

function buscarValores(valor) {
    return valor < 5;
};

var numerosEncontrados = numeros.filter(buscarValores);

console.log(numerosEncontrados);

var r1 = numeros.filter((valor) => {
    return valor > 5;
});

console.log(r1);

var r2 = numeros.filter(valor => valor > 5);

var funcionario = [
    { nome: "Anderson", idade: 22 },
    { nome: "Davi", idade: 24 },
    { nome: "Luis", idade: 82 },
    { nome: "Lucas", idade: 58 },
    { nome: "Roberta", idade: 41 },
]

var pessoasListagem = funcionario.filter(
    function (valor) {
        return valor.nome.length < 5
    }
);

console.log(pessoasListagem);

var produtos = [
    { id: 1, descricao: "Smartphone", categoria: "Eletronico" },
    { id: 2, descricao: "Notebook", categoria: "Eletronico" },
    { id: 3, descricao: "Geladeira", categoria: "Eletrodomestico" },
    { id: 4, descricao: "Ferro de passa", categoria: "Eletrodomestico" },
    { id: 5, descricao: "Maquina de Lava", categoria: "Eletrodomestico" },
];

var produtosListagem = produtos.filter(
    categoria => produtos.categoria == "Eletrodomestico"
);

console.log(produtosListagem);


// Map
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var num = numeros.map(function (valor) {
    return valor * 2;
});

console.log(num);

var funcionario = [
    { nome: "Anderson", idade: 22 },
    { nome: "Davi", idade: 24 },
    { nome: "Luis", idade: 82 },
    { nome: "Lucas", idade: 58 },
    { nome: "Roberta", idade: 41 },
];

nomes = functionario.map(pessoa => pessoa.nome);

console.log(nomes);

//Reduce
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var total = 0;
for (var i = 0; i < numeros.length; i++) {
    total += numeros[i];
};

var tot = numeros.reduce(function (total, numeros) {
    return total + numeros;
}, 0);

//ForEach
var a = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (let valor of a) {
    console.log(valor);
};

a.forEach(valor => console.log(valor));

var total = 0;

a.forEach(valor => {
    total += valor;
});

console.log(total);

a.forEach(function (valor, indice, array) {
    console.log(array[indice]);
});






