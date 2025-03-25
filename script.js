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

// forma com while - professor ensinando

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