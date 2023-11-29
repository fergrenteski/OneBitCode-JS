const numero = prompt("Digite o número para calcular a tabuada: ");

let resultado = "";

for(let i = 1; i < 21; i++) {
    resultado += " -> " + numero + " * " + i + " = " + (numero*i) + "\n";
}

alert(resultado);