import express from "express"
import cors from "cors"
import { fileURLToPath } from "url"
import { dirname, join } from "path"
import fs from "fs"

const app = express()
const PORT = process.env.PORT || 3001

// Obter __dirname em módulos ES
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Middleware
app.use(cors())
app.use(express.json())

// Caminho do arquivo de dados
const dataPath = join(__dirname, "../data/profissionais.json")

// Garantir que o diretório de dados existe
const dataDir = dirname(dataPath)
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

// Função auxiliar para ler profissionais
const lerProfissionais = () => {
  try {
    if (!fs.existsSync(dataPath)) {
      return []
    }
    const conteudo = fs.readFileSync(dataPath, "utf-8")
    return JSON.parse(conteudo)
  } catch (erro) {
    console.error("[Erro] Ao ler profissionais:", erro.message)
    return []
  }
}

// Função auxiliar para salvar profissionais
const salvarProfissionais = (profissionais) => {
  try {
    fs.writeFileSync(dataPath, JSON.stringify(profissionais, null, 2), "utf-8")
  } catch (erro) {
    console.error("[Erro] Ao salvar profissionais:", erro.message)
    throw erro
  }
}

// GET - Listar todos os profissionais
app.get("/api/profissionais", (req, res) => {
  try {
    const profissionais = lerProfissionais()
    res.json(profissionais)
  } catch (erro) {
    console.error("[Erro] GET /api/profissionais:", erro.message)
    res.status(500).json({ erro: "Erro ao buscar profissionais" })
  }
})

// GET - Buscar um profissional específico
app.get("/api/profissionais/:id", (req, res) => {
  try {
    const { id } = req.params
    const profissionais = lerProfissionais()
    const profissional = profissionais.find((p) => p.id === id)

    if (!profissional) {
      return res.status(404).json({ erro: "Profissional não encontrado" })
    }

    res.json(profissional)
  } catch (erro) {
    console.error("[Erro] GET /api/profissionais/:id:", erro.message)
    res.status(500).json({ erro: "Erro ao buscar profissional" })
  }
})

// POST - Criar novo profissional
app.post("/api/profissionais", (req, res) => {
  try {
    const { nome, servico, telefone, descricao, bairro } = req.body

    // Validação básica
    if (!nome || !servico || !telefone) {
      return res.status(400).json({
        erro: "Nome, serviço e telefone são obrigatórios",
      })
    }

    const profissionais = lerProfissionais()

    const novoProfissional = {
      id: Date.now().toString(),
      nome: nome.trim(),
      servico: servico.trim(),
      telefone: telefone.trim(),
      descricao: descricao?.trim() || "",
      bairro: bairro?.trim() || "",
      criadoEm: new Date().toISOString(),
    }

    profissionais.push(novoProfissional)
    salvarProfissionais(profissionais)

    res.status(201).json(novoProfissional)
  } catch (erro) {
    console.error("[Erro] POST /api/profissionais:", erro.message)
    res.status(500).json({ erro: "Erro ao criar profissional" })
  }
})

// DELETE - Deletar um profissional
app.delete("/api/profissionais/:id", (req, res) => {
  try {
    const { id } = req.params
    let profissionais = lerProfissionais()
    const profissional = profissionais.find((p) => p.id === id)

    if (!profissional) {
      return res.status(404).json({ erro: "Profissional não encontrado" })
    }

    profissionais = profissionais.filter((p) => p.id !== id)
    salvarProfissionais(profissionais)

    res.json({ mensagem: "Profissional removido com sucesso" })
  } catch (erro) {
    console.error("[Erro] DELETE /api/profissionais/:id:", erro.message)
    res.status(500).json({ erro: "Erro ao deletar profissional" })
  }
})

// PUT - Atualizar um profissional
app.put("/api/profissionais/:id", (req, res) => {
  try {
    const { id } = req.params
    const { nome, servico, telefone, descricao, bairro } = req.body

    // Validação básica
    if (!nome || !servico || !telefone) {
      return res.status(400).json({
        erro: "Nome, serviço e telefone são obrigatórios",
      })
    }

    const profissionais = lerProfissionais()
    const indice = profissionais.findIndex((p) => p.id === id)

    if (indice === -1) {
      return res.status(404).json({ erro: "Profissional não encontrado" })
    }

    profissionais[indice] = {
      ...profissionais[indice],
      nome: nome.trim(),
      servico: servico.trim(),
      telefone: telefone.trim(),
      descricao: descricao?.trim() || "",
      bairro: bairro?.trim() || "",
      atualizadoEm: new Date().toISOString(),
    }

    salvarProfissionais(profissionais)
    res.json(profissionais[indice])
  } catch (erro) {
    console.error("[Erro] PUT /api/profissionais/:id:", erro.message)
    res.status(500).json({ erro: "Erro ao atualizar profissional" })
  }
})

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() })
})

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Backend rodando em http://localhost:${PORT}`)
  console.log(`📁 Dados armazenados em: ${dataPath}`)
})

export default app
