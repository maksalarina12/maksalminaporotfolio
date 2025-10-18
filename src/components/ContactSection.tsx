import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Send } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-gradient-section overflow-hidden">
      <div className="container px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have a project in mind or just want to say hi? Feel free to reach out! I'm always excited to discuss new opportunities and creative collaborations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form Section */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-2xl font-extrabold mb-4">Send me a message</h3>
                <p className="text-muted-foreground mb-6">
                  I'd love to hear about your project. Drop me a line and I'll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button size="lg" className="w-full rounded-full gap-2 shadow-lg hover:shadow-xl transition-shadow">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </div>
            </div>

            {/* Contact Info & Social Section */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div>
                <h3 className="text-2xl font-extrabold mb-4">Let's connect</h3>
                <p className="text-muted-foreground mb-6">
                  Prefer a different way to reach out? Here are some other options.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-all duration-300">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-sm text-muted-foreground">maksalbusiness@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-all duration-300">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">GitHub</h4>
                    <p className="text-sm text-muted-foreground">github.com/maksalarina12</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-all duration-300">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">LinkedIn</h4>
                    <p className="text-sm text-muted-foreground">linkedin.com/in/maksalmina-arina-21688734a</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="font-bold mb-4">Follow me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-full bg-card border border-border hover:border-primary/50 hover:scale-110 transition-all duration-300"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/maksalmina-arina-21688734a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-full bg-card border border-border hover:border-primary/50 hover:scale-110 transition-all duration-300"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:maksalbusiness@gmail.com"
                    className="p-4 rounded-full bg-card border border-border hover:border-primary/50 hover:scale-110 transition-all duration-300"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
    </section>
  );
};
