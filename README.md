# Serviços do Bairro - Protótipo Web

![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-38bdf8?logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.x-646cff?logo=vite)

## 📋 Sobre o Projeto

Este projeto é um protótipo funcional desenvolvido como parte da **Avaliação do Módulo 3** da disciplina **Projeto Integrador I** do curso de **Tecnologia da Informação** pela **UFMS Digital**.

O **Serviços do Bairro** é uma plataforma digital destinada a facilitar a divulgação e o acesso a serviços oferecidos por trabalhadores formais e informais do bairro Timbu e regiões vizinhas (Eusébio/Fortaleza - CE).

### 🎯 Objetivo

Promover a visibilidade de profissionais locais, fortalecer a economia comunitária e facilitar a conexão entre prestadores de serviços e moradores que buscam serviços próximos e confiáveis

### 👥 Público-Alvo

- **Trabalhadores formais e informais** que desejam divulgar seus serviços
- **Moradores** em busca de profissionais qualificados no próprio bairro
- **Pessoas da segunda idade** - interface pensada para ser simples e acessível

## 🚀 Tecnologias Utilizadas

Este protótipo foi desenvolvido utilizando tecnologias modernas e amplamente adotadas no mercado:

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utilitário para estilização
- **Vite** - Build tool moderna e rápida
- **Shadcn/ui** - Componentes UI reutilizáveis e acessíveis
- **Lucide React** - Biblioteca de ícones

## 📦 Estrutura do Projeto

```
src/
├── assets/          # Imagens e recursos estáticos
├── components/      # Componentes reutilizáveis
│   └── ui/         # Componentes UI (shadcn)
├── hooks/          # Custom React Hooks
├── lib/            # Utilitários e helpers
├── pages/          # Páginas da aplicação
│   └── Index.tsx   # Página inicial
├── App.tsx         # Componente principal
├── index.css       # Estilos globais e design system
└── main.tsx        # Entry point da aplicação
```

## 🎨 Design System

O projeto implementa um design system completo e consistente:

### Cores Principais
- **Primary (Azul)** - `hsl(210 85% 48%)` - Confiança e profissionalismo
- **Secondary (Laranja)** - `hsl(28 90% 60%)` - Calor e acolhimento
- **Background** - `hsl(42 45% 97%)` - Suave e convidativo

### Princípios de Design
- **Acessibilidade em primeiro lugar** - Alto contraste, fontes legíveis
- **Responsividade total** - Funciona perfeitamente em todos os dispositivos
- **Interface intuitiva** - Navegação simples e clara
- **Visual moderno** - Gradientes, sombras suaves e animações sutis

## 🌟 Funcionalidades Implementadas

### ✅ Requisitos da Atividade

1. **✓ Cabeçalho** - Com logo e nome "Serviços do Bairro"
2. **✓ Descrição** - Seção explicando o propósito da plataforma
3. **✓ Imagem Ilustrativa** - Imagem hero representando a comunidade
4. **✓ Botões de Ação** - "Buscar Serviços" e "Anunciar Serviço"
5. **✓ Layout Responsivo** - Adaptado para mobile, tablet e desktop

### 💡 Funcionalidades Extras

- **Hero Section** - Banner principal com call-to-action destacado
- **Seção "Como Funciona"** - Cards explicativos com ícones
- **Seção CTA** - Call-to-action secundário para engajamento
- **Footer** - Informações do projeto e localização
- **Animações** - Transições suaves e efeitos visuais
- **Design System** - Sistema de design consistente e escalável

## 🖥️ Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_PROJETO>
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:8080
```

### Build para Produção

Para gerar a versão de produção otimizada:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## 📱 Responsividade

O protótipo foi desenvolvido com **mobile-first approach** e é totalmente responsivo:

- **Mobile** (< 768px) - Layout em coluna única, touch-friendly
- **Tablet** (768px - 1024px) - Layout adaptado para telas médias
- **Desktop** (> 1024px) - Layout completo com múltiplas colunas

## 🎓 Contexto Acadêmico

### Disciplina
**Projeto Integrador I - Tecnologia da Informação**

### Instituição
**UFMS Digital - Universidade Federal de Mato Grosso do Sul**

### Semestre
**2025.2**

### Autores
- Kayque Monte Teixeira Dias
- Joel Holanda Rocha

### Local de Aplicação
Bairro Timbu, Eusébio - Ceará

## 📝 Conceitos Aplicados

Este projeto demonstra a aplicação prática de:

- ✅ **Frameworks modernos** (React)
- ✅ **Estilização responsiva** (Tailwind CSS)
- ✅ **Componentização** e reutilização de código
- ✅ **Design System** e tokens de design
- ✅ **Boas práticas** de desenvolvimento web
- ✅ **Tipagem estática** com TypeScript
- ✅ **Acessibilidade web** (WCAG)
- ✅ **Performance** e otimização

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Gera build de produção
npm run preview      # Preview do build de produção
npm run lint         # Executa linter (ESLint)
```

## 📚 Referências

- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Vite](https://vitejs.dev/)

## 📄 Licença

Este projeto é desenvolvido para fins educacionais como parte da disciplina Projeto Integrador I.

---

**Desenvolvido com ❤️ para a comunidade do Bairro Timbu**
