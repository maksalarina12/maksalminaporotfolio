import { Code2, Palette, Rocket } from "lucide-react";
import profil from "@/assets/profil.jpg";

export const AboutSection = () => {
  const skills = [
    {
      icon: Code2,
      title: "Development",
      description: "Building responsive and performant web applications with modern frameworks.",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating beautiful, user-friendly interfaces with attention to detail.",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Exploring new technologies and pushing the boundaries of what's possible.",
    },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      <div className="container px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Profile Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Profile Photo */}
            <div className="flex justify-center animate-fade-in">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl group-hover:blur-2xl transition-all duration-500" />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl opacity-20 group-hover:opacity-40 blur transition-all duration-500" />
                <div className="relative rounded-3xl overflow-hidden border-4 border-card shadow-2xl w-80 h-80 md:w-96 md:h-96 transform group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={profil}
                    alt="MAKSALMINA Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-6 animate-slide-in-right backdrop-blur-sm">
              <h2 className="text-4xl md:text-5xl font-bold">
                About <span className="text-gradient">Me</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate developer who loves creating elegant solutions to complex problems.
                With a keen eye for design and a deep understanding of modern web technologies,
                I bring ideas to life through code.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                My journey in software development has been driven by curiosity and a constant
                desire to learn. I specialize in building responsive, user-friendly applications
                that not only look great but also deliver exceptional user experiences.
              </p>
            </div>
          </div>

          {/* Skills Cards */}
          <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:scale-105 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
};
