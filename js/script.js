/* const nimbusRadio = document.getElementById("nimbus");
const magicRadio = document.getElementById("magic");
const nebulaRadio = document.getElementById("nebula");
const contNimbus = document.getElementById("conteudo-nimbus");
const contMagic = document.getElementById("conteudo-magic");
const contNebula = document.getElementById("conteudo-nebula");


nimbusRadio.addEventListener('click', () => {
    contNimbus.style.display = "block";
    contNimbus.style.display = "grid";
    contNebula.style.display = "none";
    contMagic.style.display = "none";
});

magicRadio.addEventListener('click', () => {
    contMagic.style.display = "block";
    contMagic.style.display = "grid";
    contNimbus.style.display = "none";
    contNebula.style.display = "none";
});

nebulaRadio.addEventListener('click', () => {
    contNebula.style.display = "block";
    contNebula.style.display = "grid"
    contNimbus.style.display = "none";
    contMagic.style.display = "none";
}); */

// ativar links do menu
const links = document.querySelectorAll('.navegacao a')

function ativarLink(link){
    const url = location.href;
    const href = link.href;

    if (url.includes(href)){
        link.classList.add('ativo');
    }
}

links.forEach(ativarLink);

//ativar items do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro){
    const elemento = document.getElementById(parametro)
    if(elemento){
        elemento.checked = true
    } 
}

parametros.forEach(ativarProduto);


const botaoPerguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event){
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls)
    resposta.classList.toggle('ativa')
    const ativa = resposta.classList.contains('ativa');
    pergunta.setAttribute('aria-expanded', ativa)
}


function eventosPerguntas(pergunta){

    pergunta.addEventListener('click', ativarPergunta);
}

botaoPerguntas.forEach(eventosPerguntas);

//galeria imagens

const bicicletas = document.querySelectorAll('.bicicleta-interna-info-img img')
const container = document.querySelector('.bicicleta-interna-info-img')

function trocarImg(event){
    const img = event.currentTarget; //seleciona o item clicado
    container.prepend(img);
}

function eventoGaleria(img){
    img.addEventListener('click', trocarImg)
}


bicicletas.forEach(eventoGaleria);
