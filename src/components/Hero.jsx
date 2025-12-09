import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  Send,
  Code2,
  Palette,
  Cpu,
  Zap,
} from "lucide-react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl animate-pulse delay-500"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMUg0MFYwSDBWMVoiIGZpbGw9InVybCgjZ3JhZGllbnQpIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPHA+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50IiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+CjxzdG9wIHN0b3AtY29sb3I9ImhzbCgyMDAgOTglIDUyJSkiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSJoc2woMjgwIDEwMCUgNzAlKSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=')] opacity-20"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 -z-5">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Main Content */}
          <div className="text-center lg:text-left">
            <div
              className={`space-y-6 transition-all duration-1000 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <span className="text-xl text-muted-foreground font-light">
                Hello, I'm
              </span>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                  Narender
                </span>
              </h1>

              <h2 className="text-xl sm:text-1xl lg:text-3xl font-semibold text-foreground/90 leading-snug">
                I design and build modern web experiences
              </h2>

              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
                Full Stack Developer · Problem Solver · Specializing in MERN,
                AI-driven solutions, and future-ready web innovation.
              </p>
            </div>

            {/* Social Links */}
            <div
              className={`flex gap-6 justify-center lg:justify-start mt-8 transition-all duration-1000 delay-200 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <a
                href="https://github.com/T-Narender"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 group"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/narender-tanguturi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:scale-110 group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6 group-hover:text-accent transition-colors" />
              </a>
              <a
                href="mailto:tnarender63000@gmail.com"
                className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 group"
                aria-label="Send Email"
              >
                <Mail className="w-6 h-6 group-hover:text-primary transition-colors" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start mt-8 transition-all duration-1000 delay-400 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold text-sm sm:text-base hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25 flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 border-border hover:border-accent hover:bg-accent/10 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <span>Let's Connect</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Hero Visual */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-600 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative w-96 h-96 animate-pulse">
              {/* Main shapes */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 animate-spin"
                  style={{ animationDuration: "20s" }}
                ></div>
                <div
                  className="absolute w-36 h-36 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 animate-spin"
                  style={{
                    animationDuration: "15s",
                    animationDirection: "reverse",
                  }}
                ></div>
                <div
                  className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 animate-spin"
                  style={{ animationDuration: "10s" }}
                ></div>
              </div>

              {/* Center icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Code2 className="w-10 h-10 text-primary-foreground" />
              </div>

              {/* Orbiting icons */}
              <div
                className="absolute inset-0 animate-spin"
                style={{ animationDuration: "12s" }}
              >
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-card border-2 border-accent rounded-full flex items-center justify-center shadow-lg">
                  <Palette className="w-6 h-6 text-accent" />
                </div>
              </div>
              <div
                className="absolute inset-0 animate-spin"
                style={{ animationDuration: "16s", animationDelay: "4s" }}
              >
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-card border-2 border-primary rounded-full flex items-center justify-center shadow-lg">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div
                className="absolute inset-0 animate-spin"
                style={{ animationDuration: "20s", animationDelay: "8s" }}
              >
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-card border-2 border-accent rounded-full flex items-center justify-center shadow-lg">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground transition-all duration-1000 delay-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <span className="text-sm font-medium uppercase tracking-wider">
          Scroll
        </span>
        <div className="w-0.5 h-10 bg-gradient-to-b from-primary to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
