let saldo = parseFloat(prompt("Informe a quantidade de dinheiro inicial: "))
let opcao = ""

do {

    opcao = prompt(
        "O Saldo disponivel: " + saldo + 
        "\n 1. Adicionar dinheiro" +
        "\n 2. Retirar dinheiro" +
        "\n 3. Sair"
    )

    switch (opcao) {
        case "1":
          saldo += parseFloat(prompt("Informe o valor a ser adicionado:"))
          break
        case "2":
          saldo -= prompt("Informe o valor a ser removido:")
          break
        case "3":
          alert("Saindo...")
          break
        default:
          alert("Entrada inválida.")
          break
      }

} while (opcao !== "3")