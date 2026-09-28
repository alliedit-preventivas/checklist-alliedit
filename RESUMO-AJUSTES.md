# Resumo dos ajustes — Checklist de Preventivas (Sephora 2026 · AlliedIT)

Documento para continuar o trabalho em outro perfil ou outra conta do Claude Code.
Última atualização: 28/09/2026 (publicação em produção das regionais atualizadas, SP numa linha só e janela das lojas por status).

---

## 1. Onde está cada coisa

| Item | Situação |
|---|---|
| Repositório | `alliedit-preventivas/checklist-alliedit` no GitHub (público) |
| `develop` | Desenvolvimento/testes. Usa o **Supabase de TESTES** e mostra a etiqueta "Teste Local" no topo |
| `main` | **PRODUÇÃO**. Usa o **Supabase de PRODUÇÃO**. Tem só o `index.html` |
| Site no ar | https://alliedit-preventivas.github.io/checklist-alliedit/ — publicado automaticamente pelo GitHub Pages a partir da `main` (atualiza em 1 a 3 minutos após o envio) |
| Última publicação | `main` = commit `8854816` (28/09/2026), equivale à `develop` `b8d3bec` |

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

### 4.8 Painel Executivo (só na `develop`, ainda não publicado)
- A tela **Painel** ganhou o bloco **"Painel Executivo: Preventiva 2026"** com cartões de indicadores: Lojas Cadastradas (e nº de estados), Concentração SP, Regionais Mapeadas (e lojas pendentes de alocação), Top Solicitação de Troca e Lojas em Levantamento.
- **Lojas em Levantamento (sem troca de equipamentos):** lojas inauguradas em 2026 (3096, 3130, 3135, 3114, 3142) e a loja em reforma 2868 (Leblon). Equipamento todo novo: a preventiva ali é só levantamento de informações. A lista fica fixa no código (`LOJAS_LEVANTAMENTO`). Por enquanto isso aparece **só no Painel**: as regras de "Equipamentos para substituição" e o PDF não mudaram.
- **Pareto de Problemas Recorrentes:** base histórica da Preventiva 2025 (41 lojas), com valores fixos no código (`PARETO_2025`). Não é calculado a partir dos checklists de 2026.
- Também: Concentração Territorial (lojas por UF), Lojas com Maior Volume de Troca, Estrutura Operacional por Regional e Maior tempo de atendimento.
- Commit na `develop`: `55c05b4`. Nenhuma alteração de banco.

### 4.9 Comparativo de Trocas por Loja: 2025 x 2026 (só na `develop`, ainda não publicado)
- Cartão novo no **Painel**, abaixo de "Lojas com Maior Volume de Troca". Colunas: Loja, 2025, 2026, Variação e Situação 2026. As lojas que mais trocaram aparecem primeiro. Passando o mouse sobre o número, aparecem os itens.
- **2025:** números fixos no código (`TROCAS_2025`), tirados da planilha "PREVENTIVA 2025 - SEPHORA" (41 lojas, 109 indicações). Entram só o código, o nome da loja e as contagens, sem nomes de pessoas, IPs ou números de série.
- **Critério 2025 escolhido pela usuária (critério 2):** nobreaks com autonomia ruim (rack, mini PDV e estoque; lojas EATON sem mini nobreak), teclado/mouse/monitor "precisa trocar", PINPAD de PDV, PDV lento/desligando, leitor com mau contato, tela do cliente apagada, computador com queixa grave ("impossível usar" ou "gostaria de trocar") e PDA Zebra sem funcionar. Por incluir mais tipos de problema que 2026, 2025 tende a ter números maiores (o aviso aparece no próprio cartão).
- **2026:** "Equipamentos para substituição" (`substituicoesDaLoja`), atualizado sozinho. Loja concluída = número final; em andamento = número parcial (com *); sem checklist = "Aguardando atendimento". A variação só é calculada para lojas concluídas.
- Acima dele, cartão **"Top 5 Lojas com Mais Trocas: 2025 x 2026"** (o cartão ao lado passou a se chamar "Lojas com Maior Volume de Troca 2026"): duas colunas (2025 e 2026), cada loja com o total e os equipamentos em etiquetas (ex.: "Mini Nobreak PDV ×3"). 2026 considera checklists concluídos e em andamento (* = em andamento) e agrupa os itens por tipo (ex.: "Mouse Gerência", "Mini Nobreak PDV").
- Resumo no topo do cartão compara 2025 x 2026 **só nas lojas já concluídas em 2026 que também foram atendidas em 2025** (mesma base).
- Nenhuma alteração de banco.

