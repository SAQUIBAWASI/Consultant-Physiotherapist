import heroBanner from "@/assets/hero-banner.jpg";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Hero = () => {
  const handleWhatsAppBooking = () => {
    window.open(`https://wa.me/916299624003?text=Hello, I would like to book a home visit appointment for physiotherapy.`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:6299624003';
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary-glow/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-accent/30">
            <span className="text-accent-foreground font-semibold">🏥 Professional Home Visit Services</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Expert Physiotherapy
            <br />
            <span className="text-accent">At Your Doorstep</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
            Expert rehabilitation and pain management services delivered to your doorstep by Dr Ahbab Ahmad
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              onClick={handleWhatsAppBooking}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-strong"
            >
              📱 Book Home Visit Now
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={handleCall}
              className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 text-lg px-8 py-6 backdrop-blur-sm"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span>Certified Physiotherapists</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span>Home Visit Only</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span>Flexible Scheduling</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
