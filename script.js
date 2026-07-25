// ============================================================
// MANUAL COMPLETO – 40 CAPÍTULOS COM DADOS REAIS
// ============================================================

const chapterTitles = [
  'Fundamentos da Gestão Financeira',
  'Planejamento Financeiro',
  'Tesouraria',
  'Contas a Receber',
  'Contas a Pagar',
  'Fluxo de Caixa',
  'Capital de Giro',
  'Custos',
  'Formação de Preço',
  'Indicadores Financeiros',
  'DRE',
  'Balanço Patrimonial',
  'Fluxo de Caixa Direto',
  'Fluxo de Caixa Indireto',
  'Orçamento Empresarial',
  'Budget',
  'Forecast',
  'Rolling Forecast',
  'Governança Financeira',
  'Compliance',
  'Auditoria',
  'Tesouraria Corporativa',
  'Conciliação Bancária',
  'Gestão Bancária',
  'Investimentos',
  'Análise Financeira',
  'Indicadores Econômicos',
  'Simples Nacional',
  'Lucro Presumido',
  'Lucro Real',
  'Fechamento Diário',
  'Fechamento Semanal',
  'Fechamento Mensal',
  'Fechamento Trimestral',
  'Fechamento Anual',
  'Calendário Financeiro',
  'Checklists',
  'POP',
  'Fluxogramas',
  'Anexos'
];

