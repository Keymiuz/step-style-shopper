# Step Style Shopper

Aplicação web de e-commerce focada em calçados premium, construída com React, TypeScript, Vite, Tailwind CSS e componentes shadcn-ui/Radix. O projeto oferece uma base moderna para vitrine, navegação, filtros, carrinho, páginas e componentes reutilizáveis.


---

## Sumário

- Visão Geral
- Tecnologias e Bibliotecas
- Estrutura do Projeto
- Pré-requisitos
- Como Executar (Desenvolvimento)
- Build de Produção
- Scripts Disponíveis
- Padronização e Qualidade de Código
- Estilo e UI
- Rotas e Navegação
- Estado, Formulários e Validação
- Gráficos e Visualizações
- Boas Práticas de Deploy
- Roadmap / Próximos Passos

---

## Visão Geral

O Step Style Shopper é um front-end moderno para loja de calçados. Ele prioriza performance, acessibilidade e componentes reutilizáveis. Inclui configurações prontas para desenvolvimento com hot reload, tipagem forte com TypeScript, estilo com Tailwind e um design system baseado em shadcn-ui/Radix.

---

## Tecnologias e Bibliotecas

- Vite (Bundler/Dev Server)
- React 18 + TypeScript
- React Router DOM (roteamento)
- Tailwind CSS + tailwind-merge + tailwindcss-animate
- shadcn-ui (componentes) + Radix UI primitives
- Lucide React (ícones)
- TanStack React Query (dados assíncronos/cache)
- React Hook Form + Zod + @hookform/resolvers (formulários e validação)
- Sonner (toasts)
- Recharts (gráficos)
- date-fns (datas)
- Embla Carousel (carrosséis)
- next-themes (temas/escuro-claro)
- ESLint + TypeScript ESLint (lint)

Arquitetura de build e ferramentas: Vite, PostCSS, Autoprefixer, Tailwind. Tipos: `@types/react`, `@types/react-dom`.

---

## Estrutura do Projeto

Diretórios principais:

- `src/`
  - `components/`: componentes reutilizáveis (UI e específicos do domínio)
  - `pages/`: páginas do app e pontos de rota
  - `hooks/`: hooks customizados
  - `lib/`: utilitários e helpers
  - `assets/`: imagens, ícones, fontes, etc.
  - `main.tsx`: bootstrap do React
  - `App.tsx`: layout/base de rotas
- `public/`: estáticos públicos
- `index.html`: HTML raiz usado pelo Vite

---

## Pré-requisitos

- Node.js 18+ (recomendado) e npm 9+ ou pnpm/yarn
- Git para clonar o repositório

---

## Como Executar (Desenvolvimento)

```bash
git clone https://github.com/Keymiuz/step-style-shopper.git
cd step-style-shopper
npm install
npm run dev
```

Acesse o endereço informado pelo Vite

---

## Build de Produção

```bash
npm run build
npm run preview # opcional, para testar o build localmente
```

O build final ficará disponível em `dist/`.

---

## Scripts Disponíveis

- `npm run dev`: inicia o servidor de desenvolvimento Vite
- `npm run build`: gera o build de produção
- `npm run build:dev`: build em modo development (mais rápido para testes)
- `npm run preview`: pré-visualiza o build gerado
- `npm run lint`: roda o ESLint

---

## Padronização e Qualidade de Código

- ESLint e TypeScript ESLint configurados em `eslint.config.js`
- Tipagem estática com TypeScript
- Recomenda-se utilizar Prettier (opcional) para formatação consistente

---

## Estilo e UI

- Tailwind CSS configurado via `tailwind.config.ts` e `index.css`
- Componentes shadcn-ui construídos sobre Radix UI para acessibilidade
- Ícones por `lucide-react`
- Animações com `tailwindcss-animate`
- Suporte a tema claro/escuro com `next-themes`

---

## Rotas e Navegação

- Roteamento com `react-router-dom`
- Definições de rotas no `App.tsx` e em `pages/`

---

## Estado, Formulários e Validação

- Estados assíncronos com `@tanstack/react-query`
- Formulários com `react-hook-form`
- Validação com `zod` e `@hookform/resolvers`
- Notificações/toasts com `sonner`

---

## Gráficos e Visualizações

- Visualizações com `recharts`

---

## Boas Práticas de Deploy

- Gere o build com `npm run build`
- Publique o conteúdo de `dist/` em um host estático (Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.)
- Configure cabeçalhos/roteamento no provedor de hospedagem caso use rotas do `react-router-dom` (fallback para `index.html`)

---

## Roadmap / Próximos Passos

- Integração com backend/checkout
- Persistência de carrinho (ex.: localStorage)
- Catálogo dinâmico a partir de API
- Testes (unitários e E2E)
---


