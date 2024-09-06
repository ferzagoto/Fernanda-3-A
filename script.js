const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como você prefere contribuir para a preservação do meio ambiente em seu dia a dia?",
        alternativas: [
            {
                texto: "a) Reduzindo o consumo de plásticos descartáveis e optando por produtos reutilizáveis",
                afirmacao: "Reduzir o uso de plásticos descartáveis e adotar produtos reutilizáveis é uma forma eficaz de diminuir a poluição e os resíduos sólidos. Ao fazer isso, você contribui para a redução da demanda por novos plásticos, ajudando a proteger o meio ambiente e a vida marinha."
            },
            {
                texto: "b) Participando de programas de reciclagem e compostagem em sua comunidade",
                afirmacao: " A reciclagem e a compostagem ajudam a reduzir a quantidade de resíduos que vão para aterros e a reciclar materiais que podem ser reutilizados, economizando recursos e reduzindo a poluição. Participar desses programas também incentiva uma cultura de responsabilidade ambiental e promove a conscientização na comunidade."
            }
        ]
    },
    {
        enunciado: "Qual é a sua prioridade quando se trata de ações individuais para combater as mudanças climáticas?",
        alternativas: [
            {
                texto: "a) Reduzir o consumo de carne e adotar uma dieta mais sustentável",
                afirmacao: " A produção de carne tem um impacto significativo nas emissões de gases de efeito estufa, desmatamento e uso excessivo de água. Reduzir o consumo de carne e adotar uma dieta mais sustentável pode diminuir a pegada de carbono e promover práticas agrícolas mais ecológicas."
            },
            {
                texto: "b) Optar por transportes mais ecológicos, como bicicletas ou transporte público",
                afirmacao: "O transporte é uma das principais fontes de emissões de gases de efeito estufa. Optar por bicicletas ou transporte público reduz a dependência de veículos particulares movidos a combustíveis fósseis, diminuindo a poluição do ar e as emissões de carbono."
            }
        ]
    },
    {
        enunciado: "Qual prática você considera mais importante para proteger a biodiversidade local?",
        alternativas: [
            {
                texto: "a) Apoiar e participar de projetos de replantio e conservação de áreas verdes",
                afirmacao: "Replantar árvores e conservar áreas verdes ajuda a restaurar habitats naturais, apoiar a biodiversidade e combater a erosão do solo. Essas práticas criam ambientes saudáveis para as espécies locais e ajudam a manter o equilíbrio ecológico."
            },
            {
                texto: "b) Evitar o uso de pesticidas e produtos químicos no seu jardim ou cultivo",
                afirmacao: "O uso de pesticidas e produtos químicos pode prejudicar a saúde do solo, a água e a fauna local, incluindo polinizadores essenciais como abelhas. Evitar esses produtos e optar por métodos naturais ajuda a proteger a biodiversidade e promove ecossistemas mais saudáveis e sustentáveis."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
