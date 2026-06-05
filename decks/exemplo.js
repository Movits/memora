/*
  Baralho de EXEMPLO do Memora.
  Serve de tutorial e mostra o formato. Quando o Roberto mandar o livro de uma
  matéria, eu crio um arquivo igual a este (ex.: decks/historia.js) e adiciono
  uma linha <script src="decks/historia.js"></script> no index.html.

  Formato de um cartão:
    { id, unidade, frente, verso, dica? }   // frente/verso aceitam HTML simples
  Formato de uma questão de quiz:
    { id, unidade, pergunta, opcoes:[...], correta: indice0, explicacao? }
*/
window.MEMORA.add({
  id: "exemplo",
  titulo: "Exemplo: como usar o Memora",
  prova: null, // data da prova no formato "AAAA-MM-DD" (ou null)
  unidades: {
    1: "Unidade 1 · Como estudar",
    2: "Unidade 2 · Demonstração"
  },
  cards: [
    {
      id: "ex-1", unidade: 1,
      frente: "Quais são as duas técnicas de estudo com mais evidência científica?",
      verso: "<b>Recordação ativa</b> (testar a memória) e <b>repetição espaçada</b> (revisar em intervalos crescentes).",
      dica: "Uma é sobre <i>se testar</i>, a outra é sobre <i>quando revisar</i>."
    },
    {
      id: "ex-2", unidade: 1,
      frente: "O que significam os botões <b>Errei</b>, <b>Difícil</b> e <b>Acertei</b>?",
      verso: "Você se autoavalia. <b>Errei</b> faz o cartão voltar logo; <b>Difícil</b> volta mais tarde; <b>Acertei</b> espaça a próxima revisão.",
      dica: "É você quem julga, com honestidade."
    },
    {
      id: "ex-3", unidade: 1,
      frente: "Por que reler e grifar o texto rende pouco?",
      verso: "Dão sensação de produtividade, mas quase não exigem esforço de memória. O ganho real vem de <b>recuperar</b> a informação de cabeça.",
    },
    {
      id: "ex-4", unidade: 2,
      frente: "Memória é a deusa grega ____, mãe das Musas.",
      verso: "Mnemósine (Mnemosyne).",
      dica: "Mesma raiz de 'mnemônico'."
    },
    {
      id: "ex-5", unidade: 2,
      frente: "Como instalar o Memora no celular?",
      verso: "Abra a URL no navegador do celular e use <b>Adicionar à tela inicial</b>. Ele vira um ícone e funciona offline.",
    }
  ],
  quiz: [
    {
      id: "exq-1", unidade: 1,
      pergunta: "Qual estratégia tende a dar <b>mais</b> retenção a longo prazo?",
      opcoes: ["Reler o capítulo três vezes", "Grifar tudo de amarelo", "Fechar o livro e se testar", "Copiar o resumo à mão"],
      correta: 2,
      explicacao: "Recuperar a informação de memória (se testar) é o que mais fortalece o aprendizado."
    },
    {
      id: "exq-2", unidade: 1,
      pergunta: "Repetição espaçada quer dizer:",
      opcoes: ["Estudar tudo de uma vez na véspera", "Revisar em intervalos que vão aumentando", "Ler só uma vez e confiar na sorte", "Estudar sempre o mesmo cartão sem parar"],
      correta: 1,
      explicacao: "Os intervalos crescem conforme você acerta, fixando na memória de longo prazo."
    }
  ]
});
