# Resumo dos ajustes — Checklist de Preventivas (Sephora 2026 · AlliedIT)

Documento para continuar o trabalho em outro perfil ou outra conta do Claude Code.
Última atualização: 07/10/2026 (Planejamento BF PUBLICADO, seção 8.28; histórico completo e tela mantida ao atualizar PUBLICADOS, seção 8.27; Painel com menu lateral, Cadastro recolhível e Área do Técnico PUBLICADOS, seção 8.26; prazo da campanha 30/10 PUBLICADO, seção 8.25; feriados na Agenda e Reagendamento dividido PUBLICADOS, seção 8.24; etiqueta P de protocolo e card Reagendamento Lojas no Painel PUBLICADOS, seção 8.23; dados do técnico em tabela própria e proteção contra exibição em outro site PUBLICADOS, seção 8.22; proteções do navegador e biblioteca com versão fixa PUBLICADAS, seção 8.21; novo visual do Agendamento e login publicados, seção 8.20).

---

## 1. Onde está cada coisa

| Item | Situação |
|---|---|
| Repositório | `alliedit-preventivas/checklist-alliedit` no GitHub (público) |
| `develop` | Desenvolvimento/testes. Usa o **Supabase de TESTES** e mostra a etiqueta "Teste Local" no topo |
| `main` | **PRODUÇÃO**. Usa o **Supabase de PRODUÇÃO**. Tem só o `index.html` |
| Site no ar | https://alliedit-preventivas.github.io/checklist-alliedit/ — publicado automaticamente pelo GitHub Pages a partir da `main` (atualiza em 1 a 3 minutos após o envio) |
| Última publicação | `main` = commit `8c4da68` (08/10/2026), equivale à `develop` `ede2eef` |
| Pasta principal do projeto (desde 03/10/2026) | Computador `DESKTOP-9DUKAL6`, em `F:\_Projetos_AlliedIT\Portal_Preventivas_v1` (disco local, **não** está no Google Drive). Ao lado do `checklist-alliedit` ficam as planilhas, os arquivos de apoio (`Rio Sul.pdf`, `Parque Sephora.txt`, pasta `_imagens`) e as pastas de backup `bkp_prod` e `bkp_teste` |
| Cópia antiga | A pasta desatualizada do outro computador foi trazida para este, em `F:\_Projetos_AlliedIT\#Nao-Mexer-Mais` (projeto antigo em `Portal_Preventivas_NAO-MEXER-MAIS\checklist-alliedit-v1`), como backup por alguns dias (03/10/2026). **Não trabalhar nela.** Conferido: todo o código dela já está no GitHub (sem ajustes pendentes). Só nela existem as tags locais `antes-tema-cores`, `antes-painel-gestao-novo` e `antes-escala-fontes` (as versões que elas marcam estão no histórico do GitHub) e 7 arquivos fora do código, **já copiados para a pasta principal** (ver abaixo). Com isso, a cópia antiga pode ser excluída sem perda |

