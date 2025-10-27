import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Patient",
      image: "/images/patient1.png",
      content: "Dr. Sharma has been my family doctor for over 5 years now. His diagnosis is always accurate, and he takes the time to explain everything in detail. I highly recommend his services to anyone looking for quality healthcare.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Patient",
      image: "/images/patient2.png",
      content: "I was suffering from chronic back pain for years until I consulted with Dr. Sharma. His treatment plan has significantly improved my quality of life. He's not just a doctor but a great listener who truly cares about his patients.",
      rating: 5,
    },
    {
      name: "Amit Singh",
      role: "Patient",
      image: "/images/patient3.png",
      content: "Dr. Sharma's approach to healthcare is refreshing. He focuses on preventive care and lifestyle changes, which has helped me manage my diabetes effectively. His clinic is well-equipped, and the staff is very friendly.",
      rating: 5,
    },
    {
      name: "Sunita Verma",
      role: "Patient",
      image: "/images/patient4.png",
      content: "After struggling with several health issues, I finally found Dr. Sharma. He took the time to understand my medical history and designed a comprehensive treatment plan. His follow-up care is exceptional!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What My <span className="text-primary">Patients Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I value the feedback from my patients as it helps me improve and provide better healthcare services.
          </p>
        </div>

        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                <Card className="testimonial-card border-none shadow-lg h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover opacity-0"
                        />
                        {/* Note: This image is intentionally set to opacity-0 since we don't have the actual image */}
                        {/* In a real project, remove the opacity-0 class once you add the actual testimonial image */}
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 flex-1 mb-4">"{testimonial.content}"</p>
                    
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 stroke-yellow-400" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="static" />
            <CarouselNext className="static" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}