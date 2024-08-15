const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Miguel é um menino que vinha de uma familia negra, só por essa parte Miguel saberia doque enfrentaria em sua vida, Miguel completou seus 6 anos e vai começar seu primeiro dia de aula, somente por chegar no portão em uma escola publica ja foi visto por más olhos. Após o fim das aulas Miguel chegou em casa e foi contar para sua mãe sobre seu primeiro dia de escola, *Oque Miguel deve fazer?*",
        alternativas: [
            {
                texto:"Contar a sua mãe sobre o ocorrido",
                afirmacao: "Depois da fim da aula e sobre os maus olhos quando chegou, Miguel foi correndo para sua mãe e contou tudo, ela ficou muito triste sobre o ocorrido e mandou o Miguel ir para a Aula por mais um dia para ver a reação dos alunos e tomar medidas caso ocorrá novamente."
            },
            {
                texto:"Mentir para sua mãe sobre o ocorrido",
                afirmacao: "Depois do fim da aula e sobre os maus olhos, quando Miguel chegou em casa mentiu para sua mãe dizendo que estava tudo bem e a aula foi muito boa e fez amiguinhos novos, sua mãe ficou muito feliz com o ocorrido e deu um abraço nele comemorando oque conseguiu."
            }   
        ]
    },
    {
        enunciado: "Enunciado 02",
        alternativas: [
            {
                texto: "alternativa 03",
                afirmacao: "resultado03"
            },
            {
                texto: "alternativa 04",
                afirmacao: "resultado 04"
            }
        ]
    },
    {
        enunciado: "Enunciado 03",
        alternativas: [
            {
                texto: "alternativa 05",
                afirmacao: "resultado 05"
            },
            {
                texto: "alternativa 06",
                afirmacao: "resultado 06"
            }
        ]
    },
    {
        enunciado: "Enunciado 04",
        alternativas: [
            {
                texto: "alternativa 07",
                afirmacao: "resultado 07"
            },
            {
                texto: "alternativa 08",
                afirmacao: "resultado 08"
            }
        ]
    },
    {
        enunciado: "Enunciado 05",
        alternativas: [
            {
                texto: "alternativa 09",
                afirmacao: "resultado 09"
            },
            {
                texto: "alternativa 10",
                afirmacao: "resultado 10"
            }
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostrarPerguntas(){
    if(atual >= perguntas.length){
        mostraResultado();
        return
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""
    mostrarAlternativas();
}

function mostrarAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostrarPerguntas();
}

function mostraResultado(){
    caixaPerguntas.textContent = " Miguel iniciou sua jornada nesse mundo sem respeito e igualdade, vindo de uma familia negra e pobre mas com condições necessarias, sabia que poderia viver mas não sabia sobre os julgamentos dos outros, Miguel possuindo seus 6 anos começará seu primeiro dia de aula em uma escola publica."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostrarPerguntas();