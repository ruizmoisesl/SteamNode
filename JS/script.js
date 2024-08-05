let btn_imc = document.getElementById('btn-imc');
let close_btn = document.getElementById('close-btn');


btn_imc.addEventListener('click', function() {
    let altura = document.getElementById('altura').value ; 
    let peso = document.getElementById('peso').value;
    let div_resultado = document.getElementById('resultado');
    let altura2 = altura * altura;

    const imc = peso / altura2;
    const imc_round = Math.round(imc * 10) / 10;

    let resultado = '';

    if (imc_round < 18.5) {
        resultado = 'TU IMC ES DE: ' + imc_round + ' - Peso bajo';
    } else if (imc_round >= 18.5 && imc_round <= 24.9) {
        resultado = 'TU IMC ES DE: ' + imc_round + ' - Peso normal';
    } else if (imc_round >= 25 && imc_round <= 29.99) {
        resultado = 'TU IMC ES DE: ' + imc_round + ' - Sobrepeso';
    } else {
        resultado = 'TU IMC ES DE: ' + imc_round + ' - Obesidad';
    }
    div_resultado.innerHTML = resultado;
});

document.getElementById('btn_calculadoradiv').addEventListener('click',function(){
    let imc_calculator = document.getElementById('imc-calculator');
    imc_calculator.style.display = 'flex';
})