### 4.10 Painel mais enxuto (só na `develop`, ainda não publicado)
- **Card "Lojas"** (tabela com busca e filtros) **escondido por enquanto**, a pedido da usuária. O código foi mantido: para voltar, remover o `display:none` do card `painel-card-lojas` e mudar `PAINEL_MOSTRAR_TABELA_LOJAS` para `true`. Clicar nos cartões de status abre a janela com a lista das lojas (ver 8.5); com a tabela escondida, não filtra nada.
- **Card "Maior tempo de atendimento"** escondido a pedido da usuária (código mantido; para voltar, remover o `display:none` do card `painel-card-tempo`). O calendário ficou sozinho na metade esquerda da linha.
- **Calendário compacto:** agora fica ao lado de "Maior tempo de atendimento", com o título "Calendário de agendamentos". Cada dia mostra só o **número de lojas agendadas**. Clicando no dia, a lista das lojas aparece abaixo, e clicar na loja abre o checklist, como antes. Mostra só as semanas do mês (5 ou 6 linhas) e sublinha o dia de hoje.

### 4.11 Lojas concluídas não aparecem mais como "Atrasado" (só na `develop`, ainda não publicado)
- Problema: loja concluída e depois aberta para ajuste ("Solicitar edição") passa a ter o status **"Reaberto"**, e a regra de atraso só tirava da conta o status "Concluído". Por isso ela voltava a aparecer como "Atrasado".
- Correção: a regra ficou numa função só, `lojaAtrasada`: atrasada = data de agendamento já passou **e** status diferente de "Concluído" e "Reaberto". É usada no selo "Atrasado" da tela Agendamento, no filtro/contador "Atrasado" e no Painel (cartão "Atrasado" e "atrasada(s)" do Resumo Executivo).
- Não foi possível conferir os dados reais, porque a sessão na nuvem não acessa o Supabase. Se ainda aparecer alguma loja concluída como atrasada, verificar qual status ela tem gravado.

### 4.12 Painel reorganizado e mais profissional (só na `develop`, ainda não publicado)
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

### Ideias ainda em aberto (opcionais)
- Ao "Finalizar checklist" com muitas pendências, resumir por setor em vez de listar todas.
- Lembrete: a área de fotos do Supabase é pública (quem tem o link abre a foto).

---

## 7. Dicas para testar sem mexer em nenhum banco

- O formulário só abre depois do login. Para testar sem login, o Claude monta uma cópia do `index.html` numa pasta temporária com o Supabase **simulado** (nada é gravado em banco nenhum) e confere tudo por medições e simulações de clique.
- Para imagens de prévia, o Edge instalado no Windows pode gerar capturas com `msedge --headless --screenshot`.

---

## 8. Publicações e pendências (27/09/2026)

### 8.1 Aviso de pendências resolvidas: PUBLICADO E VALIDADO
Quando o técnico corrige o último campo obrigatório que faltava, aparece a janela "✅ Tudo certo! Todos os campos obrigatórios foram preenchidos. Você já pode finalizar o checklist.", com o botão "Finalizar Atendimento Agora".
- Commit na `develop`: `c06eb2c`. Commit na `main`: `adf6366`.
- Conferido: a `main` difere da `develop` `c06eb2c` só nas 3 linhas obrigatórias de produção, mais 2 linhas de comentário removidas (não mudam o funcionamento).
- Ponto de restauração da produção (antes deste ajuste): branch `restauracao-producao-antes-aviso-pendencias-2026-09-27`.
- **Testado e validado pela usuária no site no ar (27/09/2026).**

