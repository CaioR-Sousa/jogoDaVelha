let tabuleiro = ["", "", "", "", "", "", "", "", ""]

let jogadorAtual = "X"

const botoes = document.querySelectorAll("#tabuleiro button")
const botaoReiniciar = document.getElementById("reiniciar")
const mensagem = document.getElementById('mensagem')

botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => vezDeQuem(index))
})

function vezDeQuem(posicao) {

    if (tabuleiro[posicao] === "") {
        tabuleiro[posicao] = jogadorAtual
        botoes[posicao].textContent = jogadorAtual
        

        if (venceu(jogadorAtual)) {
            setTimeout(()=>{

                alert(`Jogador ${jogadorAtual} venceu!`)
                resetarJogo()
            },100)
            return
        }
        if (!tabuleiro.includes("")) {
            setTimeout(() => {
                
                alert("Empate!")
                mensagem.textContent = "Empate!"
                resetarJogo()
            }, 100)
            return
        }
        jogadorAtual = jogadorAtual === "X" ? "O" : "X";
         mensagem.textContent = `Vez do jogador ${jogadorAtual}`
    } else {
        alert("Posição ja ocupada")
    }
}

function venceu(jogadorAtual) {
    const combinacoesVitoria = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < combinacoesVitoria.length; i++) {
        let [pos1, pos2, pos3] = combinacoesVitoria[i];

        if (tabuleiro[pos1] === jogadorAtual && tabuleiro[pos2] === jogadorAtual && tabuleiro[pos3] === jogadorAtual) {
            return true
        }
    } return false
}

function resetarJogo() {
    tabuleiro = ["", "", "", "", "", "", "", "", ""]
    jogadorAtual = "X"
    botoes.forEach(botao=> botao.textContent = "")
}

botaoReiniciar.addEventListener("click", resetarJogo)

