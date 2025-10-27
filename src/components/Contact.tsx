import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const Contact = () => {
  const phoneNumber = "6299624003";
  const email = "ahbabahmad95@gmail.com";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/91${phoneNumber}?text=Hi, I would like to book a home visit for physiotherapy`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start your recovery journey? Contact us today to book your home visit.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <Card
              className="hover:shadow-[var(--shadow-glow)] transition-all duration-300 cursor-pointer"
              onClick={handleCall}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--primary))] shadow-[var(--shadow-soft)] mx-auto mb-4 flex items-center justify-center">
                  <Phone className="text-[hsl(var(--primary-foreground))]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground mb-3">Call us directly</p>
                <p className="text-lg font-semibold text-primary">+91 {phoneNumber}</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCall();
                  }}
                >
                  Call Now
                </Button>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card
              className="hover:shadow-[var(--shadow-glow)] transition-all duration-300 cursor-pointer"
              onClick={handleWhatsApp}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--accent))] shadow-[var(--shadow-soft)] mx-auto mb-4 flex items-center justify-center">
                  <MessageCircle className="text-[hsl(var(--accent-foreground))]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">WhatsApp</h3>
                <p className="text-muted-foreground mb-3">Chat with us instantly</p>
                <p className="text-lg font-semibold text-accent">+91 {phoneNumber}</p>
                <Button
                  variant="accent"
                  className="mt-4"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleWhatsApp();
                  }}
                >
                  WhatsApp Us
                </Button>
              </CardContent>
            </Card>

            {/* Email */}
            <Card
              className="hover:shadow-[var(--shadow-glow)] transition-all duration-300 cursor-pointer"
              onClick={handleEmail}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--primary))] shadow-[var(--shadow-soft)] mx-auto mb-4 flex items-center justify-center">
                  <Mail className="text-[hsl(var(--primary-foreground))]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground mb-3">Send us a message</p>
                <p className="text-sm font-semibold text-primary break-all select-text">{email}</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEmail();
                  }}
                >
                  Email Us
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-[hsl(var(--card))] shadow-[var(--shadow-soft)]">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="text-[hsl(var(--primary))] mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2">Service Hours</h4>
                    <p className="text-muted-foreground">Monday - Saturday: 8:00 AM - 8:00 PM</p>
                    <p className="text-muted-foreground">Sunday: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[hsl(var(--card))] shadow-[var(--shadow-soft)]">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[hsl(var(--primary))] mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2">Service Area</h4>
                    <p className="text-muted-foreground">Home visit services available across your city</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      * Travel charges may apply based on location
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-primary-glow rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-strong">
            <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Recovery?
            </h3>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Book your home visit appointment today and experience professional physiotherapy care in the comfort of your home
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => window.open('https://wa.me/916299624003?text=Hello, I would like to book a home visit appointment.', '_blank')}
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Book via WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.location.href = 'tel:6299624003'}
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 text-lg px-8 py-6 backdrop-blur-sm"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
      </div>
      </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
