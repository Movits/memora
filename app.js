/* Memora: recordação ativa + repetição espaçada (Leitner adaptado à semana). */
(function () {
  "use strict";

  var DECKS = (window.MEMORA && window.MEMORA.decks) || [];
  var app = document.getElementById("app");
  var btnBack = document.getElementById("btn-back");
  var btnHome = document.getElementById("btn-home");

  // ---- Tempo e intervalos de Leitner (em ms) ----
  var H = 3600 * 1000, D = 24 * H;
  // Caixa 1..5. Acertar sobe de caixa; o intervalo cresce. Pensado para uma semana:
  // a caixa 1 reaparece em 8h (mais de uma sessão por dia), a caixa 5 só na véspera.
  var INTERVALS = { 1: 8 * H, 2: 1 * D, 3: 2 * D, 4: 4 * D, 5: 7 * D };
  var DOMINADO = 4; // caixa a partir da qual o cartão conta como "dominado"

  // ---- Estado persistido (localStorage) ----
  function stateKey(deckId) { return "memora.progress." + deckId; }
  function loadState(deckId) {
    try { return JSON.parse(localStorage.getItem(stateKey(deckId))) || {}; }
    catch (e) { return {}; }
  }
  function saveState(deckId, state) {
    try { localStorage.setItem(stateKey(deckId), JSON.stringify(state)); } catch (e) {}
  }
  function cardState(state, cardId) {
    return state[cardId] || { box: 1, due: 0 };
  }
  function grade(deckId, cardId, result) {
    var state = loadState(deckId);
    var cs = cardState(state, cardId);
    if (result === "errei") cs.box = 1;
    else if (result === "dificil") cs.box = Math.max(1, cs.box);
    else if (result === "acertei") cs.box = Math.min(5, cs.box + 1);
    var interval = result === "errei" ? 60 * 1000
      : result === "dificil" ? 30 * 60 * 1000
      : INTERVALS[cs.box];
    cs.due = Date.now() + interval;
    state[cardId] = cs;
    saveState(deckId, state);
    return cs;
  }

  // ---- Estatísticas ----
  function dueCount(deck) {
    var state = loadState(deck.id), now = Date.now(), n = 0;
    deck.cards.forEach(function (c) {
      if (cardState(state, c.id).due <= now) n++;
    });
    return n;
  }
  function masteredCount(deck, unidade) {
    var state = loadState(deck.id), n = 0, total = 0;
    deck.cards.forEach(function (c) {
      if (unidade != null && c.unidade !== unidade) return;
      total++;
      if (cardState(state, c.id).box >= DOMINADO) n++;
    });
    return { mastered: n, total: total };
  }

  // ---- Utilidades ----
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function el(tag, attrs, children) {
    var e = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "class") e.className = attrs[k];
      else if (k === "html") e.innerHTML = attrs[k];
      else if (k === "text") e.textContent = attrs[k];
      else if (k.indexOf("on") === 0 && typeof attrs[k] === "function") e.addEventListener(k.slice(2), attrs[k]);
      else if (attrs[k] === true) e.setAttribute(k, "");
      else if (attrs[k] != null && attrs[k] !== false) e.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) {
      if (c == null) return;
      e.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return e;
  }
  function clear() { app.innerHTML = ""; }
  function diasAte(dataISO) {
    if (!dataISO) return null;
    var alvo = new Date(dataISO + "T23:59:59");
    return Math.ceil((alvo - new Date()) / D);
  }
  function unidades(deck) {
    var set = {};
    deck.cards.forEach(function (c) { set[c.unidade] = true; });
    return Object.keys(set).map(Number).sort(function (a, b) { return a - b; });
  }
  function nomeUnidade(deck, u) {
    if (deck.unidades && deck.unidades[u]) return deck.unidades[u];
    return "Unidade " + u;
  }

  // ---- Navegação ----
  var current = null; // deck atual
  function go(render) {
    btnBack.hidden = render === renderHome;
    clear();
    render();
    window.scrollTo(0, 0);
  }
  btnHome.addEventListener("click", function () { current = null; go(renderHome); });
  btnBack.addEventListener("click", function () {
    if (current) go(function () { renderDeck(current); });
    else go(renderHome);
  });

  // ---- Tela inicial: lista de matérias ----
  function renderHome() {
    if (!DECKS.length) {
      app.appendChild(el("div", { class: "empty" }, [
        el("span", { class: "emoji", text: "📚" }),
        el("p", { text: "Nenhuma matéria carregada ainda." }),
        el("p", { class: "sub", text: "Adicione um arquivo em decks/ e inclua no index.html." })
      ]));
      return;
    }
    app.appendChild(el("h1", { text: "Suas matérias" }));
    app.appendChild(el("p", { class: "sub", text: "Toque numa matéria para estudar." }));
    DECKS.forEach(function (deck) {
      var m = masteredCount(deck);
      var pct = m.total ? Math.round(100 * m.mastered / m.total) : 0;
      var due = dueCount(deck);
      var dias = diasAte(deck.prova);
      var bar = el("div", { class: "bar" }, [el("i")]);
      var card = el("div", { class: "deck-card", onclick: function () { current = deck; go(function () { renderDeck(deck); }); } }, [
        el("div", { class: "deck-title" }, [
          el("h2", { text: deck.titulo }),
          el("span", { class: "pill " + (due ? "due" : "zero"), text: due ? (due + " p/ revisar") : "em dia ✓" })
        ]),
        el("div", { class: "meta-row" }, [
          el("span", { text: "🃏 " + deck.cards.length + " cartões" }),
          el("span", { text: "✅ " + pct + "% dominado" }),
          dias != null ? el("span", { text: "📅 prova em " + dias + (dias === 1 ? " dia" : " dias") }) : null
        ]),
        bar
      ]);
      app.appendChild(card);
      requestAnimationFrame(function () { bar.firstChild.style.width = pct + "%"; });
    });
  }

  // ---- Tela da matéria ----
  function renderDeck(deck) {
    var dias = diasAte(deck.prova);
    app.appendChild(el("h1", { text: deck.titulo }));
    var subTxt = "";
    if (dias != null) subTxt = "Prova em " + dias + (dias === 1 ? " dia. " : " dias. ");
    app.appendChild(el("p", { class: "sub", text: subTxt + dueCount(deck) + " cartões para revisar agora." }));

    // Botões principais
    var due = dueCount(deck);
    app.appendChild(el("div", { class: "btn-row" }, [
      el("button", {
        class: "action", text: "Estudar agora" + (due ? " (" + due + ")" : ""),
        disabled: due === 0,
        onclick: function () { startStudy(deck, { mode: "revisao" }); }
      }),
      el("button", { class: "action secondary", text: "🔥 Reta final", onclick: function () { startStudy(deck, { mode: "retafinal" }); } }),
      deck.quiz && deck.quiz.length ? el("button", { class: "action secondary", text: "📝 Quiz", onclick: function () { startQuiz(deck, {}); } }) : null
    ]));

    // Unidades
    var panel = el("div", { class: "panel" }, [el("h2", { text: "Unidades" })]);
    unidades(deck).forEach(function (u) {
      var m = masteredCount(deck, u);
      var pct = m.total ? Math.round(100 * m.mastered / m.total) : 0;
      var bar = el("div", { class: "bar" }, [el("i")]);
      panel.appendChild(el("div", { class: "unit" }, [
        el("div", { class: "unit-head" }, [
          el("span", { class: "unit-name", text: nomeUnidade(deck, u) }),
          el("span", { class: "unit-count", text: m.mastered + "/" + m.total }),
        ]),
        bar,
        el("div", { class: "btn-row" }, [
          el("button", { class: "action small secondary", text: "Estudar unidade", onclick: function () { startStudy(deck, { mode: "retafinal", unidade: u }); } }),
          (deck.quiz && deck.quiz.some(function (q) { return q.unidade === u; }))
            ? el("button", { class: "action small secondary", text: "Quiz", onclick: function () { startQuiz(deck, { unidade: u }); } }) : null
        ])
      ]));
      requestAnimationFrame(function () { bar.firstChild.style.width = pct + "%"; });
    });
    app.appendChild(panel);

    app.appendChild(el("div", { class: "center" }, [
      el("button", {
        class: "link", text: "Zerar progresso desta matéria",
        onclick: function () {
          if (confirm("Apagar o progresso de \"" + deck.titulo + "\"?")) {
            localStorage.removeItem(stateKey(deck.id));
            go(function () { renderDeck(deck); });
          }
        }
      })
    ]));
  }

  // ---- Sessão de estudo (flashcards) ----
  function startStudy(deck, opts) {
    var pool = deck.cards.filter(function (c) {
      return opts.unidade == null || c.unidade === opts.unidade;
    });
    if (opts.mode === "revisao") {
      var state = loadState(deck.id), now = Date.now();
      pool = pool.filter(function (c) { return cardState(state, c.id).due <= now; });
    }
    if (!pool.length) {
      go(function () {
        app.appendChild(el("div", { class: "empty" }, [
          el("span", { class: "emoji", text: "🎉" }),
          el("p", { text: "Nada pendente agora. Tudo em dia!" }),
          el("button", { class: "action secondary", text: "Voltar", onclick: function () { go(function () { renderDeck(deck); }); } })
        ]));
      });
      return;
    }
    var queue = shuffle(pool);
    var total = queue.length, done = 0;

    function next() {
      if (!queue.length) return summary();
      var card = queue[0];
      go(function () { renderCard(card); });
    }
    function renderCard(card) {
      app.appendChild(el("div", { class: "study-top" }, [
        el("span", { text: (opts.mode === "retafinal" ? "Reta final" : "Revisão") + (opts.unidade != null ? " · " + nomeUnidade(deck, opts.unidade) : "") }),
        el("span", { text: "Faltam " + queue.length })
      ]));
      var fc = el("div", { class: "flashcard" }, [
        el("div", { class: "tag", text: nomeUnidade(deck, card.unidade) }),
        el("div", { class: "front", html: card.frente })
      ]);
      app.appendChild(fc);
      var reveal = el("button", { class: "action", text: "Mostrar resposta", onclick: showBack });
      var revealRow = el("div", { class: "btn-row" }, [reveal]);
      app.appendChild(revealRow);

      function showBack() {
        fc.appendChild(el("div", { class: "divider" }));
        fc.appendChild(el("div", { class: "back", html: card.verso }));
        if (card.dica) fc.appendChild(el("div", { class: "hint", text: "💡 " + card.dica }));
        revealRow.remove();
        app.appendChild(el("div", { class: "grade-row" }, [
          el("button", { class: "g-bad", html: "Errei<span class='kbd'>1</span>", onclick: function () { answer("errei"); } }),
          el("button", { class: "g-hard", html: "Difícil<span class='kbd'>2</span>", onclick: function () { answer("dificil"); } }),
          el("button", { class: "g-ok", html: "Acertei<span class='kbd'>3</span>", onclick: function () { answer("acertei"); } })
        ]));
        document.onkeydown = function (ev) {
          if (ev.key === "1") answer("errei");
          else if (ev.key === "2") answer("dificil");
          else if (ev.key === "3") answer("acertei");
        };
      }
      document.onkeydown = function (ev) { if (ev.key === " " || ev.key === "Enter") { ev.preventDefault(); showBack(); } };

      function answer(result) {
        document.onkeydown = null;
        grade(deck.id, card.id, result);
        queue.shift();
        if (result !== "acertei") queue.push(card); // erro/difícil volta no fim desta sessão
        else done++;
        next();
      }
    }
    function summary() {
      document.onkeydown = null;
      go(function () {
        app.appendChild(el("div", { class: "empty" }, [
          el("span", { class: "emoji", text: "✅" }),
          el("h2", { text: "Sessão concluída!" }),
          el("p", { class: "sub", text: "Você revisou " + total + " cartões." }),
          el("div", { class: "btn-row" }, [
            el("button", { class: "action", text: "Voltar à matéria", onclick: function () { go(function () { renderDeck(deck); }); } })
          ])
        ]));
      });
    }
    next();
  }

  // ---- Quiz (múltipla escolha) ----
  function startQuiz(deck, opts) {
    var pool = (deck.quiz || []).filter(function (q) {
      return opts.unidade == null || q.unidade === opts.unidade;
    });
    if (!pool.length) { go(function () { renderDeck(deck); }); return; }
    var questions = shuffle(pool), i = 0, score = 0;

    function renderQ() {
      var q = questions[i];
      go(function () {
        app.appendChild(el("div", { class: "study-top" }, [
          el("span", { text: "Quiz" }),
          el("span", { text: (i + 1) + " / " + questions.length })
        ]));
        app.appendChild(el("div", { class: "panel" }, [
          el("div", { class: "tag", text: nomeUnidade(deck, q.unidade), style: "color:var(--brand);font-size:12px;text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px" }),
          el("h2", { html: q.pergunta })
        ]));
        var opts = el("div", {});
        q.opcoes.forEach(function (texto, idx) {
          opts.appendChild(el("button", {
            class: "quiz-opt", html: texto,
            onclick: function () { choose(idx, opts, q); }
          }));
        });
        app.appendChild(opts);
      });
    }
    function choose(idx, opts, q) {
      var buttons = opts.querySelectorAll("button");
      buttons.forEach(function (b, k) {
        b.disabled = true;
        if (k === q.correta) b.classList.add("correct");
        else if (k === idx) b.classList.add("wrong");
      });
      if (idx === q.correta) score++;
      if (q.explicacao) app.appendChild(el("div", { class: "explain", html: "💡 " + q.explicacao }));
      app.appendChild(el("div", { class: "btn-row" }, [
        el("button", {
          class: "action",
          text: i + 1 < questions.length ? "Próxima" : "Ver resultado",
          onclick: function () { i++; if (i < questions.length) renderQ(); else result(); }
        })
      ]));
    }
    function result() {
      go(function () {
        var pct = Math.round(100 * score / questions.length);
        app.appendChild(el("div", { class: "empty" }, [
          el("span", { class: "emoji", text: pct >= 70 ? "🏆" : "💪" }),
          el("h2", { text: "Resultado" }),
          el("div", { class: "big-num", text: score + " / " + questions.length }),
          el("p", { class: "sub", text: pct + "% de acerto" }),
          el("div", { class: "btn-row" }, [
            el("button", { class: "action secondary", text: "Refazer", onclick: function () { startQuiz(deck, opts); } }),
            el("button", { class: "action", text: "Voltar", onclick: function () { go(function () { renderDeck(deck); }); } })
          ])
        ]));
      });
    }
    renderQ();
  }

  // ---- PWA: service worker (só quando servido por http/https) ----
  if ("serviceWorker" in navigator && location.protocol.indexOf("http") === 0) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    });
  }

  // Início
  go(renderHome);
})();
