import { Code2, Palette, Rocket } from "lucide-react";

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
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a passionate developer who loves creating elegant solutions to complex problems.
            With a keen eye for design and a deep understanding of modern web technologies,
            I bring ideas to life through code.
          </p>
        </div>

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
    </section>
  );
};
