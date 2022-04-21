const resultado = document.querySelector('.result');
const confirmar = document.querySelector('.igual');

// Inclusão dos valores dos botões
function insert(valor) {
    resultado.innerHTML += valor;
}

// Função para apagar todos os números na tela
function clean() {
    resultado.innerHTML = '';
}

// Função para apagar um número por vez
function backspace() {
    if(resultado.textContent) {
        let result = document.getElementById('resultado').innerHTML
        resultado.innerHTML = result.substring(0, result.length -1);
    }
}

// Função para mostrar o resultado
function confirma() {
    if(resultado.textContent != 'Erro') {
        document.getElementById("resultado").innerHTML = eval(resultado.innerHTML)
    }
}
