import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface Profissional {
  id: string;
  nome: string;
  servico: string;
  telefone: string;
  descricao: string;
  bairro: string;
}

const Cadastro = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    servico: "",
    telefone: "",
    descricao: "",
    bairro: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação simples
    if (!formData.nome || !formData.servico || !formData.telefone) {
      toast.error("Por favor, preencha os campos obrigatórios");
      return;
    }

    // Pegar profissionais existentes do localStorage
    const profissionaisExistentes = localStorage.getItem("profissionais");
    const profissionais: Profissional[] = profissionaisExistentes
      ? JSON.parse(profissionaisExistentes)
      : [];

    // Criar novo profissional
    const novoProfissional: Profissional = {
      id: Date.now().toString(),
      ...formData,
    };

    // Adicionar ao array
    profissionais.push(novoProfissional);

    // Salvar no localStorage
    localStorage.setItem("profissionais", JSON.stringify(profissionais));

    toast.success("Cadastro realizado com sucesso!");

    // Redirecionar para a página de profissionais
    setTimeout(() => {
      navigate("/profissionais");
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-primary">
            Conecta Timbu
          </a>
          <nav className="flex gap-6">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a
              href="/profissionais"
              className="text-foreground hover:text-primary transition-colors"
            >
              Ver Profissionais
            </a>
          </nav>
        </div>
      </header>

      {/* Formulário */}
      <main className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="bg-card border border-border rounded-xl p-8 shadow-elegant animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Cadastre seu Serviço
          </h1>
          <p className="text-muted-foreground mb-8">
            Preencha as informações abaixo para divulgar seu trabalho na comunidade
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="nome">
                Nome Completo <span className="text-destructive">*</span>
              </Label>
              <Input
                id="nome"
                name="nome"
                type="text"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Seu nome completo"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="servico">
                Serviço Oferecido <span className="text-destructive">*</span>
              </Label>
              <Input
                id="servico"
                name="servico"
                type="text"
                value={formData.servico}
                onChange={handleChange}
                placeholder="Ex: Eletricista, Cabeleireira, Professor de Inglês"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefone">
                Telefone/WhatsApp <span className="text-destructive">*</span>
              </Label>
              <Input
                id="telefone"
                name="telefone"
                type="tel"
                value={formData.telefone}
                onChange={handleChange}
                placeholder="(85) 99999-9999"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bairro">Bairro</Label>
              <Input
                id="bairro"
                name="bairro"
                type="text"
                value={formData.bairro}
                onChange={handleChange}
                placeholder="Ex: Timbu, Centro"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="descricao">Descrição do Serviço</Label>
              <Textarea
                id="descricao"
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
                placeholder="Conte mais sobre seu trabalho, experiência e diferenciais"
                rows={4}
              />
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                type="submit"
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Cadastrar Serviço
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/")}
                className="flex-1"
              >
                Cancelar
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Cadastro;
