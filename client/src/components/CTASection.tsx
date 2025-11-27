import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email });
    toast({
      title: "Obrigado pelo interesse!",
      description: "Entraremos em contato em breve com mais detalhes sobre a animação.",
    });
    setEmail("");
    setName("");
  };

  const benefits = [
    "Acesso antecipado à animação completa",
    "Conteúdo exclusivo e bastidores da produção",
    "Playlist curada com as melhores músicas de cada década",
    "Convite para eventos especiais de música brasileira",
  ];

  return (
    <section className="py-24 px-4 bg-card relative">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/20" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-card-foreground mb-4">
            Embarque nesta <span className="text-primary">Jornada Musical</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cadastre-se para receber acesso antecipado e conteúdo exclusivo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-card-foreground">
                    Nome Completo
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    data-testid="input-name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-card-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    data-testid="input-email"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full text-lg py-6"
                  data-testid="button-submit"
                >
                  Quero Participar
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">
              O que você receberá:
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4"
                  data-testid={`benefit-item-${index}`}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
