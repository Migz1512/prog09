

function verificarIdade(idade){
    if( idade >= 0 && idade < 16){
        return 'Você Não Precisa Votar'
    }else if( idade >= 18 && idade <= 70){
        return 'Seu Voto é Obrigatório!'
    }else if( idade >= 16 && idade <= 17 ){
        return 'Seu Voto é Facultativo.'
    }else if (idade >= 70){
        return 'Seu Voto é Facultativo.'
    }else{
        return 'Idade Inválida'
    }
}

function principal(){
    let idade = Number(document.getElementById('idade').value)

    let verificaridade = (verificarIdade(idade))

    console.log(idade)
    console.log(verificaridade)

    resposta.innerHTML = ``
    resposta.innerHTML += `Sua idade é de ${idade} Anos. <br><br>` 
    resposta.innerHTML += `${verificaridade}`
}