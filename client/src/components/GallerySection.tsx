import { Card } from "@/components/ui/card";
import etapasProducao from "@assets/ChatGPT Image 26 de nov. de 2025, 21_06_29_1764202011710.png";
import processoCriativoVideo from "@assets/Vídeo do WhatsApp de 2025-11-26 à(s) 14.06.46_869d7e16_1764202109130.mp4";
import fontesInspiracao from "@assets/garota-de-ipanema-v-17_1764206166050.jpg";

const galleryItems = [
  {
    media: etapasProducao,
    type: "image" as const,
    title: "Etapas da Produção",
    description: "Acompanhe cada fase do desenvolvimento da nossa animação",
    link: null,
  },
  {
    media: processoCriativoVideo,
    type: "video" as const,
    title: "Processo Criativo",
    description: "Conheça os bastidores e a arte por trás de cada cena",
    link: "https://drive.google.com/file/d/1dAGdT1u0-Bf6D4w1IYIGBCorhzZPwz6_/view?usp=drive_link",
  },
  {
    media: fontesInspiracao,
    type: "image" as const,
    title: "Fontes de Inspiração",
    description: "Descubra as referências que deram vida à nossa história",
    link: "https://www.youtube.com/watch?v=bpOSxM0rNPM",
  },
];

export default function GallerySection() {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-card-foreground mb-4">
            Sobre nossa <span className="text-primary">animação</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja como nossa arte recria momentos históricos da música brasileira
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => {
            const cardContent = (
              <Card 
                className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer transition-all group h-full"
                data-testid={`card-gallery-${index}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {item.type === "video" ? (
                    <video 
                      src={item.media} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img 
                      src={item.media} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            );

            return item.link ? (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`link-gallery-${index}`}
              >
                {cardContent}
              </a>
            ) : (
              <div key={index}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
