var textoDaBusca = document.getElementById("texto-busca");
var botaoBusca = document.getElementById("botao-busca-texto");
var corpo = document.getElementById("corpo");
botaoBusca.addEventListener("click", buscarTexto);

function buscarTexto(e) {
    // alert(textoDaBusca.value);
    if (textoDaBusca.value.length > 0) {
        var existeTexto = corpo.innerHTML.search(textoDaBusca.value) >= 0;
        if (existeTexto)
            window.scrollBy(0, window.innerHeight);
        else
            alert("texto não encontrado!")
    } else {
        alert('texto não digitado')
    }

    e.preventDefault();
}