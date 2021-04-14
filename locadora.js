function converterParaHorasEMinutos(){

    //Capturar os campos
    var txtTitulo = document.getElementById('txtTitulo');
    var txtHoras = document.getElementById('txtHoras');
    var outTitulo = document.getElementById('outTitulo');
    var outHoras = document.getElementById('outHoras');

    //Capturar os valores
    var titulo = txtTitulo.value;
    var minutosTotais = Number(txtHoras.value); // Horas em minutos

    //Converter para horas(s) e min(s)
    var duracaoHoras = Math.floor( minutosTotais / 60 );
    var duracaoMinutos = minutosTotais%60;

    //Exibir o resultado
    outTitulo.textContent = 'Título: '+titulo;
    outHoras.textContent = `${duracaoHoras} hora(s) e ${duracaoMinutos} minuto(s)`;
    
}

//Capturar o botão e adicionar o evento de click
var btnConverter = document.getElementById('btnConverter');
btnConverter.addEventListener('click',converterParaHorasEMinutos);
