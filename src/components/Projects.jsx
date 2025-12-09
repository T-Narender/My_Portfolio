import { useState } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: " GoNest-Vacation Home Rental Platform",
      description: `
      Full-stack vacation rental app where users can add favorites, and book stays; hosts can create and manage property listings.

     Implemented user authentication with passport.js,review system ,mapping with Mapbox API, and date-overlap validation for bookings.

      Follows MVC architecture with clean routing, MongoDB relationships between users, listings & bookings.`,
      // Features include advanced search & filters, wishlist ❤️, booking system with date-overlap validation, flash messages, and responsive UI.
      tech: [
        "Html",
        "CSS",
        "Javascript",
        "Nodejs",
        "Expressjs",
        "Reactjs",
        "MongoDB",
        "passport.js",
        "Mapbox API",
      ],
      image:
        "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2luZ3xlbnwwfHwwfHx8MA%3D%3D",
      github: "https://github.com/T-Narender/RentEase",
      live: "https://rentease-283a.onrender.com/",
    },

      {
      title: "AI-ResumeCrafter: Tailored Resumes in Minutes",
      description: `
      ResumeCraft is an AI-powered resume builder web application that enables users to create ATS-friendly resumes effortlessly. It provides an intuitive editor with professionally designed templates and smart suggestions for summary, work experience, skills, and project descriptions. The system uses secure authentication, cloud-based storage, and real-time editing to help candidates build personalized resumes in minutes. Users can preview, export, and manage multiple resumes through a modern dashboard. Developed with the MERN stack, the platform offers a seamless and responsive user experience.`,
      
      tech: [
        "Html",
        "TailwindCSS",
        "Javascript",
        "Nodejs",
        "Expressjs",
        "Reactjs",
        "MongoDB",
        "Gemini API",
        "JWT Authentication",
        "Cloudinary",
        
      ],
      image:
        "https://images.unsplash.com/photo-1698047681432-006d2449c631?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/T-Narender/RentEase",
      live: "https://airesumebuilder-eight.vercel.app/",
    },

    {
      title: " Real-time Chat Application",
      description:
        " Built a real-time one-to-one chat app with user authentication, profile updates, authentication & authorization,and online user visibility. All messages and user data stored in MongoDB.",
      tech: [
        "Html",
        "Tailwind CSS",
        "Javascript",
        "Nodejs",
        "Expressjs",
        "Reactjs",
        "MongoDB",
        "Socket.io",
      ],
      image:
        "https://plus.unsplash.com/premium_photo-1677252438426-595a3a9d5e11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lc3NhZ2V8ZW58MHx8MHx8fDA%3D",
      github: "https://github.com/T-Narender/Chat-Application.git",
      live: "https://github.com/T-Narender/Chat-Application.git",
    },
    {
      title: "Gemini Clone",
      description:
        "An AI-powered chatbot web app inspired by Google’s Gemini, built with the MERN stack. It enables real-time, context-aware conversations using the Gemini API. Features include chat history, JWT authentication, and a sleek Gemini-like UI for an engaging user experience. ",
      tech: [
        "Html",
        "Tailwind CSS",
        "Javascript",
        "Nodejs",
        "Expressjs",
        "Reactjs",
        "MongoDB",
      ],
      image:
        "https://images.unsplash.com/photo-1740393068164-9605d878442c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/T-Narender/Gemini-Clone.git",
      live:"https://github.com/T-Narender/Gemini-Clone.git",
    },

    {
      title: "StudyMate: Your AI-Powered PDF Study Assistant",
      description:
        "A responsive PDF study assistant that  helps students learn efficiently by turning PDFs into interactive study materials. Users can upload PDFs, ask questions, get summaries, and extract key concepts instantly. Powered by AI for faster, focused, and personalized learning.",
      tech: ["Python", "PyMuPDF", "Streamlit", "FAISS"],
      image:
        "https://images.unsplash.com/photo-1661595676743-4da6e0755062?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QUktUG93ZXJlZCUyMFBERiUyMFN0dWR5JTIwQXNzaXN0YW50fGVufDB8fDB8fHww",
      github: "https://github.com/T-Narender/studyMate.git",
      live:  "https://github.com/T-Narender/studyMate.git",
    },
    {
      title: "Simon-Says Game",
      description:
        "A fun and interactive Simon Says game built with JavaScript. Players must follow the sequence of colors , testing their memory and attention skills.",
      tech: ["Html", "Css", "Javascript"],
      image:
        "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fFNpbW9uLVNheXMlMjBHYW1lfGVufDB8fDB8fHww",
      github: "https://github.com/T-Narender/Simon-Say-Game.git",
      live: "https://github.com/T-Narender/Simon-Say-Game.git",
    },
    // {
    //   title: "NotesApp",
    //   description:
    //     "A responsive note-taking application that allows users to create, edit, and organize their notes efficiently. Built with a user-friendly interface and powerful search capabilities.",
    //   tech: ["Html", "TailwindCss", "Javascript", "Reactjs"],
    //   image:
    //     "https://plus.unsplash.com/premium_photo-1664299319654-5978d9ce7e40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG5vdGVzJTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
    //   github: "https://github.com/T-Narender/Notes.git",
    //   live: "#",
    // },
  ];

  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {(showAll ? projects : projects.slice(0, 4)).map((project, index) => (
            <div
              key={project.title}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="p-2 bg-black/80 text-white rounded-full hover:bg-black transition-colors duration-200"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.live}
                    className="p-2 bg-black/80 text-white rounded-full hover:bg-black transition-colors duration-200"
                    aria-label="View live demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                {project.tech && project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Action Links */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {projects.length > 4 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll((s) => !s)}
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25 flex items-center gap-2 mx-auto"
            >
              <span>{showAll ? "Show Less" : "View All Projects"}</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
