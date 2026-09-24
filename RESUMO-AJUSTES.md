# Resumo dos ajustes — Checklist de Preventivas (Sephora 2026 · AlliedIT)

Documento para continuar o trabalho em outro perfil ou outra conta do Claude Code.
Última atualização: 24/09/2026 (inclui as decisões sobre as pendências).

---

## 1. Onde está cada coisa

| Item | Situação |
|---|---|
| Repositório | `alliedit-preventivas/checklist-alliedit` no GitHub (público) |
| `develop` | Desenvolvimento/testes. Usa o **Supabase de TESTES** e mostra a etiqueta "Teste Local" no topo |
| `main` | **PRODUÇÃO**. Usa o **Supabase de PRODUÇÃO**. Tem só o `index.html` |
| Site no ar | https://alliedit-preventivas.github.io/checklist-alliedit/ — publicado automaticamente pelo GitHub Pages a partir da `main` (atualiza em 1 a 3 minutos após o envio) |
| Última publicação | `main` = commit `292cf4b` (equivale à `develop` `b9f7038`) |

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
| `producao-antes-maquinas-pos-2026-09-24` | Produção antes do PINPAD reserva, Máquinas POS e fotos (versão anterior à atual) |

Para voltar a produção a um desses pontos, peça ao Claude: "volte a produção para a tag X" (ele deve explicar e pedir confirmação antes).

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
  - **Mercado Pago / POS PIX**: foto de exemplo, Modelo e Nº Série ao lado.
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

### 4.8 Fotos de exemplo
- Todas foram enviadas pela usuária, reduzidas (240×360 ou 300px de altura) e **guardadas dentro do próprio `index.html`** (não dependem de sites externos): PINPAD Rede (PDV e reserva), POS Mercado Pago, POS Rede e POS Cielo. Não entram no PDF.

---

## 5. Dados e banco

- **Nenhuma tabela, permissão (RLS), Storage ou SQL foi alterado.** Os dados de cada loja ficam num campo JSON flexível da tabela `lojas`; as fotos ficam na área `checklist-anexos` do Storage.
- Campos novos dentro do JSON da loja: `rack.nobreak.autonomiaEaton`, `telefoneStage`, `pinpadReserva`, `posRedeCielo`.
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
