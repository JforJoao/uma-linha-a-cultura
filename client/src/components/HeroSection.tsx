import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImage from "@assets/stock_images/grand_piano_and_acou_c99a8136.jpg";
import animacaoVideo from "@assets/animação_1764207911620.mp4";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${heroImage})`,
        }}
      />
      
      <div className="absolute top-[40%] left-0 right-0 h-[2px] bg-white opacity-80 shadow-lg shadow-white/50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight leading-tight">
          <span className="text-primary">Uma Linha</span> a Cultura
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          Reviva 70 anos de música brasileira com a arte com nossa animação.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={animacaoVideo}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-watch-animation"
          >
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary/90 backdrop-blur-md border border-primary-border hover-elevate active-elevate-2"
              data-testid="button-watch-animation"
            >
              <Play className="w-5 h-5 mr-2" />
              Assistir Animação
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