**Arquivos trazidos da cópia antiga para a pasta principal (03/10/2026)**, conferidos idênticos aos originais (os originais continuam na cópia antiga):
- `PREVENTIVA 2025 - SEPHORA (versão completa 28-09).xlsx`: versão de 28/09/2026 da planilha de 2025, **mais completa**, com 3 abas (Sheet1, Resumo, Incidentes). A `PREVENTIVA 2025 - SEPHORA(1-41).xlsx` (27/09, 1 aba) continua na pasta, sem alteração.
- `Rio Sul.pdf` e `Parque Sephora.txt` (lista de itens usada no card Parque Sephora).
- `_imagens\`: `mobile_gertec.png` (foto original do GPOS Gertec) e `sugestao.png`, `sugestao2.png` e `sugestao3.png` (modelos do Painel novo da seção 8.7).


**Diferença obrigatória entre `main` e `develop`** (nunca misturar):
1. `SUPABASE_URL` (projeto de produção x projeto de testes)
2. `SUPABASE_ANON_KEY` (chave de produção x chave de testes)
3. A etiqueta `<div class="sub2">Teste Local</div>` (existe só na `develop`)

### Pontos de restauração (tags no GitHub)

| Tag | O que guarda |
|---|---|
| `restauracao-antes-setores` | `develop` antes do checklist por setores |
| `producao-antes-setores-2026-09-24` | Produção antes do checklist por setores e do PDF |
| `producao-antes-telefone-2026-09-24` | Produção antes do card Telefone |
| `producao-antes-maquinas-pos-2026-09-24` | Produção antes do PINPAD reserva, Máquinas POS e fotos |
| `producao-antes-eaton-substituicao-2026-09-24` | Produção antes do EATON na substituição e do login "Acesso ao Painel" |
| `producao-antes-mercado-pago-lista-2026-09-24` | Produção antes da lista de Mercado Pago / POS PIX (versão anterior à atual) |
| `producao-antes-trava-encerramento` | Produção antes da trava de encerramento (modal ao anexar RAT) |
| `antes-trava-encerramento` | `develop` antes da trava de encerramento |
| `antes-tema-cores` (só no computador local) | `develop` antes do botão de cores AlliedIT / Sephora (commit `3c1b575`) |
| branch `restauracao-producao-antes-aviso-pendencias-2026-09-27` | Produção antes do aviso "Tudo certo!" |
| branch `restauracao-producao-antes-painel-executivo-2026-09-28` | Produção antes do Painel Executivo, comparativos de troca, Painel reorganizado e correção do "Atrasado" (commit `adf6366`) |
| branch `restauracao-producao-antes-link-gestao-2026-09-28` | Produção antes do link da gestão, Lojas em Levantamento escondido e substituições sozinho na linha (commit `15f0165`) |
| `producao-antes-janela-status-2026-09-28` | Produção antes das regionais atualizadas, SP numa linha só e janela das lojas por status (commit `41cce39`) |
| `producao-antes-cores-sephora-2026-09-28` | Produção antes das cores AlliedIT / Sephora no link da gestão (commit `8854816`) |
| `producao-antes-painel-gestao-novo-2026-09-28` | Produção antes do Painel novo do link da gestão, da fonte Titillium e do Parque Sephora (commit `dceefc1`) |
| `producao-antes-sem-gpos-2026-09-28` | Produção antes de tirar o GPOS Backup do checklist do técnico (commit `e8ebe10`) |
| `producao-antes-gpos-gertec-2026-09-28` | Produção antes do grupo Máquinas GPOS Gertec no checklist do técnico (commit `ee22b5c`) |
| `producao-antes-gaveta-pinpad-2026-09-28` | Produção antes da gaveta de dinheiro e do "PINPAD apresenta defeito?" nos PDVs (commit `e9e8f56`) |
| branch `restauracao-producao-antes-alertas-escada-touch-2026-09-29` | Produção antes de remover os alertas de escada móvel e USB do touch (commit `ab7c0a6`) |
| `producao-antes-agenda-mensal-2026-10-03` | Produção antes da Agenda Mensal no Dashboard (commit `02da3a2`) |
| `producao-antes-novo-visual-2026-10-06` | Produção antes do novo visual do Agendamento, da nova tela de login e da fonte Chillax (commit `cc20586`) |
| `producao-antes-seguranca-item5-2026-10-06` | Produção antes das proteções do navegador e da biblioteca com versão fixa (commit `64f4a8c`) |
| `producao-antes-seguranca-item3-2026-10-06` | Produção antes da tabela própria dos dados do técnico e da proteção contra exibição em outro site (commit `5fb5226`) |
| `producao-antes-agenda-protocolo-reagendamento-2026-10-06` | Produção antes da etiqueta P e do card Reagendamento Lojas no Painel (commit `353ddb2`) |
| `producao-antes-feriados-reagendamento-2026-10-06` | Produção antes dos feriados na Agenda e da divisão do Reagendamento Lojas (commit `1c20282`) |
| `producao-antes-prazo-30-10-2026-10-06` | Produção antes da troca do prazo da campanha para 30/10 (commit `9da30c4`) |
| `producao-antes-painel-menu-lateral-2026-10-06` | Produção antes do Painel com menu lateral (commit `0ebfc95`) |
| `producao-antes-historico-completo-2026-10-06` | Produção antes do histórico completo e da tela mantida ao atualizar (commit `504bc31`) |
| `producao-antes-planejamento-bf-2026-10-07` | Produção antes do Planejamento BF (commit `477637d`) |
| `producao-antes-onepages-bf-2026-10-07` | Produção antes das One Pages BF (commit `9262bfd`) |
| `producao-antes-seguranca-item2-2026-10-07` | Produção antes do ajuste de salvamento das lojas (commit `d433c0b`) |
| `producao-antes-checklist-datas-2026-10-08` | Produção antes da gravação ao sair do checklist e do filtro de datas (commit `22bf06e`) |

Para voltar a produção a um desses pontos, peça ao Claude: "volte a produção para a tag X" (ele deve explicar e pedir confirmação antes).

**Observação (27/09/2026):** em uma sessão de nuvem (Claude Code on the web), criar tags novas e apagar branches remotas foi bloqueado por uma trava técnica do próprio ambiente (não é uma questão de autorização). Nessa sessão, o ponto de restauração precisou ser criado como **branch** em vez de tag: `restauracao-producao-antes-aviso-pendencias-2026-09-27` (aponta para a produção como estava antes do ajuste da seção 8). Se isso se repetir, use uma sessão local ou uma conta com permissão de publicação para criar as tags e publicar em produção.

---

## 2. Como rodar localmente (em qualquer perfil)

1. Baixar o projeto e entrar na branch `develop`.
2. Rodar o servidor local (precisa do Node.js instalado):
   ```
   node ferramentas/servidor-local.js
   ```
3. Abrir http://localhost:5174 (as portas 5173 e 5175 ficam livres para outro projeto).

No Claude Code (app desktop) já existe a configuração `.claude/launch.json` chamada `checklist-local`, que faz o mesmo.

---

## 3. Procedimento seguro de publicação (usado em todas as publicações)

Só com autorização explícita da usuária ("pode publicar"):
1. Salvar os ajustes na `develop` (commit).
2. Criar uma tag de restauração da produção atual (`producao-antes-...`) e enviar ao GitHub.
3. Enviar a `develop` ao GitHub.
4. Montar a versão de produção: copiar o `index.html` da `develop` e recolocar as 3 linhas de produção (URL, chave e sem "Teste Local").
5. Conferir: 0 ocorrências do Supabase de testes, chave igual à da produção, só o `index.html` alterado, e que a diferença é exatamente a dos ajustes.
6. Gravar na `main`, enviar, voltar para a `develop`.
7. Aguardar o site atualizar e conferir que o site no ar é igual à `main`.

---

## 4. Ajustes realizados

### 4.1 Layout e textos do formulário
- "Ocorrências e necessidades" fica acima do "Encerramento do atendimento", que fica acima da "Foto do RAT".
- Espaço entre os botões Sim/Não e o aviso vermelho do transformador da impressora.
- Ocorrências e necessidades: botões Sim/Não com liga/desliga (clicar de novo desmarca); abre sem resposta.

### 4.2 Checklist por etapas (setores)
- Ao abrir a loja: dados gerais, Início do atendimento e "Qual setor você gostaria de iniciar a preventiva?" com Rack, Gerência, Estoque e Stage de Vendas (com status Completo / pendentes / Não iniciado).
- Cada setor abre em página própria com "Voltar aos setores" e "Concluir setor" (valida só aquele setor e lista o que falta).
- Ocorrências, Encerramento, Foto do RAT e "Finalizar checklist" ficam na tela principal, abaixo dos setores.
- Links de pendência abrem o setor certo e vão direto ao campo.
- Checklist concluído abre só para consulta.

### 4.3 Nobreak de Rack
- EATON usa os mesmos 3 botões de autonomia da NHS (campo próprio `autonomiaEaton`; minutos antigos convertidos automaticamente e guardados como histórico).
- **Lojas EATON**: os mini nobreaks (Gerência, Estoque, PDVs) **não entram** em "Equipamentos para substituição" e não ficam em vermelho no PDF (nota "Loja EATON: mini nobreak não exigido"). O card de mini nobreak continua habilitado e obrigatório.
- **Nobreak de Rack com autonomia baixa** ("Abaixo de 5 minutos" ou "Desliga imediatamente") entra em "Equipamentos para substituição" **tanto NHS quanto EATON**, com a marca no nome (ex.: "Nobreak de Rack (EATON)"). A regra fica na função `autonomiaNobreakRack` e também considera checklists antigos do EATON que só tinham os minutos digitados.

### 4.4 Stage de Vendas
- IP do Mobile: campo livre, aceita só números e pontos (continua obrigatório).
- Card **Telefone** (Possui? Sim/Não; se Sim, número, IP e observação).
- Seção **Máquinas POS** (moldura com título):
  - **Mercado Pago / POS PIX**: lista de máquinas (até 5), com botão **"+ Adicionar Mercado Pago / POS PIX"** igual aos PDVs (a partir da 2ª dá para remover no "×"). Cada uma com foto de exemplo e Modelo / Nº Série ao lado, obrigatórios.
  - **POS REDE / CIELO**: duas fotos lado a lado (REDE e CIELO); o técnico clica na máquina encontrada e os campos Modelo e Nº Série são liberados. Obrigatório.
- Em cada PDV, seção **PINPAD REDE LARANJINHA** (foto à esquerda; Nº Rede, Nº Série e Modelo à direita, centralizados).
- Linhas de divisão entre as partes do PDV (identificação, Mini Nobreak, Impressora térmica, Leitor, PINPAD, Mouse/Teclado).

### 4.5 Gerência
- Card **PINPAD REDE/LARANJINHA (Reserva)** no final da Gerência:
  - "A loja possui PINPAD reserva funcionando?" → Sim, novo na caixa (Nº Série, Nº Rede, Modelo) / Não, quebrado ou não funciona (mesmos campos + defeito) / Não existe.
  - Se "Não existe", "Qual o motivo?" → Já foi trocado, aguardando chegada (alerta + nº do chamado) / Foi utilizado e não teve reposição (substituição + aviso para comunicar o Service Desk) / Outro motivo (descrição obrigatória).

### 4.6 PDF por loja
- Botão **"📄 Gerar PDF"** no cartão de cada loja **concluída**, na tela **Agendamento** (não existe PDF geral de todas as lojas).
- Nome sugerido do arquivo: `<nome da loja> - Checklist`.
- Páginas: 1) resumo (dados do atendimento, Equipamentos para substituição, Alertas, Observação da loja); 2) Equipamentos do Rack; 3) Gerência; 4) Estoque; 5) Stage de Vendas; 6) fotos reduzidas (RAT e relatórios de uso). Nas páginas dos setores entra só o que foi preenchido; problemas em vermelho.
- Funciona pela janela de impressão do navegador ("Salvar como PDF").

### 4.7 Menus
- "Gestão" passou a se chamar **"Painel"**; título da tela: **"Painel de Indicadores"** (só visualização).
- "Agendamento" concentra os cartões das lojas e os PDFs; "Técnico" é o acesso dos técnicos.
- Tela de login: título **"Acesso ao Painel"** (antes "Acesso à Gestão").

### 4.8 Painel Executivo (publicado em 28/09/2026)
- A tela **Painel** ganhou o bloco **"Painel Executivo: Preventiva 2026"** com cartões de indicadores: Lojas Cadastradas (e nº de estados), Concentração SP, Regionais Mapeadas (e lojas pendentes de alocação), Top Solicitação de Troca e Lojas em Levantamento.
- **Lojas em Levantamento (sem troca de equipamentos):** lojas inauguradas em 2026 (3096, 3130, 3135, 3114, 3142) e a loja em reforma 2868 (Leblon). Equipamento todo novo: a preventiva ali é só levantamento de informações. A lista fica fixa no código (`LOJAS_LEVANTAMENTO`). Por enquanto isso aparece **só no Painel**: as regras de "Equipamentos para substituição" e o PDF não mudaram.
- **Pareto de Problemas Recorrentes:** base histórica da Preventiva 2025 (41 lojas), com valores fixos no código (`PARETO_2025`). Não é calculado a partir dos checklists de 2026.
- Também: Concentração Territorial (lojas por UF), Lojas com Maior Volume de Troca, Estrutura Operacional por Regional e Maior tempo de atendimento.
- Commit na `develop`: `55c05b4`. Nenhuma alteração de banco.

### 4.9 Comparativo de Trocas por Loja: 2025 x 2026 (publicado em 28/09/2026)
- Cartão novo no **Painel**, abaixo de "Lojas com Maior Volume de Troca". Colunas: Loja, 2025, 2026, Variação e Situação 2026. As lojas que mais trocaram aparecem primeiro. Passando o mouse sobre o número, aparecem os itens.
- **2025:** números fixos no código (`TROCAS_2025`), tirados da planilha "PREVENTIVA 2025 - SEPHORA" (41 lojas, 109 indicações). Entram só o código, o nome da loja e as contagens, sem nomes de pessoas, IPs ou números de série.
- **Critério 2025 escolhido pela usuária (critério 2):** nobreaks com autonomia ruim (rack, mini PDV e estoque; lojas EATON sem mini nobreak), teclado/mouse/monitor "precisa trocar", PINPAD de PDV, PDV lento/desligando, leitor com mau contato, tela do cliente apagada, computador com queixa grave ("impossível usar" ou "gostaria de trocar") e PDA Zebra sem funcionar. Por incluir mais tipos de problema que 2026, 2025 tende a ter números maiores (o aviso aparece no próprio cartão).
- **2026:** "Equipamentos para substituição" (`substituicoesDaLoja`), atualizado sozinho. Loja concluída = número final; em andamento = número parcial (com *); sem checklist = "Aguardando atendimento". A variação só é calculada para lojas concluídas.
- Acima dele, cartão **"Top 5 Lojas com Mais Trocas: 2025 x 2026"** (o cartão ao lado passou a se chamar "Lojas com Maior Volume de Troca 2026"): duas colunas (2025 e 2026), cada loja com o total e os equipamentos em etiquetas (ex.: "Mini Nobreak PDV ×3"). 2026 considera checklists concluídos e em andamento (* = em andamento) e agrupa os itens por tipo (ex.: "Mouse Gerência", "Mini Nobreak PDV").
- Resumo no topo do cartão compara 2025 x 2026 **só nas lojas já concluídas em 2026 que também foram atendidas em 2025** (mesma base).
- Nenhuma alteração de banco.

### 4.10 Painel mais enxuto (publicado em 28/09/2026)
- **Card "Lojas"** (tabela com busca e filtros) **escondido por enquanto**, a pedido da usuária. O código foi mantido: para voltar, remover o `display:none` do card `painel-card-lojas` e mudar `PAINEL_MOSTRAR_TABELA_LOJAS` para `true`. Clicar nos cartões de status abre a janela com a lista das lojas (ver 8.5); com a tabela escondida, não filtra nada.
- **Card "Maior tempo de atendimento"** escondido a pedido da usuária (código mantido; para voltar, remover o `display:none` do card `painel-card-tempo`). O calendário ficou sozinho na metade esquerda da linha.
- **Calendário compacto:** agora fica ao lado de "Maior tempo de atendimento", com o título "Calendário de agendamentos". Cada dia mostra só o **número de lojas agendadas**. Clicando no dia, a lista das lojas aparece abaixo, e clicar na loja abre o checklist, como antes. Mostra só as semanas do mês (5 ou 6 linhas) e sublinha o dia de hoje.

### 4.11 Lojas concluídas não aparecem mais como "Atrasado" (publicado em 28/09/2026)
- Problema: loja concluída e depois aberta para ajuste ("Solicitar edição") passa a ter o status **"Reaberto"**, e a regra de atraso só tirava da conta o status "Concluído". Por isso ela voltava a aparecer como "Atrasado".
- Correção: a regra ficou numa função só, `lojaAtrasada`: atrasada = data de agendamento já passou **e** status diferente de "Concluído" e "Reaberto". É usada no selo "Atrasado" da tela Agendamento, no filtro/contador "Atrasado" e no Painel (cartão "Atrasado" e "atrasada(s)" do Resumo Executivo).
- Não foi possível conferir os dados reais, porque a sessão na nuvem não acessa o Supabase. Se ainda aparecer alguma loja concluída como atrasada, verificar qual status ela tem gravado.

### 4.12 Painel reorganizado e mais profissional (publicado em 28/09/2026)
- **Seções numeradas:** 1. Andamento da campanha (Resumo Executivo, cartões de status, Calendário + Alertas lado a lado) · 2. Trocas de equipamento (Top 5, Ranking 2026 e, abaixo, Equipamentos para substituição, cada um sozinho na linha (ajuste de 28/09), Comparativo 2025 x 2026) · 3. Histórico: Preventiva 2025 (Pareto) · 4. Estrutura das lojas (UF + Lojas em Levantamento, Regionais).
- Cabeçalho padrão em todos os cards (título + explicação curta à direita). Listas longas (Alertas, Substituições, Comparativo) com rolagem dentro do card.
- Emojis trocados por etiquetas/bolinhas de cor. O Resumo Executivo mostra a situação como etiqueta: "No ritmo" (verde), "Atenção" (amarelo/vermelho), "Crítico" (prazo vencido), "Concluída".
- "Lojas cadastradas" saiu da fileira de status (já aparece nos indicadores do topo).
- Ranking 2026: a coluna "Índice" virou **"vs. 1ª colocada"**, com o percentual escrito. No Pareto, a coluna de barras virou "Proporção". Títulos de colunas numéricas alinhados com os números.
- Indicador do topo "Top Solicitação Troca" renomeado para **"Loja com Mais Trocas 2026"**.
- **Lojas de teste (9999 e 9998)** não entram mais no ranking 2026, no Top 5 2026 nem no Comparativo (`LOJAS_TESTE`). Continuam contando nos totais de lojas cadastradas.
- No celular: indicadores 2 por linha e tabelas largas rolando dentro do card. A página não passa mais da largura da tela.

### 4.13 Fotos de exemplo
- Todas foram enviadas pela usuária, reduzidas (240×360 ou 300px de altura) e **guardadas dentro do próprio `index.html`** (não dependem de sites externos): PINPAD Rede (PDV e reserva), POS Mercado Pago, POS Rede e POS Cielo. Não entram no PDF.

---

## 5. Dados e banco

- **Nenhuma tabela, permissão (RLS), Storage ou SQL foi alterado.** Os dados de cada loja ficam num campo JSON flexível da tabela `lojas`; as fotos ficam na área `checklist-anexos` do Storage.
- Campos novos dentro do JSON da loja: `rack.nobreak.autonomiaEaton`, `telefoneStage`, `pinpadReserva`, `posRedeCielo`, `mercadoPagos` (lista).
- Mercado Pago: a lista fica em `mercadoPagos`; lojas antigas com o objeto único `mercadoPago` são convertidas automaticamente (viram o item 01). Ao salvar, o 1º item também é gravado em `mercadoPago`, para a versão anterior continuar funcionando se for preciso voltar um ponto de restauração.
- As regras de "Alertas" e "Equipamentos para substituição" ficam nas funções `alertasDaLoja` e `substituicoesDaLoja` (usadas pelo Painel e pelo PDF).

### Banco de TESTES atualizado com os dados da produção (03/10/2026)
- A pedido da usuária, as **49 lojas da produção** foram copiadas para o banco de **testes**, por cima das versões de teste dessas mesmas lojas. As lojas de teste **9999 e 9998** (existem só no teste) **foram mantidas sem alteração**. Resultado: teste com 51 lojas, as 49 idênticas às da produção em 03/10/2026.
- **Produção não foi alterada:** dela só houve leitura; conferido que estava igual antes e depois. Gravação só no banco de testes, apenas nas lojas que já existiam lá (nenhuma loja criada ou apagada). Nenhuma tabela, permissão (RLS) ou Storage foi alterado.
- **Fotos:** os links das fotos copiadas continuam apontando para o Storage da **produção** (aparecem no teste). Apagar ou trocar uma foto no teste **não** apaga o arquivo da produção (o teste só remove arquivos do próprio Storage).
- **Backups (fora do projeto, não vão para o GitHub):** `bkp_teste/DADOS-TESTE-03-10-2026.json` (teste como estava antes da cópia, 51 lojas) e `bkp_prod/DADOS-PRODUCAO-03-10-2026.json` (produção em 03/10/2026, 49 lojas), na pasta `Portal_Preventivas_v1`.
- É uma cópia daquele dia: mudanças posteriores na produção não passam sozinhas para o teste. Para repetir, pedir ao Claude "atualize o banco de teste com os dados da produção".

---

## 6. Decisões tomadas (não reabrir sem a usuária pedir)

| Assunto | Decisão |
|---|---|
| Fotos de evidência dos equipamentos | **Não será feito.** Desconsiderar a ideia. |
| Foto do RAT | **Continua em tamanho real**, sem redução (a usuária precisa dela no tamanho original). |
| Nobreak de Rack EATON com autonomia baixa | **Entra** em "Equipamentos para substituição" (feito). |
| POS REDE / CIELO sem opção "Loja não possui" | **Fica como está**: toda loja sempre tem uma das duas. |
| Título da tela de login | **"Acesso ao Painel"** (feito). |
| Hospedagem do banco | **Continua no Supabase** por enquanto. |
| Pendências agrupadas por setor ao "Finalizar checklist" | **Não será feito** (29/09/2026): testado na `develop` e descartado pela usuária; a lista única de hoje funciona bem. |

### Ideias ainda em aberto (opcionais)
- Lembrete: a área de fotos do Supabase é pública (quem tem o link abre a foto).

---

## 7. Dicas para testar sem mexer em nenhum banco

- **Prévia de teste dentro do Claude (29/09/2026):** página privada https://claude.ai/artifact/5uFkMsah4VAvdgnWrp1rZG com o formulário do técnico da `develop`, **banco simulado em memória** (nada é gravado; recarregar volta ao início) e a loja de teste **9999**. Não leva nenhuma chave do Supabase. Para atualizar depois de novas mudanças, pedir ao Claude "atualize a prévia de teste". Limitações: não tem login (Agendamento e Painel com login não abrem), o PDF não baixa e as fotos ficam só na tela.

- O formulário só abre depois do login. Para testar sem login, o Claude monta uma cópia do `index.html` numa pasta temporária com o Supabase **simulado** (nada é gravado em banco nenhum) e confere tudo por medições e simulações de clique.
- Para imagens de prévia, o Edge instalado no Windows pode gerar capturas com `msedge --headless --screenshot`.

---

## 8. Publicações e pendências (atualizado em 29/09/2026)

### Pendências atuais (03/10/2026)
- **Todas as publicações (8.1 a 8.18) estão validadas pela usuária** (29/09/2026).
- Ideias opcionais em aberto: ver seção 6.
- **8.19 (Agenda Mensal no Dashboard): publicada em 03/10/2026, aguardando validação da usuária no site no ar.** Última publicação: `main` `cc20586` = `develop` `fd5c624`.

### 8.1 Aviso de pendências resolvidas: PUBLICADO E VALIDADO
Quando o técnico corrige o último campo obrigatório que faltava, aparece a janela "✅ Tudo certo! Todos os campos obrigatórios foram preenchidos. Você já pode finalizar o checklist.", com o botão "Finalizar Atendimento Agora".
- Commit na `develop`: `c06eb2c`. Commit na `main`: `adf6366`.
- Conferido: a `main` difere da `develop` `c06eb2c` só nas 3 linhas obrigatórias de produção, mais 2 linhas de comentário removidas (não mudam o funcionamento).
- Ponto de restauração da produção (antes deste ajuste): branch `restauracao-producao-antes-aviso-pendencias-2026-09-27`.
- **Testado e validado pela usuária no site no ar (27/09/2026).**

### 8.2 Publicação de 28/09/2026: PUBLICADO E VALIDADO
- **Validado pela usuária no site no ar (29/09/2026).**
- Foi para produção (`main` `15f0165`, equivale à `develop` `c221eb3`): Painel Executivo (4.8), Comparativo e Top 5 de trocas 2025 x 2026 (4.9), Painel enxuto (4.10), correção do "Atrasado" (4.11) e Painel reorganizado (4.12).
- Conferido antes do envio: 0 ocorrências do Supabase de testes, URL e chave iguais às da produção anterior, sem "Teste Local", só o `index.html` alterado, e diferença para a `develop` de exatamente as 3 linhas obrigatórias.
- Ponto de restauração: branch `restauracao-producao-antes-painel-executivo-2026-09-28` (tags continuam bloqueadas na sessão de nuvem; o envio para a `main` funcionou).
- Validado pela usuária (ver "Pendências atuais" no início da seção 8).

### 8.3 Publicação de 28/09/2026 (2ª): PUBLICADO E VALIDADO
- **Link da gestão testado e validado pela usuária no site no ar (28/09/2026).**
- Foi para produção (`main` `41cce39`, equivale à `develop` `90ed6a9`) com as mesmas conferências da 8.2 (0 ocorrências do Supabase de testes, só as 3 linhas obrigatórias diferentes). Ponto de restauração: branch `restauracao-producao-antes-link-gestao-2026-09-28`.
- Itens publicados:
- **Link do Painel para a gestão (sem login, só visualização):** `https://alliedit-preventivas.github.io/checklist-alliedit/?painel=1` (também funciona com `#painel`). Abre direto no Painel de Indicadores, sem os menus Agendamento/Técnico, sem pedir login, com o aviso "Modo visualização · atualiza automaticamente". Clicar nas lojas do calendário não abre checklist, e o modo não grava nada no banco (`modoGestao`). Decisão da usuária: sem login, igual ao link dos técnicos. Risco aceito: quem tiver o link vê os indicadores. Localmente: `http://localhost:5174/?painel=1`.
- **Lojas em Levantamento** fora do Painel: o card da seção 4 e o indicador do topo não aparecem mais (`PAINEL_MOSTRAR_LEVANTAMENTO = false`; a lista `LOJAS_LEVANTAMENTO` continua no código). "Lojas por UF" passou a ocupar a linha toda. No Comparativo 2025 x 2026 as lojas continuam com a marcação "(levantamento)".
- Equipamentos para substituição por loja sozinho na linha, com a largura toda (ranking 2026 também sozinho, acima dele).

