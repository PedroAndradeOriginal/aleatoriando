let numPrincipal = document.querySelector("#numprincipal");
let botao = document.querySelector('.botao');
let numMenor;
let numMaior;
let numAnteriores = document.querySelector('#numerosAnteriores');
let arrayRange;
let arraySorteados = [];
let meuArray2 = [];
let numeroRandomico = 1;
let indiceRandomico;
let i = 0;
let j = 0;

botao.addEventListener('click', teste, false);

arrayRange;
arraySorteados = [];
meuArray2 = [];
numeroRandomico = 1;
indiceRandomico;
i = 0;
j = 0;

function teste() {
    numMenor = document.querySelector('#input01').value;
    numMaior = document.querySelector('#input02').value;
    if (numMenor == "") {
        alert("Preencha os campos Range");
    } else if (numMaior == "") {
        alert("Preencha os campos Range");
    } else {
        numMenor = parseInt(numMenor);
        numMaior = parseInt(numMaior);

        if (numMenor >= numMaior) {
            alert("Não é possível gerar o sorteio com o intervalo apresentado! Número inicial do range maior ou igual ao número final.");
        } else {
            arrayRange = criaArrayRange(numMenor, numMaior);
            if (arraySorteados.length == (numMaior - numMenor) + 1) {
                window.alert ('Fim! Clique no botão RESET ou recarregue a página para outro sorteio. Obrigado!');
                return;
            }
            while (i < 1) {
                if (arraySorteados.length == (numMaior - numMenor) + 1) {
                    window.alert ('Fim! Clique no botão RESET ou recarregue a página para outro sorteio. Obrigado!');
                    return;
                }
                indiceRandomico = gerarNumero(0, arrayRange.length - 1);
                numeroRandomico = arrayRange[indiceRandomico];
                arraySorteados = criaArraySorteados(numeroRandomico);
                numPrincipal.innerHTML = numeroRandomico;
                numAnteriores.innerHTML += numeroRandomico + ' - ';
                i++;
            }

            i++;

            if (i > 2) {
                while (j < 1) {
                    if (arraySorteados.length == (numMaior - numMenor) + 1) {
                        window.alert ('Fim! Clique no botão RESET ou recarregue a página para outro sorteio. Obrigado!');
                        return;
                    }
                    indiceRandomico = gerarNumero(0, arrayRange.length - 1);
                    numeroRandomico = arrayRange[indiceRandomico];
                    if (arraySorteados.indexOf(numeroRandomico) === -1) {
                        numPrincipal.innerHTML = numeroRandomico;
                        numerosAnteriores.innerHTML += numeroRandomico + ' - ';
                        arraySorteados.push(numeroRandomico);
                        j++;
                    }
                }
            }

            j = 0;

        }
    }
}

function criaArraySorteados(num) {
    meuArray2.push(num);
    return meuArray2;
}

function criaArrayRange(comeco, fim) {
    let meuArray = [];
    for (let i = comeco; i <= fim; i++) {
        meuArray.push(i);
    }
    return meuArray;
}

function gerarNumero(min, max) {

    let passo1 = max - min + 1;
    let passo2 = Math.random() * passo1;
    let resultado = Math.floor(passo2) + min;
    return resultado;
}