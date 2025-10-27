import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h4 className="text-lg font-bold mb-4">Dr Ahbab Ahmad</h4>
                <p className="text-sm text-muted-foreground">Consultant Physiotherapist</p>
            <p className="text-background/80 mb-4">
              Professional home visit physiotherapy services bringing expert care to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-background/80 hover:text-primary-glow transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-background/80 hover:text-primary-glow transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-background/80 hover:text-primary-glow transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-background/80 hover:text-primary-glow transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-primary-glow mt-0.5 flex-shrink-0" />
                <a href="tel:6299624003" className="text-background/80 hover:text-primary-glow transition-colors">
                  +91 6299624003
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-primary-glow mt-0.5 flex-shrink-0" />
                <a href="mailto:ahbabahmad95@gmail.com" className="text-background/80 hover:text-primary-glow transition-colors break-all">
                  ahbabahmad95@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary-glow mt-0.5 flex-shrink-0" />
                <span className="text-background/80">
                  Home Visit Services Available
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="text-center text-muted-foreground text-sm">
        <p>© 2025 Dr Ahbab Ahmad – Consultant Physiotherapist. All rights reserved.</p>
            <p>Home Visit Services Only</p>
            <hr className="w-1/2 mx-auto my-3 border-gray-600" />
               <p className="text-sm text-gray-400 mt-2">
                For creating websites and portfolios like this – email me:{" "}
               <a href="mailto:saquibawasi@gmail.com" className="text-white hover:underline">
      saquibawasi@gmail.com
    </a>
  </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
