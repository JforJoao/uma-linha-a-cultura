import { Card, CardContent } from "@/components/ui/card";
import { Palette, Music, Headphones } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Arte e Animação",
    description: "Uma linha contínua que conecta décadas de história musical, criando uma experiência visual única e envolvente.",
    link: null,
  },
  {
    icon: Music,
    title: "7 Décadas de História",
    description: "Explore cada época musical desde os anos 30 até os 90, com curadoria especial de artistas icônicos e gêneros que marcaram gerações.",
    link: null,
  },
  {
    icon: Headphones,
    title: "Playlist das Músicas do Projeto",
    description: "Confira todas as músicas na nossa playlist exclusiva no Spotify.",
    link: "https://open.spotify.com/playlist/1d7QRO947GlDRoDHhil5Ex?si=5b5037313ec64e09",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Uma Nova Forma de <span className="text-primary">Vivenciar Música</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologia de ponta encontra tradição musical brasileira
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const cardContent = (
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            );

            return feature.link ? (
              <a
                key={index}
                href={feature.link}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`link-feature-${index}`}
              >
                <Card 
                  className="hover-elevate active-elevate-2 cursor-pointer transition-transform h-full"
                  data-testid={`card-feature-${index}`}
                >
                  {cardContent}
                </Card>
              </a>
            ) : (
              <Card 
                key={index} 
                className="hover-elevate active-elevate-2 cursor-pointer transition-transform"
                data-testid={`card-feature-${index}`}
              >
                {cardContent}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