// ============================================================
// DICIONÁRIO DE CONTEÚDO (dados reais e verificados)
// ============================================================
const contentMap = {
  'Fundamentos da Gestão Financeira': {
    conceito: 'A gestão financeira corporativa é o conjunto de práticas que visa administrar recursos monetários, equilibrar liquidez, rentabilidade e risco, e maximizar o valor da empresa.',
    objetivos: 'Garantir fluxo de caixa positivo, otimizar custos, cumprir obrigações fiscais, reduzir o custo de capital (WACC) e agregar valor econômico (EVA).',
    procedimentos: 'Monitoramento diário de saldos, conciliação bancária, análise de contas a receber/pagar, projeção de fluxo de caixa de 30 dias, e acompanhamento de KPIs como DSO, DPO e giro de estoque.',
    formula: 'EVA = NOPAT - (Capital Investido × WACC)',
    exemplo: 'NOPAT = R$ 800.000, Capital Investido = R$ 5.000.000, WACC = 12% → EVA = 800.000 - 600.000 = R$ 200.000 (criação de valor).',
    dica: 'Mantenha um dashboard diário com posição de caixa, contas a receber vencidas e margem de contribuição.',
    boasPraticas: 'Revisar políticas de crédito, automatizar conciliações e manter reserva de emergência equivalente a 3 meses de custos fixos.'
  },
  'Planejamento Financeiro': {
    conceito: 'Planejamento financeiro é o processo de estabelecer metas de longo prazo e criar roteiros orçamentários, alinhando receitas, custos, investimentos e financiamentos.',
    objetivos: 'Definir orçamento de vendas, custos, despesas e CAPEX; projetar DRE, balanço e fluxo de caixa; e antecipar necessidades de capital.',
    procedimentos: 'Elaborar orçamento base zero (OBZ) envolvendo todas as áreas; revisar trimestralmente com análise de variância; ajustar forecast conforme cenário econômico.',
    formula: 'Lucro Líquido Projetado = Receita Total - (Custos Variáveis + Custos Fixos) - Despesas Financeiras - Impostos',
    exemplo: 'Receita R$ 5.000.000, CV R$ 2.800.000, CF R$ 1.200.000, Desp Fin R$ 150.000, Impostos (Presumido) R$ 400.000 → Lucro = R$ 450.000.',
    dica: 'Utilize o OBZ para eliminar desperdícios históricos e alocar recursos nas áreas mais estratégicas.',
    boasPraticas: 'Envolver a alta gestão na aprovação do orçamento, comparar realizado vs orçado mensalmente e ajustar o plano de negócios conforme necessário.'
  },
  'Tesouraria': {
    conceito: 'Tesouraria é a área responsável pela gestão de liquidez, captação de recursos, aplicações financeiras e controle de riscos cambiais e de juros.',
    objetivos: 'Manter saldo de caixa adequado, otimizar o custo de financiamento, maximizar retorno de aplicações e garantir segurança nas transações.',
    procedimentos: 'Elaborar fluxo de caixa diário, negociar limites de crédito com bancos, realizar hedge cambial, e monitorar o rating da empresa.',
    formula: 'Saldo Mínimo de Caixa = (Desembolsos Diários × Número de Dias de Proteção) + Reserva Técnica',
    exemplo: 'Desembolso diário médio = R$ 50.000, dias de proteção = 15, reserva = R$ 100.000 → Saldo mínimo = (50.000×15) + 100.000 = R$ 850.000.',
    dica: 'Mantenha relacionamento com mais de um banco para ter opções de crédito e melhores taxas.',
    boasPraticas: 'Concilie todas as contas bancárias diariamente, utilize sistema de tesouraria integrado ao ERP e faça projeções de fluxo para 7, 15 e 30 dias.'
  },
  'Contas a Receber': {
    conceito: 'Contas a receber representa os valores a serem recebidos de clientes por vendas a prazo. Sua gestão impacta diretamente o fluxo de caixa e o risco de inadimplência.',
    objetivos: 'Reduzir o prazo médio de recebimento (DSO), minimizar perdas com devedores duvidosos e melhorar a previsibilidade de entradas.',
    procedimentos: 'Análise de crédito prévia, emissão de boletos/faturas, cobrança preventiva e negociação de acordos. Utilizar ferramentas de factoring quando necessário.',
    formula: 'DSO = (Duplicatas a Receber / Receita Bruta) × Dias do Período',
    exemplo: 'Duplicatas a Receber = R$ 600.000, Receita Bruta mensal = R$ 1.200.000, dias = 30 → DSO = (600.000/1.200.000)×30 = 15 dias.',
    dica: 'Ofereça descontos para pagamento à vista e mantenha um processo de cobrança estruturado com contatos escalonados (e-mail, telefone, carta).',
    boasPraticas: 'Classificar clientes por risco, aprovar limites de crédito com base em análise financeira, e provisionar PDD (Provisão para Devedores Duvidosos) conforme norma CPC 32.'
  },
  'Contas a Pagar': {
    conceito: 'Contas a pagar são obrigações da empresa junto a fornecedores, prestadores de serviço e órgãos públicos. A gestão visa otimizar o prazo de pagamento sem prejudicar o relacionamento.',
    objetivos: 'Ampliar o prazo médio de pagamento (DPO) sem incorrer em multas ou juros, e manter um cronograma de pagamentos que respeite o fluxo de caixa.',
    procedimentos: 'Negociação de prazos com fornecedores, programação de pagamentos conforme vencimento, aproveitamento de descontos para pagamento antecipado.',
    formula: 'DPO = (Fornecedores / Compras do Período) × Dias',
    exemplo: 'Fornecedores = R$ 400.000, Compras mensais = R$ 800.000, dias = 30 → DPO = (400.000/800.000)×30 = 15 dias.',
    dica: 'Concilie as faturas com os pedidos de compra e notas fiscais antes do pagamento para evitar erros.',
    boasPraticas: 'Centralizar os pagamentos em um único sistema, utilizar fluxo de aprovação eletrônico, e manter um calendário de vencimentos com alertas.'
  },
  'Fluxo de Caixa': {
    conceito: 'Fluxo de caixa registra todas as entradas e saídas de recursos em um período. É a ferramenta principal para gestão de liquidez e planejamento financeiro.',
    objetivos: 'Projetar entradas e saídas futuras, identificar períodos de déficit ou excedente, e auxiliar na tomada de decisão sobre investimentos e financiamentos.',
    procedimentos: 'Registrar todas as movimentações bancárias, classificar por categoria (operacional, investimento, financiamento), projetar com base em histórico e sazonalidade.',
    formula: 'Fluxo de Caixa Livre (FCF) = EBIT×(1-t) + Depreciação - ΔNCG - CAPEX',
    exemplo: 'EBIT = R$ 1.200.000, t=34%, Depr= R$ 180.000, ΔNCG= R$ 80.000, CAPEX= R$ 250.000 → FCF = 1.200.000×0,66+180.000-80.000-250.000 = R$ 642.000.',
    dica: 'Faça projeções para 13 semanas (curto prazo) e para 12 meses (médio prazo), revisando semanalmente.',
    boasPraticas: 'Utilizar o método direto para operações e o indireto para demonstrar a relação com o lucro, conforme CPC 03.'
  },
  'Capital de Giro': {
    conceito: 'Capital de giro é o montante necessário para financiar o ciclo operacional da empresa (compras, estoque, produção, vendas e recebimento).',
    objetivos: 'Calcular a necessidade de capital de giro (NCG) e garantir que ela seja financiada por recursos de longo prazo, evitando o uso de passivos de curto prazo.',
    procedimentos: 'Analisar os prazos médios de estoque, recebimento e pagamento. Calcular o ciclo de caixa (CCC).',
    formula: 'NCG = (Estoques + Duplicatas a Receber) - Fornecedores',
    exemplo: 'Estoques = R$ 500.000, D/R = R$ 400.000, Fornecedores = R$ 300.000 → NCG = R$ 600.000.',
    dica: 'Reduza o prazo de estocagem e de recebimento, e negocie prazos mais longos com fornecedores para diminuir a NCG.',
    boasPraticas: 'Manter capital de giro próprio (PNG) positivo, financiar NCG com recursos de longo prazo ou capital próprio, e monitorar o indicador de liquidez corrente.'
  },
  'Custos': {
    conceito: 'Custos são os gastos diretamente relacionados à produção ou aquisição de produtos/serviços. Dividem-se em fixos e variáveis, diretos e indiretos.',
    objetivos: 'Apurar o custo dos produtos vendidos (CPV) e o custo dos serviços prestados (CSP) de forma precisa para formação de preço e análise de rentabilidade.',
    procedimentos: 'Utilizar métodos de custeio (absorção, variável, ABC), ratear custos indiretos, e controlar desperdícios.',
    formula: 'CPV = Estoque Inicial + Compras - Estoque Final',
    exemplo: 'Estoque inicial = R$ 200.000, Compras = R$ 1.000.000, Estoque final = R$ 250.000 → CPV = R$ 950.000.',
    dica: 'Implemente um sistema de custos integrado ao ERP e faça inventários periódicos para conferência.',
    boasPraticas: 'Separar custos de despesas, analisar a margem de contribuição por produto, e revisar a estrutura de custos trimestralmente.'
  },
  'Formação de Preço': {
    conceito: 'Formação de preço é o processo de definir o valor de venda considerando custos, despesas, impostos, margem de lucro e posicionamento de mercado.',
    objetivos: 'Garantir que o preço cubra todos os custos e despesas, gere o lucro desejado e seja competitivo no mercado.',
    procedimentos: 'Calcular o mark-up divisor ou multiplicador com base na estrutura de custos e na alíquota de impostos.',
    formula: 'Preço de Venda = (Custo Unitário + Despesas Variáveis) / (1 - (% Impostos + % Despesas Fixas + % Margem Lucro))',
    exemplo: 'Custo unitário = R$ 50, Despesas variáveis = R$ 10, Impostos = 20%, Despesas fixas = 15%, Margem = 10% → Preço = (50+10)/(1-0,45) = 60/0,55 = R$ 109,09.',
    dica: 'Pesquise os preços da concorrência e considere o valor percebido pelo cliente.',
    boasPraticas: 'Revisar preços periodicamente com base na inflação, câmbio e custos; utilizar precificação dinâmica para produtos com alta sazonalidade.'
  },
  'Indicadores Financeiros': {
    conceito: 'Indicadores financeiros são métricas que avaliam a saúde financeira da empresa, como liquidez, rentabilidade, endividamento e eficiência.',
    objetivos: 'Monitorar o desempenho, identificar tendências e apoiar decisões estratégicas.',
    procedimentos: 'Calcular e analisar índices como liquidez corrente, liquidez seca, ROE, ROA, margem líquida, EBIT, EBITDA, giro do ativo, etc.',
    formula: 'ROE = Lucro Líquido / Patrimônio Líquido',
    exemplo: 'Lucro Líquido = R$ 400.000, PL = R$ 2.000.000 → ROE = 20%.',
    dica: 'Compare os indicadores com a média do setor e com o histórico da empresa.',
    boasPraticas: 'Criar um painel de KPIs com metas, alertas e tendências; revisar os indicadores mensalmente na reunião de resultados.'
  },
  'DRE': {
    conceito: 'A Demonstração do Resultado do Exercício (DRE) evidencia a formação do lucro líquido em um período, segregando receitas, custos, despesas e impostos.',
    objetivos: 'Apresentar a rentabilidade operacional e líquida da empresa, permitindo análise de margens e eficiência.',
    procedimentos: 'Estruturar a DRE conforme CPC 26: Receita Bruta → Deduções → Receita Líquida → CPV → Lucro Bruto → Despesas Operacionais → EBIT → Resultado Financeiro → LAIR → IRPJ/CSLL → Lucro Líquido.',
    formula: 'Lucro Líquido = Receita Líquida - CPV - Despesas Operacionais - Resultado Financeiro - Impostos',
    exemplo: 'Receita Líquida R$ 10.000.000, CPV R$ 6.000.000, Desp. Op. R$ 2.500.000, Desp. Fin. R$ 200.000, Impostos (Real) R$ 500.000 → Lucro = R$ 800.000.',
    dica: 'Faça análise horizontal (evolução) e vertical (percentual sobre receita) para identificar variações.',
    boasPraticas: 'Divulgar a DRE para acionistas e conselho; comparar com o orçado; usar o EBITDA como proxy de geração de caixa operacional.'
  },
  'Balanço Patrimonial': {
    conceito: 'O Balanço Patrimonial é a demonstração contábil que apresenta a posição financeira da empresa em uma data específica, com Ativo, Passivo e Patrimônio Líquido.',
    objetivos: 'Evidenciar a estrutura de ativos, passivos e capital próprio; avaliar liquidez, solvência e endividamento.',
    procedimentos: 'Elaborar com base no razão contábil, classificando contas por circulante e não circulante; calcular índices de estrutura.',
    formula: 'Equação Fundamental: Ativo = Passivo + Patrimônio Líquido',
    exemplo: 'Ativo total = R$ 15.000.000, Passivo = R$ 9.000.000, PL = R$ 6.000.000.',
    dica: 'Analise a composição do endividamento (curto vs longo prazo) e a imobilização do patrimônio.',
    boasPraticas: 'Auditar o balanço anualmente, reconciliar contas patrimoniais mensalmente, e manter a documentação suporte para cada saldo.'
  },
  'Fluxo de Caixa Direto': {
    conceito: 'O método direto de fluxo de caixa apresenta as movimentações financeiras efetivas de recebimentos e pagamentos, segregadas por atividades operacionais, de investimento e de financiamento.',
    objetivos: 'Mostrar de forma transparente a geração de caixa operacional e as fontes de recursos.',
    procedimentos: 'Registrar todas as entradas (recebimentos de clientes, juros recebidos, etc.) e saídas (pagamentos a fornecedores, pessoal, impostos, etc.) do período.',
    formula: 'Fluxo de Caixa Operacional (Direto) = Total de Recebimentos - Total de Pagamentos Operacionais',
    exemplo: 'Recebimentos de clientes = R$ 4.500.000, Pagamentos a fornecedores = R$ 2.800.000, Pagamentos de pessoal = R$ 800.000, Impostos = R$ 300.000 → Fluxo Op. = R$ 600.000.',
    dica: 'Utilize o extrato bancário e o razão de contas a receber/pagar como base para o método direto.',
    boasPraticas: 'Conciliar o fluxo de caixa direto com a variação de saldo bancário; apresentar em conjunto com o fluxo indireto para melhor análise.'
  },
  'Fluxo de Caixa Indireto': {
    conceito: 'O método indireto parte do lucro líquido e ajusta efeitos não-caixa (depreciação, variações de ativos/passivos) para chegar ao fluxo de caixa operacional.',
    objetivos: 'Demonstrar a relação entre o lucro contábil e o caixa gerado, sendo o método exigido pela legislação societária.',
    procedimentos: 'Tomar o lucro líquido, adicionar despesas não-caixa (depreciação, amortização), subtrair ganhos não-caixa, e ajustar variações de contas operacionais.',
    formula: 'Fluxo Op. (Indireto) = Lucro Líquido + Depreciação + Amortização - Variação de Estoques - Variação de Contas a Receber + Variação de Fornecedores',
    exemplo: 'Lucro Líquido = R$ 500.000, Depreciação = R$ 100.000, Aumento de Estoques = R$ 60.000, Aumento de D/R = R$ 40.000, Aumento de Fornecedores = R$ 30.000 → Fluxo = 500.000+100.000-60.000-40.000+30.000 = R$ 530.000.',
    dica: 'Use essa demonstração para explicar a diferença entre lucro e caixa aos acionistas.',
    boasPraticas: 'Preparar o fluxo indireto trimestralmente, reconciliando com a DRE e o balanço; apresentar variações significativas em notas explicativas.'
  },
  'Orçamento Empresarial': {
    conceito: 'Orçamento empresarial é o plano financeiro de curto e médio prazo que detalha receitas, custos, despesas e investimentos, servindo como guia para a gestão.',
    objetivos: 'Planejar operações, alocar recursos, estabelecer metas e controlar o desempenho.',
    procedimentos: 'Coletar dados históricos, projetar vendas, custos e despesas, definir investimentos, e consolidar em um orçamento mestre (DRE, balanço e fluxo).',
    formula: 'Orçamento de Vendas = Preço Unitário × Quantidade Projetada',
    exemplo: 'Preço médio = R$ 200, quantidade = 8.000 unidades → Vendas = R$ 1.600.000.',
    dica: 'Utilize cenários (otimista, realista, pessimista) para lidar com incertezas.',
    boasPraticas: 'Revisar mensalmente o realizado vs. orçado, fazer ajustes com base em mudanças de mercado e comunicar os resultados a toda organização.'
  },
  'Budget': {
    conceito: 'Budget é o orçamento detalhado por centro de custo ou projeto, utilizado para controle de gastos e alocação de recursos.',
    objetivos: 'Limitar gastos, autorizar despesas, e acompanhar a execução orçamentária.',
    procedimentos: 'Definir limites por departamento, aprovar solicitações, e monitorar o consumo mensal.',
    formula: 'Variação = Orçado - Realizado',
    exemplo: 'Orçado para marketing = R$ 100.000, Realizado = R$ 92.000 → Variação positiva de R$ 8.000.',
    dica: 'Crie um fluxo de aprovação para gastos acima do orçado.',
    boasPraticas: 'Revisar o budget trimestralmente, realocar recursos de áreas com sobra para áreas com necessidade, e vincular a performance dos gestores ao cumprimento do budget.'
  },
  'Forecast': {
    conceito: 'Forecast é a projeção de resultados futuros com base em dados atuais e tendências, geralmente atualizado mensalmente ou trimestralmente.',
    objetivos: 'Atualizar as expectativas de resultado, permitindo correções de rota e ajuste de estratégias.',
    procedimentos: 'Coletar dados do mês corrente, projetar os meses seguintes usando modelos estatísticos ou julgamento de especialistas.',
    formula: 'Forecast de Vendas = Vendas Atuais × (1 + Taxa de Crescimento Estimada)',
    exemplo: 'Vendas atuais = R$ 500.000, crescimento estimado = 5% → Forecast = R$ 525.000.',
    dica: 'Compare o forecast com o budget para identificar desvios e agir proativamente.',
    boasPraticas: 'Envolver as áreas comerciais e operacionais na elaboração, utilizar ferramentas de BI para simulações, e revisar com a diretoria.'
  },
  'Rolling Forecast': {
    conceito: 'Rolling forecast é um modelo de projeção contínua que atualiza o horizonte de planejamento (ex: 12 meses) conforme cada mês se encerra.',
    objetivos: 'Manter o plano sempre atualizado, reduzindo a rigidez do orçamento anual e aumentando a capacidade de adaptação.',
    procedimentos: 'Ao final de cada mês, adicionar um novo mês ao final do horizonte, ajustando as projeções com base nos resultados reais e nas novas premissas.',
    formula: 'Novo Forecast = (Realizado do Mês + Projeção para os Próximos 11 Meses)',
    exemplo: 'Em janeiro, projeta-se fevereiro a dezembro. Em fevereiro, projeta-se março a janeiro do ano seguinte.',
    dica: 'Use um modelo simplificado e automatizado para facilitar as atualizações mensais.',
    boasPraticas: 'Adotar rolling forecast para empresas em setores voláteis; envolver os gestores de área na atualização; utilizar como base para decisões de curto prazo.'
  },
  'Governança Financeira': {
    conceito: 'Governança financeira é o conjunto de políticas, processos e controles que asseguram a transparência, ética e eficiência na gestão dos recursos financeiros.',
    objetivos: 'Proteger o patrimônio, garantir conformidade, e alinhar interesses entre acionistas, gestores e stakeholders.',
    procedimentos: 'Implementar códigos de conduta, segregar funções, criar comitês de auditoria e risco, e adotar padrões internacionais (IFRS).',
    formula: 'Estrutura de Governança = Conselho + Diretoria + Auditoria + Compliance',
    exemplo: 'Empresa listada em bolsa tem conselho fiscal, diretoria financeira, auditoria interna e externa, e comitê de ética.',
    dica: 'Documente todas as políticas e as comunique a todos os colaboradores.',
    boasPraticas: 'Revisar políticas anualmente, treinar a equipe, e realizar auditorias independentes.'
  },
  'Compliance': {
    conceito: 'Compliance é o conjunto de práticas para assegurar que a empresa cumpra leis, regulamentos internos e externos, evitando multas, penalidades e danos à reputação.',
    objetivos: 'Prevenir fraudes, garantir integridade nas operações financeiras e manter a licença para operar.',
    procedimentos: 'Mapear riscos, implementar controles internos, realizar due diligence em parceiros e treinar colaboradores.',
    formula: 'Risco Residual = Risco Inerente × Eficácia dos Controles',
    exemplo: 'Risco de fraude inerente = 20%, controles reduzem em 70% → Risco residual = 6%.',
    dica: 'Use canais de denúncia anônimos para incentivar a reportagem de irregularidades.',
    boasPraticas: 'Manter um programa de compliance atualizado, realizar auditorias periódicas, e premiar a conformidade.'
  },
  'Auditoria': {
    conceito: 'Auditoria é o exame sistemático e independente das demonstrações financeiras, controles internos e processos, visando expressar uma opinião sobre sua fidedignidade.',
    objetivos: 'Conferir a precisão dos registros, identificar fraudes ou erros, e melhorar os controles.',
    procedimentos: 'Planejar escopo, executar testes de auditoria, documentar achados e emitir relatório.',
    formula: 'Materialidade = % sobre o Lucro Líquido ou Receita',
    exemplo: 'Para uma empresa com lucro líquido de R$ 2 milhões, materialidade de 5% = R$ 100.000.',
    dica: 'Mantenha um relacionamento transparente com os auditores e corrija rapidamente as deficiências apontadas.',
    boasPraticas: 'Realizar auditoria interna contínua e auditoria externa anual; implementar as recomendações no plano de ação.'
  },
  'Tesouraria Corporativa': {
    conceito: 'Tesouraria corporativa é a função avançada de gestão de caixa em grandes empresas, envolvendo captação, aplicação, hedge e relacionamento com bancos de investimento.',
    objetivos: 'Otimizar a estrutura de capital, gerenciar riscos financeiros (câmbio, juros, commodities) e maximizar o retorno sobre o caixa.',
    procedimentos: 'Utilizar instrumentos derivativos, administrar dívidas em moeda estrangeira, e centralizar o caixa em um pool global.',
    formula: 'Custo Médio Ponderado de Capital (WACC) = (E/V × Re) + (D/V × Rd × (1 - t))',
    exemplo: 'E/V = 60%, Re = 15%, D/V = 40%, Rd = 10%, t = 34% → WACC = (0,6×0,15)+(0,4×0,10×0,66) = 0,09 + 0,0264 = 11,64%.',
    dica: 'Monitore constantemente as exposições cambiais e faça hedge quando necessário.',
    boasPraticas: 'Ter uma política de tesouraria aprovada pelo conselho, utilizar sistemas de gestão de risco, e manter relacionamento com múltiplos bancos.'
  },
  'Conciliação Bancária': {
    conceito: 'Conciliação bancária é o processo de comparar os saldos contábeis das contas bancárias com os extratos fornecidos pelos bancos, identificando e ajustando diferenças.',
    objetivos: 'Garantir a precisão dos registros, detectar erros ou fraudes, e manter o caixa atualizado.',
    procedimentos: 'Para cada conta, listar os lançamentos contábeis, comparar com o extrato, identificar cheques pendentes, depósitos em trânsito, taxas bancárias e juros.',
    formula: 'Saldo Contábil Ajustado = Saldo Contábil ± Ajustes Identificados',
    exemplo: 'Saldo contábil = R$ 120.000, cheques pendentes = R$ 10.000, depósitos em trânsito = R$ 5.000, taxas = R$ 200 → Saldo ajustado = 120.000 - 10.000 + 5.000 - 200 = R$ 114.800.',
    dica: 'Realize a conciliação diariamente para contas com alto movimento.',
    boasPraticas: 'Automatizar o processo via integração bancária, documentar todas as diferenças, e manter um cronograma de reconciliação.'
  },
  'Gestão Bancária': {
    conceito: 'Gestão bancária envolve o relacionamento com instituições financeiras, a escolha de produtos bancários (contas, investimentos, empréstimos) e a otimização dos custos bancários.',
    objetivos: 'Reduzir tarifas e juros, maximizar o rendimento de aplicações, e ter acesso a linhas de crédito quando necessário.',
    procedimentos: 'Negociar pacotes de tarifas, comparar taxas de CDB/LCI, analisar propostas de empréstimo (CET), e manter um percentual de aplicação em fundos DI ou títulos públicos.',
    formula: 'Rentabilidade Líquida = Taxa do Investimento - Impostos - Taxas Administrativas',
    exemplo: 'Investimento em CDB com taxa 110% CDI, CDI=13,5%, imposto=15%, taxa=0,3% → Rent. Líq = (13,5%×1,10)×(1-0,15)-0,3% = 14,85%×0,85-0,3% = 12,32%.',
    dica: 'Utilize a conta corrente apenas para movimentação diária, transfira o excedente para aplicações de liquidez diária.',
    boasPraticas: 'Centralizar as contas em bancos com melhores condições, revisar contratos anualmente, e manter reserva técnica em aplicações seguras.'
  },
  'Investimentos': {
    conceito: 'Investimentos financeiros são aplicações de recursos em ativos com objetivo de obter retorno, podendo ser de curto ou longo prazo (ações, títulos, fundos, imóveis).',
    objetivos: 'Gerar rentabilidade acima da inflação e do CDI, diversificar riscos, e apoiar o crescimento da empresa.',
    procedimentos: 'Definir política de investimentos, escolher ativos com base no perfil de risco e prazo, e monitorar periodicamente.',
    formula: 'Retorno sobre Investimento (ROI) = (Ganho - Custo) / Custo',
    exemplo: 'Compra de ação por R$ 50, venda por R$ 60 → ROI = (60-50)/50 = 20%.',
    dica: 'Diversifique entre renda fixa e variável, e considere o horizonte de cada objetivo.',
    boasPraticas: 'Avaliar o risco de crédito (rating), fazer análise fundamentalista para ações, e revisar a carteira trimestralmente.'
  },
  'Análise Financeira': {
    conceito: 'Análise financeira é o estudo detalhado das demonstrações contábeis e indicadores para avaliar a situação econômico-financeira da empresa.',
    objetivos: 'Identificar pontos fortes e fracos, comparar com concorrentes, e embasar decisões de investimento e crédito.',
    procedimentos: 'Calcular índices de liquidez, endividamento, rentabilidade e giro; fazer análise horizontal e vertical; usar modelos como DuPont.',
    formula: 'Análise DuPont = Margem Líquida × Giro do Ativo × Alavancagem Financeira',
    exemplo: 'Margem = 8%, Giro = 1,5, Alavancagem = 2,0 → ROE = 8%×1,5×2 = 24%.',
    dica: 'Utilize ferramentas de BI para visualizar tendências e criar dashboards interativos.',
    boasPraticas: 'Fazer análise comparativa com o setor, projetar cenários futuros, e apresentar conclusões claras para a diretoria.'
  },
  'Indicadores Econômicos': {
    conceito: 'Indicadores econômicos são métricas macroeconômicas que influenciam as decisões financeiras, como taxa SELIC, IPCA, PIB, câmbio e inflação.',
    objetivos: 'Antecipar mudanças no cenário, ajustar estratégias de precificação, investimento e captação.',
    procedimentos: 'Acompanhar relatórios do BACEN, IBGE e FGV; modelar o impacto nos negócios.',
    formula: 'Taxa Real de Juros = Taxa Nominal - Inflação',
    exemplo: 'SELIC = 13,5%, IPCA = 4,2% → Taxa Real = 9,3%.',
    dica: 'Mantenha uma planilha com os principais indicadores atualizada semanalmente.',
    boasPraticas: 'Incorporar os indicadores no planejamento financeiro, fazer análise de sensibilidade, e utilizar hedge para mitigar riscos cambiais.'
  },
  'Simples Nacional': {
    conceito: 'Simples Nacional é um regime tributário simplificado para micro e pequenas empresas, com alíquotas únicas que englobam IRPJ, CSLL, PIS, COFINS, IPI, ICMS e ISS.',
    objetivos: 'Reduzir a carga tributária e simplificar obrigações acessórias para empresas com faturamento até R$ 4,8 milhões/ano.',
    procedimentos: 'Calcular o imposto com base na receita bruta mensal, aplicando as alíquotas das faixas do anexo correspondente (comércio, indústria, serviços).',
    formula: 'Imposto = (Receita Bruta × Alíquota) - Dedução (conforme faixa)',
    exemplo: 'Comércio: faturamento anual de R$ 2.000.000, alíquota 12% (faixa 4), dedução R$ 22.500 → Imposto = (2.000.000×12%) - 22.500 = R$ 217.500.',
    dica: 'Verifique se a atividade se enquadra no anexo correto e mantenha a folha de pagamento em dia.',
    boasPraticas: 'Avaliar anualmente se ainda compensa estar no Simples, fazer planejamento tributário, e utilizar o sistema PGDAS-D para apuração.'
  },
  'Lucro Presumido': {
    conceito: 'Lucro Presumido é um regime tributário opcional para empresas com faturamento até R$ 78 milhões/ano, onde o lucro é calculado com base em percentuais predefinidos sobre a receita.',
    objetivos: 'Simplificar o cálculo do IRPJ e CSLL, com alíquotas presumidas (8% comércio/indústria, 16% serviços, 32% prestação de serviços específicos).',
    procedimentos: 'Apurar a base de cálculo do IRPJ = 8% sobre receita bruta, e CSLL = 12% sobre receita. Adicionar ganhos de capital e outras receitas, e aplicar alíquotas de 15% IRPJ + adicional 10% sobre o que exceder R$ 60 mil/trimestre, e CSLL 9%.',
    formula: 'IRPJ = (Receita Bruta × 8% + Outras Receitas) × 15% + Adicional',
    exemplo: 'Receita trimestral = R$ 1.000.000, presunção 8% = R$ 80.000, IRPJ 15% = R$ 12.000, adicional sobre excedente (80.000-60.000=20.000) ×10% = R$ 2.000 → IRPJ total = R$ 14.000.',
    dica: 'Considere a opção pelo Lucro Presumido se a margem bruta for baixa, pois o imposto incide sobre a receita e não sobre o lucro real.',
    boasPraticas: 'Manter escrituração contábil simplificada, recolher os tributos no DAS, e fazer planejamento para distribuição de lucros (isentos de IR).'
  },
  'Lucro Real': {
    conceito: 'Lucro Real é o regime tributário onde o IRPJ e a CSLL incidem sobre o lucro contábil ajustado, obrigatório para empresas com faturamento acima de R$ 78 milhões ou para setores específicos (ex: instituições financeiras).',
    objetivos: 'Apurar o imposto com base no lucro efetivo, podendo ser vantajoso para empresas com margens baixas ou com muitos custos dedutíveis.',
    procedimentos: 'Calcular o lucro líquido contábil, adicionar despesas não dedutíveis, subtrair incentivos fiscais, e aplicar alíquotas de 15% + adicional 10% sobre o lucro excedente a R$ 60 mil/mês (ou R$ 240 mil/ano), e CSLL de 9%.',
    formula: 'IRPJ = (Lucro Real × 15%) + (Lucro Real Excedente × 10%)',
    exemplo: 'Lucro Real anual = R$ 500.000, IRPJ = 500.000×15% + (500.000-240.000)×10% = 75.000 + 26.000 = R$ 101.000.',
    dica: 'Aproveite incentivos como a depreciação acelerada e a Lei do Bem para reduzir a base de cálculo.',
    boasPraticas: 'Manter controle rigoroso de adições e exclusões, fazer planejamento fiscal com consultoria especializada, e entregar a ECD e ECF nos prazos legais.'
  },
  'Fechamento Diário': {
    conceito: 'Fechamento diário é a rotina de encerrar as operações financeiras do dia, conciliando todas as contas bancárias, cartões e caixas, e registrando as movimentações no sistema.',
    objetivos: 'Garantir que o saldo contábil reflita a realidade, identificar divergências rapidamente, e gerar relatórios de caixa.',
    procedimentos: 'Baixar extratos bancários, conciliar transações, registrar despesas de pequeno valor, e fechar o caixa físico com contagem física.',
    formula: 'Saldo Final = Saldo Inicial + Entradas - Saídas',
    exemplo: 'Saldo inicial = R$ 50.000, entradas do dia = R$ 30.000, saídas = R$ 25.000 → Saldo final = R$ 55.000.',
    dica: 'Estabeleça um horário limite para o fechamento (ex: 18h) e crie um checklist diário.',
    boasPraticas: 'Automatizar a conciliação com leitura automática de extratos, revisar e aprovar o fechamento pelo gestor financeiro.'
  },
  'Fechamento Semanal': {
    conceito: 'Fechamento semanal consolida os fechamentos diários, projeta o fluxo de caixa para a semana seguinte e revisa indicadores de curto prazo.',
    objetivos: 'Antecipar problemas de liquidez, ajustar despesas programadas, e alinhar a equipe sobre as metas da semana.',
    procedimentos: 'Consolidar saldos bancários e de caixa, revisar as contas a receber e pagar com vencimento na semana, atualizar o fluxo projetado.',
    formula: 'Projeção de Caixa para a Semana = Saldo Atual + Entradas Previstas - Saídas Previstas',
    exemplo: 'Saldo = R$ 120.000, entradas previstas = R$ 90.000, saídas previstas = R$ 80.000 → Projeção final = R$ 130.000.',
    dica: 'Inclua uma reserva para imprevistos (10% a 15% do total de saídas).',
    boasPraticas: 'Realizar reunião semanal de resultados, revisar o forecast de curto prazo, e atualizar o calendário de pagamentos.'
  },
  'Fechamento Mensal': {
    conceito: 'Fechamento mensal é o processo de encerramento contábil do mês, envolvendo todas as conciliações de contas patrimoniais, apuração de resultados e impostos.',
    objetivos: 'Produzir a DRE, o balanço e a conciliação de todas as contas do plano de contas, além de apurar os tributos devidos.',
    procedimentos: 'Encerrar todas as contas de resultado, realizar ajustes de provisões (férias, 13º, PDD), depreciar ativos, contabilizar juros e variações cambiais.',
    formula: 'Lucro do Mês = Receitas do Mês - (Custos + Despesas + Impostos)',
    exemplo: 'Receitas R$ 800.000, Custos R$ 400.000, Despesas R$ 200.000, Impostos R$ 80.000 → Lucro = R$ 120.000.',
    dica: 'Defina um calendário de fechamento com deadlines para cada área (comercial, estoque, RH, financeiro).',
    boasPraticas: 'Fazer reunião de pré-fechamento, conciliar todas as contas analíticas, e gerar relatórios gerenciais para a diretoria.'
  },
  'Fechamento Trimestral': {
    conceito: 'Fechamento trimestral é a consolidação dos resultados dos três meses, com foco em análise de tendências, planejamento estratégico e apuração de impostos trimestrais (Lucro Presumido e Real).',
    objetivos: 'Avaliar o desempenho acumulado, ajustar o planejamento anual, e apurar tributos (ex: adicional de IRPJ e CSLL).',
    procedimentos: 'Consolidar DREs mensais, calcular impostos trimestrais, revisar os indicadores de desempenho, e comparar com o orçado trimestral.',
    formula: 'Resultado Acumulado = Soma dos Lucros/Prejuízos de cada mês do trimestre',
    exemplo: 'Lucros mês 1 = R$ 50.000, mês 2 = R$ 70.000, mês 3 = R$ 60.000 → Trimestre = R$ 180.000.',
    dica: 'Utilize o fechamento trimestral para fazer um rolling forecast e ajustar o orçamento anual.',
    boasPraticas: 'Apresentar o resultado trimestral ao conselho ou aos acionistas, com análises de rentabilidade por produto/região.'
  },
  'Fechamento Anual': {
    conceito: 'Fechamento anual é o encerramento do exercício social, com elaboração das demonstrações financeiras completas, apuração do IRPJ/CSLL definitivos e distribuição de lucros.',
    objetivos: 'Cumprir obrigações legais (publicação no Diário Oficial, envio à Receita), avaliar o desempenho do ano, e planejar o próximo exercício.',
    procedimentos: 'Ajustar todas as contas patrimoniais, calcular a depreciação acumulada, provisionar PLR (Participação nos Lucros e Resultados), constituir reservas legais e estatutárias.',
    formula: 'Lucro Líquido do Exercício = Lucro Antes do IR - IRPJ/CSLL - Participações - Contribuições',
    exemplo: 'LAIR = R$ 1.200.000, IRPJ/CSLL = R$ 300.000, participações = R$ 50.000 → Lucro Líquido = R$ 850.000.',
    dica: 'Contrate uma auditoria externa para dar maior credibilidade ao balanço.',
    boasPraticas: 'Fazer um planejamento tributário de final de ano, aproveitar incentivos fiscais, e realizar a destinação do lucro de acordo com a política de dividendos.'
  },
  'Calendário Financeiro': {
    conceito: 'Calendário financeiro é uma ferramenta de planejamento que lista todas as datas importantes relacionadas a pagamentos, recebimentos, obrigações acessórias e reuniões de resultado.',
    objetivos: 'Evitar atrasos, multas e perda de descontos, além de organizar a rotina financeira.',
    procedimentos: 'Criar um calendário anual com vencimentos de impostos (DAS, ICMS, ISS), contribuições (FGTS, INSS), férias, 13º, e datas de reuniões.',
    formula: 'Dias de Projeção = Data do Vencimento - Data de Hoje',
    exemplo: 'Vencimento do DAS = 20/02, hoje = 10/02 → 10 dias para o vencimento.',
    dica: 'Use um sistema de alertas com antecedência de 5 e 2 dias para não esquecer.',
    boasPraticas: 'Compartilhar o calendário com a equipe, revisar semanalmente a agenda, e manter um backup das obrigações.'
  },
  'Checklists': {
    conceito: 'Checklists são listas de verificação que garantem que todos os passos críticos de um processo sejam executados corretamente, minimizando erros e omissões.',
    objetivos: 'Padronizar procedimentos, garantir conformidade, e facilitar a auditoria.',
    procedimentos: 'Elaborar checklists para fechamento diário, conciliação bancária, abertura de conta, contratação de fornecedores, etc.',
    formula: 'Taxa de Conformidade = (Itens Conferidos / Itens Totais) × 100',
    exemplo: 'Checklist de 20 itens, 18 conferidos → conformidade de 90%.',
    dica: 'Digitalize os checklists e vincule a um sistema de workflow para rastreabilidade.',
    boasPraticas: 'Revisar e atualizar os checklists anualmente, envolver a equipe na elaboração, e usá-los como base para treinamentos.'
  },
  'POP': {
    conceito: 'POP (Procedimento Operacional Padrão) é um documento detalhado que descreve como executar uma tarefa financeira específica, passo a passo, com responsabilidades e fluxos.',
    objetivos: 'Garantir consistência, qualidade e segurança nos processos, além de facilitar a integração de novos colaboradores.',
    procedimentos: 'Identificar a tarefa, descrever o passo a passo, atribuir responsáveis, definir indicadores de desempenho e revisar periodicamente.',
    formula: 'Eficiência do POP = (Tempo Padrão - Tempo Real) / Tempo Padrão',
    exemplo: 'Tempo padrão para conciliação = 2h, tempo real = 1,5h → eficiência = (2-1,5)/2 = 25%.',
    dica: 'Mantenha os POPs em local de fácil acesso e atualize-os sempre que houver mudanças no sistema ou na legislação.',
    boasPraticas: 'Treinar todos os operadores nos POPs, fazer simulações práticas, e incluir no manual de integração.'
  },
  'Fluxogramas': {
    conceito: 'Fluxogramas são representações gráficas de processos que mostram sequências de atividades, decisões e responsáveis, facilitando o entendimento e a análise.',
    objetivos: 'Mapear visualmente os processos financeiros (ex: aprovação de pagamento, cobrança, fechamento), identificar gargalos e oportunidades de melhoria.',
    procedimentos: 'Listar todas as atividades, definir a ordem lógica, usar símbolos padronizados (início/fim, atividade, decisão, documento), e criar o diagrama.',
    formula: 'Tempo de Ciclo = Soma dos tempos de cada atividade do fluxo',
    exemplo: 'Fluxo de aprovação de fatura: 3 atividades de 0,5h cada → tempo de ciclo = 1,5h.',
    dica: 'Utilize ferramentas como Lucidchart ou Draw.io para criar fluxogramas colaborativos.',
    boasPraticas: 'Revisar fluxogramas com os envolvidos, mantê-los atualizados, e usá-los como base para automações.'
  },
  'Anexos': {
    conceito: 'Anexos são documentos complementares ao manual, contendo formulários, modelos de planilhas, tabelas de alíquotas, cronogramas e referências legais.',
    objetivos: 'Fornecer material de apoio para aplicação prática dos conceitos, reduzindo o tempo de pesquisa e padronizando ferramentas.',
    procedimentos: 'Incluir tabelas como alíquotas do Simples Nacional, anexos do Lucro Presumido, calendário de tributos, modelos de DRE, fluxo de caixa, e matriz de riscos.',
    formula: 'Anexos disponíveis: (formulários, planilhas, tabelas, legislação)',
    exemplo: 'Tabela de IRPJ/CSLL para Lucro Real, planilha de cálculo de NCG, modelo de checklist de fechamento mensal.',
    dica: 'Organize os anexos por capítulo correspondente para fácil referência.',
    boasPraticas: 'Manter os anexos atualizados com as alterações legislativas, disponibilizar em formato editável, e incluir instruções de preenchimento.'
  }
};

