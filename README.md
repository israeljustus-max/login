# SCHWARTZ DEV

Frontend institucional em React, Vite, React Router e Lucide React. Requer Node.js 22.12+ (ou versão posterior compatível com Vite 7).

## Abrir o site sem servidor

O `index.html` na raiz já contém JavaScript e CSS compilados: baixe o repositório e abra esse arquivo no navegador. Ele também funciona em hospedagem estática, inclusive em subpastas. A navegação de produção usa fragmentos (`#/sobre`, `#/pesquisa` etc.), sem exigir fallback no servidor.

Não edite manualmente o HTML compilado. Edite os componentes em `src/` e execute `npm run build` para atualizar tanto o `index.html` da raiz quanto `dist/index.html`. O template de desenvolvimento está em `dev/index.html`.

## Desenvolvimento

```sh
npm ci
npm run dev -- --host 0.0.0.0
```

## Verificação e produção

```sh
npm run build
npm run preview -- --host 0.0.0.0
```

Rotas: `/`, `/sobre`, `/pesquisa`, `/cadastro` e `/login`. Em produção, as rotas usam `#/` e dispensam fallback de SPA. Para hospedar, use o `index.html` da raiz ou o conteúdo de `dist/`.

O cabeçalho usa duas faixas e o menu móvel abre e fecha por botão, com suporte a Escape. As cores estão centralizadas em `src/styles/pages.css`. O ícone temporário de programação pode ser substituído em `src/components/Header.jsx`.

A pesquisa funciona com o catálogo local em `src/data/catalog.js`, com filtro por categoria e busca sem distinção de acentos ou maiúsculas. Projetos são demonstrativos, não casos reais. Textos institucionais provisórios também estão nesse arquivo.

Cadastro e login validam os campos, mas não enviam ou armazenam dados e não criam contas ou autenticam usuários. O cadastro exige nome completo, e-mail válido, senha de ao menos 8 caracteres e confirmação igual. Recuperação de senha informa a dependência de backend.

Para produção: aprovar textos e logo, implementar backend e segurança em tarefa autorizada, configurar HTTPS e hospedagem estática e validar acessibilidade e privacidade.

As páginas HTML anteriores foram preservadas em `legacy/`; `cadastrar.html` também permanece no local original.
