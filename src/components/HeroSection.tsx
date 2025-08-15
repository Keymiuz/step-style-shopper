import { Button } from "@/components/ui/button";
import heroShoes from "@/assets/hero-shoes.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroShoes}
          alt="Coleção de sapatos premium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container px-4 text-center md:text-left">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            Elegância em
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-300">
              Cada Passo
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            Descubra nossa coleção exclusiva de sapatos premium. Qualidade, conforto e estilo 
            que transformam cada caminhada em uma declaração de elegância.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Ver Coleção
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
              Ofertas Especiais
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5"></div>
    </section>
  );
};

export default HeroSection;