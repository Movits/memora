# Memora

App de estudo com **recordação ativa** e **repetição espaçada** (esquema Leitner). Roda no
navegador, funciona offline e dá pra instalar no celular (PWA). Cada matéria é um "baralho" de
dados, então o mesmo app serve para todas as provas.

## Como usar

- **No computador:** abra `index.html` com duplo clique. Funciona offline, sem instalar nada.
- **No celular / em qualquer lugar:** acesse a versão publicada no GitHub Pages e use
  "Adicionar à tela inicial" para instalar como app.

### No app

- **Estudar agora:** revisa só os cartões que estão "vencidos" (devidos) hoje.
- **Reta final:** embaralha todos os cartões da matéria, para revisão intensiva na véspera.
- **Quiz:** questões de múltipla escolha com gabarito comentado.
- Ao revelar a resposta, você se autoavalia: **Errei** / **Difícil** / **Acertei** (atalhos 1, 2, 3;
  espaço revela). Isso alimenta a repetição espaçada e a barra de progresso.

O progresso fica salvo no próprio navegador (localStorage).

## Como adicionar uma matéria nova

1. Crie um arquivo em `decks/`, por exemplo `decks/historia.js`, copiando o formato de
   [`decks/exemplo.js`](decks/exemplo.js).
2. Inclua uma linha no `index.html`, junto das outras:
   ```html
   <script src="decks/historia.js"></script>
   ```

Formato de um cartão e de uma questão:

```js
// cartão
{ id: "u1-001", unidade: 1, frente: "Pergunta...", verso: "Resposta...", dica: "opcional" }

// questão de quiz
{ id: "q1", unidade: 1, pergunta: "...", opcoes: ["A", "B", "C", "D"], correta: 2, explicacao: "..." }
```

`frente` e `verso` aceitam HTML simples (`<b>`, `<i>`, `<br>`). `correta` é o índice da opção
certa começando em 0.

## Estrutura

```
index.html   app + lista de scripts das matérias
app.js       motor (recordação ativa, Leitner, quiz, progresso)
styles.css   visual
sw.js        service worker (offline)
decks/       um arquivo .js por matéria
estudo/      resumos, mapas mentais, linhas do tempo, colas, roteiros de podcast
anki/        decks em CSV para importar no Anki
icons/       ícones do PWA
```

## Por que recordação ativa e repetição espaçada

São as duas técnicas com mais evidência científica para reter rápido e a longo prazo. A
meta-análise de Donoghue e Hattie (2021), com 242 estudos, apontou prática de testes e prática
distribuída como as mais eficazes; reler e grifar têm utilidade baixa.
