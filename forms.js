function mostrarOla(){
    //Vai o código da função
    //alert('Estou dentro da função');

    var txtNome = document.getElementById('txtNome');
    var nome = txtNome.value;

    var outResposta = document.getElementById('outResposta');

    outResposta.textContent = `Olá ${nome} !`;
    //alert(`Olá ${nome} !`);
}