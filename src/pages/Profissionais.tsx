import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface Profissional {
  id: string;
  nome: string;
  servico: string;
  telefone: string;
  descricao: string;
  bairro: string;
}

const Profissionais = () => {
  const [profissionais, setProfissionais] = useState<Profissional[]>([]);

  useEffect(() => {
    carregarProfissionais();
  }, []);

  const carregarProfissionais = () => {
    const dados = localStorage.getItem("profissionais");
    if (dados) {
      setProfissionais(JSON.parse(dados));
    }
  };

  const deletarProfissional = (id: string) => {
    const novaLista = profissionais.filter((p) => p.id !== id);
    localStorage.setItem("profissionais", JSON.stringify(novaLista));
    setProfissionais(novaLista);
    toast.success("Profissional removido com sucesso");
  };

  const formatarTelefone = (telefone: string) => {
    const numero = telefone.replace(/\D/g, "");
    return numero;
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
              href="/cadastro"
              className="text-foreground hover:text-primary transition-colors"
            >
              Cadastrar Serviço
            </a>
          </nav>
        </div>
      </header>

      {/* Conteúdo */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Profissionais Cadastrados
            </h1>
            <p className="text-lg text-muted-foreground">
              Conecte-se com profissionais da sua comunidade
            </p>
          </div>

          {profissionais.length === 0 ? (
            <div className="text-center py-16 animate-fade-in">
              <p className="text-xl text-muted-foreground mb-6">
                Nenhum profissional cadastrado ainda
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <a href="/cadastro">Seja o Primeiro a Cadastrar</a>
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 animate-fade-in">
              {profissionais.map((profissional) => (
                <Card
                  key={profissional.id}
                  className="hover:shadow-lg transition-all duration-300 border-border/50"
                >
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl text-foreground mb-1">
                          {profissional.nome}
                        </CardTitle>
                        <p className="text-lg font-semibold text-primary">
                          {profissional.servico}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deletarProfissional(profissional.id)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {profissional.descricao && (
                      <p className="text-muted-foreground">
                        {profissional.descricao}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-4 pt-2">
                      <a
                        href={`https://wa.me/55${formatarTelefone(
                          profissional.telefone
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                        <span>{profissional.telefone}</span>
                      </a>
                      {profissional.bairro && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{profissional.bairro}</span>
                        </div>
                      )}
                    </div>
                    <Button
                      asChild
                      className="w-full mt-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    >
                      <a
                        href={`https://wa.me/55${formatarTelefone(
                          profissional.telefone
                        )}?text=Olá, vi seu cadastro no Conecta Timbu e gostaria de saber mais sobre seus serviços!`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Entrar em Contato via WhatsApp
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Profissionais;
