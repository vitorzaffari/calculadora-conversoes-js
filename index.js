import input from 'readline-sync';

var continuar = true

while (continuar == true) {

    console.log("Calculadora de conversões");
    console.log("Escolha uma opção:");

    var resposta = input.question('1 - Celsius para Fahrenheit' + '\n' + '2 - Quilometros para Milhas' + '\n' + '3 - Sair' + '\n');

    switch (resposta) {
        case "1":
            console.log("Você escolheu Celsius para Fahrenheit");
            var temp_celsius = input.question('Informe o valor que deseja para converter : ');
            var temp_fahr = (temp_celsius * 1.8) + 32;
            console.log(temp_celsius + "°C equivalem a " + temp_fahr.toFixed(1) + "°F" + '\n');
            break;
        case "2":
            console.log("Você escolheu Quilometros para Milhas");
            var dist_km = input.question('Informe o valor que deseja para converter : ');
            var dist_mil = (dist_km/1.609);
            console.log(dist_km+" Km equivalem a "+dist_mil.toFixed(2) +" milhas" + '\n');
            break;
        case "3":
            continuar = false;
            console.log("Você escolheu sair do programa c:" + '\n');
            break;


        default:
            console.log("Opção inválida, escolha novamente." + '\n')
    } 



} 