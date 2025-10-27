import { Button } from "@/components/ui/button";
import { Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm gap-2">
          <a href="tel:6299624003" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Phone className="h-4 w-4" />
            <span>Call us: +91 6299624003</span>
          </a>
          <a href="mailto:ahbabahmad95@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Mail className="h-4 w-4" />
            <span>ahbabahmad95@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-foreground">Dr Ahbab Ahmad</h2>
              <p className="text-sm text-muted-foreground">Consultant Physiotherapist</p>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors font-medium">
                About
              </button>
              <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection("process")} className="text-foreground hover:text-primary transition-colors font-medium">
                How It Works
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors font-medium">
                Contact
              </button>
              <Button 
                onClick={() => window.open(`https://wa.me/916299624003?text=Hello, I would like to book a home visit appointment.`, '_blank')}
                className="bg-primary hover:bg-primary-glow"
              >
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                <button onClick={() => scrollToSection("home")} className="text-left text-foreground hover:text-primary transition-colors font-medium">
                  Home
                </button>
                <button onClick={() => scrollToSection("about")} className="text-left text-foreground hover:text-primary transition-colors font-medium">
                  About
                </button>
                <button onClick={() => scrollToSection("services")} className="text-left text-foreground hover:text-primary transition-colors font-medium">
                  Services
                </button>
                <button onClick={() => scrollToSection("process")} className="text-left text-foreground hover:text-primary transition-colors font-medium">
                  How It Works
                </button>
                <button onClick={() => scrollToSection("contact")} className="text-left text-foreground hover:text-primary transition-colors font-medium">
                  Contact
                </button>
                <Button 
                  onClick={() => window.open(`https://wa.me/916299624003?text=Hello, I would like to book a home visit appointment.`, '_blank')}
                  className="bg-primary hover:bg-primary-glow w-full"
                >
                  Book Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
