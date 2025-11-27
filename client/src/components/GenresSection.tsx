import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

//todo: remove mock functionality
const genres = [
  {
    name: "Samba",
    era: "1930-1950",
    description: "O ritmo que nasceu nas rodas de samba do Rio de Janeiro e se tornou a alma da música brasileira.",
    artists: ["Carmen Miranda", "Cartola", "Noel Rosa"],
  },
  {
    name: "Bossa Nova",
    era: "1950-1960",
    description: "A sofisticação do samba encontra o jazz, criando um som suave que conquistou o mundo.",
    artists: ["Tom Jobim", "João Gilberto", "Vinicius de Moraes"],
  },
  {
    name: "MPB",
    era: "1960-1980",
    description: "Música Popular Brasileira que une tradição e modernidade, poesia e engajamento político.",
    artists: ["Elis Regina", "Chico Buarque", "Milton Nascimento"],
  },
  {
    name: "Tropicália",
    era: "1967-1970",
    description: "Movimento revolucionário que misturou rock, samba e experimentalismo, quebrando todas as regras.",
    artists: ["Caetano Veloso", "Gilberto Gil", "Gal Costa"],
  },
  {
    name: "Samba-Rock",
    era: "1960-1980",
    description: "A fusão contagiante do samba com soul, funk e rock que dominou os bailes paulistas.",
    artists: ["Jorge Ben Jor", "Tim Maia", "Bebeto"],
  },
  {
    name: "Axé & Lambada",
    era: "1980-1990",
    description: "Os ritmos alegres e dançantes que explodiram nos anos 80 e 90, levando a alegria brasileira ao mundo.",
    artists: ["Daniela Mercury", "Ivete Sangalo", "Kaoma"],
  },
];

export default function GenresSection() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Gêneros que <span className="text-primary">Marcaram Época</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada estilo musical conta uma história única da cultura brasileira
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {genres.map((genre, index) => (
            <Card 
              key={index} 
              className="hover-elevate active-elevate-2 cursor-pointer transition-all"
              data-testid={`card-genre-${index}`}
              onClick={() => console.log(`Genre ${genre.name} clicked`)}
            >
              <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0 pb-4">
                <CardTitle className="text-2xl font-bold text-card-foreground">
                  {genre.name}
                </CardTitle>
                <Badge variant="outline" className="text-sm">
                  {genre.era}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {genre.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {genre.artists.map((artist, artistIndex) => (
                    <Badge 
                      key={artistIndex} 
                      variant="secondary"
                      className="text-xs"
                      data-testid={`badge-artist-${index}-${artistIndex}`}
                    >
                      {artist}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