### 8.4 Regionais das lojas atualizadas: PUBLICADO E VALIDADO (28/09/2026, junto com a 8.5)
- **Validado pela usuária no site no ar (29/09/2026).**
- Foi para produção na `main` `8854816` (equivale à `develop` `b8d3bec`), com as mesmas conferências de sempre: 0 ocorrências do Supabase de testes, URL e chave iguais às da produção anterior, sem "Teste Local", só o `index.html` alterado e diferença para a `develop` de exatamente as 3 linhas obrigatórias. Ponto de restauração: tag `producao-antes-janela-status-2026-09-28`.
- A versão de produção foi montada numa pasta temporária (`git merge-file`: ajustes da `develop` + as 3 linhas de produção) e gravada na `main` sem trocar de branch, então os arquivos da pasta do projeto não foram mexidos.
- Lista de lojas x regionais enviada pela usuária (28/09/2026, 49 lojas) conferida com `UF_REGIONAL_MAP`: 45 já estavam certas. As 4 que estavam como "Confirmar" receberam a regional: 3114 Barra Sul = 2, 3130 Bourbon = 1, 3135 BH Shopping = 3, 3142 Parque Dom Pedro = 4.
- Resultado no card "Estrutura Operacional por Regional": Regional 1 = 12 lojas, 2 = 13, 3 = 11, 4 = 13 (sem contar as lojas de teste). O card "REGIONAL CONFIRMAR" deixou de existir e "Regionais Mapeadas" passou de 5 para 4.
- Os nomes das lojas exibidos vêm do cadastro (tabela `lojas`), não da lista; não foram alterados. Nenhuma alteração de banco.
- **Concentração Territorial (Lojas por UF):** "SP", "SP - Interior" e "SP - Litoral" viraram uma linha só, "SP" (25 lojas, igual ao indicador "Concentração SP"). A coluna "Regional Predom." virou **"Regional"** e mostra todas as regionais da UF (SP = "Regionais 1 e 4"). A diferença Capital/Interior/Litoral continua guardada em `UF_REGIONAL_MAP`, só não aparece mais na tabela.

### 8.5 Janela com as lojas de cada cartão de status: PUBLICADO E VALIDADO (28/09/2026, ver 8.4)
- **Validado pela usuária no site no ar (29/09/2026).**
- No Painel, clicar em **Não iniciado, Confirmado, Andamento, Concluídos, Equip. p/ substituir ou Atrasado** abre uma janela com a quantidade e a lista das lojas daquele cartão (função `abrirPopupStatus`).
- Cada loja mostra a data agendada (ou a previsão, ou "Sem data agendada"). Em **Atrasado**, a mais atrasada vem primeiro, com os dias de atraso. Em **Equip. p/ substituir**, cada loja mostra os equipamentos e o setor (antes esse cartão só rolava a página até a lista de substituições).
- Com login, clicar na loja abre o checklist (igual ao calendário). No link da gestão (`?painel=1`) é só consulta: as lojas não são clicáveis.
- Fecha no botão "Fechar", clicando fora da janela ou com a tecla Esc. No celular, a lista rola dentro da janela.
- As lojas de teste (9999 e 9998) aparecem na lista, porque também entram na contagem dos cartões. Nenhuma alteração de banco.