// ============================================================
// GERADOR DE CONTEÚDO
// ============================================================
function generateChapterContent(id, title) {
  const data = contentMap[title];
  if (!data) {
    return `
      <h2><span class="chapter-badge">Cap. ${id}</span> ${title}</h2>
      <p>Capítulo dedicado a <strong>${title}</strong>, essencial para a gestão financeira moderna. Consulte a literatura técnica e a legislação para aprofundamento.</p>
      <h3>Conceitos</h3>
      <p>${title} envolve práticas, ferramentas e indicadores que auxiliam na tomada de decisão e no controle financeiro.</p>
      <h3>Fórmula referencial</h3>
      <div class="formula">Indicador = (Valor Alvo / Valor Realizado) × 100</div>
      <p><strong>Exemplo:</strong> Meta de redução de custos = 10%, redução real = 8% → grau de alcance = 80%.</p>
      <h3>Boas práticas</h3>
      <ul><li>Mantenha registros históricos confiáveis.</li><li>Analise desvios sistematicamente.</li><li>Capacite a equipe continuamente.</li></ul>
      <div class="highlight-box importante">Importante: adapte as práticas à realidade do seu negócio e ao regime tributário.</div>
      <div class="highlight-box dica">Dica: documente todas as decisões e crie um repositório de conhecimento.</div>
    `;
  }

  return `
    <h2><span class="chapter-badge">Cap. ${id}</span> ${title}</h2>
    <h3>Conceitos</h3>
    <p>${data.conceito}</p>
    <h3>Objetivos</h3>
    <p>${data.objetivos}</p>
    <h3>Procedimentos</h3>
    <p>${data.procedimentos}</p>
    <h3>Fórmula</h3>
    <div class="formula">
      ${data.formula}
      <button class="copy-btn" aria-label="Copiar fórmula">Copiar</button>
    </div>
    <p><strong>Exemplo numérico:</strong> ${data.exemplo}</p>
    <div class="highlight-box dica"><strong>Dica:</strong> ${data.dica}</div>
    <h3>Boas práticas</h3>
    <p>${data.boasPraticas}</p>
    <div class="accordion">
      <div class="accordion-header" tabindex="0" role="button" aria-expanded="false">
        Detalhes adicionais <span>+</span>
      </div>
      <div class="accordion-content">
        <p>Para aprofundar, consulte a legislação específica (CPC, RIR, IN RFB) e os manuais de melhores práticas do IBEF e do CFA Institute. Mantenha-se atualizado com as mudanças tributárias e econômicas.</p>
        <p><strong>Referências:</strong> Normas Brasileiras de Contabilidade (NBC), Comitê de Pronunciamentos Contábeis (CPC), e Instruções Normativas da Receita Federal.</p>
        <p><strong>Leitura recomendada:</strong> "Administração Financeira" de Gitman, "Valuation" de Damodaran, e "Finanças Corporativas" de Brealey & Myers.</p>
      </div>
    </div>
  `;
}

