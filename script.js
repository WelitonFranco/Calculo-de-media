function calcularMedia() {
    // Captura os valores das notas
    let primeiraNota = parseFloat(document.getElementById('primeiraNota').value);
    let segundaNota = parseFloat(document.getElementById('segundaNota').value);
    let terceiraNota = parseFloat(document.getElementById('terceiraNota').value);
    let quartaNota = parseFloat(document.getElementById('quartaNota').value);
    let quintaNota = parseFloat(document.getElementById('quintaNota').value);

    // Calcula a média
    let notaFinal = (primeiraNota + segundaNota + terceiraNota + quartaNota + quintaNota) / 5;

    // Fixa a nota para uma casa decimal
    var notaFixada = notaFinal.toFixed(1);

    // Atualiza o conteúdo do campo de resultado
    document.getElementById('resultado').innerText = "Sua média é: " + notaFixada;
}
//trocar váriaveis var por let boa prática de programação
// ver se é possível dividir as responsabilidades
