const inputCep = document.getElementById("cep");
var inputBairro = document.getElementById("bairro");
const botaoPesquisa = document.getElementById("btnPesquisar");
botaoPesquisa.addEventListener("click", getCEP);

function getCEP() {

    var cep = inputCep.value;
    var bairro = inputBairro.value;

    if (cep === "" || cep.length < 8) {
        alert("Você precisa digitar o cep corretamente!");
        return;
    }

    console.log(cep)
    const url = `https://viacep.com.br/ws/${cep}/json`;
    fetch(url).then(
        resposta => {
            return resposta.json();
        }
    ).then(data => {
        console.log(data.bairro);
        rua.value = data.logradouro;
        document.getElementById("bairro").value = data.bairro;
        console.log(data.localidade);
        document.getElementById("cidade").value = data.localidade;
        document.getElementById("estado").value = data.uf;
    }).catch(error => console.log(error));

}

$(document).ready(function() {
    $("#btnLimpar").click(
        function() {

            alert('limpando campos');
            $("#form_cep")[0].reset();
        });
});