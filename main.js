const btnAreaMembros = () => {
    window.location.href = './areaMembros/areaMembros.html'
}

const btnConstrutorPaginas = () => {
    window.location.href = './construtorPaginas/construtorpagina.html'
}

const btnPlanoConsumo = () => {
    window.location.href = './planoConsumo/planoConsumo.html'
}

const btnPlayerVideo = () => {
    window.location.href = './playerVideo/playerVideo.html'
}

const btnPrimeirosPassos = () => {
    window.location.href = './primeirosPassos/primeirosPassos.html'
}

const btnContaCobrancas = () => {
    window.location.href = './contaCobrancas/contaCobranca.html'
}






// events

document.getElementById('areaMembros')
    .addEventListener('click', btnAreaMembros)

document.getElementById('construtorPaginas')  
    .addEventListener('click', btnConstrutorPaginas)


document.getElementById('planoConsumo')
    .addEventListener('click', btnPlanoConsumo)

document.getElementById('playerVideo')
    .addEventListener('click', btnPlayerVideo)

document.getElementById('primeirosPassos')
    .addEventListener('click', btnPrimeirosPassos)

document.getElementById('contaCobrancas')
    .addEventListener('click', btnContaCobrancas)