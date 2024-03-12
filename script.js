function calcularMedia() {
    // Captura os valores das notas
    var primeiraNota = parseFloat(document.getElementById('primeiraNota').value);
    var segundaNota = parseFloat(document.getElementById('segundaNota').value);
    var terceiraNota = parseFloat(document.getElementById('terceiraNota').value);
    var quartaNota = parseFloat(document.getElementById('quartaNota').value);
    var quintaNota = parseFloat(document.getElementById('quintaNota').value);

    // Calcula a média
    var notaFinal = (primeiraNota + segundaNota + terceiraNota + quartaNota + quintaNota) / 5;

    // Fixa a nota para uma casa decimal
    var notaFixada = notaFinal.toFixed(1);

    // Atualiza o conteúdo do campo de resultado
    document.getElementById('resultado').innerText = "Sua média é: " + notaFixada;
}
