let btn_imc = document.getElementById('btn-imc');
let div_resultado = document.getElementById('resultado');
let div_resultados = document.getElementById('resultados');
let btn_close = document.getElementById('btn-close')

btn_imc.addEventListener('click', function() {
    let altura = document.getElementById('altura').value ; 
    let peso = document.getElementById('peso').value;
    
    let altura2 = altura * altura;

    const imc = peso / altura2;
    const imc_round = Math.round(imc * 10) / 10;
    div_resultados.classList.remove('hide')
    div_resultados.classList.add('show')
    div_resultados.style.display = 'flex'



    if (imc_round < 18.5) {
        document.getElementById('resultado').innerHTML = `
        <div class="color result">
            <h1>Tu IMC</h1>
            <p>${String(imc_round)}</p>
        </div>
    `;
    } else if (imc_round >= 18.5 || imc_round <= 24.0) {
        document.getElementById('resultado').innerHTML = `
        <div class="color2 result">
            <h1>Tu IMC</h1>
            <p>${String(imc_round)}</p>
        </div>
    `;
    } else if (imc_round >= 24.1 || imc_round <= 29.99) {
        document.getElementById('resultado').innerHTML = `
        <div class="color3 result">
            <h1>Tu IMC</h1>
            <p>${String(imc_round)}</p>
        </div>
    `;
    } else {
        document.getElementById('resultado').innerHTML = `
        <div class="color4 result">
            <h1>Tu IMC</h1>
            <p>${String(imc_round)}</p>
        </div>
    `;
    }
});


btn_close.addEventListener('click', function(){
    div_resultados.classList.remove('show')
    div_resultados.classList.add('hide')

    setTimeout(() => {
        div_resultados.style.display = 'none'
    }, 500);
})