### 8.2 Publicação de 28/09/2026: PUBLICADO
- Foi para produção (`main` `15f0165`, equivale à `develop` `c221eb3`): Painel Executivo (4.8), Comparativo e Top 5 de trocas 2025 x 2026 (4.9), Painel enxuto (4.10), correção do "Atrasado" (4.11) e Painel reorganizado (4.12).
- Conferido antes do envio: 0 ocorrências do Supabase de testes, URL e chave iguais às da produção anterior, sem "Teste Local", só o `index.html` alterado, e diferença para a `develop` de exatamente as 3 linhas obrigatórias.
- Ponto de restauração: branch `restauracao-producao-antes-painel-executivo-2026-09-28` (tags continuam bloqueadas na sessão de nuvem; o envio para a `main` funcionou).
- Pendente: a usuária conferir o site no ar com os dados reais.

### 8.3 Publicação de 28/09/2026 (2ª): PUBLICADO E VALIDADO
- **Link da gestão testado e validado pela usuária no site no ar (28/09/2026).**
- Foi para produção (`main` `41cce39`, equivale à `develop` `90ed6a9`) com as mesmas conferências da 8.2 (0 ocorrências do Supabase de testes, só as 3 linhas obrigatórias diferentes). Ponto de restauração: branch `restauracao-producao-antes-link-gestao-2026-09-28`.
- Itens publicados:
- **Link do Painel para a gestão (sem login, só visualização):** `https://alliedit-preventivas.github.io/checklist-alliedit/?painel=1` (também funciona com `#painel`). Abre direto no Painel de Indicadores, sem os menus Agendamento/Técnico, sem pedir login, com o aviso "Modo visualização · atualiza automaticamente". Clicar nas lojas do calendário não abre checklist, e o modo não grava nada no banco (`modoGestao`). Decisão da usuária: sem login, igual ao link dos técnicos. Risco aceito: quem tiver o link vê os indicadores. Localmente: `http://localhost:5174/?painel=1`. Só na `develop`.
- **Lojas em Levantamento** fora do Painel: o card da seção 4 e o indicador do topo não aparecem mais (`PAINEL_MOSTRAR_LEVANTAMENTO = false`; a lista `LOJAS_LEVANTAMENTO` continua no código). "Lojas por UF" passou a ocupar a linha toda. No Comparativo 2025 x 2026 as lojas continuam com a marcação "(levantamento)". Só na `develop`.
- Equipamentos para substituição por loja sozinho na linha, com a largura toda (ranking 2026 também sozinho, acima dele). Só na `develop`.

### 8.4 Regionais das lojas atualizadas: PUBLICADO (28/09/2026, junto com a 8.5)
- Foi para produção na `main` `8854816` (equivale à `develop` `b8d3bec`), com as mesmas conferências de sempre: 0 ocorrências do Supabase de testes, URL e chave iguais às da produção anterior, sem "Teste Local", só o `index.html` alterado e diferença para a `develop` de exatamente as 3 linhas obrigatórias. Ponto de restauração: tag `producao-antes-janela-status-2026-09-28`.
- A versão de produção foi montada numa pasta temporária (`git merge-file`: ajustes da `develop` + as 3 linhas de produção) e gravada na `main` sem trocar de branch, então os arquivos da pasta do projeto não foram mexidos.
- Lista de lojas x regionais enviada pela usuária (28/09/2026, 49 lojas) conferida com `UF_REGIONAL_MAP`: 45 já estavam certas. As 4 que estavam como "Confirmar" receberam a regional: 3114 Barra Sul = 2, 3130 Bourbon = 1, 3135 BH Shopping = 3, 3142 Parque Dom Pedro = 4.
- Resultado no card "Estrutura Operacional por Regional": Regional 1 = 12 lojas, 2 = 13, 3 = 11, 4 = 13 (sem contar as lojas de teste). O card "REGIONAL CONFIRMAR" deixou de existir e "Regionais Mapeadas" passou de 5 para 4.
- Os nomes das lojas exibidos vêm do cadastro (tabela `lojas`), não da lista; não foram alterados. Nenhuma alteração de banco.
- **Concentração Territorial (Lojas por UF):** "SP", "SP - Interior" e "SP - Litoral" viraram uma linha só, "SP" (25 lojas, igual ao indicador "Concentração SP"). A coluna "Regional Predom." virou **"Regional"** e mostra todas as regionais da UF (SP = "Regionais 1 e 4"). A diferença Capital/Interior/Litoral continua guardada em `UF_REGIONAL_MAP`, só não aparece mais na tabela.

