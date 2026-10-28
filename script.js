const botaoIniciar = document.querySelector(".iniciar");
const titulo = document.getElementById("titulo-principal");
const pergunta = document.getElementById("pergunta");
const botaoSim = document.getElementById("resposta-sim");
const botaoNao = document.getElementById("resposta-nao");
const resultado = document.getElementById("resultado");
const contadorDeSim = document.getElementById("contadorDeSim");
const contadorDeNao = document.getElementById("contadorDeNao");

const perguntas = [
    "Você conhecia a vítima antes da ocorrência?",
    "Você esteve no local do crime no dia da ocorrência?",
    "Você teve algum desentendimento com a vítima recentemente?",
    "Você escondeu alguma informação importante sobre o caso?",
    "Você possui alguma informação que ainda não contou à polícia?",
    "Você teve contato com algum objeto relacionado ao crime?",
    "Você conversou com alguém sobre a ocorrência antes de prestar depoimento?",
    "Você esteve próximo ao local do crime em um horário incomum?",
    "Você sabe quem poderia ter cometido esse crime?",
    "Você está omitindo alguma informação que poderia ajudar a resolver a investigação?"
];

let indicePergunta = 0;

let respostasSim = 0;
let respostasNao = 0;

botaoSim.disabled = true;
botaoNao.disabled = true;

botaoIniciar.addEventListener("click", () => {
    indicePergunta = 0;
    respostasSim = 0;
    respostasNao = 0;

    titulo.textContent = "Teste Iniciado";
    pergunta.textContent = perguntas[indicePergunta];
    resultado.textContent = "";

    botaoSim.disabled = false;
    botaoNao.disabled = false;
    botaoIniciar.disabled = true;

        contadorDeSim.textContent = "Respostas \"Sim\": 0";
    contadorDeNao.textContent = "Respostas \"Não\": 0";
});

botaoSim.addEventListener("click", () => {
    respostasSim++;
    indicePergunta++;

    if (indicePergunta < perguntas.length) {
        pergunta.textContent = perguntas[indicePergunta];
    } else {
        pergunta.textContent = "Teste concluído!";

if (respostasSim < 5) {
    resultado.textContent = "Classificação: Inocente — Nenhuma evidência suspeita foi identificada. Caso encerrado!";
} else if (respostasSim === 5) {
    resultado.textContent = "Classificação: Suspeito — Algumas respostas levantaram dúvidas. A investigação continuará.";
} else if (respostasSim <= 8) {
    resultado.textContent = "Classificação: Cúmplice — Suas respostas indicam possíveis ligações com o caso. Novas análises serão realizadas.";
} else {
    resultado.textContent = "Classificação: Culpado — O teste simulou fortes indícios de envolvimento. Caso encaminhado para análise.";
}

        botaoSim.disabled = true;
        botaoNao.disabled = true;
        botaoIniciar.disabled = false;
    }

    contadorDeSim.textContent = "Respostas \"Sim\": " + respostasSim;
    contadorDeNao.textContent = "Respostas \"Não\": " + respostasNao;
});

botaoNao.addEventListener("click", () => {
    respostasNao++;
    indicePergunta++;

    if (indicePergunta < perguntas.length) {
        pergunta.textContent = perguntas[indicePergunta];
    } else {
        pergunta.textContent = "Teste concluído!";

if (respostasSim < 5) {
        resultado.textContent = "Classificação: Inocente — Nenhuma evidência suspeita foi identificada. Caso encerrado!";
} else if (respostasSim === 5) {
            resultado.textContent = "Classificação: Suspeito — Algumas respostas levantaram dúvidas. A investigação continuará.";
} else if (respostasSim <= 8) {
        resultado.textContent = "Classificação: Cúmplice — Suas respostas indicam possíveis ligações com o caso. Novas análises serão realizadas.";
} else {
        resultado.textContent = "Classificação: Culpado — O teste simulou fortes indícios de envolvimento. Caso encaminhado para análise.";
}

        botaoSim.disabled = true;
        botaoNao.disabled = true;
        botaoIniciar.disabled = false;
    }

    contadorDeSim.textContent = "Respostas \"Sim\": " + respostasSim;
    contadorDeNao.textContent = "Respostas \"Não\": " + respostasNao;
});