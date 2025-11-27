import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Uma Linha a Cultura
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Revivendo a história da música brasileira através da arte e animação.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              Idealizado e criado por Sabrina Veiga; João Cincurá; Anderson Carvalho; Maria Cecília Souto.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Homenagem aos Mestres</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Carmen Miranda • Tom Jobim • Elis Regina • Chico Buarque • 
              Gilberto Gil • Caetano Veloso • e muitos outros ícones da MPB
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Redes Sociais</h4>
            <div className="flex gap-2">
              <Button 
                size="icon" 
                variant="outline"
                data-testid="button-facebook"
                onClick={() => console.log('Facebook clicked')}
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button 
                size="icon" 
                variant="outline"
                data-testid="button-instagram"
                onClick={() => console.log('Instagram clicked')}
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button 
                size="icon" 
                variant="outline"
                data-testid="button-twitter"
                onClick={() => console.log('Twitter clicked')}
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button 
                size="icon" 
                variant="outline"
                data-testid="button-youtube"
                onClick={() => console.log('YouTube clicked')}
              >
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 Uma Linha a Cultura. Celebrando 60 anos de história musical.</p>
        </div>
      </div>
    </footer>
  );
}
