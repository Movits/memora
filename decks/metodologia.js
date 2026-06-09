/*
  Matéria: Metodologia do Trabalho Acadêmico (UNIP, Manzalli, Camacho e Judensnaider, 2020).
  Unidade I (tipos de conhecimento, ciência, pesquisa teórica x empírica),
  Unidade II (instrumentos do trabalho acadêmico e normas da ABNT).
*/
window.MEMORA.add({
  id: "metodologia",
  titulo: "Metodologia do Trabalho Acadêmico",
  prova: "2026-06-12",
  unidades: {
    1: "Unidade I · Conhecimento e ciência",
    2: "Unidade II · Instrumentos e ABNT"
  },
  material: [
    {
      id: "res-u1", titulo: "Resumo · Unidade I", unidade: 1, aba: "Resumo",
      html: `
<h3>As formas de conhecimento</h3>
<ul>
<li><b>Conhecimento comum (senso comum)</b>: baseado em opiniões, crenças e nos sentidos; <b>assistemático, superficial, falível</b> e não universal. Quer <b>persuadir</b>, não ensinar; não se preocupa em provar.</li>
<li><b>Conhecimento teológico</b>: baseado na <b>fé</b> e na <b>revelação</b> (textos sagrados, tradição); admite a tradição como verdadeira e não a questiona.</li>
<li><b>Conhecimento filosófico</b>: baseado na <b>razão e na reflexão</b>; é <b>especulativo</b> e <b>dedutivo</b> (parte de ideias, usa experiências e não experimentação).</li>
<li><b>Conhecimento científico</b>: resulta de <b>investigação metódica e sistemática</b>, com <b>hipóteses verificáveis</b>.</li>
</ul>
<h3>O conhecimento científico</h3>
<ul>
<li>Características: <b>real</b> (lida com fatos), <b>contingente</b> (validado pela experiência), <b>sistemático</b>, <b>verificável</b>, <b>falível</b> (inacabado) e <b>aproximadamente exato</b>.</li>
<li>Classificação das ciências: <b>formais</b> (matemática, lógica - abstratas) e <b>factuais/empíricas</b>, estas divididas em <b>naturais</b> (física, química, biologia...) e <b>humanas/sociais</b> (sociologia, economia, história...).</li>
</ul>
<h3>Pesquisa teórica x empírica</h3>
<ul>
<li><b>Pesquisa teórica (pura)</b>: enriquece a teoria; em geral bibliográfica/documental.</li>
<li><b>Pesquisa empírica (aplicada)</b>: busca resultado prático; coleta dados da experiência.</li>
<li>Toda pesquisa empírica parte de uma base teórica (toda observação pressupõe uma teoria).</li>
</ul>`
    },
    {
      id: "res-u2", titulo: "Resumo · Unidade II", unidade: 2, aba: "Resumo",
      html: `
<h3>Instrumentos do trabalho acadêmico</h3>
<ul>
<li><b>Resumo</b>: é uma <b>paráfrase</b> (síntese das ideias principais de um texto), <b>sem juízo de valor</b>. Tipos: <b>indicativo/descritivo</b> (não dispensa a leitura do original), <b>informativo/analítico</b> (dispensa) e <b>crítico</b> (a resenha).</li>
<li><b>Fichamento</b>: registro em fichas (bibliográfica, de leitura, de ideias, de citações) para <b>sistematizar e arquivar</b> informações.</li>
<li><b>Resenha</b>: texto <b>crítico</b>, mais abrangente que o resumo, que <b>inclui avaliação e juízo de valor</b> sobre a obra.</li>
<li><b>Seminário</b>: apresentação <b>oral</b> de um trabalho, individual ou em grupo.</li>
</ul>
<h3>Citações (NBR 10520) e referências (NBR 6023)</h3>
<ul>
<li><b>Citação indireta</b>: paráfrase da ideia do autor (com as próprias palavras), <b>sem aspas</b>, indicando (SOBRENOME, ano).</li>
<li><b>Citação direta até 3 linhas</b>: transcrição <b>entre aspas</b>, no corpo do texto, com (AUTOR, ano, <b>página</b>).</li>
<li><b>Citação direta com mais de 3 linhas</b>: <b>recuo de 4 cm</b>, fonte menor, espaçamento simples e <b>sem aspas</b>.</li>
<li><b>et al.</b>: usado quando a obra tem <b>mais de três autores</b>. <b>apud</b> ('citado por'): citação de uma fonte por meio de outra (citação de citação).</li>
</ul>`
    },
    {
      id: "mnem", titulo: "Mnemônicos",
      html: `
<h3>As 4 formas de conhecimento (base de cada uma)</h3>
<p><b>Comum</b> = opinião/sentidos · <b>Teológico</b> = fé/revelação · <b>Filosófico</b> = razão/reflexão · <b>Científico</b> = método/verificação.</p>
<h3>Classificação das ciências</h3>
<p><b>Formais</b> (matemática, lógica) x <b>Factuais</b> → <b>Naturais</b> (física, biologia) e <b>Humanas</b> (sociologia, economia).</p>
<h3>Pesquisa teórica x empírica</h3>
<p><b>Teórica = Pura</b> (enriquece a teoria). <b>Empírica = Aplicada</b> (resultado prático).</p>
<h3>Resumo x Resenha</h3>
<p><b>Resumo</b> = síntese <b>sem opinião</b>. <b>Resenha</b> = resumo <b>+ crítica</b> (juízo de valor).</p>
<h3>Citações (ABNT)</h3>
<p><b>Direta</b> = cópia com aspas (+ página). <b>Indireta</b> = paráfrase, sem aspas. <b>Mais de 3 linhas</b> → recuo de 4 cm, sem aspas. <b>et al.</b> = mais de 3 autores. <b>apud</b> = citação de citação.</p>`
    },
    {
      id: "siglas", titulo: "Termos e normas ABNT",
      html: `
<table>
<tr><th>Termo</th><th>Significado</th></tr>
<tr><td>Paráfrase</td><td>Reescrever uma ideia com as próprias palavras</td></tr>
<tr><td>Intertextualidade</td><td>Referências que um texto faz a outros textos</td></tr>
<tr><td>Citação direta</td><td>Transcrição literal (com aspas até 3 linhas; recuo acima disso)</td></tr>
<tr><td>Citação indireta</td><td>Paráfrase da ideia do autor (sem aspas)</td></tr>
<tr><td>et al.</td><td>'e outros' — usado quando há mais de 3 autores</td></tr>
<tr><td>apud</td><td>'citado por' — citação de citação (fonte secundária)</td></tr>
<tr><td>NBR 6023</td><td>Norma da ABNT para referências</td></tr>
<tr><td>NBR 10520</td><td>Norma da ABNT para citações</td></tr>
</table>`
    },
    {
      id: "mapa", titulo: "Mapa mental (esquema)",
      html: `
<ul class="mapa">
<li>Unidade I · Conhecimento e ciência
  <ul>
    <li>Formas de conhecimento: comum, teológico, filosófico, científico</li>
    <li>Ciência: características; formais x factuais (naturais/humanas)</li>
    <li>Pesquisa teórica (pura) x empírica (aplicada)</li>
  </ul>
</li>
<li>Unidade II · Instrumentos e ABNT
  <ul>
    <li>Instrumentos: resumo, fichamento, resenha, seminário</li>
    <li>Citações: direta (aspas/recuo) e indireta (paráfrase); et al., apud</li>
    <li>Normas: NBR 6023 (referências), NBR 10520 (citações)</li>
  </ul>
</li>
</ul>`
    }
  ],
  cards: [
    // ===== UNIDADE I =====
    { id: "u1-01", unidade: 1, frente: "Quais são as quatro <b>formas de conhecimento</b> estudadas?", verso: "Conhecimento <b>comum (senso comum)</b>, <b>teológico</b>, <b>filosófico</b> e <b>científico</b>." },
    { id: "u1-02", unidade: 1, frente: "O que caracteriza o <b>conhecimento comum (senso comum)</b>?", verso: "Baseia-se em <b>opiniões, crenças e nos sentidos</b>; é <b>assistemático, superficial, falível</b> e não universal. Quer <b>persuadir</b>, não ensinar, e não se preocupa em provar." },
    { id: "u1-03", unidade: 1, frente: "Por que o senso comum <b>não é universal</b>?", verso: "Porque depende das <b>condições sociais e históricas</b> de cada grupo (varia de cultura para cultura, de região para região)." },
    { id: "u1-04", unidade: 1, frente: "O que caracteriza o <b>conhecimento teológico</b>?", verso: "Baseia-se na <b>fé</b> e na <b>revelação</b> (textos sagrados, tradição). Admite a tradição como verdadeira e <b>não a questiona</b>." },
    { id: "u1-05", unidade: 1, frente: "O que caracteriza o <b>conhecimento filosófico</b>?", verso: "Baseia-se na <b>razão e na reflexão</b>; é <b>especulativo</b> e <b>dedutivo</b> (parte de ideias e conceitos, usando experiências, e não experimentação)." },
    { id: "u1-06", unidade: 1, frente: "O que é o <b>conhecimento científico</b>?", verso: "O conhecimento que resulta de <b>investigação metódica e sistemática</b> da realidade, trabalhando com <b>hipóteses verificáveis</b>." },
    { id: "u1-07", unidade: 1, frente: "Quais as <b>características do conhecimento científico</b>?", verso: "<b>Real</b> (lida com fatos), <b>contingente</b> (validado pela experiência), <b>sistemático</b>, <b>verificável</b>, <b>falível</b> (inacabado) e <b>aproximadamente exato</b>." },
    { id: "u1-08", unidade: 1, frente: "Por que o conhecimento científico é <b>falível</b>?", verso: "Porque é um produto <b>inacabado</b>, em permanente construção: aceita reformulações e pode ser revisto por novas evidências." },
    { id: "u1-09", unidade: 1, frente: "Como se classificam as ciências?", verso: "Em <b>formais</b> (lidam com abstrações: matemática, lógica) e <b>factuais/empíricas</b>, divididas em <b>naturais</b> (física, química, biologia...) e <b>humanas/sociais</b> (sociologia, economia, história...)." },
    { id: "u1-10", unidade: 1, frente: "O que são as <b>ciências formais</b>?", verso: "As que lidam com <b>abstrações</b> (ideias), cujos argumentos <b>dispensam experimentos</b>. Ex.: matemática e lógica." },
    { id: "u1-11", unidade: 1, frente: "Diferença entre ciências factuais <b>naturais</b> e <b>humanas</b>.", verso: "<b>Naturais</b>: operam com dados da natureza (física, biologia...). <b>Humanas/sociais</b>: estudam o homem e sua vida em sociedade (sociologia, economia, história...)." },
    { id: "u1-12", unidade: 1, frente: "O que é <b>pesquisa teórica</b> (pura)?", verso: "Aquela que busca <b>enriquecer a teoria</b> (complementar, confirmar ou modificar uma teoria). Em geral é bibliográfica ou documental." },
    { id: "u1-13", unidade: 1, frente: "O que é <b>pesquisa empírica</b> (aplicada)?", verso: "Aquela que busca uma <b>solução prática</b> para um problema, coletando <b>dados da experiência</b> (ex.: teste de uma vacina, entrevistas)." },
    { id: "u1-14", unidade: 1, frente: "O que é <b>pesquisa</b>, segundo Gil?", verso: "O <b>processo formal e sistemático</b> de desenvolvimento do método científico, cujo objetivo é descobrir respostas para problemas." },
    { id: "u1-15", unidade: 1, frente: "O que ensina o <b>mito da caverna</b> (Platão) para a ciência?", verso: "Que o <b>conhecimento científico se opõe à aparência</b> (às 'sombras' do senso comum): é preciso superar as ilusões dos sentidos para alcançar a realidade." },

    // ===== UNIDADE II =====
    { id: "u2-01", unidade: 2, frente: "O que é um <b>resumo</b>?", verso: "Uma <b>paráfrase</b>: apresentação <b>sintética das ideias principais</b> de um texto, na ordem do original e <b>sem juízo de valor</b>." },
    { id: "u2-02", unidade: 2, frente: "O que é <b>paráfrase</b>?", verso: "Reescrever uma ideia <b>com as próprias palavras</b> (não basta trocar uma ou outra palavra; exige leitura e reflexão)." },
    { id: "u2-03", unidade: 2, frente: "Quais os <b>tipos de resumo</b>?", verso: "<b>Indicativo/descritivo</b> (não dispensa a leitura do original), <b>informativo/analítico</b> (dispensa a leitura do original) e <b>crítico</b> (que é a resenha)." },
    { id: "u2-04", unidade: 2, frente: "O que é um <b>fichamento</b>?", verso: "O registro em <b>fichas</b> (bibliográfica, de leitura, de ideias, de citações) para <b>sistematizar e arquivar</b> informações de uma pesquisa." },
    { id: "u2-05", unidade: 2, frente: "O que é uma <b>resenha</b> e como difere do resumo?", verso: "É um <b>texto crítico</b>, mais abrangente que o resumo: além de resumir, <b>inclui avaliação e juízo de valor</b> sobre a obra." },
    { id: "u2-06", unidade: 2, frente: "O que é um <b>seminário</b>?", verso: "A apresentação de um trabalho sob a forma <b>oral (verbal)</b>, que pode ser <b>individual ou em grupo</b>." },
    { id: "u2-07", unidade: 2, frente: "O que é uma <b>citação indireta</b>?", verso: "A <b>paráfrase</b> da ideia de um autor (com as próprias palavras), <b>sem aspas</b>, indicando (SOBRENOME do autor, ano)." },
    { id: "u2-08", unidade: 2, frente: "Como se faz uma <b>citação direta de até 3 linhas</b>?", verso: "Transcreve-se o trecho <b>entre aspas</b>, incorporado ao corpo do texto, indicando (AUTOR, ano, <b>página</b>)." },
    { id: "u2-09", unidade: 2, frente: "Como se faz uma <b>citação direta com mais de 3 linhas</b>?", verso: "Com <b>recuo de 4 cm</b> da margem esquerda, <b>fonte menor</b>, espaçamento simples e <b>sem aspas</b>." },
    { id: "u2-10", unidade: 2, frente: "Quando se usa a expressão <b>et al.</b>?", verso: "Quando a obra citada tem <b>mais de três autores</b> (cita-se o primeiro seguido de 'et al.')." },
    { id: "u2-11", unidade: 2, frente: "O que significa <b>apud</b> em uma citação?", verso: "'Citado por': indica uma <b>citação de citação</b> (você cita um autor a partir da obra de outro, sem ter lido a fonte original)." },
    { id: "u2-12", unidade: 2, frente: "Quais normas da ABNT regem citações e referências?", verso: "A <b>NBR 10520</b> (citações) e a <b>NBR 6023</b> (referências)." },
    { id: "u2-13", unidade: 2, frente: "O que é <b>intertextualidade</b>?", verso: "As <b>referências que um texto faz a outros textos</b>. No trabalho acadêmico, ela se materializa nas citações." }
  ],
  quiz: [
    { id: "q1", unidade: 1, pergunta: "O conhecimento baseado em opiniões e nos sentidos, assistemático e que quer persuadir, é o:", opcoes: ["Científico", "Comum (senso comum)", "Filosófico", "Teológico"], correta: 1, explicacao: "O senso comum é superficial, falível e não busca provas." },
    { id: "q2", unidade: 1, pergunta: "O conhecimento baseado na fé e na revelação é o:", opcoes: ["Filosófico", "Científico", "Teológico", "Comum"], correta: 2, explicacao: "O conhecimento teológico parte da fé e dos textos sagrados/tradição." },
    { id: "q3", unidade: 1, pergunta: "O conhecimento que se apoia exclusivamente na razão e na reflexão (especulativo) é o:", opcoes: ["Filosófico", "Empírico", "Teológico", "Comum"], correta: 0, explicacao: "O conhecimento filosófico é racional, dedutivo e especulativo." },
    { id: "q4", unidade: 1, pergunta: "O conhecimento científico resulta de:", opcoes: ["Crença e tradição", "Investigação metódica e sistemática, com hipóteses verificáveis", "Opinião pessoal", "Revelação divina"], correta: 1, explicacao: "É metódico, sistemático e verificável." },
    { id: "q5", unidade: 1, pergunta: "Dizer que o conhecimento científico é 'falível' significa que ele é:", opcoes: ["Sempre verdadeiro e definitivo", "Inacabado e sujeito a reformulações", "Baseado na fé", "Impossível de verificar"], correta: 1, explicacao: "Está em permanente construção, podendo ser revisto." },
    { id: "q6", unidade: 1, pergunta: "A matemática e a lógica são exemplos de ciências:", opcoes: ["Factuais naturais", "Factuais humanas", "Formais", "Empíricas"], correta: 2, explicacao: "As ciências formais lidam com abstrações e dispensam experimentos." },
    { id: "q7", unidade: 1, pergunta: "A sociologia e a economia são ciências factuais:", opcoes: ["Naturais", "Humanas (sociais)", "Formais", "Exatas"], correta: 1, explicacao: "As ciências humanas estudam o homem e a vida em sociedade." },
    { id: "q8", unidade: 1, pergunta: "A pesquisa que busca enriquecer a teoria (pura) é a:", opcoes: ["Empírica", "Teórica", "Aplicada", "Experimental"], correta: 1, explicacao: "A pesquisa teórica (pura) avança na formulação teórica; em geral é bibliográfica." },
    { id: "q9", unidade: 1, pergunta: "A pesquisa que busca uma solução prática, coletando dados da experiência, é a:", opcoes: ["Teórica (pura)", "Empírica (aplicada)", "Bibliográfica", "Documental"], correta: 1, explicacao: "A pesquisa empírica é aplicada e coleta dados da experiência." },
    { id: "q10", unidade: 1, pergunta: "Segundo Gil, pesquisa é:", opcoes: ["Qualquer opinião sobre um tema", "O processo formal e sistemático do método científico", "Uma crença comprovada", "A leitura de um texto"], correta: 1, explicacao: "Processo formal e sistemático para descobrir respostas a problemas." },
    { id: "q11", unidade: 1, pergunta: "O mito da caverna, de Platão, ilustra que o conhecimento científico:", opcoes: ["Confirma o senso comum", "Se opõe à aparência (às 'sombras')", "Depende da fé", "Dispensa a razão"], correta: 1, explicacao: "É preciso superar as ilusões dos sentidos para alcançar a realidade." },
    { id: "q12", unidade: 2, pergunta: "O resumo é essencialmente:", opcoes: ["Uma crítica da obra", "Uma paráfrase (síntese sem juízo de valor)", "Uma transcrição literal", "Uma opinião pessoal"], correta: 1, explicacao: "Sintetiza as ideias principais, sem emitir juízo de valor." },
    { id: "q13", unidade: 2, pergunta: "O tipo de resumo que dispensa a leitura do original é o:", opcoes: ["Indicativo/descritivo", "Informativo/analítico", "Crítico", "Bibliográfico"], correta: 1, explicacao: "O informativo (analítico) traz informação suficiente, dispensando o original." },
    { id: "q14", unidade: 2, pergunta: "O texto crítico, que inclui avaliação e juízo de valor sobre a obra, é a:", opcoes: ["Resenha", "Ficha", "Citação", "Paráfrase"], correta: 0, explicacao: "A resenha é mais abrangente que o resumo e admite crítica." },
    { id: "q15", unidade: 2, pergunta: "O registro em fichas para sistematizar e arquivar informações é o:", opcoes: ["Seminário", "Fichamento", "Resumo", "Resenha"], correta: 1, explicacao: "Fichas bibliográficas, de leitura, de ideias e de citações." },
    { id: "q16", unidade: 2, pergunta: "A apresentação oral de um trabalho, individual ou em grupo, é o:", opcoes: ["Fichamento", "Seminário", "Resumo", "Artigo"], correta: 1, explicacao: "O seminário é a apresentação verbal de um trabalho." },
    { id: "q17", unidade: 2, pergunta: "A citação que parafraseia a ideia do autor, sem aspas, é a:", opcoes: ["Direta", "Indireta", "Literal", "Com recuo"], correta: 1, explicacao: "A citação indireta usa as próprias palavras, com (SOBRENOME, ano)." },
    { id: "q18", unidade: 2, pergunta: "Uma citação direta de ATÉ 3 linhas deve:", opcoes: ["Ter recuo de 4 cm", "Ficar entre aspas no corpo do texto, com AUTOR, ano e página", "Ser parafraseada", "Dispensar a página"], correta: 1, explicacao: "Entre aspas, incorporada ao texto, com indicação de página." },
    { id: "q19", unidade: 2, pergunta: "Uma citação direta com MAIS de 3 linhas deve:", opcoes: ["Ficar entre aspas no texto", "Ter recuo de 4 cm, fonte menor e sem aspas", "Ser sempre indireta", "Omitir o autor"], correta: 1, explicacao: "Recuo de 4 cm, fonte menor, espaçamento simples e sem aspas." },
    { id: "q20", unidade: 2, pergunta: "A expressão 'et al.' é usada quando a obra tem:", opcoes: ["Um único autor", "Dois autores", "Mais de três autores", "Nenhum autor"], correta: 2, explicacao: "Indica os demais autores além do primeiro citado." },
    { id: "q21", unidade: 2, pergunta: "A expressão 'apud' indica:", opcoes: ["Uma citação direta", "Uma citação de citação (fonte secundária)", "Mais de três autores", "Uma referência completa"], correta: 1, explicacao: "'Citado por': cita-se um autor a partir da obra de outro." },
    { id: "q22", unidade: 2, pergunta: "A norma da ABNT específica para citações é a:", opcoes: ["NBR 6023", "NBR 10520", "NBR 14724", "NBR 6028"], correta: 1, explicacao: "A NBR 10520 trata de citações; a NBR 6023, de referências." }
  ]
});
