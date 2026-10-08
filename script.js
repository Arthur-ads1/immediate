// ===============================
// CARROSSEL DAS LINHAS DE PRODUTOS
// ===============================

const carrosseis = document.querySelectorAll(".galeria-linha");

carrosseis.forEach(function (galeria) {

    const imagem = galeria.querySelector(".foto-carrossel");
    const indicadores = galeria.querySelectorAll(".indicadores span");

    const fotos = imagem.dataset.fotos.split(",");

    let fotoAtual = 0;

    setInterval(function () {

        fotoAtual++;

        if (fotoAtual >= fotos.length) {
            fotoAtual = 0;
        }

        imagem.src = fotos[fotoAtual];

        indicadores.forEach(function (indicador, index) {

            if (index === fotoAtual) {
                indicador.classList.add("ativo");
            } else {
                indicador.classList.remove("ativo");
            }

        });

    }, 3000);

});