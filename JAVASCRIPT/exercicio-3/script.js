const medida = prompt("Insira uma medida em metros: ")

const unidade = prompt("Para qual unidade de medida deseja converter? \n" + 
                        "\n(1) - Milímetros (mm)" +
                        "\n(2) - Centímetros (cm)" +
                        "\n(3) - Decímetros (dm)" +
                        "\n(4) - Decâmetros (dam)" +
                        "\n(5) - hectômetros (hm)" +
                        "\n(6) - Quilômetros (km)"
                        )

switch(unidade){
    case "1":
        alert("Resultado: " + medida + "m = " + medida * 1000 + "mm")
        break
    case "2":
        alert("Resultado: " + medida + "m = " + medida * 100 + "cm")
        break
    case "3":
        alert("Resultado: " + medida + "m = " + medida * 10 + "dc")
        break
    case "4":
        alert("Resultado: " + medida + "m = " + medida / 10 + "dam")
        break
    case "5":
        alert("Resultado: " + medida + "m = " + medida / 100 + "hm")
        break
    case "6":
        alert("Resultado: " + medida + "m = " + medida / 1000 + "km")
        break
    default:
        alert("Opção inválida")
}