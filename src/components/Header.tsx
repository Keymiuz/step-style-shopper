import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import LoginDialog from "./LoginDialog";
import CartDrawer from "./CartDrawer";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded bg-gradient-to-br from-primary to-accent"></div>
          <h1 className="text-xl font-bold">SoleStyle</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors">Masculino</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Feminino</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Esportivo</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Social</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Promoções</a>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex items-center space-x-2 flex-1 max-w-sm mx-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Buscar sapatos..." 
              className="pl-10 bg-muted/50 border-muted"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <div className="hidden md:flex">
            <LoginDialog />
          </div>
          <CartDrawer />
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <nav className="container flex flex-col space-y-4 py-4 px-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Buscar sapatos..." 
                className="pl-10 bg-muted/50 border-muted"
              />
            </div>
            <a href="#" className="text-foreground hover:text-primary transition-colors py-2">Masculino</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors py-2">Feminino</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors py-2">Esportivo</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors py-2">Social</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors py-2">Promoções</a>
            <div className="pt-4">
              <LoginDialog />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;