### 8.5 Janela com as lojas de cada cartão de status: PUBLICADO (28/09/2026, ver 8.4)
- No Painel, clicar em **Não iniciado, Confirmado, Andamento, Concluídos, Equip. p/ substituir ou Atrasado** abre uma janela com a quantidade e a lista das lojas daquele cartão (função `abrirPopupStatus`).
- Cada loja mostra a data agendada (ou a previsão, ou "Sem data agendada"). Em **Atrasado**, a mais atrasada vem primeiro, com os dias de atraso. Em **Equip. p/ substituir**, cada loja mostra os equipamentos e o setor (antes esse cartão só rolava a página até a lista de substituições).
- Com login, clicar na loja abre o checklist (igual ao calendário). No link da gestão (`?painel=1`) é só consulta: as lojas não são clicáveis.
- Fecha no botão "Fechar", clicando fora da janela ou com a tecla Esc. No celular, a lista rola dentro da janela.
- As lojas de teste (9999 e 9998) aparecem na lista, porque também entram na contagem dos cartões. Nenhuma alteração de banco.

### 8.6 Cores AlliedIT x Sephora no link da gestão (só na `develop`, ainda não publicado)
- **Exclusivo do link da gestão (`?painel=1` ou `#painel`)**, a pedido da usuária: duas bolinhas pequenas e discretas no **cabeçalho, canto direito** (12px, sem texto): azul e amarelo = AlliedIT, preto e branco = Sephora. A escolhida ganha um anel branco fino e a outra fica um pouco apagada; o nome aparece ao passar o mouse. No celular ficam abaixo do título. No Painel com login, no Agendamento, no checklist e na tela do Técnico as bolinhas **não aparecem** e as cores são **sempre AlliedIT**.
- Verde, amarelo e vermelho de situação (Concluído, Atrasado, Atenção etc.) ficam iguais nos dois, para não perder o significado. O **PDF não muda** (continua nas cores AlliedIT).
- **Logo do cabeçalho:** nas cores Sephora, o logo AlliedIT dá lugar ao **logo da Sephora** (enviado pela usuária). Do quadrado listrado foi usada só a palavra "SEPHORA" da faixa do meio, em branco com fundo transparente (no tamanho do cabeçalho, o quadrado inteiro ficaria com letras ilegíveis). As listras aparecem na faixa abaixo do cabeçalho. Nas cores AlliedIT continua o logo AlliedIT.
- **Fundo do Painel nas cores Sephora:** foto de uma parede com listras pretas e brancas, com sacolas listradas, presentes com laço dourado e perfume à esquerda (enviada pela usuária, **versão final** escolhida em 28/09/2026), fixa atrás dos cards, reduzida para 1600×897 (33 KB) e guardada dentro do `index.html`. Os títulos que ficam direto sobre a foto (seções numeradas e "Estrutura Operacional por Regional") ganham uma faixa branca leve para não sumirem nas listras pretas. Histórico: foto de loja Sephora (`5347a11`) → listras a 10% (`c302ec7`) → parede listrada com sofá (`367d4e7`) → parede listrada com presentes (atual). Classe `vendo-painel` no `body` (ligada em `showView`).
- A escolha fica guardada **só no navegador de quem clicou** (chave `coresPainelGestao`) e **só vale no link da gestão**: não se replica para as outras telas, mesmo no mesmo navegador. Não grava nada no banco e não muda o que as outras pessoas veem. O script do `<head>` só aplica as cores quando o endereço é o do link da gestão, e o `init` tira as cores Sephora em qualquer outro modo.
- No código: cores da Sephora em `:root[data-tema="sephora"]`, funções `aplicarTemaCores` e `wireTemaCores`, e um script curto no `<head>` que aplica a escolha antes de desenhar a página (sem "piscar" nas cores AlliedIT). Ponto de restauração da `develop` antes deste ajuste: tag `antes-tema-cores`.
