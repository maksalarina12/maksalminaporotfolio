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
    <section id="about" className="relative py-24 md:py-32">
      <div className="container px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Profile Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Profile Photo */}
            <div className="flex justify-center animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
                <div className="relative rounded-3xl overflow-hidden border-4 border-card shadow-2xl w-80 h-80 md:w-96 md:h-96">
                  <img
                    src={profil}
                    alt="Arym Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-6 animate-slide-in-right">
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
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
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
