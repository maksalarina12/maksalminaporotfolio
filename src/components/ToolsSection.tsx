import { 
  Github, 
  Code2, 
  Database, 
  FileCode, 
  Terminal,
  Container,
  Network,
  Shield,
  Braces,
  PackageCheck
} from "lucide-react";

export const ToolsSection = () => {
  const tools = [
    { name: "GitHub", icon: Github, category: "Version Control" },
    { name: "Python", icon: FileCode, category: "Programming" },
    { name: "MySQL", icon: Database, category: "Database" },
    { name: "Wireshark", icon: Network, category: "Network Analysis" },
    { name: "Docker", icon: Container, category: "Containerization" },
    { name: "VS Code", icon: Code2, category: "IDE" },
    { name: "Git", icon: Terminal, category: "Version Control" },
    { name: "Postman", icon: PackageCheck, category: "API Testing" },
    { name: "JWT", icon: Shield, category: "Authentication" },
    { name: "JSON", icon: Braces, category: "Data Format" },
  ];

  return (
    <section id="tools" className="relative py-24 md:py-32 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="container px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Tools & <span className="text-gradient">Software</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Applications and technologies I use in my development workflow.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:scale-110 hover:-translate-y-2 flex flex-col items-center text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="mb-4 p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-extrabold mb-1">{tool.name}</h3>
                <p className="text-xs text-muted-foreground">{tool.category}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
