import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded bg-gradient-to-br from-accent to-amber-300"></div>
              <h3 className="text-xl font-bold">SoleStyle</h3>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Sua loja de sapatos premium online. Oferecemos qualidade, conforto e elegância 
              para todas as ocasiões. Transforme seus passos em declarações de estilo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Masculino</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Feminino</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Esportivo</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Social</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Promoções</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Atendimento</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Trocas e Devoluções</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Tabela de Tamanhos</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 SoleStyle. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;