// Declarando variáveis
var nome = "Weliton";
var sobrenome = "Franco";
var primeiraNota = 10;
var segundaNota = 9;
var terceiraNota = 5;
var quartaNota = 5;
var quintaNota = 5;

// Calculando a média
var notaFinal = (primeiraNota + segundaNota + terceiraNota + quartaNota + quintaNota) / 5;

// Fixando a nota para uma casa decimal
var notaFixada = notaFinal.toFixed(1);

// Verificando aprovação
if (notaFinal >= 5) {
    console.log(nome + " " + sobrenome + ", você foi aprovado. Sua nota é " + notaFixada);
} else {
    console.log(nome + " " + sobrenome + ", você foi reprovado. Sua nota é " + notaFixada);
}
