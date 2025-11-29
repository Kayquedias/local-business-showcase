# Conecta Timbu - Backend

Backend simples e eficiente em Express.js para a plataforma Conecta Timbu.

## 🚀 Instalação

\`\`\`bash
cd backend
npm install
\`\`\`

## 🏃 Executar

### Desenvolvimento (com live reload)
\`\`\`bash
npm run dev
\`\`\`

### Produção
\`\`\`bash
npm start
\`\`\`

O backend estará disponível em `http://localhost:3001`

## 📚 API Endpoints

### Listar todos os profissionais
\`\`\`
GET /api/profissionais
\`\`\`

### Buscar um profissional específico
\`\`\`
GET /api/profissionais/:id
\`\`\`

### Criar novo profissional
\`\`\`
POST /api/profissionais
Content-Type: application/json

{
  "nome": "João Silva",
  "servico": "Eletricista",
  "telefone": "(85) 99999-9999",
  "descricao": "Com 10 anos de experiência",
  "bairro": "Timbu"
}
\`\`\`

### Atualizar profissional
\`\`\`
PUT /api/profissionais/:id
Content-Type: application/json

{
  "nome": "João Silva",
  "servico": "Eletricista",
  "telefone": "(85) 99999-9999",
  "descricao": "Com 15 anos de experiência",
  "bairro": "Timbu"
}
\`\`\`

### Deletar profissional
\`\`\`
DELETE /api/profissionais/:id
\`\`\`

## 📦 Estrutura

\`\`\`
backend/
├── src/
│   ├── server.js          # Servidor principal
│   └── migrations/        # Scripts de migração
├── data/                  # Dados persistidos (criado automaticamente)
├── package.json
└── README.md
\`\`\`

## 🔄 Migração do LocalStorage

Para migrar dados do localStorage para o backend:

1. No navegador, abra o Console (F12)
2. Execute: `copy(JSON.stringify(JSON.parse(localStorage.getItem('profissionais'))))`
3. Cole os dados no array `dadosDoLocalStorage` em `src/migrations/migrateFromLocalStorage.js`
4. Execute: `node src/migrations/migrateFromLocalStorage.js`

## 🔮 Próximos Passos

- [ ] Integração com Supabase/Neon
- [ ] Autenticação de usuários
- [ ] Validação mais robusta
- [ ] Testes automatizados
- [ ] Deploy em produção
