import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, SkipForward, SkipBack } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

//todo: remove mock functionality
const decades = ["1930s", "1940s", "1950s", "1960s", "1970s", "1980s", "1990s"];

const tracks = {
  "1930s": { title: "Aquarela do Brasil", artist: "Carmen Miranda" },
  "1940s": { title: "Tico-Tico no Fubá", artist: "Carmen Miranda" },
  "1950s": { title: "Chega de Saudade", artist: "João Gilberto" },
  "1960s": { title: "Garota de Ipanema", artist: "Tom Jobim" },
  "1970s": { title: "Águas de Março", artist: "Elis Regina" },
  "1980s": { title: "Aquele Abraço", artist: "Gilberto Gil" },
  "1990s": { title: "Sozinho", artist: "Caetano Veloso" },
};

export default function AudioPlayerSection() {
  const [selectedDecade, setSelectedDecade] = useState("1960s");
  const [isPlaying, setIsPlaying] = useState(false);

  const currentTrack = tracks[selectedDecade as keyof typeof tracks];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    console.log(isPlaying ? 'Paused' : 'Playing', currentTrack.title);
  };

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Prévia <span className="text-primary">Musical</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ouça samples de músicas icônicas de cada década
          </p>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-8">
            <Tabs value={selectedDecade} onValueChange={setSelectedDecade} className="mb-8">
              <TabsList className="grid w-full grid-cols-7 gap-1">
                {decades.map((decade) => (
                  <TabsTrigger 
                    key={decade} 
                    value={decade}
                    className="text-xs md:text-sm"
                    data-testid={`tab-decade-${decade}`}
                  >
                    {decade}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <div className="flex items-center gap-6 mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-card-foreground mb-1">
                  {currentTrack.title}
                </h3>
                <p className="text-muted-foreground">
                  {currentTrack.artist}
                </p>
              </div>
              <Badge variant="secondary" className="font-accent text-lg px-4 py-2">
                {selectedDecade}
              </Badge>
            </div>

            <div className="mb-6">
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: isPlaying ? '45%' : '0%' }}
                />
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <Button 
                size="icon" 
                variant="outline"
                data-testid="button-previous"
                onClick={() => {
                  const currentIndex = decades.indexOf(selectedDecade);
                  if (currentIndex > 0) {
                    setSelectedDecade(decades[currentIndex - 1]);
                    console.log('Previous track');
                  }
                }}
              >
                <SkipBack className="w-5 h-5" />
              </Button>

              <Button 
                size="icon"
                className="w-16 h-16"
                data-testid="button-play-pause"
                onClick={handlePlayPause}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6" />
                )}
              </Button>

              <Button 
                size="icon" 
                variant="outline"
                data-testid="button-next"
                onClick={() => {
                  const currentIndex = decades.indexOf(selectedDecade);
                  if (currentIndex < decades.length - 1) {
                    setSelectedDecade(decades[currentIndex + 1]);
                    console.log('Next track');
                  }
                }}
              >
                <SkipForward className="w-5 h-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
