


function classificarIMC(imc){

    if(imc >= 0 && imc < 18.5){
        return 'Magreza'
    }else if(imc >= 18.5 && imc < 25.0){
        return 'Normal'
    }else if(imc >= 25 && imc < 30){
        return 'Sobrepeso'
    }else if(imc >= 30 && imc <= 40){
        return 'Obesidade'
    }else if(imc > 40){
        return 'Obesidade Grave'
    }else{
        return 'Dados Inválidos. Digite Novamente!'
    }
}

function calcularIMC(peso, altura){

    let imc = peso / (altura * altura)
    return imc
}

function principal(){

    let peso = Number(document.getElementById('peso').value)
    let altura = Number(document.getElementById('altura').value)

    let imc = (calcularIMC(peso, altura))
    let resultado = (classificarIMC(imc))

    console.log(imc.toFixed(2))
    console.log(resultado)

    resposta.innerHTML = ``
    resposta.innerHTML += `O IMC é: ${imc.toFixed(2)} <br>`
    resposta.innerHTML += `${resultado}`
}
