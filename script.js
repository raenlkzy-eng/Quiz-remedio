const perguntas = [
    {
        pergunta:"Qual linguagem é responsavel pela estrutura de uma pagina web?",
        alternativas:[
            "CSS",
            "html",
            "javaScript",
            "Python"
        ],
        correta: 1
    },


{
    pergunta:"Qual linguagem usamos principalmente para estilizar uma pagina?",
    alternativas:[
        "Html",
        "Java",
        "Css",
        "Python"
    ],
    correta: 2
},

{
    pergunta:"Qual linguagem permite adicionar interativamente a uma pagina?",
    alternativas:[
        "javaScript",
            "Html",
            "Css",
            "SQL"

    ],
    corretas: 0

},

{
    pergunta:"Qual evento ocorre quando o usuario clica em um elemento?",
    alternativas:[
        "mouseover",
            "click",
            "load",
            "change"

    ],
correta: 1
},


{
    pergunta:"Qual comando pode localizar um elemento pelo seu ID?",
    alternativas:[
        "Document.getElementById()",
            "console.log()",
            "load",
            "change"

    ],
correta: 1
},

];


let perguntaAtual = 0;
let pontos = 0;


function mostrarPergunta() {

    const pergunta = perguntas[perguntaAtual];
    
    document.getElementById("pergunta").textContent =
pergunta.pergunta;

const alternativas = document.getElementById("alternativas");

alternativas.innerHTML = "";

pergunta.alternativas.forEach((alternativa, indice) => {

    const botao = document.createElement("button");

botao.textContent = alternativa;

botao.onclick = function () {
    verificarResposta(indice);
};

alternativas.appendChild(botao);
});
}


function verificarResposta(indice){

    if(indice === perguntas[perguntaAtual].correta){
        pontos++;
    }

    perguntaAtualtual++;

    if(perguntaAtual < perguntas.length) {

        mostrarPergunta();

    
    } else {

        mostrarResultado();

    }
}

function mostrarResultado() {

    document.getElementById("pergunta").textContent =
    "Quiz finalizado!";

    document.getElementById("alternativas").innerHtml = "";

    document.getElementById("resultado").textContent =
    "Você acertou "+ pontos +
    " de " + perguntas.length + "perguntas.";

}

mostrarPergunta();