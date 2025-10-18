import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CertificatesSection = () => {
  const certificates = [
    {
      title: "Hour Of Code",
      issuer: "www.code.org",
      date: "2025",
      description: "How to teach your AI",
      certificateUrl: "https://drive.google.com/file/d/1D0RQ8CIN2bQo1_iPHG3IIMsyqGaBaAuT/view?usp=sharing",
    },
    {
      title: "Junior Network Administrator",
      issuer: "KOMDIGI",
      date: "2025",
      description: "How to costumize IP used packet tracer",
      certificateUrl: "https://drive.google.com/file/d/1arJCOWUmU5-9sIUXV2l80Iu9ldXpBxTH/view?usp=sharing",
    },
    {
      title: "Ethical Hacker For Dummies",
      issuer: "DIGITALENT",
      date: "2025",
      description: "Understanding about hacker and Cybersecurity",
      certificateUrl: "https://drive.google.com/file/d/1u1Vfe2-iBm9veapr_xoFOiRSFZwzqCnj/view?usp=drive_link",
    },
    {
      title: "Artifisial Intelligent",
      issuer: "MICROSOFT",
      date: "2025",
      description: "Learn About How Artificial Intelligence It's Working",
      certificateUrl: "https://drive.google.com/file/d/1xI4BOl4TEYxOiQvVewGz5z8Z0jUQ-HYG/view?usp=sharing",
    },
    {
      title: "AI ENGINEER",
      issuer: "KOMDIGI",
      date: "2025",
      description: "Learn About How AI ENGINEER It's Working and exist",
      certificateUrl: "https://drive.google.com/file/d/1j2G1JqY41_44jEehzNFqo6LB5zcU4JCo/view?usp=sharing",
    },
  ];

  return (
    <section id="certificates" className="relative py-24 md:py-32 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="container px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            My <span className="text-gradient">Certificates</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Professional certifications and achievements throughout my career journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className={`relative animate-fade-in ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:text-right"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-8 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 border-4 border-background shadow-lg hidden md:block z-10" />

                {/* Certificate Card */}
                <div
                  className={`relative group ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:scale-105 hover:-translate-y-1">
                    <div className={`flex items-start gap-4 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <Award className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-extrabold mb-2 group-hover:text-primary transition-colors">
                          {cert.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <span className="font-medium text-primary">{cert.issuer}</span>
                          <span>•</span>
                          <span>{cert.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {cert.description}
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                          onClick={() => window.open(cert.certificateUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                          View Certificate
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Animated Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
    </section>
  );
};
