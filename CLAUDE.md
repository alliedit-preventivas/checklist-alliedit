\# Regras do projeto - Checklist AlliedIT



\## Ambiente atual

\- Este repositório possui dois ambientes:

&#x20; - `main` = PRODUÇÃO

&#x20; - `develop` = DESENVOLVIMENTO/TESTES

\- Todo desenvolvimento deve ser realizado na branch `develop`.

\- O ambiente de desenvolvimento utiliza um projeto Supabase separado do ambiente de produção.



\## Regras obrigatórias de segurança



1\. NUNCA alterar diretamente a branch `main`.

2\. NUNCA fazer merge para `main` sem autorização explícita da usuária.

3\. NUNCA executar `git push`, `git merge`, `git rebase` ou publicação/deploy sem autorização explícita.

4\. Antes de modificar arquivos, confirmar que a branch atual é `develop`.

5\. NUNCA substituir a URL ou chave do Supabase de testes pelas credenciais do Supabase de produção.

6\. NUNCA executar alterações no banco de dados de produção.

7\. Qualquer alteração de banco de dados, tabela, policy, RLS, Storage ou SQL deve ser explicada antes de ser executada.

8\. NUNCA excluir arquivos, tabelas, registros, buckets ou dados sem autorização explícita.

9\. Preservar as funcionalidades existentes sempre que possível.

10\. Antes de alterações grandes, explicar resumidamente o que será modificado.

11\. Após cada alteração, informar quais arquivos foram modificados.

12\. Testar as alterações localmente antes de considerar a tarefa concluída.

13\. Não expor, imprimir ou copiar chaves, tokens, senhas ou outras credenciais na resposta.

14\. Em caso de dúvida sobre produção versus testes, PARAR e perguntar antes de executar qualquer ação.



\## Forma de trabalho



A usuária não é desenvolvedora e utiliza o Claude Code por linguagem natural.



Portanto:

\- Explique ações técnicas em português e de forma simples.

\- Não presuma conhecimento de Git, JavaScript, HTML ou Supabase.

\- Para mudanças complexas, faça alterações em etapas pequenas.

\- Não publique alterações automaticamente.

\- Quando houver risco de perda de dados, explique o risco antes de continuar.

