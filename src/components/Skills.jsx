import { Monitor, Server, Database, Brain, Wrench, Code2, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Monitor,
      title: 'Frontend Development',
      color: 'from-primary to-accent',
      tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap']
    },
    {
      icon: Server,
      title: 'Backend Development', 
      color: 'from-accent to-primary',
      tags: ['Node.js', 'Express.js', 'RESTful APIs']
    },
    {
      icon: Database,
      title: 'Database Technologies',
      color: 'from-primary to-accent',
      tags: ['MongoDB', 'SQL', 'Database Design']
    },
    {
      icon: Brain,
      title: 'AI & Emerging Tech',
      color: 'from-accent to-primary', 
      tags: ['GenAI Basics', 'Machine Learning Concepts']
    },
    {
      icon: Wrench,
      title: 'Tools & Technologies',
      color: 'from-primary to-accent',
      tags: ['Git', 'GitHub', 'VS Code', 'Postman']
    },
    {
      icon: Code2,
      title: 'Development Practices',
      color: 'from-accent to-primary',
      tags: ['Responsive Design', 'Problem Solving','Debugging']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.title}
                className="group p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 bg-gradient-to-br ${skill.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold">{skill.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional highlight */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full border border-border/50">
            <Smartphone className="w-5 h-5 text-accent" />
            <span className="text-muted-foreground font-medium">
              Always learning and exploring new technologies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
