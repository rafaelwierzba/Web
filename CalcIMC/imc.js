const calcular = document.getElementById('calcular');


function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');


    if(nome !== '' && altura !== '' && peso !== ''){
        const valorIMC = (peso/(Math.pow(altura, 2))).toFixed(1);

        let classificacao = '';

        if(valorIMC < 18.5){
            classificacao = 'Abaixo do peso!';
        } else if(valorIMC < 25){
            classificacao = 'Com o peso ideal. Parabéns!';  
        } else if(valorIMC < 30){
            classificacao = 'Levemente acima do peso!';
        } else if(valorIMC < 35){
            classificacao = 'Com obesidade GRAU 1 !';
        } else if(valorIMC < 40){
            classificacao = 'Com obesidade GRAU 2 !!';
        } else{
            classificacao = 'Com obesidade GRAU 3 = (Obesidade Mórbida) Cuidado!!!!'
        }

        resultado.textContent = `${nome}, seu IMC é: ${valorIMC}. Voce está: ${classificacao}`;
    } else{
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc);
