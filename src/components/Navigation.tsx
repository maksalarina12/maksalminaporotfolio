import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "certificates", label: "Certificates" },
    { id: "projects", label: "Projects" },
    { id: "tools", label: "Tools" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      // Find the current section based on scroll position
      let currentSection = null;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          const sectionTop = rect.top;
          const sectionBottom = rect.bottom;
          
          // Check if we're in this section
          if (sectionTop <= 200 && sectionBottom >= 200) {
            currentSection = section;
            break;
          }
          
          // For the last section (contact), if we're near the bottom of the page
          if (i === sections.length - 1 && window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
            currentSection = section;
            break;
          }
        }
      }

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    // Initial call to set the correct section on page load
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container px-6 md:px-12">
        <div className="flex items-center justify-center h-20">
          <ul className="flex gap-2 md:gap-4 bg-card/50 backdrop-blur-sm rounded-full px-6 py-3 border border-border shadow-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-bold transition-all duration-300",
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
