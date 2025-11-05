function irPara(id) {
    document.querySelectorAll('.tela').forEach(t => t.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

function abrirDetalhe(jogo) {
    const banner = document.getElementById("detalheBanner");
    const preco = document.getElementById("detalhePreco");
    const imgs = document.getElementById("detalheImgs");
    const texto = document.getElementById("detalheTexto");

    if (jogo === "hollow") {
        banner.src = "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg";
        preco.textContent = "R$46,99 🛒";
        imgs.innerHTML = `
            <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/367520/ss_01.jpg">
            <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/367520/ss_02.jpg">
            <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/367520/ss_03.jpg">
        `;
        texto.textContent = "Hollow Knight é um jogo de ação e aventura em estilo metroidvania 2D, onde os jogadores exploram o vasto reino de Hallownest. É conhecido por seu combate de plataforma clássico com controles ajustados, um mundo extenso e interconectado, habilidades que evoluem e uma atmosfera sombria e rica em detalhes. O jogo apresenta uma grande variedade de inimigos e chefes épicos, além de personagens e cenários desenhados à mão, com uma trilha sonora atmosférica.";
    }

    irPara('detalheTela');
}

function voltarLoja() {
    irPara('lojaTela');
}