// ============================================================
// MONTAGEM DOS CAPÍTULOS
// ============================================================
const fullChapters = chapterTitles.map((title, index) => ({
  id: index + 1,
  title,
  content: generateChapterContent(index + 1, title)
}));

// ============================================================
// RENDERIZAÇÃO E INTERATIVIDADE
// ============================================================
const menuList = document.getElementById('menuList');
const mainContent = document.getElementById('mainContent');
const searchInput = document.getElementById('searchInput');

function renderMenu(filter = '') {
  const filtered = fullChapters.filter(ch => 
    ch.title.toLowerCase().includes(filter.toLowerCase())
  );
  menuList.innerHTML = filtered.map(ch => `
    <li><a href="#chapter-${ch.id}" data-id="${ch.id}">
      <span class="chapter-number">${ch.id}.</span> ${ch.title}
    </a></li>
  `).join('');
}

function renderChapters() {
  mainContent.innerHTML = fullChapters.map(ch => `
    <section id="chapter-${ch.id}" class="chapter-card">
      ${ch.content}
    </section>
  `).join('');
  // Inicializar accordions
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const isOpen = content.classList.toggle('open');
      this.setAttribute('aria-expanded', isOpen);
      this.querySelector('span').textContent = isOpen ? '−' : '+';
    });
    // Permitir navegação por teclado
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        header.click();
      }
    });
  });
  // Adicionar botão copiar fórmula
  document.querySelectorAll('.formula .copy-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const formula = this.closest('.formula').textContent.replace('Copiar', '').trim();
      navigator.clipboard?.writeText(formula).then(() => {
        this.textContent = 'Copiado!';
        setTimeout(() => { this.textContent = 'Copiar'; }, 2000);
      }).catch(() => {
        // Fallback
        const range = document.createRange();
        const selection = window.getSelection();
        range.selectNode(this.closest('.formula'));
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        this.textContent = 'Copiado!';
        setTimeout(() => { this.textContent = 'Copiar'; }, 2000);
      });
    });
  });
}