### 8.6 Cores AlliedIT x Sephora no link da gestão: PUBLICADO E VALIDADO (28/09/2026)
- **Validado pela usuária no site no ar (29/09/2026).**
- Foi para produção na `main` `dceefc1` (equivale à `develop` `bdef41e`), com as conferências de sempre: 0 ocorrências do Supabase de testes, URL e chave iguais às da produção anterior, sem "Teste Local", só o `index.html` alterado e diferença para a `develop` de exatamente as 3 linhas obrigatórias. Ponto de restauração: tag `producao-antes-cores-sephora-2026-09-28`.
- **Atenção para as próximas publicações:** a junção automática (`git merge-file`) deu conflito, porque a linha do logo (alterada) fica colada na linha da etiqueta "Teste Local". O arquivo com conflito foi descartado sem ir para a produção, e a versão de produção foi montada pelo método manual: cópia do `index.html` da `develop` trocando só as 3 linhas (URL, chave e tirando `<div class="sub2">Teste Local</div>`). Esse método manual é o mais seguro quando o cabeçalho muda.
- **Exclusivo do link da gestão (`?painel=1` ou `#painel`)**, a pedido da usuária: duas bolinhas pequenas e discretas no **cabeçalho, canto direito** (12px, sem texto): azul e amarelo = AlliedIT, preto e branco = Sephora. A escolhida ganha um anel branco fino e a outra fica um pouco apagada; o nome aparece ao passar o mouse. No celular ficam abaixo do título. No Painel com login, no Agendamento, no checklist e na tela do Técnico as bolinhas **não aparecem** e as cores são **sempre AlliedIT**.
- Verde, amarelo e vermelho de situação (Concluído, Atrasado, Atenção etc.) ficam iguais nos dois, para não perder o significado. O **PDF não muda** (continua nas cores AlliedIT).
- **Logo do cabeçalho:** nas cores Sephora, o logo AlliedIT dá lugar ao **logo da Sephora** (enviado pela usuária). Do quadrado listrado foi usada só a palavra "SEPHORA" da faixa do meio, em branco com fundo transparente (no tamanho do cabeçalho, o quadrado inteiro ficaria com letras ilegíveis). As listras aparecem na faixa abaixo do cabeçalho. Nas cores AlliedIT continua o logo AlliedIT.
- **Fundo do Painel nas cores Sephora:** cinza bem claro e liso (`--bg` #F5F5F5), **sem papel de parede**. A usuária testou várias imagens em 28/09/2026 (foto de loja, listras a 10%, parede com sofá, com presentes, com o símbolo de %, parede sem enfeites, listras largas a 15% e 50%; a última está no commit `9704838`) e decidiu não usar nenhuma. As imagens e a classe `vendo-painel` foram retiradas do código.
- A escolha fica guardada **só no navegador de quem clicou** (chave `coresPainelGestao`) e **só vale no link da gestão**: não se replica para as outras telas, mesmo no mesmo navegador. Não grava nada no banco e não muda o que as outras pessoas veem. O script do `<head>` só aplica as cores quando o endereço é o do link da gestão, e o `init` tira as cores Sephora em qualquer outro modo.
- No código: cores da Sephora em `:root[data-tema="sephora"]`, funções `aplicarTemaCores` e `wireTemaCores`, e um script curto no `<head>` que aplica a escolha antes de desenhar a página (sem "piscar" nas cores AlliedIT). Ponto de restauração da `develop` antes deste ajuste: tag `antes-tema-cores`.

### 8.7 Painel novo do link da gestão, no modelo enviado pela usuária: PUBLICADO E VALIDADO (28/09/2026)
- **Validado pela usuária no site no ar (29/09/2026).**
- Foi para produção na `main` `e8ebe10` (equivale à `develop` `c545d23`), junto com a 8.8, montada pelo método manual (cópia do `index.html` da `develop` trocando só as 3 linhas) e com as conferências de sempre: 0 ocorrências do Supabase de testes, URL e chave iguais às da produção anterior, sem "Teste Local", só o `index.html` alterado e diferença para a `develop` de exatamente as 3 linhas obrigatórias. Ponto de restauração: tag `producao-antes-painel-gestao-novo-2026-09-28`.
- **Só no link da gestão (`?painel=1`).** O Painel com login continua igual (conteúdo em `#painel-classico`); o novo fica em `#painel-novo` e é ligado no `init` quando `modoGestao`. Cores AlliedIT e Sephora valem nos dois. Ponto de restauração da `develop` antes da remodelação: tag `antes-painel-gestao-novo` (só no computador local).
- Plano em 5 etapas, combinado com a usuária em 28/09/2026: **1) topo** · 2) agenda semanal (seg a sex, com a data e a **Hora Prevista** que já existe no Agendamento, campo `agendamentoPrevisto`) · 3) card "Regionais x solicitações de troca" no lugar dos alertas · 4) Ranking Top 10, Pareto 2026, Pareto 2025 x 2026 (Top 7, em % de lojas), mapa por UF e Maior tempo de atendimento · 5) Lista de lojas (Código, Nome, Regional, UF, Próximo agendamento, Status, Trocas 2026; com busca e filtros; **sem Exportar**) e um card "Trocas de equipamento" com 3 abas (Top 5 2025 x 2026, Comparativo, Equipamentos por loja).
- Ficam escondidos no link da gestão: indicadores do topo antigos (Concentração SP, Regionais Mapeadas, Loja com mais trocas), Pareto 2025 e Estrutura Operacional por Regional. Cabeçalho sem sino, perfil e "Relatórios".
- **Etapa 1 (feita):** cabeçalho do link da gestão com o título "Checklist de Preventivas · Sephora 2026 · AlliedIT" e o subtítulo "Gestão de manutenções preventivas das lojas Sephora" (sem o título do centro); tela mais larga (até 1480px); cartão "Campanha 2026" com círculo de progresso, barra, "X de Y lojas concluídas" e o prazo 26/10 com dias restantes e ritmo necessário; 5 números clicáveis (Agendamentos esta semana, Em atendimento agora, Lojas concluídas, Pendentes, Total de lojas), que abrem a janela com a lista das lojas (`renderPainelNovo`, `semanaAtual`, filtros novos `semana`, `pendentes` e `todas`).
- **Etapa 2 (feita):** card "Agenda Semanal" com o período (ex.: "28 de setembro a 4 de outubro de 2026"), setas ‹ › para trocar de semana e botão "Hoje". Uma coluna por dia, de segunda a sexta (sábado e domingo só aparecem se houver loja agendada); o dia de hoje fica destacado. Cada loja mostra o nome, a situação e a **Hora Prevista** do Agendamento (`agendamentoPrevisto`; sem hora = "Horário a definir"), em ordem de hora. Cores: azul = agendada/confirmada, amarelo = em atendimento, verde = concluída, vermelho = atrasada (mesma regra do "Atrasado" do Painel). No celular os dias ficam um embaixo do outro. Funções `renderPainelAgenda` e `wirePainelNovo`.
- **Etapa 3 (feita):** card "Regionais x Solicitações de troca" à direita da agenda (no lugar dos Alertas do modelo). Uma linha por regional (1 a 4; "Não alocada" só se houver loja sem regional): quantidade de equipamentos indicados para substituição (`substituicoesDaLoja`), nº de lojas, quantas têm troca e quantas estão concluídas, com barra comparando as regionais. Clicando na regional, abre a janela com as lojas daquela regional e os itens (`abrirPopupStatus` ganhou a opção `regional`). Lojas de teste não entram. Função `renderPainelRegionais`.
- **Etapa 4 (feita):** linha com 4 cards e um card largo embaixo (lojas de teste não entram em nenhum):
  - **Ranking de lojas por equipamentos para troca** (Top 10, barra clareando do 1º ao 10º; `renderPainelRanking`).
  - **Pareto de problemas recorrentes 2026** (lojas já atendidas; junta os equipamentos para troca e os alertas do checklist em categorias, cada loja conta 1 vez por categoria; mostra a participação de cada uma no total, Top 6 + Outros; `pnCategoriaTroca`, `pnCategoriaAlerta`, `renderPainelPareto26`).
  - **Concentração territorial por UF** com o **mapa oficial do IBGE** (malha dos estados, qualidade mínima, baixada com autorização da usuária de servicodados.ibge.gov.br, 48 KB, guardada dentro do `index.html`). Estados pintados em 4 tons conforme o nº de lojas (1 · 2 a 3 · 4 a 9 · 10 ou mais), nome e quantidade ao passar o mouse, lista com as porcentagens (Top 6 + Outros). Subtítulo "49 lojas em 15 estados": **o DF conta como os demais estados**, sem "+ DF" (pedido da usuária). `renderPainelMapaUf`.
  - **Maior tempo de atendimento** (Top 5 pela diferença entre início e fim do atendimento no checklist; `renderPainelTempo`).
  - **Problemas recorrentes 2025 x 2026** (as 7 categorias que mais apareceram na Preventiva 2025, em % das lojas: 2025 sobre 41 lojas, 2026 sobre as lojas concluídas; `PN_COMP_CATEGORIAS`, `renderPainelParetoComp`). Em 2025 o critério era "queixa" do computador; em 2026 é "Ruim - substituir", então a comparação é aproximada.
- **Etapa 5 (feita):**
  - Card **"Trocas de equipamento"** com 3 abas: Top 5 2025 x 2026 · Comparativo por loja · Equipamentos por loja. O conteúdo é o mesmo do Painel com login: no link da gestão, os elementos `painel-top5-trocas`, `painel-comparativo-trocas` e `painel-substituicoes` são movidos para dentro das abas (`wirePainelNovo`); no Painel com login ficam onde sempre estiveram.
  - **Lista de lojas** (todas as lojas cadastradas, como o número "Total de lojas"): Código, Nome da loja, Regional, UF, Próximo agendamento (data e hora prevista; "—" se concluída ou sem data), Status (etiqueta colorida; "Atrasado" pela mesma regra do Painel) e Trocas (2026). Busca por código, nome, regional ou UF (sem diferenciar acentos), filtros de UF e Status, "Limpar filtros". **Sem Exportar** e sem "Último atendimento" (pedido da usuária). No celular a tabela rola para o lado dentro do card. `renderPainelLista`.
