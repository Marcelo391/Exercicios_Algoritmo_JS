function calcular(){

    //Capturando os elementos
    var txtNome = document.getElementById('txtNome');
    var txtAltura = document.getElementById('txtAltura');    
    var masculino = document.getElementById('rbMasculino').checked;
    var feminino = document.getElementById('rbFeminino').checked;
        
    var outResultado = document.getElementById('outResultado');

    //Pegar o valor
    var nome = txtNome.value;
    var altura = txtAltura.value;


    // 1- Verificar se o nome e o sexo foram preenchidos
    if( nome == '' || ( !masculino  && !feminino )  ){
        alert('Preencha o nome e escolha o sexo');
        txtNome.focus();
        return;
    }      
        
    // 2 - Verificar se a altura foi preenchida corretamente
    if( altura < 0 || altura > 3 || altura == ''){ 
        alert('Informe a altura corretamente');
        txtAltura.focus();
        return;
    }

    // 3 - Realizar o cálculo de acordo com o sexo selecionado
    var pesoIdeal;

    if(masculino){
        pesoIdeal = 22 * Math.pow(altura, 2);
    }
    else{
        pesoIdeal = 21 * Math.pow(altura, 2);
    }


    // 4 - Exibir o resultado
    outResultado.textContent = `${nome}, seu peso ideal é ${pesoIdeal}`;


}


function limpar(){
    document.getElementById('txtNome').value = '';
    document.getElementById('txtAltura').value = '';
    document.getElementById('outResultado').textContent = '';
    document.getElementById('rbMasculino').checked = false;
    document.getElementById('rbFeminino').checked = false;

    document.getElementById('txtNome').focus();
}


document.getElementById('btnCalcular').addEventListener('click', calcular);
document.getElementById('btnLimpar').addEventListener('click', limpar);