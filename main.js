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
                texto: "Contar a sua mãe sobre o ocorrido",
                afirmacao: "Depois da fim da aula e sobre os maus olhos quando chegou, Miguel foi correndo para sua mãe e contou tudo, ela ficou muito triste sobre o ocorrido e mandou o Miguel ir para a Aula por mais um dia para ver a reação dos alunos e tomar medidas caso ocorrá novamente."
            },
            {
                texto: "Mentir para sua mãe sobre o ocorrido",
                afirmacao: "Depois do fim da aula e sobre os maus olhos, quando Miguel chegou em casa mentiu para sua mãe dizendo que estava tudo bem e a aula foi muito boa e fez amiguinhos novos, sua mãe ficou muito feliz com o ocorrido e deu um abraço nele comemorando oque conseguiu."
            }
        ]
    },
    {
        enunciado: "No mesmo dia Miguel foi para seu quarto e refletiu sobre o ocorrido na escola e busca como solucionar o que havia com ele.",
        alternativas: [
            {
                texto: "Miguel tentará fazer amizades novas para ter um grupinho de amigos",
                afirmacao: "Miguel foi para a escola no dia seguinte e buscou amizade com pessoas iguais a ele e conseguiu."
            },
            {
                texto: "Miguel ficou muito triste por ter mentido para sua mãe e tentara buscar novas amizades igual ele na escola.",
                afirmacao: "Miguel voltou para sua mãe e contou sobre a mentira e ela ficou muito triste e apoiou ele sobre buscar novos amigos no colegio e felizmente ele conseguiu"
            }
        ]
    },
    {
        enunciado: "Com seus novos amigos da mesma cor, Miguel então tentara dar uma volta por cima sobre o ocorrido, oque ele precisará fazer?",
        alternativas: [
            {
                texto: "Fazer uma denuncia para a diretora e pedir para realizarem uma palestra sobre racismo",
                afirmacao: "Então Miguel foi até a Diretora contou tudo oque aconteceu e pediu a palestra sobre racismo e a diretora aceitou como lição para os alunos que não possuem respeito."
            },
            {
                texto: "Miguel entra xingando com seu grupo para pessoas que não gosta dele",
                afirmacao: "Miguel acaba xingando muita gente e vai para a diretoria e leva uma advertencia e um castigo por ultrapassar os limites de xingamento e sua mãe é chamada"
            }
        ]
    },
    {
        enunciado: "Logo depois de todos o acontecimento Miguel é chamado para a sala do diretor e verá oque acontecera com ele.",
        alternativas: [
            {
                texto: "Miguel vai a sala da diretora",
                afirmacao: "Miguel é parabenizado pela sua atitude e ganhará vale lanche, passeio para sua turma, e notas extras por ser um exemplo na escola"
            },
            {
                texto: "Miguel não vai a sala da diretora",
                afirmacao: "Miguel acaba sendo punido do colegio e perderá sua vaga por desobedecer a diretora e seus superiores"
            }
        ]
    },
    {
        enunciado: "Migue seu futuro..",
        alternativas: [
            {
                texto: "Apos crescer Miguel ira se tornar um presidente e lutara contra o racismo no Brasil",
                afirmacao: "Miguel seguindo sua vida como um exemplo de notas escolares e repeito em seu bairro aos 38 anos se torna um Presidente da Republica do Brasil e lutará contra o racismo"
            },
            {
                texto: "Miguel desiste de tudo e ficará em depressão até alguem ajudar ele.",
                afirmacao: "Após seu fracasso e detonando sua imagem publica Miguel busca tentar ajuda mas acaba caindo em depressao até buscar Jesus Cristo que ira ajudalo a ter sua cura buscar ser uma nova pessoa na sociedade."
            }
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostrarPerguntas() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""
    mostrarAlternativas();
}

function mostrarAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostrarPerguntas();
}

function mostraResultado() {
    caixaPerguntas.textContent = " Miguel iniciou sua jornada nesse mundo sem respeito e igualdade, vindo de uma familia negra e pobre mas com condições necessarias, sabia que poderia viver mas não sabia sobre os julgamentos dos outros, Miguel possuindo seus 6 anos começará seu primeiro dia de aula em uma escola publica."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostrarPerguntas();