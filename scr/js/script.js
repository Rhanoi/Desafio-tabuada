const numeroInput = document.getElementById("numeroTabuada")
const limiteInput = document.getElementById("limite")
const calcular = document.getElementById("calcular")
const resultado = document.getElementById("resultado")


function tabuada(){
    const numero = Number(numeroInput.value)
    const limite = Number(limiteInput.value)

    //variável que armazena os resultados
    var resposta = ""
    if (numeroInput.value.length == 0 || limiteInput.value.length == 0) {
        alert("Por favor, insira números válidos.");
        return;
    }else{
        resultado.innerHTML = `A tabuada de ${numero} é:<br>`
        for (i = 0 ; i<= limite; i++){
            resposta = numero * i;
            resultado.innerHTML += (`${i} X ${numero} = ${resposta}<br>`)
        }
    }

}