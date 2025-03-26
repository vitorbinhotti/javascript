// 1º verificar par/impar
function verificarPar(numero) {
    if (numero % 2 === 0) {
        // === é estritamente igual
        console.log('par');
    } else {
        console.log('impar');
    }
}

verificarPar(4);
verificarPar(7);


// 2º calculadora

function calcularNumero(numero1, numero2) {
    console.log(numero1 + numero2);
    console.log(numero1 - numero2);
    console.log(numero1 * numero2);
    console.log(numero2 !== 0 ? numero1 / numero2 : 'Não pode fazer dividir por zero');
}

calcularNumero(10, 3)

// 3º  contagem regressiva 

for (let i = 10; i > 0; i--) {
    console.log(i)
}

// Forma com while - professor ensinando

let numero = 10;
let delay = 0;

while (numero >= 1) {
    console.log(numero);

    numero--;
}

// Inverter texto

let original = "JavaScript";
let invertido = original.split("").reverse().join("");
console.log(invertido);

// Contar caractere

function contaCaractere(palavra) {
    console.log(palavra.length);
}

contaCaractere("Professor");

// carro

let carro = {
    marca: "BMW",
    modelo: "320i",
    ano: 2020,
}
console.log(carro.modelo)

// Mensagem

function mensagemPersonalizada(nome){
    console.log("olá, " + nome);
}
mensagemPersonalizada(prompt("Digite seu nome"));

// Media

function media(n1,n2,n3){
    console.log( (n1 + n2 + n3)/3);
}
media(10,20,30)

// Condicao

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log(i + " - Múltiplo de 3");
    } else {
        console.log(i + " - Não múltiplo de 3");
    }
}


// Verificacao Palavra Palíndroma

function verificarPalindromo(palavra) {
    palavra = palavra.toLowerCase();
    let palavraInvertida = palavra.split('').reverse().join('');
    return palavra === palavraInvertida;
}

console.log(verificarPalindromo("arara")); 
console.log(verificarPalindromo("banana"));
