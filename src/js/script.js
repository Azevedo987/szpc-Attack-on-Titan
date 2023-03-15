const botoesCarrossel = document.querySelectorAll('.botao')

const imagens = document.querySelectorAll('.imagem')

botoesCarrossel.forEach((botao, index) => {
    botao.addEventListener('click', () => {

        desativarBotaoSelecionado()

        selecionarBotao(botao)

        esconderImagemAtiva()

        
        exibirImagemDeFundo(index)
    })
})



function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado')
    botaoSelecionado.classList.remove('selecionado')
}

function selecionarBotao(botao) {
    botao.classList.add('selecionado')
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa')
    imagemAtiva.classList.remove('ativa')
}

function exibirImagemDeFundo(index) {
    imagens[index].classList.add('ativa')
}