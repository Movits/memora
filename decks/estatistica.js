/*
  Matéria: Estatística (UNIP, Fanno e Brito, 2023).
  Unidade I (estatística descritiva: variáveis, frequências, medidas de tendência central e dispersão, assimetria e curtose),
  Unidade II (probabilidade),
  Unidade III (distribuições: binomial, Poisson e normal).
  Matéria de cálculo: inclui páginas de fórmulas e exemplos resolvidos.
*/
window.MEMORA.add({
  id: "estatistica",
  titulo: "Estatística",
  prova: "2026-06-19",
  unidades: {
    1: "Unidade I · Estatística descritiva",
    2: "Unidade II · Probabilidade",
    3: "Unidade III · Distribuições"
  },
  material: [
    {
      id: "res-u1", titulo: "Resumo · Unidade I", unidade: 1, aba: "Resumo",
      html: `
<h3>Conceitos iniciais</h3>
<ul>
<li><b>Estatística descritiva</b>: descreve dados já conhecidos (presente/passado). <b>Estatística indutiva (inferencial)</b>: a partir da amostra, prevê/generaliza para a população (com margem de erro e nível de confiança).</li>
<li><b>População</b>: todos os elementos com a característica estudada. <b>Amostra</b>: subconjunto que representa a população. <b>Censo</b> usa todos; <b>amostragem</b>, só uma parte.</li>
<li><b>Dados primários</b> (coletados para o estudo) x <b>secundários</b> (já existentes, usados para outro fim, ex.: IBGE).</li>
<li><b>Variáveis</b>: <b>qualitativas</b> (nominais ou ordinais) e <b>quantitativas</b> (<b>discretas</b> = contagem, valores inteiros; <b>contínuas</b> = medição, qualquer valor num intervalo).</li>
</ul>
<h3>Medidas de tendência central (posição)</h3>
<ul>
<li><b>Média aritmética</b> = soma dos valores ÷ quantidade. <b>Ponderada</b> = Σ(valor × frequência) ÷ Σ frequências.</li>
<li><b>Mediana</b>: valor central dos dados ordenados. <b>Moda</b>: valor mais frequente.</li>
<li>Outras médias: <b>geométrica</b> (crescimento/juros), <b>harmônica</b> (velocidades/taxas), <b>quadrática</b> (usada no desvio padrão). <b>Separatrizes</b>: quartis, decis e percentis.</li>
</ul>
<h3>Medidas de dispersão e forma</h3>
<ul>
<li><b>Absolutas</b>: amplitude, desvio médio, <b>variância</b> e <b>desvio padrão</b> (raiz da variância). <b>Relativa</b>: <b>coeficiente de variação</b> = (desvio padrão ÷ média) × 100, que permite <b>comparar</b> dispersões.</li>
<li><b>Assimetria</b>: simétrica (média = mediana = moda); positiva (cauda à direita) ou negativa (cauda à esquerda). <b>Curtose</b>: achatamento da curva (meso, lepto ou platicúrtica).</li>
</ul>`
    },
    {
      id: "res-u2", titulo: "Resumo · Unidade II", unidade: 2, aba: "Resumo",
      html: `
<h3>Probabilidade</h3>
<ul>
<li><b>Probabilidade</b> = nº de casos <b>favoráveis</b> ÷ nº de casos <b>possíveis</b> (valor entre 0 e 1). O conjunto de todos os resultados é o <b>espaço amostral</b>.</li>
<li><b>Frequência relativa</b>: probabilidade obtida pela observação (empírica).</li>
<li><b>Evento soma ('ou')</b>: alternativa entre eventos. Para mutuamente exclusivos, P(A ou B) = P(A) + P(B).</li>
<li><b>Evento produto ('e')</b>: ocorrência conjunta. Para eventos independentes, P(A e B) = P(A) × P(B).</li>
<li><b>Eventos independentes</b>: um não afeta o outro. <b>Vinculados (dependentes)</b>: a ocorrência de um altera a probabilidade do outro.</li>
<li>A contagem dos casos usa a <b>análise combinatória</b> (arranjos, combinações, permutações) e a <b>árvore de decisões</b>.</li>
</ul>`
    },
    {
      id: "res-u3", titulo: "Resumo · Unidade III", unidade: 3, aba: "Resumo",
      html: `
<h3>Distribuições de probabilidades</h3>
<ul>
<li>Uma <b>distribuição de probabilidades</b> associa a cada valor de uma variável a sua probabilidade.</li>
<li><b>Binomial</b> (variável <b>discreta</b>): n ensaios <b>independentes</b>, cada um com dois resultados (sucesso/fracasso) e probabilidade <b>p constante</b>. Média = <b>n·p</b>; desvio padrão = <b>√(n·p·q)</b>, com q = 1 − p.</li>
<li><b>Poisson</b> (variável <b>discreta</b>): número de ocorrências de eventos <b>raros</b> em um intervalo; caracterizada pela média <b>λ</b> (lambda).</li>
<li><b>Normal</b> (variável <b>contínua</b>): a mais importante; curva em <b>sino</b>, <b>simétrica e mesocúrtica</b>, definida pela média (μ) e pelo desvio padrão (σ). A <b>área</b> sob a curva é a probabilidade.</li>
<li>Para usar a tabela da normal, <b>padroniza-se</b>: <b>Z = (x − μ) ÷ σ</b>.</li>
</ul>`
    },
    {
      id: "formulas", titulo: "Fórmulas essenciais",
      html: `
<table>
<tr><th>Medida</th><th>Fórmula</th></tr>
<tr><td>Média aritmética simples</td><td>X̄ = (Σ xi) ÷ N</td></tr>
<tr><td>Média ponderada</td><td>X̄ = Σ(xi · fi) ÷ Σ fi</td></tr>
<tr><td>Amplitude total</td><td>AT = maior valor − menor valor</td></tr>
<tr><td>Variância (população)</td><td>σ² = Σ(xi − X̄)² ÷ N</td></tr>
<tr><td>Desvio padrão</td><td>σ = √(variância)</td></tr>
<tr><td>Coeficiente de variação</td><td>CV = (σ ÷ X̄) × 100</td></tr>
<tr><td>Probabilidade</td><td>P(A) = casos favoráveis ÷ casos possíveis</td></tr>
<tr><td>Evento soma (exclusivos)</td><td>P(A ou B) = P(A) + P(B)</td></tr>
<tr><td>Evento produto (independentes)</td><td>P(A e B) = P(A) × P(B)</td></tr>
<tr><td>Binomial - média</td><td>μ = n · p</td></tr>
<tr><td>Binomial - desvio padrão</td><td>σ = √(n · p · q), q = 1 − p</td></tr>
<tr><td>Padronização (normal)</td><td>Z = (x − μ) ÷ σ</td></tr>
</table>`
    },
    {
      id: "exemplos", titulo: "Exemplos resolvidos",
      html: `
<h3>1) Média, mediana e moda</h3>
<p>Dados: <b>4, 6, 6, 8, 10</b> (já ordenados, N = 5).</p>
<ul>
<li><b>Média</b> = (4+6+6+8+10) ÷ 5 = 34 ÷ 5 = <b>6,8</b></li>
<li><b>Mediana</b> = valor central = <b>6</b> (o 3º termo)</li>
<li><b>Moda</b> = valor mais frequente = <b>6</b></li>
</ul>
<h3>2) Média ponderada (notas e pesos)</h3>
<p>Notas 7 (peso 2), 8 (peso 3), 6 (peso 5).</p>
<p>X̄ = (7·2 + 8·3 + 6·5) ÷ (2+3+5) = (14+24+30) ÷ 10 = 68 ÷ 10 = <b>6,8</b></p>
<h3>3) Variância e desvio padrão</h3>
<p>Dados: <b>2, 4, 6</b>. Média = 4.</p>
<ul>
<li>Desvios²: (2−4)²=4; (4−4)²=0; (6−4)²=4</li>
<li>Variância = (4+0+4) ÷ 3 = 8 ÷ 3 ≈ <b>2,67</b></li>
<li>Desvio padrão = √2,67 ≈ <b>1,63</b></li>
</ul>
<h3>4) Coeficiente de variação</h3>
<p>Se σ = 1,63 e média = 4, então CV = (1,63 ÷ 4) × 100 ≈ <b>40,8%</b>.</p>
<h3>5) Probabilidade simples</h3>
<p>Em um dado, P(sair número par) = casos favoráveis (2, 4, 6) ÷ possíveis (6) = 3 ÷ 6 = <b>0,5 (50%)</b>.</p>
<h3>6) Evento produto (independentes)</h3>
<p>Dois dados: P(dois 6) = (1/6) × (1/6) = <b>1/36 ≈ 0,028</b>.</p>
<h3>7) Binomial</h3>
<p>n = 10 lançamentos de moeda, p = 0,5. Média de caras = n·p = 10 × 0,5 = <b>5</b>; desvio padrão = √(10·0,5·0,5) = √2,5 ≈ <b>1,58</b>.</p>`
    },
    {
      id: "mnem", titulo: "Mnemônicos",
      html: `
<h3>Descritiva x Indutiva</h3>
<p><b>Descritiva</b> = descreve o que já aconteceu. <b>Indutiva</b> = induz/prevê o futuro (inferência).</p>
<h3>Tipos de variável</h3>
<p><b>Discreta</b> = se conta (inteiros). <b>Contínua</b> = se mede (qualquer valor). Qualitativa <b>ordinal</b> tem ordem; <b>nominal</b> não.</p>
<h3>As 3 medidas de posição (Mo, Md, Me)</h3>
<p><b>Moda</b> = mais frequente · <b>Mediana</b> = a do meio · <b>Média</b> = soma ÷ quantidade.</p>
<h3>Assimetria (relação entre as 3)</h3>
<p><b>Simétrica</b>: média = mediana = moda. <b>Positiva</b>: média &gt; mediana &gt; moda (cauda à direita). <b>Negativa</b>: média &lt; mediana &lt; moda (cauda à esquerda).</p>
<h3>Curtose</h3>
<p><b>Meso</b> (normal) · <b>Lepto</b> (afilada, K&gt;0) · <b>Plati</b> (achatada, K&lt;0). 'Plati' lembra plano/achatado.</p>
<h3>Evento soma x produto</h3>
<p><b>'OU' = soma</b> (+) · <b>'E' = produto</b> (×).</p>
<h3>Distribuições</h3>
<p><b>Binomial e Poisson</b> = discretas. <b>Normal</b> = contínua (sino, simétrica). Padroniza com <b>Z</b>.</p>`
    },
    {
      id: "mapa", titulo: "Mapa mental (esquema)",
      html: `
<ul class="mapa">
<li>Unidade I · Descritiva
  <ul>
    <li>População/amostra; variáveis (quali/quanti, discreta/contínua)</li>
    <li>Frequências e gráficos (histograma, setograma, ogiva)</li>
    <li>Posição (média, mediana, moda, quartis); dispersão (variância, desvio padrão, CV)</li>
    <li>Forma: assimetria e curtose</li>
  </ul>
</li>
<li>Unidade II · Probabilidade
  <ul>
    <li>P = favoráveis ÷ possíveis; frequência relativa</li>
    <li>Evento soma (ou) e produto (e); independentes x vinculados</li>
    <li>Combinatória e árvore de decisões</li>
  </ul>
</li>
<li>Unidade III · Distribuições
  <ul>
    <li>Binomial (n·p) e Poisson (λ) — discretas</li>
    <li>Normal (μ, σ; sino) — contínua; padronização Z</li>
  </ul>
</li>
</ul>`
    }
  ],
  cards: [
    // ===== UNIDADE I =====
    { id: "u1-01", unidade: 1, frente: "O que é <b>estatística</b>?", verso: "Conjunto de métodos e técnicas para <b>coletar, organizar, analisar e interpretar dados</b>, transformando dados incertos em conhecimento útil para a tomada de decisão." },
    { id: "u1-02", unidade: 1, frente: "Diferencie estatística <b>descritiva</b> e <b>indutiva (inferencial)</b>.", verso: "<b>Descritiva</b>: descreve dados conhecidos (presente/passado). <b>Indutiva</b>: a partir da amostra, <b>prevê/generaliza</b> para a população (com margem de erro e nível de confiança)." },
    { id: "u1-03", unidade: 1, frente: "Diferença entre <b>população</b> e <b>amostra</b>.", verso: "<b>População</b>: todos os elementos com a característica estudada. <b>Amostra</b>: um <b>subconjunto</b> que representa a população." },
    { id: "u1-04", unidade: 1, frente: "Diferença entre <b>censo</b> e <b>amostragem</b>.", verso: "<b>Censo</b>: considera <b>todos</b> os elementos (mais custoso). <b>Amostragem</b>: considera apenas <b>parte</b> deles." },
    { id: "u1-05", unidade: 1, frente: "Diferença entre dados <b>primários</b> e <b>secundários</b>.", verso: "<b>Primários</b>: coletados especificamente para o estudo. <b>Secundários</b>: já existentes, coletados com outra finalidade (ex.: dados do IBGE)." },
    { id: "u1-06", unidade: 1, frente: "Quais são os tipos de <b>variáveis</b>?", verso: "<b>Qualitativas</b> (nominais ou ordinais) e <b>quantitativas</b> (discretas ou contínuas)." },
    { id: "u1-07", unidade: 1, frente: "Diferença entre variável quantitativa <b>discreta</b> e <b>contínua</b>.", verso: "<b>Discreta</b>: assume valores inteiros, é <b>contada</b> (ex.: nº de filhos). <b>Contínua</b>: assume qualquer valor num intervalo, é <b>medida</b> (ex.: peso, altura)." },
    { id: "u1-08", unidade: 1, frente: "Diferença entre variável qualitativa <b>nominal</b> e <b>ordinal</b>.", verso: "<b>Nominal</b>: categorias sem ordem (ex.: cor). <b>Ordinal</b>: categorias que podem ser <b>hierarquizadas</b> (ex.: escolaridade)." },
    { id: "u1-09", unidade: 1, frente: "O que é o <b>ponto médio de classe</b>?", verso: "O valor que representa uma classe (faixa): a <b>média entre o limite inferior e o superior</b> da classe. Usado nos cálculos de dados agrupados." },
    { id: "u1-10", unidade: 1, frente: "Quais os principais <b>gráficos</b> da estatística descritiva?", verso: "<b>Histograma</b> (barras para frequências), <b>setograma</b> (gráfico de setores/pizza) e <b>ogiva</b> (frequências acumuladas)." },
    { id: "u1-11", unidade: 1, frente: "Como se calcula a <b>média aritmética</b> (simples e ponderada)?", verso: "<b>Simples</b>: soma dos valores ÷ quantidade. <b>Ponderada</b>: Σ(valor × frequência) ÷ Σ frequências." },
    { id: "u1-12", unidade: 1, frente: "O que é a <b>mediana</b>?", verso: "O <b>valor central</b> de um conjunto de dados <b>ordenados</b>. Se a quantidade for par, é a média dos dois valores centrais." },
    { id: "u1-13", unidade: 1, frente: "O que é a <b>moda</b>?", verso: "O valor <b>mais frequente</b> do conjunto (o que mais se repete). Um conjunto pode ser amodal, bimodal etc." },
    { id: "u1-14", unidade: 1, frente: "Quando usar média <b>geométrica</b>, <b>harmônica</b> e <b>quadrática</b>?", verso: "<b>Geométrica</b>: taxas de crescimento/juros. <b>Harmônica</b>: velocidades/taxas (ida e volta). <b>Quadrática</b>: valores que se alternam; base do desvio padrão." },
    { id: "u1-15", unidade: 1, frente: "O que são <b>separatrizes</b>?", verso: "Medidas que dividem os dados ordenados em partes iguais: <b>quartis</b> (4 partes), <b>decis</b> (10) e <b>percentis</b> (100). O 2º quartil (Q2) é a mediana." },
    { id: "u1-16", unidade: 1, frente: "O que medem a <b>variância</b> e o <b>desvio padrão</b>?", verso: "A <b>dispersão</b> dos dados em torno da média. A <b>variância</b> é a média dos quadrados dos desvios; o <b>desvio padrão</b> é a <b>raiz quadrada</b> da variância (na mesma unidade dos dados)." },
    { id: "u1-17", unidade: 1, frente: "O que é o <b>coeficiente de variação (CV)</b> e para que serve?", verso: "Uma medida de dispersão <b>relativa</b>: CV = (desvio padrão ÷ média) × 100. Permite <b>comparar a dispersão</b> de conjuntos com unidades ou médias diferentes." },
    { id: "u1-18", unidade: 1, frente: "O que indica a <b>assimetria</b> de uma distribuição?", verso: "O grau de desvio da simetria. <b>Simétrica</b>: média = mediana = moda. <b>Positiva</b>: cauda à direita (média &gt; moda). <b>Negativa</b>: cauda à esquerda (média &lt; moda)." },
    { id: "u1-19", unidade: 1, frente: "O que é a <b>curtose</b>?", verso: "O grau de <b>achatamento</b> da curva: <b>mesocúrtica</b> (normal, K=0), <b>leptocúrtica</b> (mais afilada/alta, K&gt;0) e <b>platicúrtica</b> (mais achatada, K&lt;0)." },

    // ===== UNIDADE II =====
    { id: "u2-01", unidade: 2, frente: "Como se calcula a <b>probabilidade</b> de um evento?", verso: "P(A) = nº de casos <b>favoráveis</b> ÷ nº de casos <b>possíveis</b>. O resultado fica entre <b>0 e 1</b> (ou 0% a 100%)." },
    { id: "u2-02", unidade: 2, frente: "O que é o <b>espaço amostral</b>?", verso: "O conjunto de <b>todos os resultados possíveis</b> de um experimento aleatório (ex.: ao lançar um dado, {1,2,3,4,5,6})." },
    { id: "u2-03", unidade: 2, frente: "O que é a <b>frequência relativa</b> como probabilidade?", verso: "A probabilidade obtida pela <b>observação/experiência</b> (empírica): nº de vezes que o evento ocorreu ÷ total de observações." },
    { id: "u2-04", unidade: 2, frente: "O que é o <b>evento soma</b> e como se calcula?", verso: "Representa uma <b>alternativa</b> ('ou'). Para eventos <b>mutuamente exclusivos</b>: P(A ou B) = P(A) + P(B)." },
    { id: "u2-05", unidade: 2, frente: "O que é o <b>evento produto</b> e como se calcula?", verso: "Representa uma <b>ocorrência conjunta</b> ('e'). Para eventos <b>independentes</b>: P(A e B) = P(A) × P(B)." },
    { id: "u2-06", unidade: 2, frente: "Diferença entre eventos <b>independentes</b> e <b>vinculados</b>.", verso: "<b>Independentes</b>: a ocorrência de um <b>não altera</b> a probabilidade do outro (ex.: dois lançamentos de dado). <b>Vinculados (dependentes)</b>: um <b>altera</b> a probabilidade do outro (ex.: retirar cartas sem reposição)." },
    { id: "u2-07", unidade: 2, frente: "Para que serve a <b>análise combinatória</b> na probabilidade?", verso: "Para <b>contar</b> os casos favoráveis e possíveis, por meio de <b>arranjos, combinações e permutações</b>." },
    { id: "u2-08", unidade: 2, frente: "O que é uma <b>árvore de decisões</b>?", verso: "Um diagrama que representa <b>todos os caminhos/resultados possíveis</b> de eventos sucessivos, ajudando a calcular probabilidades." },

    // ===== UNIDADE III =====
    { id: "u3-01", unidade: 3, frente: "O que é uma <b>distribuição de probabilidades</b>?", verso: "Um modelo que associa a <b>cada valor</b> de uma variável aleatória a <b>sua probabilidade</b> de ocorrência." },
    { id: "u3-02", unidade: 3, frente: "Quais as condições da <b>distribuição binomial</b>?", verso: "Variável <b>discreta</b>: <b>n ensaios independentes</b>, cada um com apenas <b>dois resultados</b> (sucesso/fracasso) e probabilidade <b>p constante</b>." },
    { id: "u3-03", unidade: 3, frente: "Qual a média e o desvio padrão da <b>binomial</b>?", verso: "Média (esperança) = <b>n · p</b>; desvio padrão = <b>√(n · p · q)</b>, em que q = 1 − p." },
    { id: "u3-04", unidade: 3, frente: "Quando se usa a <b>distribuição de Poisson</b>?", verso: "Para o número de ocorrências de <b>eventos raros</b> em um intervalo (de tempo, área etc.). É discreta e caracterizada pela média <b>λ (lambda)</b>." },
    { id: "u3-05", unidade: 3, frente: "Quais as características da <b>distribuição normal</b>?", verso: "Variável <b>contínua</b>; curva em <b>sino</b>, <b>simétrica e mesocúrtica</b>; definida pela <b>média (μ)</b> e pelo <b>desvio padrão (σ)</b>. A <b>área</b> sob a curva representa a probabilidade." },
    { id: "u3-06", unidade: 3, frente: "Na curva normal, média, mediana e moda...", verso: "São <b>iguais</b> (coincidem no centro), pois a curva é <b>simétrica</b>." },
    { id: "u3-07", unidade: 3, frente: "O que é a <b>padronização</b> (escore Z) na normal?", verso: "Transformar um valor x em <b>Z = (x − μ) ÷ σ</b>, para usar a <b>tabela da normal padrão</b> (média 0 e desvio padrão 1) e achar probabilidades." },
    { id: "u3-08", unidade: 3, frente: "Quais distribuições são <b>discretas</b> e qual é <b>contínua</b>?", verso: "<b>Discretas</b>: binomial e Poisson. <b>Contínua</b>: normal." }
  ],
  quiz: [
    { id: "q1", unidade: 1, pergunta: "A estatística que descreve dados já conhecidos (presente/passado) é a:", opcoes: ["Indutiva", "Descritiva", "Inferencial", "Preditiva"], correta: 1, explicacao: "A descritiva organiza e resume dados conhecidos." },
    { id: "q2", unidade: 1, pergunta: "Prever o comportamento da população a partir de uma amostra é tarefa da estatística:", opcoes: ["Descritiva", "Indutiva (inferencial)", "Tabular", "Gráfica"], correta: 1, explicacao: "A estatística indutiva infere/generaliza para a população." },
    { id: "q3", unidade: 1, pergunta: "Um subconjunto que representa a população é a(o):", opcoes: ["Censo", "Amostra", "Variável", "Parâmetro"], correta: 1, explicacao: "A amostra é uma parte representativa da população." },
    { id: "q4", unidade: 1, pergunta: "O número de filhos de uma família é uma variável:", opcoes: ["Qualitativa nominal", "Qualitativa ordinal", "Quantitativa discreta", "Quantitativa contínua"], correta: 2, explicacao: "É contada e assume apenas valores inteiros (discreta)." },
    { id: "q5", unidade: 1, pergunta: "O peso de uma pessoa é uma variável:", opcoes: ["Quantitativa contínua", "Quantitativa discreta", "Qualitativa nominal", "Qualitativa ordinal"], correta: 0, explicacao: "É medida e pode assumir qualquer valor num intervalo (contínua)." },
    { id: "q6", unidade: 1, pergunta: "A média aritmética dos valores 4, 6, 6, 8, 10 é:", opcoes: ["6", "6,8", "7", "8"], correta: 1, explicacao: "(4+6+6+8+10)/5 = 34/5 = 6,8." },
    { id: "q7", unidade: 1, pergunta: "A mediana dos valores 4, 6, 6, 8, 10 é:", opcoes: ["6", "6,8", "7", "8"], correta: 0, explicacao: "É o valor central dos dados ordenados (o 3º termo): 6." },
    { id: "q8", unidade: 1, pergunta: "A moda dos valores 4, 6, 6, 8, 10 é:", opcoes: ["4", "6", "8", "10"], correta: 1, explicacao: "O valor mais frequente é 6." },
    { id: "q9", unidade: 1, pergunta: "O desvio padrão é:", opcoes: ["O quadrado da variância", "A raiz quadrada da variância", "A média dos dados", "A diferença entre máximo e mínimo"], correta: 1, explicacao: "Desvio padrão = √variância." },
    { id: "q10", unidade: 1, pergunta: "A medida de dispersão RELATIVA, que permite comparar conjuntos diferentes, é o:", opcoes: ["Desvio médio", "Coeficiente de variação", "Amplitude", "Variância"], correta: 1, explicacao: "CV = (desvio padrão / média) × 100." },
    { id: "q11", unidade: 1, pergunta: "Em uma distribuição simétrica:", opcoes: ["Média > mediana > moda", "Média = mediana = moda", "Média < mediana < moda", "Não há moda"], correta: 1, explicacao: "Na simetria, as três medidas coincidem." },
    { id: "q12", unidade: 1, pergunta: "Uma curva mais achatada que a normal é classificada como:", opcoes: ["Leptocúrtica", "Mesocúrtica", "Platicúrtica", "Simétrica"], correta: 2, explicacao: "Platicúrtica (K < 0); 'plati' lembra plano/achatado." },
    { id: "q13", unidade: 2, pergunta: "A probabilidade de um evento é dada por:", opcoes: ["Possíveis ÷ favoráveis", "Favoráveis ÷ possíveis", "Favoráveis × possíveis", "Favoráveis − possíveis"], correta: 1, explicacao: "P = casos favoráveis / casos possíveis (entre 0 e 1)." },
    { id: "q14", unidade: 2, pergunta: "Ao lançar um dado, a probabilidade de sair um número par é:", opcoes: ["1/6", "1/3", "1/2", "2/3"], correta: 2, explicacao: "Favoráveis (2,4,6) = 3; possíveis = 6; 3/6 = 1/2." },
    { id: "q15", unidade: 2, pergunta: "O evento soma ('ou'), para eventos mutuamente exclusivos, é calculado:", opcoes: ["Multiplicando as probabilidades", "Somando as probabilidades", "Subtraindo as probabilidades", "Dividindo as probabilidades"], correta: 1, explicacao: "P(A ou B) = P(A) + P(B)." },
    { id: "q16", unidade: 2, pergunta: "O evento produto ('e'), para eventos independentes, é calculado:", opcoes: ["Somando", "Multiplicando", "Subtraindo", "Pela média"], correta: 1, explicacao: "P(A e B) = P(A) × P(B)." },
    { id: "q17", unidade: 2, pergunta: "A probabilidade de tirar dois '6' ao lançar dois dados é:", opcoes: ["1/6", "1/12", "1/36", "2/6"], correta: 2, explicacao: "Independentes: (1/6) × (1/6) = 1/36." },
    { id: "q18", unidade: 2, pergunta: "Retirar cartas de um baralho SEM reposição gera eventos:", opcoes: ["Independentes", "Vinculados (dependentes)", "Mutuamente exclusivos", "Impossíveis"], correta: 1, explicacao: "A primeira retirada altera a probabilidade da segunda." },
    { id: "q19", unidade: 3, pergunta: "A distribuição binomial exige ensaios:", opcoes: ["Dependentes, com 3 resultados", "Independentes, com 2 resultados e p constante", "Contínuos", "Com média λ"], correta: 1, explicacao: "n ensaios independentes, dois resultados (sucesso/fracasso), p constante." },
    { id: "q20", unidade: 3, pergunta: "A média (esperança) de uma distribuição binomial é:", opcoes: ["n + p", "n · p", "√(n·p·q)", "λ"], correta: 1, explicacao: "Média = n·p; o desvio padrão = √(n·p·q)." },
    { id: "q21", unidade: 3, pergunta: "A distribuição usada para eventos raros num intervalo, caracterizada por λ, é a:", opcoes: ["Normal", "Binomial", "Poisson", "Uniforme"], correta: 2, explicacao: "A distribuição de Poisson (variável discreta), definida pela média λ." },
    { id: "q22", unidade: 3, pergunta: "A distribuição normal é:", opcoes: ["Discreta e assimétrica", "Contínua, simétrica e em forma de sino", "Discreta e em forma de sino", "Sempre platicúrtica"], correta: 1, explicacao: "Contínua, simétrica e mesocúrtica; média = mediana = moda." }
  ]
});
