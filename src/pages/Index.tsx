import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-community.jpg";
import { MapPin, Users, Search, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card shadow-soft">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Serviços do Bairro</h1>
          </div>
          <Button variant="outline" size="lg" className="hidden md:flex">
            Entrar
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-primary py-20 md:py-32">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage} 
            alt="Comunidade do bairro unida"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <h2 className="mb-6 text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Conectando Pessoas e Serviços do Seu Bairro
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl">
              Encontre profissionais qualificados perto de você. De eletricistas a cabeleireiros, 
              tudo que você precisa está aqui no bairro Timbu e região.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button 
                size="lg" 
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-medium text-base md:text-lg px-8 py-6"
              >
                <Search className="mr-2 h-5 w-5" />
                Buscar Serviços
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary-foreground bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm text-base md:text-lg px-8 py-6"
              >
                Anunciar Serviço
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center animate-slide-up">
            <h3 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Sobre o Projeto
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              O <span className="font-semibold text-foreground">Serviços do Bairro</span> é uma plataforma 
              digital desenvolvida para facilitar a divulgação e o acesso a serviços oferecidos por 
              trabalhadores formais e informais do bairro Timbu, Eusébio-CE. Nossa missão é fortalecer 
              a economia local, promovendo a visibilidade de profissionais da comunidade e conectando 
              vizinhos que precisam de serviços com quem pode oferecê-los.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h3 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
            Como Funciona
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="p-8 text-center shadow-soft hover:shadow-medium transition-shadow duration-300 border-2">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="mb-3 text-xl font-bold text-foreground">Profissionais Locais</h4>
              <p className="text-muted-foreground">
                Encontre trabalhadores qualificados do seu próprio bairro, com avaliações e 
                recomendações da comunidade.
              </p>
            </Card>

            <Card className="p-8 text-center shadow-soft hover:shadow-medium transition-shadow duration-300 border-2">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-warm">
                <Search className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h4 className="mb-3 text-xl font-bold text-foreground">Busca Fácil</h4>
              <p className="text-muted-foreground">
                Interface simples e intuitiva para encontrar rapidamente o serviço que você precisa, 
                pensada para todas as idades.
              </p>
            </Card>

            <Card className="p-8 text-center shadow-soft hover:shadow-medium transition-shadow duration-300 border-2">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
                <Phone className="h-8 w-8 text-primary-foreground" />
              </div>
              <h4 className="mb-3 text-xl font-bold text-foreground">Contato Direto</h4>
              <p className="text-muted-foreground">
                Entre em contato diretamente com os profissionais através de telefone, WhatsApp 
                ou outros meios disponíveis.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
            Pronto para Começar?
          </h3>
          <p className="mb-8 text-lg text-primary-foreground/90">
            Junte-se à nossa comunidade e descubra os melhores serviços do seu bairro.
          </p>
          <Button 
            size="lg" 
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-medium text-base md:text-lg px-8 py-6"
          >
            <Phone className="mr-2 h-5 w-5" />
            Entrar em Contato
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <MapPin className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold text-foreground">Serviços do Bairro</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Projeto desenvolvido para a disciplina Projeto Integrador I
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Tecnologia da Informação - UFMS Digital | 2025.2
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Bairro Timbu, Eusébio - CE
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