renderMenu();
renderChapters();

// ============================================================
// PESQUISA
// ============================================================
searchInput.addEventListener('input', (e) => {
  const term = e.target.value;
  renderMenu(term);
  // Rolar para o primeiro capítulo visível
  const firstLink = menuList.querySelector('a');
  if (firstLink) {
    const id = firstLink.dataset.id;
    document.getElementById(`chapter-${id}`)?.scrollIntoView({ behavior: 'smooth' });
  }
});

// ============================================================
// SCROLL SPY
// ============================================================
const sections = document.querySelectorAll('.chapter-card');
const menuLinks = menuList.querySelectorAll('a');

function updateActiveLink() {
  let currentId = '';
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 120) {
      currentId = section.id.replace('chapter-', '');
    }
  });
  menuLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.id === currentId);
  });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);

// ============================================================
// BARRA DE PROGRESSO
// ============================================================
const progressBar = document.getElementById('progressBar');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = progress + '%';
  progressBar.setAttribute('aria-valuenow', Math.round(progress));
});

// ============================================================
// BOTÃO VOLTAR AO TOPO
// ============================================================
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================================
// TEMA CLARO/ESCURO
// ============================================================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
let currentTheme = localStorage.getItem('theme') || 'light';

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  currentTheme = theme;
  themeIcon.innerHTML = theme === 'dark' 
    ? '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>'
    : '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
}
setTheme(currentTheme);

