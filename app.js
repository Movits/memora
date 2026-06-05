/* Memora: recordação ativa + repetição espaçada (Leitner adaptado à semana),
   com calendário de provas e estudo combinado por dia. */
(function () {
  "use strict";

  var DECKS = (window.MEMORA && window.MEMORA.decks) || [];
  var app = document.getElementById("app");
  var btnBack = document.getElementById("btn-back");
  var btnHome = document.getElementById("btn-home");

  // ---- Tempo e intervalos de Leitner (em ms) ----
  var H = 3600 * 1000, D = 24 * H;
  var INTERVALS = { 1: 8 * H, 2: 1 * D, 3: 2 * D, 4: 4 * D, 5: 7 * D };
  var DOMINADO = 4;

  var MES = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  var DOW = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  // ---- Progresso dos cartões (localStorage) ----
  function stateKey(deckId) { return "memora.progress." + deckId; }
  function loadState(deckId) {
    try { return JSON.parse(localStorage.getItem(stateKey(deckId))) || {}; }
    catch (e) { return {}; }
  }
  function saveState(deckId, state) {
    try { localStorage.setItem(stateKey(deckId), JSON.stringify(state)); } catch (e) {}
  }
  function cardState(state, cardId) { return state[cardId] || { box: 1, due: 0 }; }
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
  }

  // ---- Datas de prova (editáveis, salvas no navegador) ----
  function loadProvas() {
    try { return JSON.parse(localStorage.getItem("memora.provas")) || {}; }
    catch (e) { return {}; }
  }
  function saveProvas(p) { try { localStorage.setItem("memora.provas", JSON.stringify(p)); } catch (e) {} }
  function getProva(deck) {
    var p = loadProvas();
    return Object.prototype.hasOwnProperty.call(p, deck.id) ? p[deck.id] : (deck.prova || null);
  }
  function setProva(deckId, iso) {
    var p = loadProvas();
    p[deckId] = iso || null;
    saveProvas(p);
  }
  function provasPorDia() {
    var map = {};
    DECKS.forEach(function (d) {
      var iso = getProva(d);
      if (iso) (map[iso] = map[iso] || []).push(d);
    });
    return map;
  }
  function decksDoDia(iso) { return DECKS.filter(function (d) { return getProva(d) === iso; }); }

  // ---- Estatísticas ----
  function dueCount(deck) {
    var state = loadState(deck.id), now = Date.now(), n = 0;
    deck.cards.forEach(function (c) { if (cardState(state, c.id).due <= now) n++; });
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
  function pad2(n) { return n < 10 ? "0" + n : "" + n; }
  function parseISO(iso) { var p = iso.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function todayISO() { var d = new Date(); return d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate()); }
  function isoOf(y, m, day) { return y + "-" + pad2(m + 1) + "-" + pad2(day); }
  function fmtCurto(iso) { var d = parseISO(iso); return pad2(d.getDate()) + "/" + pad2(d.getMonth() + 1); }
  function fmtLongo(iso) { var d = parseISO(iso); return DOW[d.getDay()] + ", " + fmtCurto(iso); }
  function diasAte(iso) {
    if (!iso) return null;
    return Math.round((parseISO(iso) - parseISO(todayISO())) / D);
  }
  function labelDias(iso) {
    var d = diasAte(iso);
    if (d == null) return "";
    if (d < 0) return "já passou";
    if (d === 0) return "é hoje";
    if (d === 1) return "amanhã";
    return "em " + d + " dias";
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

  // ---- Navegação (pilha simples) ----
  var stack = [];
  function show(thunk) {
    document.onkeydown = null;
    app.innerHTML = "";
    thunk();
    window.scrollTo(0, 0);
    btnBack.hidden = stack.length <= 1;
  }
  function navigate(thunk) { stack.push(thunk); show(thunk); }
  function refresh() { show(stack[stack.length - 1]); }
  function back() { if (stack.length > 1) stack.pop(); show(stack[stack.length - 1]); }
  btnHome.addEventListener("click", function () { stack = [renderHome]; show(renderHome); });
  btnBack.addEventListener("click", back);

  // ---- Tela inicial ----
  function renderHome() {
    if (!DECKS.length) {
      app.appendChild(el("div", { class: "empty" }, [
        el("span", { class: "emoji", text: "📚" }),
        el("p", { text: "Nenhuma matéria carregada ainda." }),
        el("p", { class: "sub", text: "Adicione um arquivo em decks/ e inclua no index.html." })
      ]));
      return;
    }
    app.appendChild(el("h1", { text: "Memora" }));
    app.appendChild(el("p", { class: "sub", text: "Suas matérias e provas em um só lugar." }));

    // Agenda de provas
    var dias = provasPorDia();
    var datas = Object.keys(dias).filter(function (iso) { return diasAte(iso) >= 0; }).sort();
    var agenda = el("div", { class: "panel" }, [
      el("div", { class: "deck-title" }, [
        el("h2", { text: "📅 Próximas provas" }),
        el("button", { class: "action small secondary", text: "Calendário", onclick: function () { navigate(renderCalendar); } })
      ])
    ]);
    if (!datas.length) {
      agenda.appendChild(el("p", { class: "sub", html: "Defina a data de cada prova abrindo a matéria. As datas aparecem aqui e no calendário." }));
    } else {
      datas.forEach(function (iso) {
        var ds = dias[iso];
        agenda.appendChild(el("div", {
          class: "agenda-item", onclick: function () { navigate(function () { renderDay(iso); }); }
        }, [
          el("div", {}, [
            el("div", { class: "agenda-date", text: fmtLongo(iso) }),
            el("div", { class: "agenda-subs", text: ds.map(function (d) { return d.titulo; }).join(" · ") })
          ]),
          el("span", { class: "agenda-when", text: labelDias(iso) })
        ]));
      });
    }
    app.appendChild(agenda);

    // Lista de matérias
    app.appendChild(el("h2", { text: "Matérias", style: "margin:18px 0 10px" }));
    DECKS.forEach(function (deck) {
      var m = masteredCount(deck);
      var pct = m.total ? Math.round(100 * m.mastered / m.total) : 0;
      var due = dueCount(deck);
      var iso = getProva(deck);
      var bar = el("div", { class: "bar" }, [el("i")]);
      var card = el("div", { class: "deck-card", onclick: function () { navigate(function () { renderDeck(deck); }); } }, [
        el("div", { class: "deck-title" }, [
          el("h2", { text: deck.titulo }),
          el("span", { class: "pill " + (due ? "due" : "zero"), text: due ? (due + " p/ revisar") : "em dia ✓" })
        ]),
        el("div", { class: "meta-row" }, [
          el("span", { text: "🃏 " + deck.cards.length + " cartões" }),
          el("span", { text: "✅ " + pct + "% dominado" }),
          iso ? el("span", { text: "📅 prova " + labelDias(iso) }) : null
        ]),
        bar
      ]);
      app.appendChild(card);
      requestAnimationFrame(function () { bar.firstChild.style.width = pct + "%"; });
    });
  }

  // ---- Calendário ----
  var calRef = (function () { var d = new Date(); return { y: d.getFullYear(), m: d.getMonth() }; })();
  function renderCalendar() {
    var y = calRef.y, m = calRef.m;
    var dias = provasPorDia();
    app.appendChild(el("div", { class: "cal-head" }, [
      el("h2", { text: MES[m] + " de " + y }),
      el("div", { class: "cal-nav" }, [
        el("button", { class: "action small secondary", text: "‹", onclick: function () { calRef.m--; if (calRef.m < 0) { calRef.m = 11; calRef.y--; } refresh(); } }),
        el("button", { class: "action small secondary", text: "Hoje", onclick: function () { var d = new Date(); calRef = { y: d.getFullYear(), m: d.getMonth() }; refresh(); } }),
        el("button", { class: "action small secondary", text: "›", onclick: function () { calRef.m++; if (calRef.m > 11) { calRef.m = 0; calRef.y++; } refresh(); } })
      ])
    ]));
    var grid = el("div", { class: "cal-grid" });
    DOW.forEach(function (d) { grid.appendChild(el("div", { class: "cal-dow", text: d })); });
    var first = new Date(y, m, 1).getDay();
    var total = new Date(y, m + 1, 0).getDate();
    for (var i = 0; i < first; i++) grid.appendChild(el("div", { class: "cal-cell empty" }));
    var hoje = todayISO();
    for (var day = 1; day <= total; day++) {
      var iso = isoOf(y, m, day);
      var ds = dias[iso];
      var cls = "cal-cell" + (iso === hoje ? " today" : "") + (ds ? " has" : "");
      var cell = el("div", { class: cls }, [el("span", { text: "" + day })]);
      if (ds) {
        cell.appendChild(el("span", { class: "cal-badge", text: "" + ds.length }));
        cell.appendChild(el("span", { class: "cal-dot" }));
        (function (isoFixed) { cell.addEventListener("click", function () { navigate(function () { renderDay(isoFixed); }); }); })(iso);
      }
      grid.appendChild(cell);
    }
    app.appendChild(grid);
    app.appendChild(el("p", { class: "sub", style: "margin-top:16px;text-align:center", text: "Toque num dia marcado para estudar as provas daquele dia." }));
  }

  // ---- Dia (provas de uma data) ----
  function renderDay(iso) {
    var ds = decksDoDia(iso);
    app.appendChild(el("h1", { text: "Provas de " + fmtCurto(iso) }));
    app.appendChild(el("p", { class: "sub", text: fmtLongo(iso) + " · " + labelDias(iso) }));
    if (!ds.length) {
      app.appendChild(el("div", { class: "empty" }, [
        el("span", { class: "emoji", text: "🗓️" }),
        el("p", { text: "Nenhuma prova marcada nesse dia." })
      ]));
      return;
    }
    if (ds.length > 1) {
      var temQuiz = ds.some(function (d) { return d.quiz && d.quiz.length; });
      app.appendChild(el("div", { class: "btn-row" }, [
        el("button", { class: "action", text: "Estudar todas juntas", onclick: function () { startSession(buildItems(ds, { mode: "revisao" }), { label: "Provas de " + fmtCurto(iso), multi: true }); } }),
        el("button", { class: "action secondary", text: "🔥 Reta final juntas", onclick: function () { startSession(buildItems(ds, { mode: "retafinal" }), { label: "Reta final · " + fmtCurto(iso), multi: true }); } }),
        temQuiz ? el("button", { class: "action secondary", text: "📝 Quiz do dia", onclick: function () { startQuiz(buildQuiz(ds, {}), { label: "Quiz do dia", multi: true }); } }) : null
      ]));
      app.appendChild(el("p", { class: "sub", style: "margin:14px 0 6px", text: "Ou estude uma de cada vez:" }));
    }
    ds.forEach(function (deck) {
      var due = dueCount(deck);
      app.appendChild(el("div", { class: "panel" }, [
        el("div", { class: "deck-title" }, [
          el("h2", { text: deck.titulo }),
          el("span", { class: "pill " + (due ? "due" : "zero"), text: due ? (due + " p/ revisar") : "em dia ✓" })
        ]),
        el("div", { class: "btn-row" }, [
          el("button", { class: "action small", text: "Estudar", disabled: due === 0, onclick: function () { studyDeck(deck, { mode: "revisao" }); } }),
          el("button", { class: "action small secondary", text: "🔥 Reta final", onclick: function () { studyDeck(deck, { mode: "retafinal" }); } }),
          el("button", { class: "action small secondary", text: "Abrir matéria", onclick: function () { navigate(function () { renderDeck(deck); }); } })
        ])
      ]));
    });
  }

  // ---- Tela da matéria ----
  function renderDeck(deck) {
    var iso = getProva(deck);
    app.appendChild(el("h1", { text: deck.titulo }));
    var subTxt = "";
    if (iso) subTxt = "Prova " + labelDias(iso) + ". ";
    app.appendChild(el("p", { class: "sub", text: subTxt + dueCount(deck) + " cartões para revisar agora." }));

    // Editor de data da prova
    app.appendChild(el("div", { class: "daterow" }, [
      el("span", { text: "📅 Data da prova:" }),
      el("input", {
        type: "date", value: iso || "",
        onchange: function (ev) { setProva(deck.id, ev.target.value); refresh(); }
      }),
      iso ? el("button", { class: "link", text: "limpar", onclick: function () { setProva(deck.id, ""); refresh(); } }) : null
    ]));

    var due = dueCount(deck);
    app.appendChild(el("div", { class: "btn-row" }, [
      el("button", { class: "action", text: "Estudar agora" + (due ? " (" + due + ")" : ""), disabled: due === 0, onclick: function () { studyDeck(deck, { mode: "revisao" }); } }),
      el("button", { class: "action secondary", text: "🔥 Reta final", onclick: function () { studyDeck(deck, { mode: "retafinal" }); } }),
      (deck.quiz && deck.quiz.length) ? el("button", { class: "action secondary", text: "📝 Quiz", onclick: function () { startQuiz(buildQuiz([deck], {}), { label: "Quiz", multi: false }); } }) : null
    ]));

    var panel = el("div", { class: "panel" }, [el("h2", { text: "Unidades" })]);
    unidades(deck).forEach(function (u) {
      var m = masteredCount(deck, u);
      var pct = m.total ? Math.round(100 * m.mastered / m.total) : 0;
      var bar = el("div", { class: "bar" }, [el("i")]);
      panel.appendChild(el("div", { class: "unit" }, [
        el("div", { class: "unit-head" }, [
          el("span", { class: "unit-name", text: nomeUnidade(deck, u) }),
          el("span", { class: "unit-count", text: m.mastered + "/" + m.total })
        ]),
        bar,
        el("div", { class: "btn-row" }, [
          el("button", { class: "action small secondary", text: "Estudar unidade", onclick: function () { studyDeck(deck, { mode: "retafinal", unidade: u }); } }),
          (deck.quiz && deck.quiz.some(function (q) { return q.unidade === u; }))
            ? el("button", { class: "action small secondary", text: "Quiz", onclick: function () { startQuiz(buildQuiz([deck], { unidade: u }), { label: "Quiz", multi: false }); } }) : null
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
            refresh();
          }
        }
      })
    ]));
  }

  // ---- Montagem de itens ----
  function buildItems(decks, opts) {
    opts = opts || {};
    var now = Date.now(), items = [];
    decks.forEach(function (deck) {
      var state = loadState(deck.id);
      deck.cards.forEach(function (c) {
        if (opts.unidade != null && c.unidade !== opts.unidade) return;
        if (opts.mode === "revisao" && cardState(state, c.id).due > now) return;
        items.push({ deck: deck, card: c });
      });
    });
    return items;
  }
  function buildQuiz(decks, opts) {
    opts = opts || {};
    var items = [];
    decks.forEach(function (deck) {
      (deck.quiz || []).forEach(function (q) {
        if (opts.unidade != null && q.unidade !== opts.unidade) return;
        items.push({ deck: deck, q: q });
      });
    });
    return items;
  }
  function studyDeck(deck, opts) {
    var label = (opts.mode === "retafinal" ? "Reta final" : "Revisão") + (opts.unidade != null ? " · " + nomeUnidade(deck, opts.unidade) : "");
    startSession(buildItems([deck], opts), { label: label, multi: false });
  }

  // ---- Sessão de estudo (flashcards) ----
  function startSession(items, opts) {
    opts = opts || {};
    if (!items.length) {
      navigate(function () {
        app.appendChild(el("div", { class: "empty" }, [
          el("span", { class: "emoji", text: "🎉" }),
          el("p", { text: "Nada pendente por aqui. Tudo em dia!" }),
          el("div", { class: "btn-row" }, [el("button", { class: "action", text: "Voltar", onclick: back })])
        ]));
      });
      return;
    }
    var multi = !!opts.multi;
    var queue = shuffle(items);
    var total = queue.length;
    var revealed = false, done = false;

    function answer(result) {
      var it = queue[0];
      grade(it.deck.id, it.card.id, result);
      queue.shift();
      if (result !== "acertei") queue.push(it);
      revealed = false;
      if (!queue.length) done = true;
      refresh();
    }
    function renderCurrent() {
      if (done) {
        app.appendChild(el("div", { class: "empty" }, [
          el("span", { class: "emoji", text: "✅" }),
          el("h2", { text: "Sessão concluída!" }),
          el("p", { class: "sub", text: "Você revisou " + total + (total === 1 ? " cartão." : " cartões.") }),
          el("div", { class: "btn-row" }, [el("button", { class: "action", text: "Voltar", onclick: back })])
        ]));
        return;
      }
      var it = queue[0], card = it.card, deck = it.deck;
      app.appendChild(el("div", { class: "study-top" }, [
        el("span", { text: opts.label || "Estudo" }),
        el("span", { text: "Faltam " + queue.length })
      ]));
      var tag = (multi ? deck.titulo + " · " : "") + nomeUnidade(deck, card.unidade);
      var fc = el("div", { class: "flashcard" }, [
        el("div", { class: "tag", text: tag }),
        el("div", { class: "front", html: card.frente })
      ]);
      if (revealed) {
        fc.appendChild(el("div", { class: "divider" }));
        fc.appendChild(el("div", { class: "back", html: card.verso }));
        if (card.dica) fc.appendChild(el("div", { class: "hint", text: "💡 " + card.dica }));
      }
      app.appendChild(fc);
      if (!revealed) {
        app.appendChild(el("div", { class: "btn-row" }, [
          el("button", { class: "action", text: "Mostrar resposta", onclick: function () { revealed = true; refresh(); } })
        ]));
        document.onkeydown = function (ev) { if (ev.key === " " || ev.key === "Enter") { ev.preventDefault(); revealed = true; refresh(); } };
      } else {
        app.appendChild(el("div", { class: "grade-row" }, [
          el("button", { class: "g-bad", html: "Errei<span class='kbd'>1</span>", onclick: function () { answer("errei"); } }),
          el("button", { class: "g-hard", html: "Difícil<span class='kbd'>2</span>", onclick: function () { answer("dificil"); } }),
          el("button", { class: "g-ok", html: "Acertei<span class='kbd'>3</span>", onclick: function () { answer("acertei"); } })
        ]));
        document.onkeydown = function (ev) { if (ev.key === "1") answer("errei"); else if (ev.key === "2") answer("dificil"); else if (ev.key === "3") answer("acertei"); };
      }
    }
    navigate(renderCurrent);
  }

  // ---- Quiz ----
  function startQuiz(items, opts) {
    opts = opts || {};
    if (!items.length) { back(); return; }
    var multi = !!opts.multi;
    var qs = shuffle(items), i = 0, score = 0, answered = false, chosen = -1, done = false;

    function choose(idx) { if (answered) return; answered = true; chosen = idx; if (idx === qs[i].q.correta) score++; refresh(); }
    function nextQ() { i++; answered = false; chosen = -1; if (i >= qs.length) done = true; refresh(); }
    function renderCurrent() {
      if (done) {
        var pct = Math.round(100 * score / qs.length);
        app.appendChild(el("div", { class: "empty" }, [
          el("span", { class: "emoji", text: pct >= 70 ? "🏆" : "💪" }),
          el("h2", { text: "Resultado" }),
          el("div", { class: "big-num", text: score + " / " + qs.length }),
          el("p", { class: "sub", text: pct + "% de acerto" }),
          el("div", { class: "btn-row" }, [el("button", { class: "action", text: "Voltar", onclick: back })])
        ]));
        return;
      }
      var item = qs[i], q = item.q, deck = item.deck;
      app.appendChild(el("div", { class: "study-top" }, [
        el("span", { text: opts.label || "Quiz" }),
        el("span", { text: (i + 1) + " / " + qs.length })
      ]));
      app.appendChild(el("div", { class: "panel" }, [
        el("div", { class: "qtag", text: (multi ? deck.titulo + " · " : "") + nomeUnidade(deck, q.unidade) }),
        el("h2", { html: q.pergunta })
      ]));
      var box = el("div", {});
      q.opcoes.forEach(function (texto, idx) {
        var cls = "quiz-opt";
        if (answered) { if (idx === q.correta) cls += " correct"; else if (idx === chosen) cls += " wrong"; }
        box.appendChild(el("button", { class: cls, html: texto, disabled: answered || undefined, onclick: function () { choose(idx); } }));
      });
      app.appendChild(box);
      if (answered) {
        if (q.explicacao) app.appendChild(el("div", { class: "explain", html: "💡 " + q.explicacao }));
        app.appendChild(el("div", { class: "btn-row" }, [
          el("button", { class: "action", text: i + 1 < qs.length ? "Próxima" : "Ver resultado", onclick: nextQ })
        ]));
      }
    }
    navigate(renderCurrent);
  }

  // ---- PWA ----
  if ("serviceWorker" in navigator && location.protocol.indexOf("http") === 0) {
    window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () {}); });
  }

  // Início
  stack = [renderHome];
  show(renderHome);
})();
