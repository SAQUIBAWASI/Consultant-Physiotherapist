import step1 from "@/assets/step-1.png";
import step2 from "@/assets/step-2.png";
import step3 from "@/assets/step-3.png";
import step4 from "@/assets/step-4.png";

const steps = [
  {
    number: "01",
    title: "Book A Session",
    description: "Contact us via WhatsApp or call to schedule your home visit appointment at your convenience.",
    image: step1,
  },
  {
    number: "02",
    title: "Assessment On Call",
    description: "Our expert will discuss your condition and requirements over a call to understand your needs better.",
    image: step2,
  },
  {
    number: "03",
    title: "Physiotherapist Visit",
    description: "A certified physiotherapist visits your home at the scheduled time with necessary equipment.",
    image: step3,
  },
  {
    number: "04",
    title: "Treatment At Home",
    description: "Receive personalized physiotherapy treatment in the comfort and privacy of your home.",
    image: step4,
  },
];

const HowItWorks = () => {
  return (
    <section id="process" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-lg">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            How Does It Work?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Simple and straightforward steps to get professional physiotherapy care at your doorstep
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 h-full border border-border">
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center text-primary-foreground font-bold shadow-medium">
                  {step.number}
                </div>

                {/* Image */}
                <div className="mb-6 mt-4 flex justify-center">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden bg-secondary flex items-center justify-center">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-primary-glow transform -translate-y-1/2 z-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