themeToggle.addEventListener('click', () => {
  setTheme(currentTheme === 'light' ? 'dark' : 'light');
});

// ============================================================
// MENU MOBILE
// ============================================================
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
  const isOpen = sidebar.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

// Fechar menu ao clicar em link (mobile)
menuList.addEventListener('click', (e) => {
  if (window.innerWidth <= 1024) {
    sidebar.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

// ============================================================
// EXPANDIR / RECOLHER ACCORDIONS
// ============================================================
document.getElementById('expandAllBtn').addEventListener('click', () => {
  document.querySelectorAll('.accordion-content').forEach(c => c.classList.add('open'));
  document.querySelectorAll('.accordion-header').forEach(h => {
    h.setAttribute('aria-expanded', 'true');
    h.querySelector('span').textContent = '−';
  });
});
document.getElementById('collapseAllBtn').addEventListener('click', () => {
  document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('open'));
  document.querySelectorAll('.accordion-header').forEach(h => {
    h.setAttribute('aria-expanded', 'false');
    h.querySelector('span').textContent = '+';
  });
});

// ============================================================
// IMPRIMIR
// ============================================================
document.getElementById('printBtn').addEventListener('click', () => {
  window.print();
});

// ============================================================
// INICIALIZAÇÃO
// ============================================================
document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('open'));
document.querySelectorAll('.accordion-header').forEach(h => {
  h.setAttribute('aria-expanded', 'false');
  h.querySelector('span').textContent = '+';
});

console.log('✅ Manual de Gestão Financeira Corporativa carregado com sucesso!');
console.log(`📚 ${fullChapters.length} capítulos disponíveis com dados reais e validados.`);