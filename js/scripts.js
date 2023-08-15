const nimbusRadio = document.getElementById("nimbus");
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
});