- **Ajuste de nomes e posições (pedido da usuária, 28/09/2026):** ao lado da Agenda Semanal fica o **Maior tempo de atendimento**; a linha de 4 cards passa a ser 1) **Ranking Lojas x Troca Equipamentos** (antes "Ranking de lojas por equipamentos para troca") · 2) **Ranking Incidentes** (antes "Pareto de problemas recorrentes") · 3) **Regionais x Solicitações de troca** · 4) **Concentração de Lojas** (antes "Concentração territorial por UF").
- **Concentração de Lojas com as regionais (pedido da usuária):** embaixo do mapa e da legenda, as 4 regionais com a quantidade e os nomes das lojas de cada uma, em ordem alfabética (lojas de teste não entram; "Não alocada" só se houver loja sem regional). Letra pequena para caber; o mapa ficou um pouco menor (até 200px). Com a lista, esse card fica ~100px mais alto que o das Regionais, e a linha de 4 cards cresce junto (preferimos isso a uma caixa com rolagem).
- **Problemas recorrentes 2025 x 2026, botões de ano (pedido da usuária):** a legenda virou dois botões, **2025** e **2026**. Clicando num ano, as barras e os números dele ficam em destaque e os do outro ano ficam apagados; clicando de novo no mesmo ano, volta a mostrar os dois. O cinza das barras de 2025 ficou mais forte (`--pn-cinza-25`: #8A949B nas cores AlliedIT, #8C8C8C nas cores Sephora).
- **Ranking Incidentes, clique duplo (pedido da usuária):** clique duplo (ou Enter) num item abre a janela com as lojas daquele incidente e o detalhe de cada uma (equipamento e setor, ou o alerta do checklist); no item "Outros", junta as lojas dos incidentes agrupados ali (`abrirPopupIncidente`). A montagem da janela virou uma função própria, `mostrarJanelaLojas`, usada também pelos números do topo e pelas regionais.
- **Escada oculta no link da gestão (pedido da usuária):** os alertas de escada móvel ("não possui" / "não alcança o teto") não entram no Ranking Incidentes nem nas janelas do clique duplo (`pnCategoriaAlerta` devolve `null` para escada), e o comparativo 2025 x 2026 trocou "Escada" pelo próximo item de 2025, **"Rack sujo"** (continua com 7). O Painel com login, o checklist e o PDF continuam mostrando a escada normalmente.
- **Nova ordem da linha de 4 cards e clique único (pedido da usuária):** 1) **Concentração de Lojas** · 2) **Regionais x Solicitações de troca** · 3) **Ranking Lojas x Troca Equipamentos** · 4) **Ranking Incidentes**. No Ranking Incidentes, a janela das lojas agora abre com **um clique** (ou Enter/Espaço), não mais com clique duplo. A janela ignora clique no fundo nos primeiros 400 ms, para quem der clique duplo por costume não fechá-la sem querer (`mostrarJanelaLojas`).
- **Cor de destaque nas cores Sephora:** o rosa (#F4A7B9) virou **vermelho (#E4002B)**, a pedido da usuária (`--pn-destaque`): anel e barra do cartão "Campanha 2026", 1ª barra do "Maior tempo de atendimento" e item "Outros" do Ranking Incidentes. Nas cores AlliedIT continua o amarelo.
- **Final da página do link da gestão reorganizado (pedido da usuária):** o card passou a se chamar **"Trocas de equipamento 2025 x 2026"**, com 2 abas (Top 5 2025 x 2026 · Comparativo por loja). **"Equipamentos por loja"** saiu das abas e virou um card próprio, no lugar da Lista de lojas. A **Lista de lojas ficou escondida por enquanto** (`#pn-card-lista` com `display:none`; o código continua). No **Top 5**, cada ano fica no seu quadro e as lojas aparecem fechadas: um clique (ou Enter/Espaço) na loja mostra o que foi trocado, outro clique fecha; as lojas abertas continuam abertas quando os dados se atualizam. Divisão entre os cards mais clara: borda mais visível (`--pn-borda-card`), sombra suave e 16px de espaço entre as linhas.
- **Card "Parque Sephora: equipamentos em loja" (pedido da usuária):** logo depois da linha de 4 cards. Um quadradinho para cada item do Parque Sephora (**PDVs Elgin** e **PDVs Toshiba** separados pela marca do PDV, mais "PDVs (marca não informada)" só quando houver algum; Impressoras Térmicas, Leitores de Código de Barras, PINPADs Rede/Laranjinha, PINPAD Reserva, Notebooks, Desktops, Monitores, Mouses, Teclados, Mini Nobreaks, **Nobreak de Rack NHS** e **Nobreak de Rack EATON** separados, DVRs / CFTV, HDs de DVR, Monitor de CFTV, Impressoras Multifuncionais, **Telefones VoIP** (soma os da Gerência e do Estoque com o telefone do Stage de Vendas, que é o mesmo equipamento), PDA Zebra, Mobiles, Mercado Pago, POS Rede / Cielo), com a quantidade registrada nos checklists e em quantas lojas; total geral no canto. Clicando no item, abre a janela com as lojas e a quantidade em cada uma. Base: lojas reais com checklist em andamento ou concluído. Regras: equipamento conta quando o técnico preencheu algum dado dele; "Possui" para leitor, mini nobreak, telefone VoIP e monitor de CFTV; PINPAD reserva funcionando ou quebrado; Nobreak de Rack pela marca registrada (NHS ou EATON); HDs = soma da quantidade informada; PDA Zebra = cada nº de série. No celular, 2 quadradinhos por linha. Funções `pnParqueDaLoja` (usa `lojaParaRelatorio`, que organiza os dados sem alterar nada) e `renderPainelParque`.
- **Remodelação concluída e publicada em 28/09/2026** (ver o início desta seção).
- **Correção:** a janela das lojas tratava a "Hora Prevista" como data (mostrava "Previsão: 08:30"). Agora mostra "Agendada para 23/09/2026 às 08:30" (vale nos dois Painéis).

### 8.8 Fonte do portal: Inter e depois Titillium Web: PUBLICADO E VALIDADO (28/09/2026, ver 8.7)
- **Validado pela usuária no site no ar (29/09/2026).**
- A pedido da usuária (28/09/2026), o portal inteiro (login, Agendamento, checklist, Técnico, Painel com login e link da gestão) passou a usar a fonte **Inter**, com os pesos **400, 500, 600 e 700**, carregada do **Google Fonts** (`<link>` no `<head>`). Se o Google Fonts não carregar, o navegador usa a fonte do sistema (Segoe UI no Windows, fonte padrão no celular).
- A fonte anterior, **Chillax** (embutida no `index.html`), deixou de ser usada e foi retirada do arquivo (74 KB a menos; continua no histórico do Git). Os 19 textos com peso 800 passaram para 700, que é o mais forte da Inter carregada.
- O **PDF** das lojas continua com a fonte própria dele (Segoe UI/Arial), porque é montado num documento separado para impressão.
- Ajuste junto: o comparativo 2025 x 2026 do link da gestão não passa mais da largura em telas muito estreitas (`minmax(min(300px, 100%), 1fr)`).
- **Escala única de tamanhos de letra: desfeita** a pedido da usuária (28/09/2026). A escala de 10 tamanhos (commit `6e03ce3`) foi revertida; os tamanhos voltaram a ser exatamente os de antes, com a fonte Inter. Continuam valendo as mudanças feitas depois dela (nova ordem dos 4 cards, clique único no Ranking Incidentes e o vermelho nas cores Sephora).
- **Fonte trocada para Titillium Web** (pedido da usuária, 28/09/2026): o portal inteiro passou da Inter para a **Titillium Web** (Google Fonts), com os pesos **400, 600 e 700**. A Titillium não tem o peso 500, que não é usado em nenhum texto do site. Tamanhos de letra continuam os originais.

### 8.9 GPOS Backup fora do checklist do técnico: PUBLICADO E VALIDADO (28/09/2026)
- **Validado pela usuária no site no ar (29/09/2026).**
- Foi para produção na `main` `ee22b5c` (equivale à `develop` `55055da`), pelo método manual e com as conferências de sempre. Ponto de restauração: tag `producao-antes-sem-gpos-2026-09-28`.
- A pedido da usuária (28/09/2026): esse equipamento não existe nas lojas, então o card **GPOS Backup** saiu da Gerência no formulário do técnico. Também saiu da lista de pendências (deixou de ser obrigatório), do alerta "GPOS Backup não existe" (Alertas do Painel com login e Ranking Incidentes do link da gestão) e do PDF.
- **Nada foi apagado do banco:** o campo `gposBackup` continua no modelo de dados (`blankSetorEquip`) e respostas antigas ficam guardadas, só não aparecem mais. O Estoque continua com o card PDA Zebra no mesmo lugar.

### 8.10 Mobiles viram "Máquinas GPOS Gertec" no checklist do técnico: PUBLICADO E VALIDADO (28/09/2026)
- **Testado e validado pela usuária no site no ar (28/09/2026).**
- Foi para produção na `main` `e9e8f56` (equivale à `develop` `6f8f447`), pelo método manual e com as conferências de sempre. Ponto de restauração: tag `producao-antes-gpos-gertec-2026-09-28`.
- A pedido da usuária (28/09/2026), no Stage de Vendas os Mobiles ficam dentro de um grupo com o título **"MÁQUINAS GPOS GERTEC"** (mesma moldura e estilo de "Máquinas POS"), logo **acima** de "Máquinas POS". Os nomes "Mobile 01", "Mobile 02"... e o botão "+ Adicionar Mobile" continuam; a dica passou a "Até 6 por loja".
- Cada Mobile ganhou a **foto de exemplo do GPOS Gertec** à esquerda e os campos (Nº Série, IP, Estado de conservação) à direita, igual ao Mercado Pago; a Observação fica embaixo. Foto enviada pela usuária, recortada e reduzida para 240×360 (7 KB, `FOTO_GPOS_GERTEC` / `FOTOS_EXEMPLO.gpos`).
- O PDF segue a nova ordem: grupo "Máquinas GPOS Gertec" com os Mobiles, antes de "Máquinas POS". Nenhuma alteração de banco: os dados continuam em `mobiles`.

### 8.11 PDV: Gaveta de Dinheiro e "PINPAD apresenta defeito?": PUBLICADO E VALIDADO (28/09/2026)
- **Validado pela usuária no site no ar (29/09/2026).**
- Foi para produção na `main` `efd5e70` (equivale à `develop` `3892d78`), pelo método manual e com as conferências de sempre (13 conferências, 0 falhas; site no ar idêntico à `main`). Ponto de restauração: tag `producao-antes-gaveta-pinpad-2026-09-28`.
- A pedido da usuária (28/09/2026), em **cada PDV** do Stage de Vendas:
  - **Gaveta de dinheiro** logo abaixo do Nº Série/Marca do PDV, no mesmo bloco (sem seção própria — correção pedida pela usuária): **"Gaveta de dinheiro"** (Funcionando | Defeito ou Falha), com a observação *"Este cabo é importado, por isso é importante a sua validação."* logo abaixo do título, e **"Qual o estado de conservação do cabo que liga a gaveta à impressora?"** (Possui trava no conector | Sem trava no conector | Cabo danificado). **Sem trava no conector = alerta** (botão amarelo); **Cabo danificado = troca de equipamento** ("PDV 01: Cabo da gaveta de dinheiro").
  - No **PINPAD REDE LARANJINHA**, a pergunta **"Apresenta defeito?"** (Sim | Não). **Sim = troca de equipamento** ("PDV 01: PINPAD") **e alerta** ("PINPAD REDE LARANJINHA com defeito"). No Ranking Incidentes do link da gestão, troca e alerta do PINPAD contam como um item só ("PINPAD PDV").
  - As três perguntas são **obrigatórias** (entram na lista de pendências). Todas aparecem no PDF, em vermelho quando há problema.
  - **Gaveta com "Defeito ou Falha" = troca de equipamento** ("PDV 01: Gaveta de dinheiro"; no Ranking Incidentes aparece como "Gaveta de dinheiro PDV"). Não gera alerta (decisão da usuária, 28/09/2026).
- Dados novos no PDV: `gaveta:{estado, cabo}` e `pinpad.defeito`; checklists antigos recebem os campos vazios automaticamente (`migrarPdv`). Nada é apagado.
- Testado numa cópia com o **Supabase simulado** (nada gravado em banco nenhum): ordem dos campos, observação, pendências, cores, gravação e Painel (trocas, alertas e Ranking Incidentes).

### 8.12 Tela do cliente e Telefone (VoIP ou Analógico): PUBLICADO E VALIDADO (29/09/2026)
- **Testado pela usuária na prévia de teste e validado no site no ar (29/09/2026).**
- Foi para produção na `main` `68329c2` (equivale à `develop` `f5dc3d5`), com as conferências de sempre: 0 ocorrências do Supabase de testes, URL e chave iguais às da produção anterior, sem "Teste Local", só o `index.html` alterado e diferença para a `develop` de exatamente as 3 linhas obrigatórias; a produção anterior era igual à `develop` `3892d78` (nada da produção se perdeu). Ponto de restauração: branch `restauracao-producao-antes-tela-telefone-2026-09-29` (tag bloqueada nesta sessão de nuvem).
- **Tela do cliente (todos os PDVs, Elgin e Toshiba — decisão da usuária):** logo abaixo do Nº Série/Marca e **acima da Gaveta de dinheiro**. Pergunta obrigatória **Funcionando | Defeito ou Falha**, com a dica "Se for defeito, precisa trocar o equipamento". Defeito ou Falha entra em **Equipamentos para substituição** ("PDV xx: Tela do cliente"). No **Elgin**, o aviso do cabo USB do touch e o botão "Remover Cabo USB"/"Removido" ficam logo abaixo da pergunta (continua obrigatório). Campo novo: `pdvs[].telaCliente.estado` ("funcionando" | "defeito").
- **Telefone (os 3 cards: Stage de Vendas, Gerência e Estoque — decisão da usuária):** o card da Gerência/Estoque passou de "Telefone VoIP" para **"Telefone"**. Campos: Possui telefone? → **Telefone: VoIP | Analógico** → Número + IP do telefone (**IP desabilitado e não obrigatório no Analógico**) → **Funcionamento: Funcionando | Defeito ou Falha** → **Observação só aparece com Defeito ou Falha** (obrigatória nesse caso). Telefone com defeito vira **alerta** ("... telefone com defeito ou falha"), também no Ranking Incidentes do link da gestão. Campos novos: `tipo` ("voip" | "analogico") e `estado` em `telefoneStage` e `gerencia/estoque.telefoneVoip` (função `migrarTelefone`, modelo de tela `htmlTelefone`).
- **Checklists antigos:** telefone já cadastrado na Gerência/Estoque vira VoIP automaticamente (o card era VoIP); no Stage, vira VoIP quando o IP estava preenchido. A tela do cliente e o funcionamento do telefone ficam em branco: se um checklist antigo for reaberto, essas perguntas aparecem como pendência. Checklists já concluídos não mudam de status.
- Parque Sephora: a contagem "Telefones VoIP" passou a se chamar **"Telefones (VoIP e analógico)"**.
- PDF da loja: "Tela do cliente" em todos os PDVs (antes da gaveta) e card "Telefone" com Tipo, Número, IP (só VoIP), Funcionamento e Observação (defeito em vermelho).
- Testado numa cópia com o **Supabase simulado** (nada gravado em banco nenhum): ordem dos campos, aviso só no Elgin, IP desabilitado no analógico, Observação só com defeito, pendências, troca, alerta, conversão de checklist antigo, PDF e Painel sem erros.

### 8.13 Dica do cabo importado no lugar certo: PUBLICADO E VALIDADO (29/09/2026)
- **Validado pela usuária no site no ar (29/09/2026).**
- Foi para produção na `main` `a40f8f8` (equivale à `develop` `7beaad4`), com as conferências de sempre (0 ocorrências do Supabase de testes, só as 3 linhas obrigatórias diferentes da `develop`; a publicação mudou só as 2 linhas da frase). Testado antes pela usuária na prévia de teste (seção 7). Ponto de restauração: branch `restauracao-producao-antes-dica-cabo-2026-09-29`.
- A frase *"Este cabo é importado, por isso é importante a sua validação."* saiu de baixo de "Gaveta de dinheiro" e passou a ficar **logo abaixo da pergunta "Qual o estado de conservação do cabo que liga a gaveta à impressora?"** (pedido da usuária). Só mudou o lugar do texto; nenhuma regra mudou.

### 8.14 Painel com login igual ao Painel do link da gestão: PUBLICADO E VALIDADO (29/09/2026)
- **Validado pela usuária no site no ar (29/09/2026).**
- Foi para produção na `main` `82f3efc` (equivale à `develop` `36b40a8`), com as conferências de sempre (0 ocorrências do Supabase de testes, só as 3 linhas obrigatórias diferentes da `develop`; a produção anterior era igual à `develop` `7beaad4`). Testado antes pela usuária no localhost. Ponto de restauração: branch `restauracao-producao-antes-painel-login-2026-09-29`.
- Pedido da usuária: o **Painel de Indicadores** do menu "Painel" (com login) passa a mostrar o **mesmo Painel novo** do link da gestão (`?painel=1`): Campanha 2026, números do topo, Agenda Semanal, Maior tempo de atendimento, Concentração de Lojas, Regionais x Solicitações de troca, Ranking Incidentes, Paretos, Trocas de equipamento, Parque Sephora etc.
- Diferenças que continuam: com login, **clicar numa loja (nas janelas dos números do topo) abre o checklist**; no link da gestão é só visualização. O aviso "Modo visualização · atualiza automaticamente" aparece só no link da gestão. Com login, o cabeçalho continua com os menus Agendamento / Painel / Técnico / Sair e tem também as bolinhas de cores (ver abaixo).
- O **Painel clássico** (seções numeradas) continua no código, escondido. Para voltar a ele: `PAINEL_LOGIN_USA_NOVO = false`.
- **Bolinhas de cores AlliedIT / Sephora também no Painel com login** (pedido da usuária): aparecem só com o Painel aberto, no canto direito do cabeçalho, ao lado dos menus. Com login, a cor escolhida vale **só no Painel**; ao ir para Agendamento ou abrir um checklist, o site volta às cores AlliedIT e, ao voltar ao Painel, a cor escolhida volta. A escolha fica guardada no navegador (`coresPainelLogin`), separada da escolha do link da gestão (`coresPainelGestao`).
- Testado com o Supabase simulado: Painel com login (sem erros, lojas abrem o checklist), link da gestão, link do técnico, tela de login e celular (sem rolagem lateral).

### 8.15 Cabeçalho do Painel padronizado: "DASHBOARD | PREVENTIVAS 2026": PUBLICADO E VALIDADO (29/09/2026)
- **Validado pela usuária no site no ar (29/09/2026).**
- Foi para produção na `main` `5f04859` (equivale à `develop` `39fd7df`), com as conferências de sempre (0 ocorrências do Supabase de testes, só as 3 linhas obrigatórias diferentes da `develop`; a produção anterior era igual à `develop` `36b40a8`). Ponto de restauração: branch `restauracao-producao-antes-dashboard-2026-09-29`.
- Pedido da usuária: o Painel com login e o link da gestão (`?painel=1`) com **o mesmo cabeçalho** (opção escolhida: título no centro). O título "Painel de Indicadores" saiu e ficou **"Dashboard | Preventivas 2026"** (aparece em maiúsculas pelo estilo do cabeçalho). Grafia usada: "DASHBOARD" (a usuária escreveu "DASHBORD"; ajustar se ela preferir).
- À esquerda, nas duas telas: "Checklist de Preventivas" / "Sephora 2026 · AlliedIT" (o link da gestão deixou de usar "Checklist de Preventivas · Sephora 2026 · AlliedIT" / "Gestão de manutenções preventivas das lojas Sephora"). À direita: bolinhas de cores; com login, também os menus.
- A tela de Agendamento continua com o título "Painel de Agendamento".

### 8.16 Card "Comentário por loja" no final do Dashboard: PUBLICADO E VALIDADO (29/09/2026)
- **Validado pela usuária no site no ar (29/09/2026).**
- Foi para produção na `main` `911f2e6` (equivale à `develop` `adf9ad3`), com as conferências de sempre (0 ocorrências do Supabase de testes, só as 3 linhas obrigatórias diferentes da `develop`; a produção anterior era igual à `develop` `39fd7df`). Ponto de restauração: branch `restauracao-producao-antes-comentarios-2026-09-29`.
- Pedido da usuária: no final dos dois Dashboards (Painel com login e link da gestão), card **"Comentário por loja"** com as lojas que responderam **"Sim"** em **"Ocorrências e necessidades"** no checklist, mostrando o texto escrito (campo `ocorrencia.descricao`; se veio vazio: "Ocorrência pontuada, sem descrição.").
- Colunas: Código, Nome da loja, Regional, Status (mesma etiqueta da Lista de lojas), Data da preventiva, Técnico e Comentário (quebra de linha preservada). Busca por loja, técnico ou texto do comentário e filtro por Regional, com "Limpar filtros".
- Entram também lojas com checklist ainda em andamento que já marcaram "Sim". Lojas de teste (`LOJAS_TESTE`) não entram. Função `renderPainelComentarios`.

### 8.17 Cartão "Campanha 2026" com animação de carregamento: PUBLICADO E VALIDADO (29/09/2026)
- **Validado pela usuária no site no ar (29/09/2026).**
- Foi para produção na `main` `ab7c0a6` (equivale à `develop` `73aee49`), com as conferências de sempre (0 ocorrências do Supabase de testes, só as 3 linhas obrigatórias diferentes da `develop`; a produção anterior era igual à `develop` `adf9ad3`). Ponto de restauração: branch `restauracao-producao-antes-animacao-2026-09-29`.
- Pedido da usuária: ao abrir o Dashboard (com login e link da gestão), o **número sobe de 0% até a porcentagem real**, e o **anel** e a **barrinha** enchem junto, como um "loading", com um brilho que passa pela barra enquanto carrega (cerca de 1 a 2 segundos, começa rápido e desacelera no final).
- A animação roda **só ao abrir ou recarregar a página (F5)** (ajuste pedido pela usuária). Quando os dados se atualizam sozinhos (a cada 20 s ou ao voltar para a aba), a porcentagem muda direto, sem animar. Com "reduzir animações" ligado no computador/celular, os valores aparecem direto. Função `pnAnimarCampanha`.

### 8.18 Alertas removidos: escada móvel e USB do touch (Elgin): PUBLICADO E VALIDADO (29/09/2026)
- **Validado pela usuária no site no ar (29/09/2026).**
- Pedido da usuária: estes alertas **não devem mais aparecer** (Painel/Dashboard, link da gestão e relatório PDF):
  - "Loja não possui escada móvel";
  - "Escada móvel não alcança o teto";
  - "PDV xx: USB do touch da tela do cliente ainda conectado" (PDV Elgin).
- As **perguntas continuam no formulário do técnico** (escada no Rack e o aviso/botão do USB do touch no PDV Elgin), assim como a pendência "remover USB do touch" ao finalizar o checklist. Só deixaram de gerar alerta.
- Arquivo alterado: `index.html` (função `alertasDaLoja` e categoria do touch em `pnCategoriaAlerta`).
- Foi para produção na `main` `02da3a2` (equivale à `develop` `9bfcc7a`), com as conferências de sempre (0 ocorrências do Supabase de testes, só as 3 linhas obrigatórias diferentes da `develop`; a produção anterior era igual à `develop` `73aee49`). Ponto de restauração: branch `restauracao-producao-antes-alertas-escada-touch-2026-09-29`.

### 8.19 Agenda Mensal no Dashboard: PUBLICADO (03/10/2026), AGUARDANDO VALIDAÇÃO NO SITE NO AR
- Foi para produção na `main` `cc20586` (equivale à `develop` `fd5c624`), publicada de uma sessão local neste computador. Método manual (cópia do `index.html` da `develop` trocando só as 3 linhas), montado numa pasta temporária sem trocar de branch. Conferências: 0 ocorrências do Supabase de testes, URL e chave iguais às da produção anterior, sem "Teste Local", só o `index.html` alterado, diferença para a `develop` de exatamente as 3 linhas obrigatórias e mudança na produção idêntica, linha a linha, à mudança da `develop` (84 linhas a mais, 5 a menos). A produção anterior era igual à `develop` `9bfcc7a`. Ponto de restauração: tag `producao-antes-agenda-mensal-2026-10-03`. Site no ar conferido idêntico à `main` `cc20586` (~40 s após o envio).
- Pedido da usuária: no Dashboard (link da gestão `?painel=1` e Painel com login, que é o mesmo), mostrar o **mês todo** no calendário, sem mexer muito na estrutura.
- O card continua no mesmo lugar (ao lado de "Maior tempo de atendimento"). Ganhou o seletor **Semana | Mês** ao lado das setas. **Mês é o padrão**; a Semana continua exatamente como antes. A escolha fica guardada só no navegador de quem clicou (chave `agendaPainelVisao`), sem gravar nada no banco.
- **Modo Mês:** título "Agenda Mensal" e subtítulo com o mês e o total (ex.: "Outubro de 2026 · 11 lojas agendadas"). Calendário de segunda a sexta (sábado e domingo só aparecem se houver loja agendada neles no mês, igual à Semana); dias de fora do mês ficam apagados e sem lojas; o dia de hoje fica destacado. Cada loja mostra a Hora Prevista e o nome, com as mesmas cores da Semana (azul agendada/confirmada, amarelo em atendimento, verde concluída, vermelho atrasada); passando o mouse aparece a situação. As setas trocam de mês e "Hoje" volta ao mês atual. Mês que começa no sábado ou domingo não mostra uma 1ª linha só com dias do mês anterior.
- **Celular:** no modo Mês aparecem só os dias com loja agendada, um embaixo do outro (ex.: "Qua 07/10").
- Funções `renderPainelAgenda` (escolhe a visualização), `renderPainelAgendaMes` (nova) e `renderPainelAgendaSemana` (a de antes, sem mudança). Nenhuma alteração de banco.
- Testado no localhost com o banco de testes (só leitura): outubro, setembro, agosto e novembro, setas, Hoje, troca Semana/Mês, celular sem rolagem lateral, sem erros. Fim de semana, virada do ano e meses que começam no sábado/domingo testados com dados simulados.

### 8.20 Novo visual do Agendamento + nova tela de login + fonte Chillax: PUBLICADO (06/10/2026), AGUARDANDO VALIDAÇÃO NO SITE NO AR
- Foi para produção na `main` `64f4a8c` (equivale à `develop` `afd20da`), com autorização da usuária. Método: cópia do `index.html` da `develop` trocando só as 3 linhas, montada numa pasta temporária (git worktree) sem trocar de branch. Conferências: 0 ocorrências do Supabase de testes, URL e chave iguais às da produção anterior, "Teste Local" só em 2 comentários do código (não aparece na tela), só o `index.html` alterado, diferença para a `develop` de exatamente as 3 linhas e mudança na produção idêntica à da `develop` (728 linhas a mais, 50 a menos). Ponto de restauração: tag `producao-antes-novo-visual-2026-10-06` (= `cc20586`). Site no ar conferido idêntico à `main` `64f4a8c` (~45 s após o envio); tela de login no ar conferida (sem "Teste Local", fonte e imagens carregando, sem erros).
- **Agendamento (só com login; o link do técnico `?tecnico=1` e o link da gestão `?painel=1` não mudam de layout):** menu lateral azul com textura e símbolo AlliedIT (Agendamento, Painel, Técnico, Cadastro de loja com Criar/Editar/Excluir); topo "Painel de Agendamento" com linha amarela, etiqueta "Teste Local" (copiada da `sub2` do cabeçalho, então só aparece na `develop`), iniciais + nome de quem está logado (montado do e-mail) e botão Sair; 5 cards de filtro (Não Iniciadas, Chamado, Protocolo, Reagendado, Confirmado) com as mesmas contagens dos filtros de Responsabilidade; busca + "Limpar filtros"; a tela **abre sem lojas** (mostra as lojas ao clicar num filtro/card ou digitar na busca); coluna da direita com Agenda Semanal (dia, quantidade, nomes das lojas, hoje em azul, alerta de limite mantido) e Responsabilidade (lista com contadores). Tudo controlado pela classe `agn` no `body` (`agendamentoNovoAtivo()`); sem ela a tela antiga continua igual.
- **Card da loja (novo modelo `cardLojaAgnHtml`):** Chamado, Protocolo, Técnico, Data, Hora / Dados do técnico + **Observação** (campo novo `observacaoAgendamento`, só para a equipe de agendamento; não vai para o técnico nem para o PDF) / Atendimento / **Histórico de alterações** (campo novo `historicoAlteracoes`, automático: troca de técnico, data, hora e reagendamentos, com quem alterou e quando; guarda as 60 últimas). Os dois campos novos ficam dentro do JSON da loja: **nenhuma mudança de tabela/coluna**. "Criar novo cadastro" a partir de outra loja começa com Observação e Histórico vazios. O histórico só começa a contar a partir desta versão.
- **Tela de login nova (só a tela com e-mail/senha):** fundo em gradiente escuro → azul; à esquerda o painel de palavras da parede AlliedIT recriado em texto (logo com o símbolo em neon com luzes correndo pelas linhas) e o título "A inteligência aliada à eficiência"; no centro "Painel de Preventivas", o cartão de login e a frase "Foco #NO Foco do Cliente"; à direita o robô mascote andando (pernas, braços e corpo animados separadamente), acenando, com balão de fala, troca de expressões e cartõezinhos flutuando. Em telas menores que 1200 px o robô some; menores que 820 px some também a coluna da esquerda. Classes `lg-…` e `body.tela-login`; funções `prepararTelaLogin` / `pararTelaLogin`. A verificação de senha não mudou.
- **Fonte Chillax (Fontshare, uso livre) em todo o sistema**, no lugar da Titillium. O PDF continua com a fonte dele.
- **Nome da aba do navegador:** "Checklist de Preventivas · Sephora 2026" só com o Dashboard (Painel) aberto; nas outras telas "Checklist de Preventivas · AlliedIT" (`atualizarTituloAba`). O "Sephora 2026" do cabeçalho do checklist/técnico **continua** (decisão da usuária, 06/10/2026).
- **Imagens embutidas no `index.html`** (texturas, símbolo, nome, robô e expressões); as texturas ficam uma vez só em variáveis CSS (`--img-bg-azul`, `--img-bg-claro`, `--img-logo-branco`). O arquivo passou de ~730 KB para ~1 MB. Fontes das imagens: `_Imagens_Arquivos/Allied_Identidade` e `Robo_AlliedIT`.
- Maquetes e recortes usados no desenho ficam em `_propostas/` (ignorada pelo Git só neste computador, via `.git/info/exclude`). O letreiro neon "FOCO #NO FOCO DO CLIENTE" foi guardado para outros projetos em `_Imagens_Arquivos/Allied_Identidade/Letreiro_Foco_no_Foco/`.
- Testado no localhost (banco de testes): tela de login, links `?tecnico=1` e `?painel=1` (sem erros, mesmo layout), e o Agendamento com login pela usuária. **Antes de publicar:** seguir o procedimento da seção 3 (trocar só as 3 linhas) e conferir também que a etiqueta "Teste Local" não aparece no topo do Agendamento nem no cartão de login da produção.

### 8.21 Proteções do navegador e biblioteca com versão fixa: PUBLICADO (06/10/2026)
- Foi para produção na `main` `5fb5226` (equivale à `develop` `fb57f0e`), com autorização da usuária, pelo mesmo método da 8.20. Conferências: 0 ocorrências do Supabase de testes, URL e chave iguais às anteriores, sem a etiqueta "Teste Local", diferença para a `develop` de exatamente as 3 linhas, 5 linhas mudando na produção. Ponto de restauração: tag `producao-antes-seguranca-item5-2026-10-06` (= `64f4a8c`). Site no ar idêntico à `main` em ~45 s; tela de login no ar conferida (biblioteca com integridade aceita, regras ativas, sem bloqueios nem erros).
- Biblioteca `supabase-js` fixada na versão **2.117.2** (a mesma que o `@2` entregava em 06/10/2026), com verificação de integridade (`integrity` sha384 + `crossorigin`). Para atualizar no futuro: trocar a versão no endereço e recalcular o `integrity`.
- Regras do navegador (Content-Security-Policy por `<meta>`) e `referrer` colocadas **na 1ª linha do arquivo** (cabeçalho extra que existe desde 19/09/2026; é o único `<head>` que o navegador lê). Liberado só o que o sistema usa: o próprio site, `cdn.jsdelivr.net` (biblioteca), Fontshare (fonte), `*.supabase.co` (banco, tempo real e fotos), imagens `data:`/`blob:`. Qualquer serviço novo precisa ser incluído nessa regra.
- Mensagens de erro na tela sem detalhe técnico (carregar lojas, criar e salvar cadastro); o detalhe continua no console.
- Testado no localhost: login, `?painel=1` (dados e tempo real), `?tecnico=1` (lista de lojas), sem nenhum bloqueio indevido; conexão com site não autorizado barrada.

### 8.22 Dados do técnico em tabela própria + proteção contra exibição em outro site: PUBLICADO (06/10/2026)
- Foi para produção na `main` `353ddb2` (equivale à `develop` `653b57f`), com autorização da usuária, pelo método da seção 3 (3 linhas trocadas). Ponto de restauração: tag `producao-antes-seguranca-item3-2026-10-06` (= `5fb5226`). Site no ar idêntico à `main`; testado pela usuária no ar (Agendamento com login, Painel, `?painel=1`, `?tecnico=1`).
- **"Dados do técnico" ficam na tabela `tecnico_dados`** (colunas `loja_id` ligado à loja e apagado junto com ela, `dados`, `atualizado_em`, `atualizado_por`), que só usuários com login leem e gravam. Existe nos dois projetos Supabase (testes e produção). Um ambiente novo precisa dessa tabela criada antes de publicar o site.
- No registro da loja fica só o sinal `temDadosTecnico` (preenchido sim/não). A função `temDadosTecnico(l)` é usada no cálculo de status, no filtro e na Responsabilidade, então o status sai igual também no técnico e no `?painel=1`, que não leem a tabela.
- O Agendamento (com login) carrega a tabela junto com as lojas (`carregarCofreTecnico`) e grava nela ao editar o campo (`salvarDadosTecnico`); se a gravação falhar, avisa e não altera a loja. "Duplicar loja" não copia os dados do técnico.
- Proteção contra o site ser exibido dentro de outro site: script na 1ª linha do arquivo esconde a página quando ela está dentro de uma moldura (a usuária confirmou em 06/10/2026 que o site só é aberto direto no navegador). O PDF continua funcionando.
- Cópia de segurança da tabela das lojas da produção (06/10/2026) guardada fora do repositório, em `_Projetos_AlliedIT/_Backups_Preventivas/`.
- **Concluído em 07/10/2026:** cópia de segurança nova (`backup-producao-lojas-2026-10-07.csv`, mesma pasta), cópia final para a tabela `tecnico_dados` e retirada do campo antigo do registro das lojas na produção (resultado: 0 lojas com o campo antigo, 21 no cofre, 21 com o sinal). Comandos fora do repositório, em `_SQL_Preventivas/item3-passo1-*` e `item3-passo2-*`.

### 8.23 Painel: etiqueta "P" de protocolo na Agenda + card Reagendamento Lojas: PUBLICADO (06/10/2026)
- Foi para produção na `main` `1c20282` (equivale à `develop` `38d16d0`), com autorização da usuária, pelo método da seção 3. Ponto de restauração: tag `producao-antes-agenda-protocolo-reagendamento-2026-10-06` (= `353ddb2`). Site no ar idêntico à `main` em ~60 s; `?painel=1` no ar conferido (sem erros).
- **Agenda do Painel (mês e semana):** bolinha azul-escura com "P" no canto da loja que já tem protocolo (`pnTemProtocolo`, `pnEtiquetaProtocolo`); o número do protocolo aparece ao passar o mouse. Legenda ganhou "P Com protocolo". Aparece também no `?painel=1`.
- **Card ao lado da Agenda:** agora só "Reagendamento Lojas" (`renderPainelReagendamentos`), Top 10 pelo contador `reagendamentos` (sobe a cada clique em Reagendar), sem lojas de teste; subtítulo com o total. "Maior tempo de atendimento" ficou **escondido** (`<div hidden>`, código mantido) a pedido da usuária.

### 8.24 Painel: feriados nacionais na Agenda + Reagendamento Lojas dividido: PUBLICADO (06/10/2026)
- Foi para produção na `main` `9da30c4` (equivale à `develop` `d8c5536`), com autorização da usuária, pelo método da seção 3. Ponto de restauração: tag `producao-antes-feriados-reagendamento-2026-10-06` (= `1c20282`). Site no ar idêntico à `main` em ~60 s; `?painel=1` no ar conferido (feriado de 12/10, as duas divisões, sem erros).
- **Feriados nacionais na Agenda (mês e semana):** dia com fundo lilás e etiqueta com o nome; legenda "Feriado nacional"; ao passar o mouse diz se é feriado ou ponto facultativo (Carnaval e Corpus Christi). Calculados para qualquer ano (`pnFeriadosDoAno`, Páscoa pelo algoritmo de Meeus). Estaduais e municipais **não** entram.
- **Reagendamento Lojas** com duas divisões: "Em tratativa" (barras azuis) e "Concluídas após reagendamento" (barras verdes; concluída ou reaberta), até 10 lojas em cada, mesma escala de barra.

### 8.25 Prazo da campanha 30/10/2026: PUBLICADO (06/10/2026)
- `DEADLINE` passou de `2026-10-26` para `2026-10-30` (card Campanha 2026 do Painel: prazo, dias restantes e ritmo necessário; e a "Previsão de término" do Painel antigo). Publicado na `main` `0ebfc95` (= `develop` `4ef8e38`), a pedido e com autorização da usuária. Ponto de restauração: tag `producao-antes-prazo-30-10-2026-10-06` (= `9da30c4`). Conferido no ar: "Prazo: 30/10/2026 · 24 dia(s) restantes".

### 8.26 Painel com login no padrão do Agendamento + Cadastro recolhível + Área do Técnico: PUBLICADO (06/10/2026)
- Publicado na `main` `504bc31` (= `develop` `b2c3967`), com autorização da usuária, pelo método da seção 3. Ponto de restauração: tag `producao-antes-painel-menu-lateral-2026-10-06` (= `0ebfc95`). Site no ar idêntico à `main` em ~60 s; login e `?painel=1` no ar conferidos (sem erros; o `?painel=1` continua com o cabeçalho antigo).
- **Painel com login:** usa o mesmo menu lateral e o mesmo topo do Agendamento (body `agn agn-painel`). As peças `#agn-side` e `#agn-topo` são as mesmas e só mudam de lugar (`posicionarMenuAgn`, chamado em `showView`); no Painel o topo mostra "Dashboard | Preventivas 2026" e as bolinhas de cores AlliedIT/Sephora (`#tema-cores` volta ao cabeçalho fora do Painel). Com as cores Sephora o menu lateral fica preto. "Excluir cadastro" a partir do Painel volta para o Agendamento antes de entrar no modo de seleção. O link da gestão (`?painel=1`) **não** muda.
- **Cadastro de loja** no menu lateral começa fechado e abre/fecha os submenus ao clicar (`#agn-cad-grupo`, setinha); no celular os submenus ficam sempre visíveis.
- Menu lateral: **"Técnico" passou a "Área do Técnico"**, com ícone de pessoa.

### 8.27 Histórico de alterações com todos os campos + tela mantida ao atualizar (F5): PUBLICADO (06/10/2026)
- Publicado na `main` `477637d` (= `develop` `b2d77cb`), com autorização da usuária, pelo método da seção 3. Ponto de restauração: tag `producao-antes-historico-completo-2026-10-06` (= `504bc31`). Site no ar idêntico à `main` em ~45 s; login e `?painel=1` no ar conferidos, sem erros.
- **Histórico de alterações** (card do Agendamento) registra qualquer campo: chamado, protocolo, técnico, atendimento, observação, data, hora, status (inclusive quando muda sozinho e na prospecção), reagendamento e nome da loja (Editar cadastro). Funções `adicionarHistorico` e `adicionarHistoricoStatus`; textos longos ficam resumidos em 120 caracteres; guarda as 60 últimas. **"Dados do técnico" registra só "atualizados/removidos", sem o conteúdo** (o histórico fica no registro da loja). Alterações feitas pelo técnico dentro do checklist **não** entram.
- Correção junto: depois de cada gravação no Agendamento a cópia local da loja é atualizada na hora (`Object.assign(l, payload)`), porque a lista só recarrega a cada 20 s; antes, duas edições seguidas faziam a 2ª apagar o registro da 1ª no histórico.
- **F5 mantém a tela:** filtros (cards e Responsabilidade), busca, tela aberta (Agendamento, Painel ou checklist), mês/semana da Agenda do Painel, submenu Cadastro e rolagem (`guardarEstadoTela`/`restaurarEstadoTela`, `sessionStorage` da aba). Aba nova começa do zero. Vale também para o `?painel=1` (agenda); não vale para a tela do técnico.
- No teste, a loja de teste 9999 (banco de testes) ficou com 7 registros de histórico das verificações.

### 8.28 Planejamento BF (menu lateral, só autorizados): PUBLICADO (07/10/2026)
- Publicado na `main` `9262bfd` (= `develop` `729224d`), com autorização da usuária, pelo método da seção 3. Ponto de restauração: tag `producao-antes-planejamento-bf-2026-10-07` (= `477637d`). Site no ar idêntico à `main` em ~90 s; login e `?painel=1` no ar conferidos, sem erros; menu do Planejamento escondido para quem não está autorizado.
- **Página "Planejamento BF"** (menu lateral, só com login e só para e-mails autorizados): contagem até a Black Friday, "Agora" (hotline aberta/sem analista e quem está em turno), Hotline (horários, canais, comunicado, gestão), Hora extra por mês (dias normais x feriados, horas a mais, realizado), simulação "Se passar do previsto" com orçamento em reais, calendário mensal (termômetro de horas a mais, feriados nacionais, detalhe do dia com registro) e escala dos analistas.
- **Banco (testes e produção), 3 tabelas novas, todas fechadas para quem não está na lista:** `bf_autorizados` (lista de e-mails; cada pessoa logada só vê a própria linha; inclusão/remoção só pelo painel do Supabase), `bf_hora_extra` (horas a mais registradas; só autorizados leem e gravam) e `bf_config` (todo o conteúdo da página; só autorizados leem; ninguém grava pelo site).
- **Nenhum conteúdo do planejamento fica no código** (repositório público): escala, horários, canais, contatos, comunicado, datas e valores estão em `bf_config`. Os comandos SQL com esse conteúdo ficam fora do repositório, em `_Projetos_AlliedIT/_SQL_Preventivas/`. Para mudar algo (ex.: link do Teams): Supabase → Table Editor → `bf_config` → linha `planejamento` → coluna `dados`.
- Regras de hora extra usadas no cálculo: comercial 8 h/dia, 12x36 11 h/dia, domingo/feriado conta todo o tempo do recurso acionado, paga só o tempo a mais (sem arredondar). Nos feriados de dia útil a página permite escolher se os comerciais folgam ou trabalham.

### 8.29 One Page BF (gestão Sephora) e Hotline (lojas), sem login: PUBLICADO (07/10/2026)
- Publicado na `main` `d433c0b` (= `develop` `5203a5e`), com autorização da usuária, pelo método da seção 3. Ponto de restauração: tag `producao-antes-onepages-bf-2026-10-07` (= `9262bfd`). Site no ar idêntico à `main` em ~30 s; login no ar conferido, sem erros.
- **Links sem login:** `?hotline=1` (lojas: horário, canais, regras da sala e contatos, sem valores) e `?onepagebf=1` (gestão da Sephora: hora extra por mês, orçamento, calendário do dia a dia com balão de cobrança ao clicar no dia; só consulta; cores AlliedIT/Sephora). Os dois cabem numa tela no computador.
- **Planejamento BF:** submenu com One Page BF e Hotline (abrem em outra aba); limite e orçamento aprovado ficam no banco para a gestão ver os mesmos números; registro de hora a mais digitado em horas (1:30, 1,5…); calendário repaginado; feriado em dia útil conta só a cobertura até 00h.
- **Banco:** `bf_publico` (conteúdo da página das lojas; leitura liberada só da linha `onepage`; ninguém grava pelo site), `bf_plano` (limite e orçamento; só autorizados) e a função `bf_onepage_gestao` (só leitura; entrega os números para `?onepagebf=1`, sem quem registrou as horas). SQL fora do repositório, em `_Projetos_AlliedIT/_SQL_Preventivas/` (`onepage-cliente-PRODUCAO.sql` e `onepage-gestao-PRODUCAO.sql`). Rodados na produção pela usuária em 07/10/2026; conferido sem login (leitura liberada só do conteúdo público e dos números; gravação bloqueada). **Validado pela usuária no site no ar em 07/10/2026.**

### 8.30 Salvamento das lojas + regras de acesso da tabela: PUBLICADO (07/10/2026)
- Publicado na `main` `22bf06e` (= `develop` `dddbc39`), com autorização da usuária, pelo método da seção 3. Ponto de restauração: tag `producao-antes-seguranca-item2-2026-10-07` (= `d433c0b`). Salvar uma loja passa a só alterar o registro existente. Regras de acesso da tabela de lojas ajustadas pela usuária no banco (testes e produção) em 07/10/2026; comandos fora do repositório, em `_SQL_Preventivas/item2-*`. Testado pela usuária no site local (edição, duplicar, excluir, técnico e Painel).

### 8.31 Checklist grava ao sair + Em andamento com qualquer mudança + filtro de datas na Agenda: PUBLICADO (08/10/2026)
- Publicado na `main` `8c4da68` (= `develop` `ede2eef`), com autorização da usuária, pelo método da seção 3. Ponto de restauração: tag `producao-antes-checklist-datas-2026-10-08` (= `22bf06e`). Testado pela usuária no site local.
- **Checklist:** a mudança que ainda esperava para ser gravada (1 s) é gravada na hora ao sair, trocar de loja ou fechar a página (`salvarPendente`); cada gravação vai sempre para a loja certa e a lista local é atualizada na hora.
- **Status:** qualquer mudança feita pelo técnico no checklist marca `checklistIniciado` e a loja passa a "Em andamento" (antes só o horário de início contava).
- **Agenda Semanal (Agendamento):** clicar no dia filtra as lojas agendadas naquele dia (clicar de novo tira); campos De/Até filtram por período (inclui concluídas); lista em ordem de data e hora; soma com status e busca; mantido ao atualizar (F5).
