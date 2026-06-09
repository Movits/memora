/*
  Matéria: Comércio Exterior - Legislação Aduaneira e Câmbio (UNIP, Pólvora, Frota e Arten, 2021).
  Unidade I (direito tributário, direitos aduaneiros, valoração aduaneira, tributos e defesa comercial),
  Unidade II (regimes aduaneiros, áreas especiais e mercado de câmbio).
*/
window.MEMORA.add({
  id: "comercio-exterior",
  titulo: "Comércio Exterior",
  prova: "2026-06-18",
  unidades: {
    1: "Unidade I · Tributos, aduana e valoração",
    2: "Unidade II · Regimes aduaneiros e câmbio"
  },
  material: [
    {
      id: "res-u1", titulo: "Resumo · Unidade I", unidade: 1, aba: "Resumo",
      html: `
<h3>Direito tributário aplicado ao comércio exterior</h3>
<ul>
<li>A <b>Receita Federal do Brasil</b> concentra o controle <b>fiscal</b> (arrecadação) e o <b>aduaneiro</b> (proteção da economia). Os tributos do comércio exterior têm caráter <b>extrafiscal</b> (econômico), não arrecadatório.</li>
<li>Hierarquia das normas: <b>Constituição &gt; Leis Complementares (CTN) &gt; Leis Ordinárias &gt; Decretos</b>. O <b>CTN</b> é de 1966.</li>
<li><b>Tributo</b> (CTN, art. 3º): prestação pecuniária compulsória, instituída em lei, que não é sanção de ato ilícito. Espécies: <b>impostos, taxas e contribuições de melhoria</b>. Finalidades: fiscal, <b>extrafiscal</b> e parafiscal.</li>
<li>Princípios: <b>legalidade</b> (exceção: o Executivo pode alterar alíquotas de <b>II, IE, IPI e IOF</b>), <b>anterioridade</b> (e a nonagesimal, de 90 dias), irretroatividade, isonomia, não confisco, liberdade de tráfego e capacidade contributiva.</li>
</ul>
<h3>Direitos aduaneiros e valoração</h3>
<ul>
<li><b>Território aduaneiro</b>: <b>zona primária</b> (portos, aeroportos e pontos de fronteira alfandegados) e <b>zona secundária</b> (o restante).</li>
<li><b>Valoração aduaneira</b>: definida pelo <b>AVA-GATT</b> (artigo VII do GATT, Rodada Uruguai); apura o <b>valor aduaneiro</b>, base de cálculo do II. Prevalece o <b>valor de transação</b>. São <b>6 métodos</b> (transação → idêntica → similar → valor deduzido → valor computado → critérios razoáveis).</li>
</ul>
<h3>Tributos e defesa comercial</h3>
<ul>
<li><b>II</b> (Imposto de Importação): fato gerador = <b>entrada</b> de mercadoria estrangeira no território aduaneiro; alíquota da <b>TEC</b>. <b>IE</b> (Exportação): fato gerador = <b>saída</b>. Também incidem <b>IPI</b>, <b>ICMS</b>, <b>AFRMM</b> e <b>PIS/Cofins-Importação</b>.</li>
<li>Defesa comercial (fixada pela <b>Camex</b>): <b>antidumping</b> (contra preço de exportação abaixo do valor normal), <b>direito compensatório</b> (contra subsídios) e <b>salvaguardas</b> (eleva o II quando o aumento das importações causa prejuízo grave).</li>
</ul>`
    },
    {
      id: "res-u2", titulo: "Resumo · Unidade II", unidade: 2, aba: "Resumo",
      html: `
<h3>Regimes aduaneiros especiais</h3>
<ul>
<li>Permitem a <b>suspensão ou isenção</b> de tributos por prazo e finalidade determinados (concessão <b>discricionária</b>).</li>
<li><b>Trânsito aduaneiro</b>: transporte de mercadoria sob controle, de um ponto a outro, com suspensão de tributos.</li>
<li><b>Admissão temporária</b>: entrada de bens que ficarão no país por prazo certo (ex.: feiras, equipamentos), com suspensão de tributos.</li>
<li><b>Drawback</b>: <b>incentivo à exportação</b> que desonera os tributos (II, IPI, ICMS, AFRMM, PIS/Cofins) dos <b>insumos importados</b> usados na industrialização de produtos a exportar. Três modalidades: <b>suspensão, isenção e restituição</b>.</li>
<li><b>Entreposto aduaneiro</b>: armazenagem de mercadoria com suspensão de tributos.</li>
</ul>
<h3>Regimes em áreas especiais</h3>
<ul>
<li><b>Zona Franca de Manaus (ZFM, 1967)</b>: área de livre comércio com incentivos fiscais (isenção de II e IPI) para desenvolver a Amazônia; benefícios prorrogados até <b>2073</b>.</li>
<li><b>Área de Livre Comércio (ALC)</b> e <b>Zona de Processamento de Exportação (ZPE)</b>, esta voltada à produção destinada à exportação.</li>
</ul>
<h3>Mercado de câmbio</h3>
<ul>
<li>É <b>regulado e fiscalizado pelo Banco Central</b>. O <b>balanço de pagamentos</b> registra as transações do país com o exterior.</li>
<li><b>Regimes cambiais</b>: <b>flutuante</b> (limpo / free floating ou sujo / dirty floating), <b>fixo</b> e de <b>bandas cambiais</b> (híbrido).</li>
<li><b>Taxa de câmbio nominal x real</b>: a nominal é o preço bruto de uma moeda em relação a outra; a <b>real</b> ajusta esse valor pela <b>diferença de inflação</b> entre os países (poder de compra).</li>
</ul>`
    },
    {
      id: "mnem", titulo: "Mnemônicos",
      html: `
<h3>Exceções à legalidade/anterioridade (alíquotas alteráveis pelo Executivo)</h3>
<p><b>II, IE, IPI, IOF</b> = os impostos <b>extrafiscais</b> (reguladores), que o governo ajusta rápido.</p>
<h3>Espécies de tributo (CTN)</h3>
<p><b>Impostos, Taxas e Contribuições de melhoria.</b></p>
<h3>Os 6 métodos de valoração (ordem)</h3>
<p>1) Transação → 2) Idêntica → 3) Similar → 4) Deduzido (revenda) → 5) Computado (custo) → 6) Razoáveis. <b>Sempre começa pelo valor de transação.</b></p>
<h3>Defesa comercial (3 medidas)</h3>
<p><b>Antidumping</b> (preço baixo desleal) · <b>Compensatório</b> (subsídio) · <b>Salvaguarda</b> (surto de importação). Quem fixa: <b>Camex</b>; quem cobra: <b>Receita Federal</b>.</p>
<h3>Drawback (3 modalidades)</h3>
<p><b>S.I.R.</b>: <b>S</b>uspensão, <b>I</b>senção, <b>R</b>estituição. Serve para baratear insumos de produtos a exportar.</p>
<h3>Território aduaneiro</h3>
<p><b>Zona primária</b> = pontos de contato com o exterior (porto, aeroporto, fronteira). <b>Zona secundária</b> = o resto.</p>
<h3>Regimes cambiais</h3>
<p><b>Fixo</b> · <b>Flutuante</b> (limpo/sujo) · <b>Bandas</b> (híbrido). Câmbio <b>real</b> = nominal corrigido pela inflação.</p>`
    },
    {
      id: "siglas", titulo: "Siglas essenciais",
      html: `
<table>
<tr><th>Sigla</th><th>Significado</th></tr>
<tr><td>RFB</td><td>Receita Federal do Brasil (controle fiscal e aduaneiro)</td></tr>
<tr><td>CTN</td><td>Código Tributário Nacional (1966)</td></tr>
<tr><td>AVA</td><td>Acordo de Valoração Aduaneira (art. VII do GATT)</td></tr>
<tr><td>II / IE</td><td>Imposto de Importação / de Exportação</td></tr>
<tr><td>IPI</td><td>Imposto sobre Produtos Industrializados</td></tr>
<tr><td>ICMS</td><td>Imposto sobre Circulação de Mercadorias e Serviços (estadual)</td></tr>
<tr><td>TEC</td><td>Tarifa Externa Comum (Mercosul) — alíquota do II</td></tr>
<tr><td>AFRMM</td><td>Adicional ao Frete para Renovação da Marinha Mercante</td></tr>
<tr><td>Camex</td><td>Câmara de Comércio Exterior (fixa antidumping, compensatório e salvaguardas)</td></tr>
<tr><td>ZFM / ALC / ZPE</td><td>Zona Franca de Manaus / Área de Livre Comércio / Zona de Processamento de Exportação</td></tr>
<tr><td>CMN / Bacen / CVM</td><td>Conselho Monetário Nacional / Banco Central / Comissão de Valores Mobiliários</td></tr>
<tr><td>Ptax</td><td>Taxa média do dólar apurada pelo Banco Central</td></tr>
</table>`
    },
    {
      id: "mapa", titulo: "Mapa mental (esquema)",
      html: `
<ul class="mapa">
<li>Unidade I · Tributos e aduana
  <ul>
    <li>Direito tributário: tributo, espécies, princípios (legalidade, anterioridade)</li>
    <li>Aduana: território (zona primária/secundária); Receita Federal</li>
    <li>Valoração (AVA-GATT, 6 métodos); tributos (II, IE, IPI, ICMS); defesa comercial</li>
  </ul>
</li>
<li>Unidade II · Regimes e câmbio
  <ul>
    <li>Regimes especiais: trânsito, admissão temporária, drawback, entreposto</li>
    <li>Áreas especiais: ZFM, ALC, ZPE</li>
    <li>Câmbio: Bacen, balanço de pagamentos, regimes (fixo/flutuante/bandas), nominal x real</li>
  </ul>
</li>
</ul>`
    }
  ],
  cards: [
    // ===== UNIDADE I =====
    { id: "u1-01", unidade: 1, frente: "Qual órgão controla os tributos e a aduana no Brasil?", verso: "A <b>Receita Federal do Brasil</b>, que concentra o controle <b>fiscal</b> (arrecadação) e o controle <b>aduaneiro</b> (proteção da economia)." },
    { id: "u1-02", unidade: 1, frente: "Que caráter têm os tributos do comércio exterior?", verso: "Caráter <b>extrafiscal</b> (econômico/regulatório), e não arrecadatório: servem para proteger a economia nacional, não para gerar receita." },
    { id: "u1-03", unidade: 1, frente: "Qual a <b>hierarquia das normas</b> tributárias?", verso: "<b>Constituição Federal &gt; Leis Complementares</b> (entre elas o CTN) <b>&gt; Leis Ordinárias &gt; Decretos</b> e atos administrativos." },
    { id: "u1-04", unidade: 1, frente: "O que é <b>tributo</b> (CTN, art. 3º)?", verso: "Toda <b>prestação pecuniária compulsória</b>, instituída em lei, <b>que não constitui sanção de ato ilícito</b> e é cobrada por atividade administrativa vinculada." },
    { id: "u1-05", unidade: 1, frente: "Quais as <b>espécies de tributo</b> segundo o CTN (art. 5º)?", verso: "<b>Impostos, taxas e contribuições de melhoria.</b>" },
    { id: "u1-06", unidade: 1, frente: "Quais as <b>finalidades</b> do tributo?", verso: "<b>Fiscal</b> (arrecadar), <b>extrafiscal</b> (intervir na economia) e <b>parafiscal</b> (beneficiar entidade que não é nível de governo, ex.: OAB, CFM)." },
    { id: "u1-07", unidade: 1, frente: "O que diz o <b>princípio da legalidade</b> tributária e qual sua exceção?", verso: "Só se exige tributo estabelecido por lei. <b>Exceção</b>: o Poder Executivo pode <b>alterar as alíquotas</b> de <b>II, IE, IPI e IOF</b> (impostos extrafiscais)." },
    { id: "u1-08", unidade: 1, frente: "O que é o <b>princípio da anterioridade</b> (e a nonagesimal)?", verso: "A lei não pode cobrar tributo <b>no mesmo exercício</b> em que foi publicada (anterioridade). A <b>nonagesimal</b> exige ainda <b>90 dias</b> entre a publicação e a cobrança." },
    { id: "u1-09", unidade: 1, frente: "Defina <b>sujeito ativo</b>, <b>sujeito passivo</b>, <b>fato gerador</b> e <b>base de cálculo</b>.", verso: "<b>Sujeito ativo</b> = credor (a Fazenda). <b>Sujeito passivo</b> = devedor (ex.: importador). <b>Fato gerador</b> = situação prevista em lei que gera o tributo. <b>Base de cálculo</b> = valor sobre o qual incide a alíquota." },
    { id: "u1-10", unidade: 1, frente: "O que são <b>zona primária</b> e <b>zona secundária</b> do território aduaneiro?", verso: "<b>Zona primária</b>: portos, aeroportos e pontos de fronteira alfandegados (contato com o exterior). <b>Zona secundária</b>: todo o restante do território aduaneiro." },
    { id: "u1-11", unidade: 1, frente: "O que é a <b>valoração aduaneira</b> e qual acordo a rege?", verso: "É o procedimento que apura o <b>valor aduaneiro</b> (base de cálculo do II). É regida pelo <b>AVA-GATT</b> (Acordo de Valoração Aduaneira, artigo VII do GATT, da Rodada Uruguai/OMC)." },
    { id: "u1-12", unidade: 1, frente: "Qual o método prioritário de valoração aduaneira?", verso: "O <b>valor de transação</b> (o que foi efetivamente pago pela mercadoria). É a 'viga mestra' do acordo, baseado na boa-fé." },
    { id: "u1-13", unidade: 1, frente: "Quais são os <b>6 métodos de valoração aduaneira</b> (na ordem)?", verso: "1) Valor de <b>transação</b>; 2) mercadoria <b>idêntica</b>; 3) mercadoria <b>similar</b>; 4) <b>valor deduzido</b> (preço de revenda); 5) <b>valor computado</b> (custo de produção); 6) <b>critérios razoáveis</b>." },
    { id: "u1-14", unidade: 1, frente: "Qual o <b>fato gerador</b> e a <b>base de cálculo</b> do Imposto de Importação (II)?", verso: "Fato gerador: a <b>entrada</b> de mercadoria estrangeira no território aduaneiro. Base de cálculo: o <b>valor aduaneiro</b>. Alíquota: a <b>TEC</b> (Tarifa Externa Comum)." },
    { id: "u1-15", unidade: 1, frente: "Qual o fato gerador do <b>Imposto de Exportação (IE)</b>?", verso: "A <b>saída</b> de mercadoria nacional (ou nacionalizada) do território aduaneiro. É um imposto extrafiscal, pouco utilizado." },
    { id: "u1-16", unidade: 1, frente: "Que outros tributos incidem na importação além do II?", verso: "<b>IPI</b> vinculado, <b>ICMS</b> (estadual), <b>AFRMM</b> (Adicional ao Frete para Renovação da Marinha Mercante) e <b>PIS/Cofins-Importação</b>." },
    { id: "u1-17", unidade: 1, frente: "O que é o <b>dumping</b> e o <b>direito antidumping</b>?", verso: "<b>Dumping</b>: exportar a um preço <b>inferior ao valor normal</b> (o praticado no mercado interno do exportador). O <b>direito antidumping</b> é a cobrança que neutraliza esse dano." },
    { id: "u1-18", unidade: 1, frente: "O que é o <b>direito compensatório</b>?", verso: "Direito cobrado para <b>contrabalançar subsídios</b> concedidos à mercadoria importada. Vigora enquanto durar o subsídio (em regra, no máximo 5 anos)." },
    { id: "u1-19", unidade: 1, frente: "O que são as <b>medidas de salvaguarda</b>?", verso: "A <b>elevação do Imposto de Importação</b> quando o aumento das importações de um produto causa ou ameaça <b>prejuízo grave</b> à indústria doméstica. Prazo máximo de 4 anos (até 10 em casos especiais)." },
    { id: "u1-20", unidade: 1, frente: "Quem fixa e quem cobra as medidas de defesa comercial?", verso: "A <b>Camex</b> (Câmara de Comércio Exterior) <b>fixa</b> antidumping, compensatório e salvaguardas; a <b>Receita Federal</b> os <b>cobra</b>." },

    // ===== UNIDADE II =====
    { id: "u2-01", unidade: 2, frente: "O que caracteriza os <b>regimes aduaneiros especiais</b>?", verso: "Permitem a <b>suspensão ou isenção</b> de tributos por <b>prazo e finalidade determinados</b>. Sua concessão é, em regra, <b>discricionária</b> (prerrogativa da autoridade)." },
    { id: "u2-02", unidade: 2, frente: "O que é o regime de <b>trânsito aduaneiro</b>?", verso: "O <b>transporte de mercadoria sob controle aduaneiro</b>, de um ponto a outro do território, com <b>suspensão</b> dos tributos." },
    { id: "u2-03", unidade: 2, frente: "O que é a <b>admissão temporária</b>?", verso: "Regime que permite a <b>entrada de bens</b> que permanecerão no país por <b>prazo e finalidade certos</b> (ex.: feiras, equipamentos), com <b>suspensão</b> dos tributos; depois retornam ao exterior." },
    { id: "u2-04", unidade: 2, frente: "O que é o <b>drawback</b>?", verso: "Um <b>incentivo à exportação</b> que <b>desonera os tributos</b> (II, IPI, ICMS, AFRMM, PIS/Cofins) dos <b>insumos importados</b> usados na industrialização de produtos a serem <b>exportados</b>." },
    { id: "u2-05", unidade: 2, frente: "Quais as <b>três modalidades de drawback</b>?", verso: "<b>Suspensão</b> (suspende os tributos na importação do insumo), <b>Isenção</b> (isenta a importação de reposição) e <b>Restituição</b> (devolve os tributos já pagos)." },
    { id: "u2-06", unidade: 2, frente: "O que é o <b>entreposto aduaneiro</b>?", verso: "Regime que permite a <b>armazenagem</b> de mercadoria, na importação ou exportação, com <b>suspensão</b> dos tributos." },
    { id: "u2-07", unidade: 2, frente: "O que é a <b>Zona Franca de Manaus (ZFM)</b>?", verso: "Uma <b>área de livre comércio com incentivos fiscais</b>, criada em <b>1967</b> para desenvolver a Amazônia. Há isenção de <b>II e IPI</b> na entrada; os benefícios foram prorrogados até <b>2073</b>." },
    { id: "u2-08", unidade: 2, frente: "O que são <b>ALC</b> e <b>ZPE</b>?", verso: "<b>ALC</b> (Área de Livre Comércio): áreas com incentivos, em geral na Amazônia. <b>ZPE</b> (Zona de Processamento de Exportação): área voltada à produção <b>destinada à exportação</b>." },
    { id: "u2-09", unidade: 2, frente: "Quem regula e fiscaliza o <b>mercado de câmbio</b> no Brasil?", verso: "O <b>Banco Central do Brasil (Bacen)</b>, que usa o sistema <b>Sisbacen</b> para registrar as operações." },
    { id: "u2-10", unidade: 2, frente: "O que é o <b>balanço de pagamentos</b>?", verso: "O <b>registro contábil de todas as transações</b> econômicas do país com o exterior (comércio, serviços, capitais)." },
    { id: "u2-11", unidade: 2, frente: "Quais são os principais <b>regimes cambiais</b>?", verso: "<b>Flutuante</b> (limpo / <i>free floating</i>, sem intervenção direta; ou sujo / <i>dirty floating</i>, com intervenção), <b>fixo</b> (governo define a taxa) e de <b>bandas cambiais</b> (híbrido, com piso e teto)." },
    { id: "u2-12", unidade: 2, frente: "Diferença entre <b>flutuação limpa</b> e <b>flutuação suja</b>.", verso: "<b>Limpa</b> (free floating): o Banco Central <b>não intervém</b> diretamente. <b>Suja</b> (dirty floating): o governo <b>intervém</b> comprando/vendendo divisas para influenciar a taxa." },
    { id: "u2-13", unidade: 2, frente: "Diferença entre <b>taxa de câmbio nominal</b> e <b>real</b>.", verso: "A <b>nominal</b> é o preço bruto de uma moeda em relação a outra. A <b>real</b> ajusta esse valor pela <b>diferença de inflação</b> entre os países (reflete o poder de compra)." },
    { id: "u2-14", unidade: 2, frente: "O que é a <b>taxa Ptax</b>?", verso: "A <b>média ponderada</b> das cotações do dólar apurada pelo <b>Banco Central</b> ao longo do dia; serve de referência para as operações no mercado brasileiro." }
  ],
  quiz: [
    { id: "q1", unidade: 1, pergunta: "Os tributos do comércio exterior têm caráter predominantemente:", opcoes: ["Arrecadatório (fiscal)", "Extrafiscal (regulatório)", "Parafiscal", "Punitivo"], correta: 1, explicacao: "Servem para proteger a economia nacional, não para gerar receita." },
    { id: "q2", unidade: 1, pergunta: "Qual órgão concentra o controle fiscal e aduaneiro no Brasil?", opcoes: ["O Banco Central", "A Camex", "A Receita Federal do Brasil", "O Ministério das Relações Exteriores"], correta: 2, explicacao: "No Brasil, a RFB exerce tanto o controle tributário quanto o aduaneiro." },
    { id: "q3", unidade: 1, pergunta: "Segundo o CTN, as espécies de tributo são:", opcoes: ["Impostos, multas e tarifas", "Impostos, taxas e contribuições de melhoria", "Taxas, juros e dívidas", "Impostos diretos e indiretos"], correta: 1, explicacao: "Art. 5º do CTN: impostos, taxas e contribuições de melhoria." },
    { id: "q4", unidade: 1, pergunta: "Quais impostos o Executivo pode ter suas alíquotas alteradas (exceção à legalidade)?", opcoes: ["IR, IPTU, ITBI e ISS", "II, IE, IPI e IOF", "ICMS, ISS e IPVA", "Apenas o II"], correta: 1, explicacao: "Os impostos extrafiscais II, IE, IPI e IOF podem ter alíquotas ajustadas pelo Executivo." },
    { id: "q5", unidade: 1, pergunta: "O fato gerador do Imposto de Importação é:", opcoes: ["A saída da mercadoria nacional", "A entrada de mercadoria estrangeira no território aduaneiro", "A venda no mercado interno", "O pagamento ao exportador"], correta: 1, explicacao: "Entrada de mercadoria estrangeira no território aduaneiro." },
    { id: "q6", unidade: 1, pergunta: "A base de cálculo do II é:", opcoes: ["O preço de revenda no Brasil", "O valor aduaneiro (apurado pelo AVA-GATT)", "O custo de transporte", "A alíquota da TEC"], correta: 1, explicacao: "O valor aduaneiro, definido pelo Acordo de Valoração Aduaneira (art. VII do GATT)." },
    { id: "q7", unidade: 1, pergunta: "O método PRIORITÁRIO de valoração aduaneira é o:", opcoes: ["Valor computado", "Valor de transação", "Mercadorias idênticas", "Critérios razoáveis"], correta: 1, explicacao: "Prevalece o valor de transação (o efetivamente pago)." },
    { id: "q8", unidade: 1, pergunta: "Quantos são os métodos de valoração aduaneira do AVA-GATT?", opcoes: ["Três", "Quatro", "Seis", "Dez"], correta: 2, explicacao: "Seis métodos, aplicados sucessivamente a partir do valor de transação." },
    { id: "q9", unidade: 1, pergunta: "A zona primária do território aduaneiro compreende:", opcoes: ["Todo o território nacional", "Portos, aeroportos e pontos de fronteira alfandegados", "Apenas a Zona Franca de Manaus", "As águas territoriais"], correta: 1, explicacao: "São os locais de contato com o exterior; o restante é zona secundária." },
    { id: "q10", unidade: 1, pergunta: "O 'dumping' consiste em:", opcoes: ["Conceder subsídios à exportação", "Exportar a preço inferior ao valor normal do mercado interno", "Elevar o imposto de importação", "Armazenar mercadoria sem pagar tributo"], correta: 1, explicacao: "Prática desleal combatida pelo direito antidumping." },
    { id: "q11", unidade: 1, pergunta: "O direito compensatório serve para neutralizar:", opcoes: ["O dumping", "Os subsídios concedidos à mercadoria importada", "O contrabando", "A inflação"], correta: 1, explicacao: "Contrabalança subsídios; vigora, em regra, no máximo 5 anos." },
    { id: "q12", unidade: 1, pergunta: "As medidas de salvaguarda consistem em:", opcoes: ["Isentar o exportador", "Elevar o II diante de surto de importações que cause prejuízo grave", "Reduzir o ICMS", "Suspender o IPI"], correta: 1, explicacao: "Protegem a indústria doméstica contra aumento súbito de importações." },
    { id: "q13", unidade: 1, pergunta: "Quem fixa as medidas de defesa comercial (antidumping, compensatório, salvaguarda)?", opcoes: ["A Receita Federal", "A Camex", "O Banco Central", "A OMC"], correta: 1, explicacao: "A Camex fixa; a Receita Federal cobra." },
    { id: "q14", unidade: 2, pergunta: "Os regimes aduaneiros especiais caracterizam-se por:", opcoes: ["Aumentar tributos", "Suspender ou isentar tributos por prazo e finalidade determinados", "Proibir importações", "Fixar o câmbio"], correta: 1, explicacao: "Suspensão/isenção temporária, de concessão discricionária." },
    { id: "q15", unidade: 2, pergunta: "O drawback é um regime que serve para:", opcoes: ["Tributar exportações", "Incentivar a exportação desonerando insumos importados", "Armazenar mercadorias", "Controlar o câmbio"], correta: 1, explicacao: "Desonera II, IPI, ICMS etc. dos insumos usados em produtos exportados." },
    { id: "q16", unidade: 2, pergunta: "As três modalidades de drawback são:", opcoes: ["Fixo, flutuante e bandas", "Suspensão, isenção e restituição", "Entrada, trânsito e saída", "Primário, secundário e terciário"], correta: 1, explicacao: "Suspensão, isenção e restituição de tributos." },
    { id: "q17", unidade: 2, pergunta: "A Zona Franca de Manaus foi criada em:", opcoes: ["1945", "1967", "1988", "1994"], correta: 1, explicacao: "Em 1967, para desenvolver a Amazônia; benefícios prorrogados até 2073." },
    { id: "q18", unidade: 2, pergunta: "Na importação de bens para a ZFM há isenção de:", opcoes: ["ICMS e ISS", "Imposto de Importação e IPI", "Imposto de Renda", "Todos os tributos para sempre"], correta: 1, explicacao: "Isenção de II e IPI na entrada de mercadorias na ZFM." },
    { id: "q19", unidade: 2, pergunta: "O mercado de câmbio brasileiro é regulado e fiscalizado pelo:", opcoes: ["Banco do Brasil", "Banco Central do Brasil", "Tesouro Nacional", "Ministério da Economia"], correta: 1, explicacao: "O Bacen regula e fiscaliza o câmbio (via Sisbacen)." },
    { id: "q20", unidade: 2, pergunta: "Na flutuação cambial 'limpa' (free floating):", opcoes: ["O governo fixa a taxa", "O Banco Central não intervém diretamente na taxa", "Há piso e teto definidos", "A taxa é igual ao câmbio real"], correta: 1, explicacao: "A taxa é dada pelo mercado, sem intervenção direta (só via juros, se preciso)." },
    { id: "q21", unidade: 2, pergunta: "A taxa de câmbio REAL difere da nominal porque:", opcoes: ["É fixada pelo governo", "Ajusta o valor pela diferença de inflação entre os países", "Só vale para exportações", "É a média do Banco Central"], correta: 1, explicacao: "A real reflete o poder de compra, considerando a inflação interna e externa." },
    { id: "q22", unidade: 2, pergunta: "Assinale a INCORRETA:", opcoes: ["A admissão temporária suspende tributos por prazo certo", "O drawback incentiva a exportação", "O regime de bandas cambiais é híbrido entre fixo e flutuante", "O Imposto de Importação é um tributo de finalidade puramente arrecadatória"], correta: 3, explicacao: "O II é extrafiscal (regulatório), não meramente arrecadatório." }
  ]
});
