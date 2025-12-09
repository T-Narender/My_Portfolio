import { GraduationCap, Code2, Sparkles, User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, education, and passion for
            software development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center border border-border/50">
                <User className="w-32 h-32 text-muted-foreground" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent/30 to-primary/30 rounded-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl shadow-lg">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">My Journey</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    My journey into software development began with a deep
                    curiosity about how technology works. Initially, I started
                    exploring technology out of curiosity, experimenting with
                    small projects and learning how things worked behind the
                    screen. That curiosity turned into a passion for building
                    experiences that feel intuitive and enjoyable. Today, my focus is on creating clean, functional,
                    and creative solutions that align with the way people
                    interact with technology.Each
                    project pushes me to learn more, refine my skills, and
                    create work that reflects both creativity and purpose. 
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-accent to-primary rounded-xl shadow-lg">
                  <Code2 className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">What I Do</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I specialize in full-stack web development, creating
                    responsive and user-friendly applications. From front-end
                    interfaces using React and modern CSS frameworks to back-end
                    services with Node.js and databases, I enjoy building
                    end-to-end solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl shadow-lg">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Future Goals</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm particularly excited about the intersection of web
                    development and artificial intelligence. I'm currently
                    exploring GenAI and its applications in creating smarter,
                    more intuitive user experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-border/50">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  3+
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  Years Learning
                </div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl border border-border/50">
                <div className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  Projects Built
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
