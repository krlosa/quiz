const perguntas = [
    {
        pergunta: "Pergunta 01: Qual jogador detém o recorde de mais gols marcados em Copas do Mundo?",
        respostas: ["Lionel Messi", "Cristiano Ronaldo", "Pelé", "Diego Maradona"],
        correta: 2
    },//01

    {
        pergunta: "Pergunta 02: Em que ano o Brasil sediou a última Copa do Mundo de futebol masculino?",
        respostas: ["2014", "2018", "2022", "2020"],
        correta: 0
    },//02

    {
        pergunta: "Pergunta 03: Qual clube europeu conquistou mais vezes a Liga dos Campeões da UEFA até 2022?",
        respostas: ["Barcelona", "Real Madri", "Bayern de Munique", "Liverpool"],
        correta: 1
    },//03

    {
        pergunta: "Pergunta 04: Quem é o único jogador a vencer a Bola de Ouro da FIFA seis vezes?",
        respostas: ["Kylian Mbappé", "Cristiano Ronaldo", "Neymar", "Lionel Messi"],
        correta: 3
    },//04

    {
        pergunta: "Pergunta 05: Qual país sediou a Copa do Mundo de futebol feminino em 2023?",
        respostas: ["Alemanha", "França", "Austrália", "Canadá"],
        correta: 2
    },//05

    {
        pergunta: 'Pergunta 06: Quem é conhecido como "O Fenômeno" no mundo do futebol?',
        respostas: ["Ronaldinho Gaúcho", "Ronaldo Nazário", "Romário", "Rivaldo"],
        correta: 1
    },//06

    {
        pergunta: "Pergunta 07: Qual seleção venceu a Copa do Mundo de Futebol em 2018?",
        respostas: ["Espanha", "França", "Croácia", "Bélgica"],
        correta: 1
    },//07

    {
        pergunta: "Pergunta 08: Qual país sul-americano possui o maior número de títulos da Copa América?",
        respostas: ["Argentina", "Brasil", "Paraguai", "Uruguai"],
        correta: 3
    },//08

    {
        pergunta: "Pergunta 09: Quem é o técnico da seleção brasileira de futebol masculino em 2024?",
        respostas: ["Tite", "Dorival Júnior","Fernando Diniz", "Mano Menezes"],
        correta: 1
    },//09

    {
        pergunta: "Pergunta 10: Em que ano a Copa do Mundo de Futebol teve sua primeira edição realizada?",
        respostas: ["1928", "1934", "1930", "1938"],
        correta: 2
    }//10

];


const quiz = document.querySelector('#quiz')
const template = document.querySelector('template');
const btn = document.querySelector('#btn');

const pontos = new Set();
const placar = document.querySelector('#placar');
const marcado = document.getElementById('#marcado')


for(const item of perguntas){
    const quizAlternativa = template.content.cloneNode(true);
    quizAlternativa.querySelector('h3').textContent = item.pergunta
    for(let resposta of item.respostas){
        const dt = quizAlternativa.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').setAttribute('id', 'marcado-' + perguntas.indexOf(item))
        dt.querySelector('input').onchange = (event) => {
            const pontuacao = event.target.value == item.correta
            
            pontos.delete(item)
            if(pontuacao){
                pontos.add(item)                
            }
            placar.textContent = `${pontos.size} de 10 pontos`

        }


        quizAlternativa.querySelector('dl').appendChild(dt)
    }

    quizAlternativa.querySelector('dl dt').remove()

    quiz.appendChild(quizAlternativa);
};

btn.addEventListener('click', function(){
    alert(`Sua pontuação foi ${pontos.size}. Parabéns!!`)
});