import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Send } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="rounded-full gap-2 shadow-lg hover:shadow-xl transition-shadow">
              <Mail className="w-5 h-5" />
              Send Email
            </Button>
            <Button variant="outline" size="lg" className="rounded-full gap-2">
              <Send className="w-5 h-5" />
              Message Me
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-card border border-border hover:border-primary/50 hover:scale-110 transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-card border border-border hover:border-primary/50 hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-4 rounded-full bg-card border border-border hover:border-primary/50 hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-border">
        <div className="container px-6 md:px-12">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} MAKSALMINA. Crafted with passion and code.
          </p>
        </div>
      </div>
    </section>
  );
};
