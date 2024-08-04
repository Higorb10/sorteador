// Adiciona o script do confetti ao documento
var jq = document.createElement('script');
jq.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);

async function sortear() {
    limparResultados();

    // pegar o total de resultados
    const totalResultados = Number(document.querySelector('#totalResultadosInput').value);

    // pegar o menor valor
    const menorValor = Number(document.querySelector('#menorValorInput').value);

    // pegar o maior valor
    const maiorValor = Number(document.querySelector('#maiorValorInput').value);

    for (let j = 0; j < 1; j++) {
        for (let i = 0; i < totalResultados; i++) {
            // gerar um numero aleatório entre o maior e menor valor
            const resultado = Math.floor(Math.random() * (maiorValor - menorValor + 1)) + menorValor;

            // gerar elemento html para resultado
            const result = document.createElement('div');
            result.classList.add('result-value');
            result.innerText = resultado;

            // adicionar o elemento dentro do HTML
            const resultValues = document.querySelector('.results-values');
            resultValues.append(result);
        }
        await wait(20);
    }

    // Adiciona o efeito de confete
    frame();
}

function limparResultados() {
    const resultValues = document.querySelector('.results-values');
    resultValues.innerHTML = '';
}

function wait(tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), tempo);
    });
}

function frame() {
    // lança alguns confetes do lado esquerdo
    confetti({
        particleCount: 135,
        angle: 60,
        spread: 200,
        origin: { x: 0 }
    });

    // e lança alguns do lado direito
    confetti({
        particleCount: 135,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
    });
}
