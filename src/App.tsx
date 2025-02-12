import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown, Terminal, Coffee, Globe, Award, Sparkles, Brain } from 'lucide-react';

function App() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Smooth scroll progress for the progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Intersection Observer setup for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px'
      }
    );

    document.querySelectorAll('.section-content').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const technologies = [
    { name: "Python (Django)", level: 90 },
    { name: "PHP", level: 85 },
    { name: "React", level: 80 },
    { name: "Typescript", level: 80 },
    { name: "Version Control: Git", level: 95},
    { name: "Shopify Liquid", level: 95 }
  ];

  const experiences = [
    {
      company: "Nepa Rudraksha",
      role: "Manager",
      period: "2023 - Present",
      description: "Led the transition from PHP to Shopify, enhancing the company's online store functionality.Spearheaded major Shopify customizations using Liquid and JavaScript.Managed the development team, ensuring smooth project execution and deployment, website performance, SEO, and user experience to increase sales."
    },
    {
      company: "Nepa Rudraksha",
      role: "Shopify & PHP Developer",
      period: "2021 - 2023",
      description: "Developed and maintained the Shopify store, handling complex API integrations.Built custom Shopify apps and themes to extend store functionality.Worked with PHP-based inventory management system, improving overall efficiency of company inventory."
    },
    {
      company: "Freelancing",
      role: "PHP Developer",
      period: "2020 - 2021",
      description: "Successfully delivered multiple PHP-based web applications for various clients.Developed custom CMS solutions, API integrations, and optimized database performance."
    }
  ];

  return (
    <div className="bg-black text-white relative" ref={targetRef}>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-purple-400 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        
        <motion.div 
          style={{ opacity, scale }}
          className="absolute inset-0 bg-black/50"
        />
        <div className="absolute inset-0">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center relative z-10 section-content"
            >
              <motion.h1 
                className="text-7xl md:text-9xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Aayush Bhandari
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center gap-4 mb-8"
              >
                <Terminal className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl md:text-3xl">Full-Stack Developer</h2>
                <Terminal className="w-6 h-6 text-purple-400" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
              >
                Crafting digital experiences that blend creativity with technical excellence. 
                Specialized in building modern web applications that push boundaries.
              </motion.p>
              <motion.div 
                className="flex justify-center space-x-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <motion.a 
                  href="https://github.com/aayushbhn" 
                  className="p-4 glass rounded-full hover:scale-110 transition-transform"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, 10, -10, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  <Github size={24} />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/aayush-b-128719163/" 
                  className="p-4 glass rounded-full hover:scale-110 transition-transform"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, 10, -10, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a 
                  href="https://mail.google.com/mail/?view=cm&to=aayush2658@gmail.com" 
                  className="p-4 glass rounded-full hover:scale-110 transition-transform"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, 10, -10, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  <Mail size={24} />
                </motion.a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 1.2 }
                }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ChevronDown className="w-8 h-8 text-white/50" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 relative overflow-hidden parallax-section">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto section-content"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              className="flex items-center justify-center gap-4 mb-12"
              whileInView={{ 
                scale: [0.5, 1.2, 1],
                rotate: [0, 360, 0]
              }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <Brain className="w-8 h-8 text-purple-400" />
              <h2 className="text-4xl font-bold">About Me</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <motion.p 
                  className="text-lg text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  I am a dedicated Full Stack Developer with 3.5 years of experience in web development, specializing in Shopify, Python (Django), React, TypeScript, PHP, and Liquid. My expertise spans from front-end development to backend logic, crafting seamless user experiences and robust applications.


                </motion.p>
                <motion.p 
                  className="text-lg text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >

Currently, I am working at Nepa Rudraksha, where I started as a PHP Developer, transitioned into a Shopify Developer, and am now serving as a Manager overseeing development projects. Alongside my professional role, I have worked on various freelance projects as a PHP Developer.

                  

                </motion.p>
                <motion.div 
                  className="flex gap-6"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <motion.div 
                    className="glass p-4 rounded-lg text-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Coffee className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                    <p className="text-sm">1000+ Cups of Coffee</p>
                  </motion.div>
                  <motion.div 
                    className="glass p-4 rounded-lg text-center"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <Globe className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                    <p className="text-sm">Worked Internationally</p>
                  </motion.div>
                  <motion.div 
                    className="glass p-4 rounded-lg text-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Award className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                    <p className="text-sm">Goals Achieved</p>
                  </motion.div>
                </motion.div>
              </div>
              <div className="space-y-6">
                <motion.h3 
                  className="text-2xl font-bold mb-4"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Technical Expertise
                </motion.h3>
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between">
                      <span>{tech.name}</span>
                      <span>{tech.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-purple-400 to-blue-500"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 relative bg-gray-900/50 parallax-section">
        <div className="container mx-auto px-4">
          <motion.div
            className="section-content"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              className="flex items-center justify-center gap-4 mb-12"
              whileInView={{ 
                scale: [0.5, 1.2, 1],
                rotate: [0, 360, 0]
              }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <Briefcase className="w-8 h-8 text-purple-400" />
              <h2 className="text-4xl font-bold">Experience</h2>
            </motion.div>
            <div className="max-w-4xl mx-auto">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="mb-12 last:mb-0"
                >
                  <motion.div 
                    className="glass p-8 rounded-lg relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="absolute -left-3 top-8 w-6 h-6 bg-purple-400 rounded-full"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-purple-400">{exp.company}</span>
                      <span className="text-gray-400">|</span>
                      <span className="text-gray-400">{exp.period}</span>
                    </div>
                    <p className="text-gray-300">{exp.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 parallax-section">
        <div className="container mx-auto px-4">
          <motion.div
            className="section-content"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              className="flex items-center justify-center gap-4 mb-12"
              whileInView={{ 
                scale: [0.5, 1.2, 1],
                rotate: [0, 360, 0]
              }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <Sparkles className="w-8 h-8 text-purple-400" />
              <h2 className="text-4xl font-bold">Featured Projects</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Rudraksha Recommendation Software",
                  description: "Recommending Planetary Positions using Planetry Calculations",
                  image: "/images/recommendation.png",
                  tags: ["HTML5", "Python", "Kerykeion"],
                  link: "https://recommendation-app-zqvq.vercel.app"
                },
                {
                  title: "Nepa Rudraksha",
                  description: "Rudraksha Selling E-Commerce Website in Shopify",
                  image: "images/kundali.png",
                  tags: ["Shopify", "Liquid"],
                  link: "https://nepalirudraksha.com"
                },
                {
                  title: "Panchang Generation API",
                  description: "Generates Realtime Panchang through API responses",
                  image: "/images/panchang.webp",
                  tags: ["Python", "RestAPI"],
                  link: "https://github.com/aayushbhn/Panchanga"
                }
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="absolute bottom-0 p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex gap-2 mb-4">
                        {project.tags.map(tag => (
                          <motion.span 
                            key={tag} 
                            className="px-2 py-1 text-sm glass rounded-full"
                            whileHover={{ scale: 1.1 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                      <motion.a
                        href={project.link}
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center text-purple-400 target:bl hover:text-purple-300"
                      >
                        View Project <ExternalLink className="ml-2" size={16} />
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 relative gradient-bg parallax-section">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-xl mx-auto text-center section-content"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Mail className="w-12 h-12 mx-auto mb-6 text-white" />
            </motion.div>
            <motion.h2 
              className="text-4xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Let's Create Something Amazing
            </motion.h2>
            <motion.p 
              className="text-xl mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Whether you have a project in mind or just want to chat, I'm always open to discussing new opportunities.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass rounded-full font-medium text-lg hover:bg-white/20 transition-colors"
              onClick={() => window.location.href = "https://mail.google.com/mail/?view=cm&to=aayush2658@gmail.com"}
            >
              Get In Touch
            </motion.button>

          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Aayush Bhandari. Crafted with passion and code.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;