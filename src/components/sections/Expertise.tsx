import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Briefcase, GraduationCap } from "lucide-react";

export default function Expertise() {
  const skills = [
    { name: "General Medicine", value: 95 },
    { name: "Cardiology", value: 85 },
    { name: "Neurology", value: 80 },
    { name: "Preventive Healthcare", value: 90 },
    { name: "Patient Care", value: 98 },
  ];

  const education = [
    {
      degree: "Doctor of Medicine (MD)",
      institution: "All India Institute of Medical Sciences (AIIMS)",
      year: "2005 - 2009",
      description: "Graduated with honors, specializing in Internal Medicine."
    },
    {
      degree: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
      institution: "Delhi Medical College",
      year: "2000 - 2005",
      description: "Completed undergraduate medical education with distinction."
    },
  ];

  const experience = [
    {
      position: "Senior Medical Consultant",
      institution: "Apollo Hospitals",
      year: "2018 - Present",
      description: "Leading the internal medicine department and providing specialized care to patients with complex medical conditions."
    },
    {
      position: "Medical Specialist",
      institution: "Max Healthcare",
      year: "2012 - 2018",
      description: "Provided comprehensive medical care and developed treatment plans for patients with various health issues."
    },
    {
      position: "Resident Doctor",
      institution: "AIIMS Delhi",
      year: "2009 - 2012",
      description: "Completed residency training in internal medicine, handling emergency cases and routine patient care."
    },
  ];

  const certifications = [
    {
      title: "Board Certification in Internal Medicine",
      organization: "Medical Council of India",
      year: "2010"
    },
    {
      title: "Advanced Cardiac Life Support (ACLS)",
      organization: "American Heart Association",
      year: "2015"
    },
    {
      title: "Fellowship in Preventive Healthcare",
      organization: "International Preventive Healthcare Association",
      year: "2017"
    },
  ];

  return (
    <section id="expertise" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            My Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-primary">Qualifications</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My extensive education, training, and experience in the medical field have equipped me with
            the expertise to provide top-quality healthcare services.
          </p>
        </div>

        <Tabs defaultValue="skills" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="skills" className="text-sm sm:text-base">Skills</TabsTrigger>
            <TabsTrigger value="education" className="text-sm sm:text-base">Education</TabsTrigger>
            <TabsTrigger value="experience" className="text-sm sm:text-base">Experience</TabsTrigger>
            <TabsTrigger value="certifications" className="text-sm sm:text-base">Certifications</TabsTrigger>
          </TabsList>
          
          <TabsContent value="skills">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Medical Skills & Expertise</h3>
                </div>
                
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-primary font-medium">{skill.value}%</span>
                      </div>
                      <Progress value={skill.value} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="education">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Academic Background</h3>
                </div>
                
                <div className="space-y-8">
                  {education.map((item, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-gray-200">
                      <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-primary"></div>
                      <span className="inline-block px-3 py-1 rounded bg-primary/10 text-primary text-sm font-medium mb-2">
                        {item.year}
                      </span>
                      <h4 className="text-lg font-semibold mb-1">{item.degree}</h4>
                      <p className="text-gray-700 mb-2">{item.institution}</p>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="experience">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Professional Experience</h3>
                </div>
                
                <div className="space-y-8">
                  {experience.map((item, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-gray-200">
                      <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-primary"></div>
                      <span className="inline-block px-3 py-1 rounded bg-primary/10 text-primary text-sm font-medium mb-2">
                        {item.year}
                      </span>
                      <h4 className="text-lg font-semibold mb-1">{item.position}</h4>
                      <p className="text-gray-700 mb-2">{item.institution}</p>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="certifications">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Professional Certifications</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {certifications.map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <span className="text-primary font-medium">{item.year}</span>
                      <h4 className="text-lg font-semibold mb-1 mt-2">{item.title}</h4>
                      <p className="text-gray-600">{item.organization}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}