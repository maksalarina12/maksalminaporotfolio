import { useEffect, useState } from "react";
import backgroundLight from "@/assets/background_light.jpg";
import backgroundDark from "@/assets/background_dark.jpg";
import logoMidRightLight from "@/assets/logo_mid_right_light.png";
import logoMidRightDark from "@/assets/logo_mid_right_dark.png";
import profil from "@/assets/profil.jpg";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={isDark ? backgroundDark : backgroundLight}
          alt="Background"
          className="w-full h-full object-cover transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80" />
      </div>

      {/* Floating Logo */}
      <div className="absolute top-1/2 right-[10%] transform -translate-y-1/2 z-10 animate-float opacity-20 dark:opacity-10">
        <img
          src={isDark ? logoMidRightDark : logoMidRightLight}
          alt="Logo"
          className="w-64 h-64 md:w-96 md:h-96 object-contain"
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="inline-block px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-sm">
              <span className="text-sm font-medium text-muted-foreground">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <br />
              <span className="text-gradient">Arym</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
              Creative Developer & Designer
            </p>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Crafting beautiful digital experiences with modern web technologies.
              Passionate about clean code and stunning designs.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <Button size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-shadow">
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="rounded-full">
                Contact Me
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden border-4 border-card shadow-2xl w-72 h-72 md:w-96 md:h-96">
                <img
                  src={profil}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm text-muted-foreground">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
