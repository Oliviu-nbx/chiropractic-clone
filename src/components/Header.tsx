import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-background rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-foreground">CHIROPRACTOR CBM</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#acasa" className="text-foreground hover:text-accent transition-colors">
              Acasă
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center gap-2 border-border hover:bg-secondary"
              asChild
            >
              <a href="tel:+40750829116">
                <Phone className="w-4 h-4" />
                Sună-ne
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center gap-2 border-border hover:bg-secondary"
              asChild
            >
              <a href="https://wa.me/40750829116" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </Button>
            <Button
              size="sm"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              asChild
            >
              <a href="https://wa.me/40750829116" target="_blank" rel="noopener noreferrer">
                Programează-te
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
