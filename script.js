document.addEventListener('DOMContentLoaded', () => {
    const caixaPerguntas = document.querySelector(".caixa-perguntas");
    const caixaAlternativas = document.querySelector(".caixa-alternativas");
    const caixaResultado = document.querySelector(".caixa-resultado");
    const textoResultado = document.querySelector(".texto-resultado");
    const botaoJogarNovamente = document.querySelector(".novamente-btn");
    const botaoIniciar = document.querySelector(".iniciar-btn");

    const perguntas = [
        {
            enunciado: "Qual é a principal causa do aquecimento global?",
            alternativas: [
                {
                    texto: " Desmatamento das florestas tropicais.",
                    afirmacao: "acertou "
                },
                {
                    texto: "O aumento da quantidade de água nos oceanos.",
                    afirmacao: "errou."
                }
            ]
        },
        {
            enunciado: " Qual é o principal efeito da poluição do ar na saúde humana?",
            alternativas: [
                {
                    texto: "Melhora na qualidade do sono",
                    afirmacao: "na próxima você consegue."
                },
                {
                    texto: "Aumento da incidência de doenças respiratórias.",
                    afirmacao: "eu sabia que você eria acertar."
                }
            ]
        },
        {
            enunciado: "Qual é uma das principais consequências do derretimento das calotas polares?",
            alternativas: [
                {
                    texto: "Elevação do nível do mar.",
                    afirmacao: "inteligente."
                },
                {
                    texto: "Redução da biodiversidade marinha",
                    afirmacao: "na próxima você acerta."
                }
            ]
        },
        {
            enunciado: " Qual é um dos principais impactos do uso excessivo de fertilizantes químicos na agricultura?",
            alternativas: [
                {
                    texto: " Poluição dos corpos d'água devido ao escoamento de nitratos.",
                    afirmacao: "você acertou."
                },
                {
                    texto: "Melhoria na qualidade do solo a longo prazo.",
                    afirmacao: "resposta errada"
                }
            ]
        },
        {
            enunciado: "Qual é uma das principais fontes de poluição da água nos centros urbanos? ",
            alternativas: [
                {
                    texto: " Descarte inadequado de produtos químicos e resíduos industriais.",
                    afirmacao: "acertou! Parabens"
                },
                {
                    texto: "Uso de água em atividades recreativas, como esportes aquáticos.",
                    afirmacao: "errou. "
                }
            ]
        },
    ];

    let atual = 0;
    let perguntaAtual;
    let historiaFinal = "";

    function mostraPergunta() {
        if (atual >= perguntas.length) {
            mostraResultado();
            return;
        }
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        caixaAlternativas.innerHTML = ""; 
        mostraAlternativas();
    }

    function mostraAlternativas() {
        for (const alternativa of perguntaAtual.alternativas) {
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
            caixaAlternativas.appendChild(botaoAlternativas);
        }
        caixaPerguntas.classList.remove('hidden');
        caixaAlternativas.classList.remove('hidden');
    }

    function respostaSelecionada(opcaoSelecionada) {
        const afirmacoes = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
    }

    function mostraResultado() {
        caixaPerguntas.classList.add('hidden');
        caixaAlternativas.classList.add('hidden');
        caixaResultado.classList.remove('hidden');
        textoResultado.textContent = historiaFinal;
    }

    function iniciarQuestionario() {
        botaoIniciar.classList.add('hidden');
        caixaPerguntas.classList.remove('hidden');
        caixaAlternativas.classList.remove('hidden');
        mostraPergunta();
    }

    botaoJogarNovamente.addEventListener("click", () => {
        atual = 0;
        historiaFinal = "";
        caixaResultado.classList.add('hidden');
        botaoIniciar.classList.remove('hidden'); 
    });

    botaoIniciar.addEventListener("click", iniciarQuestionario);

   
    caixaPerguntas.classList.add('hidden');
    caixaAlternativas.classList.add('hidden');
});
