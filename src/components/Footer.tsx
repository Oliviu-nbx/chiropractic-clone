const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-background rounded-full"></div>
              </div>
              <span className="text-lg font-bold text-foreground">CBM</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Clinică de chiropractie în Turda, dedicată sănătății coloanei tale vertebrale.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Navigare</h4>
            <ul className="space-y-2">
              <li>
                <a href="#acasa" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Acasă
                </a>
              </li>
              <li>
                <a href="#servicii" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Servicii
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Servicii</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicii" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Ajustări vertebrale
                </a>
              </li>
              <li>
                <a href="#servicii" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Terapie țesuturi moi
                </a>
              </li>
              <li>
                <a href="#servicii" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Recuperare sportivă
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">+40 750 829 116</li>
              <li className="text-sm text-muted-foreground">Str. Exemplu Nr. 123</li>
              <li className="text-sm text-muted-foreground">Turda, Cluj</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Chiropractor CBM Turda. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
