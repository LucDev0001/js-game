/*


Tipo de Função	                    Exemplo de Código	Uso
Sem retorno e sem parâmetro	        function saudacao() { ... }	                Execução de bloco de código simples.
Sem retorno e com parâmetro	        function cumprimentar(nome) { ... }	        Execução de bloco de código com argumentos.
Com retorno e sem parâmetro	        function gerarNumeroAleatorio() { ... }	    Cálculo e retorno de um valor específico.
Com retorno e com parâmetro	        function somar(a, b) { ... }	            Cálculo e retorno baseado em argumentos.
Função anônima	                    let saudacao = function() { ... };	        Definição de função sem nome localmente.
Arrow                               function	let quadrado = x => x * x;	    Definição concisa de funções curtas.

*/

let listaDeNumerosSorteados = [];
let numeroLimite = 13;
let numeroSecreto = 13;
/*
apague o comentario e jogue com numeros aleatorios.
let numeroSecreto = gerarNumeroAleatorio();
*/
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Quantos Títulos  Brasileiros tem o Palmeiras');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 13');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';// deixa o campo da string vazia.
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}







