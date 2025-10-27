import { Card, CardContent } from "@/components/ui/card";
import { Activity, Bone, Heart, User } from "lucide-react";
import elderlyImage from "../assets/service-elderly.jpg";
import postSurgeryImage from "../assets/service-postsurgery.jpg";
import spineImage from "../assets/service-spine.jpg";
import sportsImage from "../assets/service-sports.jpg";

const services = [
  {
    icon: Bone,
    title: "Spine & Back Pain",
    description:
      "Specialized treatment for chronic back pain, disc problems, and spinal rehabilitation",
    image: spineImage,
    color: "from-primary to-primary-glow",
  },
  {
    icon: Activity,
    title: "Sports Injury",
    description:
      "Recovery and rehabilitation for sports-related injuries and athletic performance",
    image: sportsImage,
    color: "from-accent to-orange-500",
  },
  {
    icon: User,
    title: "Elderly Care",
    description:
      "Gentle physiotherapy for seniors focusing on mobility and pain management",
    image: elderlyImage,
    color: "from-primary to-teal-400",
  },
  {
    icon: Heart,
    title: "Post-Surgery Rehab",
    description:
      "Comprehensive rehabilitation programs for post-operative recovery",
    image: postSurgeryImage,
    color: "from-accent to-red-500",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive physiotherapy treatments delivered to your home
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-glow transition-all duration-300 overflow-hidden border-2 hover:border-primary cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="text-primary" size={32} />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <h4 className="font-bold text-lg mb-2 text-foreground">
              Neurological Rehabilitation
            </h4>
            <p className="text-sm text-muted-foreground">
              Stroke recovery, Parkinson’s, and other neurological conditions
            </p>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <h4 className="font-bold text-lg mb-2 text-foreground">
              Joint & Arthritis Care
            </h4>
            <p className="text-sm text-muted-foreground">
              Treatment for arthritis, joint pain, and mobility issues
            </p>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <h4 className="font-bold text-lg mb-2 text-foreground">
              Preventive Care
            </h4>
            <p className="text-sm text-muted-foreground">
              Posture correction, ergonomic advice, and wellness programs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
