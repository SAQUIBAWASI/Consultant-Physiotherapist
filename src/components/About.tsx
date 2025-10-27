import { Award, CheckCircle, GraduationCap, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About Dr Ahbab Ahmad
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over a decade of experience in physiotherapy and rehabilitation, Dr Ahbab Ahmad brings professional healthcare directly to your home. As a Consultant Physiotherapist, he specializes in providing personalized treatment plans tailored to each patient's unique needs.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                His commitment to patient care and recovery has helped hundreds of individuals regain their mobility, reduce pain, and improve their quality of life through evidence-based physiotherapy techniques.
              </p>

              {/* Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <GraduationCap className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground">Certified Professional</h4>
                    <p className="text-sm text-muted-foreground">Licensed Physiotherapist</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground">10+ Years</h4>
                    <p className="text-sm text-muted-foreground">Clinical Experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground">500+ Patients</h4>
                    <p className="text-sm text-muted-foreground">Successfully Treated</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground">Home Visits Only</h4>
                    <p className="text-sm text-muted-foreground">Convenience & Comfort</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Why Choose Us */}
            <div className="bg-card rounded-2xl p-8 border-2 border-primary/20 shadow-soft">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Why Choose Home Physiotherapy?
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Comfort of Your Home",
                    description: "Receive treatment in familiar surroundings without the stress of travel"
                  },
                  {
                    title: "Personalized Attention",
                    description: "One-on-one sessions focused entirely on your recovery needs"
                  },
                  {
                    title: "Flexible Scheduling",
                    description: "Book appointments at times that work best for you"
                  },
                  {
                    title: "Family Involvement",
                    description: "Family members can learn and participate in the therapy process"
                  },
                  {
                    title: "Cost-Effective",
                    description: "Save on travel costs and time while receiving quality care"
                  },
                  {
                    title: "Evidence-Based",
                    description: "Modern techniques backed by scientific research"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
