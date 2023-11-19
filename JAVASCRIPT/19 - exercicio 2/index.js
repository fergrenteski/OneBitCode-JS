let carro1 = prompt("Digite o nome do primeiro carro")
let velocidade1 = prompt("Digite a velocidade do primeiro carro")
let carro2 = prompt("Digite o nome do segundo carro")
let velocidade2 = prompt("Digite a velicidade do segundo carro")

velocidade1 = parseFloat(velocidade1)
velocidade2 = parseFloat(velocidade2)

const resultado = (velocidade1 === velocidade2) ? "A Velocidade dos carros são iguais" : (velocidade1 > velocidade2) ? "O Carro " + carro1 + " é mais rapido" : "O Carro " + carro2 + " é mais rapido"

alert(resultado)