# Relatório de Auditoria de Segurança

## Resumo Executivo
Uma auditoria de segurança inicial foi realizada na base de código do projeto. Foram identificadas, por enquanto, vulnerabilidades na configuração base relacionadas à proteção do lado do cliente (headers ausentes) e potencial exposição em arquivos locais. Dado que a aplicação parece ser focada primariamente em frontend via React com uso mínimo de back-end interno mapeado, os riscos são concentrados em proteção de assets, requisições de API no ecosistema Node integrado, e validações front-end. O nível de risco atual é Moderado.

## Vulnerabilidades Médias

### 1. Ausência de Cabeçalhos HTTP de Segurança (Content Security Policy)
**Local**: Distribuição web e backend Express (via `package.json`).
**Descrição**: A ausência de regras como o Content-Security-Policy (CSP) permite que a aplicação seja mais vulnerável a injeções de conteúdo na interface caso existam falhas não tratadas na manipulação do DOM.
**Impacto**: Alto risco de XSS (Cross Site Scripting) se a aplicação passar a manipular dados do usuário não-higienizados e injeção do CSS.
**Checklist de Correção**:
- [ ] Implementar o cabeçalho HTTP `Content-Security-Policy` no Express do backend e mapear diretivas estritas via meta tags.
- [ ] Fazer whitelist de domínios seguros (como os serviços do próprio Google e provedores de pagamentos utilizados).
**Referências**: [OWASP Secure Headers Project](https://owasp.org/www-project-secure-headers/)

### 2. Uso Inseguro e Rastreamento de Terceiros por Imagens Externas
**Local**: `src/LandingPage.tsx`
**Descrição**: Há a inserção de recursos externos não controlados localmente (como `picsum.photos` e `pravatar.cc`). Embora a tag tenha a propriedade de referrer bloqueada, dados de IP dos usuários continuam sendo vazados aos provedores externos ao baixar esses conteúdos.
**Impacto**: Risco à privacidade e potencial vetor de injeção externa caso os serviços sejam comprometidos.
**Checklist de Correção**:
- [ ] Mapear as imagens de placeholders necessárias e importá-las internamente.
- [ ] Garantir que em produção as imagens sejam renderizadas a partir da própria infraestrutura ou CDN confiável com proteção adequada.
**Referências**: [CWE-200: Exposure of Sensitive Information to an Unauthorized Actor](https://cwe.mitre.org/data/definitions/200.html)

## Vulnerabilidades Baixas

### 1. Exposição Potencial de Ambiente
**Local**: Dependências do `package.json` (`dotenv`, `express`).
**Descrição**: É comum o versionamento de informações secretas em `.env` se o controle não for restrito, além da ausência de módulos de Rate Limiting nos endpoints.
**Impacto**: Riscos de exaustão de recursos caso os acessos se tornem indiscriminados a rotas pesadas.
**Checklist de Correção**:
- [ ] Implementar middleware tipo `express-rate-limit`.
- [ ] Garantir que `.gitignore` barre ativamente `.env` e `.env.production`.
- [ ] Implementar `helmet` no Express.

## Recomendações Gerais de Segurança
1. Ao realizar integrações de API (ex: `@google/genai`), garantir obrigatoriamente que nenhuma credencial/key esteja sendo chamada diretamente de artefatos do lado cliente ou expostos inadvertidamente por ferramentas de build como o Vite se prefixadas como `VITE_`.
2. Habilitar o modo ESLint com regras específicas para React-Security, além de sanitizar explicitamente todo conteúdo preenchido pelos usuários antes de exibir ou enviar ao banco via `better-sqlite3`.
3. Adotar `cors` de forma estrita, se serviços API existirem, limitando apenas ao domínio de hospedagem oficial do "Vade Concursos".

## Plano de Melhoria da Postura de Segurança
- [x] Avaliação passiva da arquitetura inicial (Concluído).
- [ ] Integração do pacote `helmet` no backend Express.
- [ ] Adição da biblioteca `DOMPurify` caso implemente visualização de texto rico dos PDFs gerados pelo Gemini.
- [ ] Configuração de ambiente enclausurado em Docker com privilégio de usuário não root para o ambiente backend.
