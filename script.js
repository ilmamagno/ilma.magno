const personagem1 = {
    imagem: document.querySelector('#imagem1'),
    nome: document.querySelector('#nome1'),
    especie: document.querySelector('#especie1'),
    vida: document.querySelector('#vida1')
}
const personagem2 = {
    imagem: document.querySelector('#imagem2'),
    nome: document.querySelector('#nome2'),
    especie: document.querySelector('#especie2'),
    vida: document.querySelector('#vida2')
}
const personagem3 = {
    imagem: document.querySelector('#imagem3'),
    nome: document.querySelector('#nome3'),
    especie: document.querySelector('#especie3'),
    vida: document.querySelector('#vida3')
}


function geraIDAleatorio() {
    return Math.floor(Math.random() * 671)
}


function traduzirEstadoDeVida(status) {
    if (status == 'unknown') {
        return 'Sem informações'
    } else if (status == 'Alive') {
        return 'Vivo'
    } else {
        return 'Morto'
    }
}


function pegaPersonagemNaInternet() {
    let urlDaAPI = 'https://rickandmortyapi.com/api/character/';
    return fetch(urlDaAPI + geraIDAleatorio(), {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    })
    .then((resp) => resp.json());
}


function mostraInfoDosPersonagens() {
    // Primeiro personagem
    pegaPersonagemNaInternet().then(dadosDoPersonagem => {
        personagem1.imagem.src = dadosDoPersonagem.image;
        personagem1.imagem.alt = 'Foto do personagem ' + dadosDoPersonagem.name;
        personagem1.nome.innerHTML = dadosDoPersonagem.name;
        personagem1.especie.innerHTML = dadosDoPersonagem.species;
        personagem1.vida.innerHTML = traduzirEstadoDeVida(dadosDoPersonagem.status);
    });

    // Segundo personagem
    pegaPersonagemNaInternet().then(dadosDoPersonagem => {
        personagem2.imagem.src = dadosDoPersonagem.image;
        personagem2.imagem.alt = 'Foto do personagem ' + dadosDoPersonagem.name;
        personagem2.nome.innerHTML = dadosDoPersonagem.name;
        personagem2.especie.innerHTML = dadosDoPersonagem.species;
        personagem2.vida.innerHTML = traduzirEstadoDeVida(dadosDoPersonagem.status);
    });

    // Terceiro personagem
    pegaPersonagemNaInternet().then(dadosDoPersonagem => {
        personagem3.imagem.src = dadosDoPersonagem.image;
        personagem3.imagem.alt = 'Foto do personagem ' + dadosDoPersonagem.name;
        personagem3.nome.innerHTML = dadosDoPersonagem.name;
        personagem3.especie.innerHTML = dadosDoPersonagem.species;
        personagem3.vida.innerHTML = traduzirEstadoDeVida(dadosDoPersonagem.status);
    });
}
