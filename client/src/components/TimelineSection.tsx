import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import carmenImage from "@assets/generated_images/Carmen_Miranda_vintage_portrait_faf4b48f.png";
import tomImage from "@assets/generated_images/Tom_Jobim_bossa_nova_portrait_22cf0270.png";
import elisImage from "@assets/generated_images/Elis_Regina_concert_portrait_44ce59ca.png";
import gilImage from "@assets/generated_images/Gilberto_Gil_tropicália_portrait_0395834a.png";
import caetanoImage from "@assets/generated_images/Caetano_Veloso_artistic_portrait_a8f31bc4.png";

//todo: remove mock functionality
const timelineData = [
  {
    decade: "1930-40",
    artist: "Carmen Miranda",
    genre: "Samba",
    image: carmenImage,
    song: "Tico-Tico no Fubá",
    color: "sepia",
  },
  {
    decade: "1950-60",
    artist: "Tom Jobim",
    genre: "Bossa Nova",
    image: tomImage,
    song: "Garota de Ipanema",
    color: "amber",
  },
  {
    decade: "1970",
    artist: "Elis Regina",
    genre: "MPB",
    image: elisImage,
    song: "Águas de Março",
    color: "orange",
  },
  {
    decade: "1980",
    artist: "Gilberto Gil",
    genre: "Tropicália",
    image: gilImage,
    song: "Aquele Abraço",
    color: "yellow",
  },
  {
    decade: "1990",
    artist: "Caetano Veloso",
    genre: "MPB",
    image: caetanoImage,
    song: "Cucurrucucu Paloma",
    color: "primary",
  },
];

export default function TimelineSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 bg-card relative overflow-hidden">
      <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/40 transform -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-card-foreground mb-4">
            Viagem no <span className="text-primary">Tempo Musical</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça os ícones que definiram cada década
          </p>
        </div>

        <div className="relative">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-8">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center relative z-10"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                data-testid={`timeline-item-${index}`}
              >
                <Badge 
                  variant="secondary" 
                  className="mb-8 text-lg font-accent tracking-wide px-4 py-2"
                  data-testid={`badge-decade-${index}`}
                >
                  {item.decade}
                </Badge>
                
                <div className="relative mb-4">
                  <Avatar 
                    className="w-24 h-24 md:w-32 md:h-32 ring-4 ring-primary/30 hover-elevate cursor-pointer transition-all"
                    onClick={() => console.log(`Artist ${item.artist} clicked`)}
                  >
                    <AvatarImage src={item.image} alt={item.artist} />
                    <AvatarFallback>{item.artist.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  
                  {hoveredIndex === index && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full animate-pulse" />
                  )}
                </div>

                <div className={`text-center transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-70'}`}>
                  <h3 className="font-bold text-card-foreground mb-1">
                    {item.artist}
                  </h3>
                  <Badge variant="outline" className="mb-2">
                    {item.genre}
                  </Badge>
                  <p className="text-sm text-muted-foreground italic">
                    {item.song}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
