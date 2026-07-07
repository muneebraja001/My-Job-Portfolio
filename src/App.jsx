import React, { useState } from 'react';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [copied, setCopied] = useState('');

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard?.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(''), 1800);
  };

  const projects = [
    {
      id: 1,
      title: 'Missing Children Detection System',
      category: 'AI',
      tech: ['React', 'Flask', 'SQL Server', 'DeepFace', 'YOLOv8'],
      description: 'Full-stack web app with AI-powered face recognition for matching missing and found children.',
      github: 'https://github.com/muneebraja001'
    },
    {
      id: 2,
      title: 'Grocery Store Management System',
      category: 'Full-Stack',
      tech: ['React', 'Tailwind CSS', 'Flask', 'MySQL'],
      description: 'Complete grocery store system with product management, sales, and bill generation.',
      github: 'https://github.com/muneebraja001'
    },
    {
      id: 3,
      title: 'RAG-Powered Document Q&A System',
      category: 'AI',
      tech: ['LangChain', 'OpenAI API', 'Chroma DB', 'FastAPI'],
      description: 'Document Q&A system using RAG pipeline with 85% answer accuracy.',
      github: 'https://github.com/muneebraja001'
    },
    {
      id: 4,
      title: 'Real-Time Object Detection & Counting',
      category: 'Computer Vision',
      tech: ['YOLOv8', 'OpenCV', 'CSRT Tracker', 'FastAPI'],
      description: 'Vehicle detection and counting system for CCTV footage.',
      github: 'https://github.com/muneebraja001'
    },
    {
      id: 5,
      title: 'Image Classification with CNN',
      category: 'Deep Learning',
      tech: ['TensorFlow', 'Keras', 'CNN', 'Flask API'],
      description: 'Trained a CNN model achieving 85% accuracy on image classification.',
      github: 'https://github.com/muneebraja001'
    }
  ];

  const filters = ['all', 'AI', 'Full-Stack', 'Computer Vision', 'Deep Learning'];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const skills = [
    { category: 'Frontend', icon: '🎨', items: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'] },
    { category: 'Backend', icon: '⚙️', items: ['Node.js', 'Python', 'Flask', 'FastAPI'] },
    { category: 'AI/ML & Computer Vision', icon: '🤖', items: ['YOLOv8', 'OpenCV', 'DeepFace', 'TensorFlow', 'scikit-learn'] },
    { category: 'LLM & Generative AI', icon: '🧠', items: ['RAG Pipelines', 'LangChain', 'Prompt Engineering', 'GPT-4', 'Claude'] },
    { category: 'Databases', icon: '🗄️', items: ['MongoDB', 'SQL Server', 'MySQL', 'Prisma ORM'] },
    { category: 'Cloud & Tools', icon: '☁️', items: ['AWS', 'Azure', 'GCP', 'Docker', 'Git'] }
  ];

  const experiences = [
    {
      title: 'Junior Web Developer',
      company: 'AlphaOrigin SMC PVT LTD',
      period: 'June 2026 – Present',
      items: ['Developing AI-powered web applications end-to-end', 'Building interfaces with React.js, Tailwind CSS and Axios', 'Shipping full-stack features across React and Flask']
    },
    {
      title: 'AI Intern',
      company: 'Dione PVT Limited',
      period: 'July 2025 – Sept 2025',
      items: ['Built computer vision pipelines with YOLO and OpenCV', 'Worked on drone-based object detection', 'Handled NLP preprocessing for text pipelines']
    }
  ];

  const certifications = [
    { name: 'Azure: Create a Virtual Machine and Deploy a Web Server', issuer: 'Coursera', year: '2026' },
    { name: 'Prompt Engineering with GitHub Copilot', issuer: 'Microsoft', year: '2026' },
    { name: 'Freelancing Course', issuer: 'E-Learning Mianwali', year: '2022' }
  ];

  const contactMethods = [
    { icon: '📧', label: 'Email', value: 'muneebxaiengineer@gmail.com', href: 'mailto:muneebxaiengineer@gmail.com', hint: 'Best for detailed queries' },
    { icon: '📱', label: 'Phone', value: '0336 9613152', href: 'tel:03369613152', hint: 'Available on call' },
    { icon: '💬', label: 'WhatsApp', value: 'Chat instantly', href: 'https://wa.me/923369613152', hint: 'Usually replies fast' },
    { icon: '🔗', label: 'LinkedIn', value: 'Connect with me', href: 'https://www.linkedin.com/in/muneeb-ur-rehman-282b85410/', hint: 'Let’s network' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ========== HEADER ========== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-blue-600 flex-shrink-0">
                <img src="/profile.jpeg" alt="Muneeb ur Rehman" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-bold text-gray-800 text-sm leading-tight">Muneeb ur Rehman</div>
                <div className="text-[10px] text-blue-600 font-medium leading-tight">AI Engineer | Full-Stack Developer</div>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                  {item}
                </button>
              ))}
            </nav>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors">
              <span className="text-xl text-gray-700">☰</span>
            </button>
          </div>
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 py-3' : 'max-h-0'}`}>
            <div className="flex flex-col gap-2">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-left px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-sm">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ========== HERO SECTION ========== */}
      <section id="home" className="min-h-screen flex items-center pt-14 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Available for Work
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                Hi, I'm <br />
                <span className="text-blue-600">Muneeb ur Rehman</span>
              </h1>
              <h2 className="text-xl text-blue-600 font-semibold">AI Engineer | Full-Stack Developer</h2>
              <p className="text-base text-gray-600 max-w-lg">
                Building intelligent AI applications and responsive web experiences. Passionate about Computer Vision, LLMs, and solving real-world problems.
              </p>
              <div className="flex flex-wrap gap-3 pt-3">
                <button onClick={() => scrollToSection('contact')} className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-blue-500/25 text-sm">
                  Hire Me
                </button>
                <button onClick={() => window.open('public/MuneebCV.pdf', '_blank')} className="px-6 py-2.5 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-full transition-all text-sm">
                  Download CV
                </button>
              </div>
              <div className="flex gap-5 pt-3">
                <a href="https://github.com/muneebraja001" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-600 hover:text-blue-600 transition-colors">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/muneeb-ur-rehman-282b85410/" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-600 hover:text-blue-600 transition-colors">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://wa.me/923369613152" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-600 hover:text-blue-600 transition-colors">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-blue-200 to-indigo-200 blur-xl opacity-60"></div>
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl shadow-blue-500/20 ring-2 ring-blue-100">
                  <img src="/profile.jpeg" alt="Muneeb ur Rehman" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ABOUT SECTION ========== */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">About Me</h2>
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <p className="text-gray-700 leading-relaxed">
              I'm a <span className="text-blue-600 font-semibold">fresh Computer Science (AI) graduate</span> who enjoys turning ideas into working products. On the AI side, I build with <span className="text-blue-600 font-semibold">Computer Vision,NLP,YOLO Object detection,LLMs and RAG pipelines</span>; on the web side, I build complete <span className="text-blue-600 font-semibold">full-stack applications</span> using <span className="text-blue-600 font-semibold">React.js, Node.js, MongoDB and Tailwind CSS</span>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From a face-recognition system for missing children to a RAG-powered document Q&A tool, I like taking a project from a rough idea all the way to something people can actually use. I'm currently sharpening my skills in <span className="text-blue-600 font-semibold">LLM integration</span>, <span className="text-blue-600 font-semibold">Generative AI</span> and <span className="text-blue-600 font-semibold">cloud deployment</span> — and always up for the next challenge.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="text-2xl mb-1">🎓</div>
                <div className="font-semibold text-gray-800 text-sm">BS CS (AI)</div>
                <div className="text-xs text-gray-500">Fresh Graduate</div>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="text-2xl mb-1">📍</div>
                <div className="font-semibold text-gray-800 text-sm">Rawalpindi</div>
                <div className="text-xs text-gray-500">Pakistan</div>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="text-2xl mb-1">💼</div>
                <div className="font-semibold text-gray-800 text-sm">2 Internships</div>
                <div className="text-xs text-gray-500">+ Freelance</div>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="text-2xl mb-1">🚀</div>
                <div className="font-semibold text-gray-800 text-sm">Full-Stack</div>
                <div className="text-xs text-gray-500">+ AI Engineer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SKILLS SECTION ========== */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((skill, index) => (
              <div key={index} className="p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="text-base font-semibold text-gray-800">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skill.items.map((item, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 text-xs rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== EXPERIENCE SECTION ========== */}
      <section id="experience" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Work Experience</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-blue-300">
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-blue-500"></div>
                <div className="flex flex-wrap items-start gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-gray-800">{exp.title}</h3>
                  <span className="text-blue-600 font-medium text-sm">{exp.company}</span>
                </div>
                <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                <ul className="list-disc list-inside space-y-0.5 text-gray-600 text-sm">
                  {exp.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROJECTS SECTION ========== */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Projects</h2>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((filter) => (
              <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${activeFilter === filter ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}>
                {filter === 'all' ? 'All' : filter}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project) => (
              <div key={project.id} className="p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1">
                <h3 className="text-lg font-bold mb-1.5 text-gray-800">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded-full inline-block bg-blue-50 text-blue-600 border border-blue-100">
                    {project.category}
                  </span>
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-xs font-medium px-2.5 py-0.5 rounded-full inline-block bg-green-50 text-green-600 border border-green-100 hover:bg-green-100 transition-colors">
                      🔗 Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs font-medium px-2.5 py-0.5 rounded-full inline-block bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 transition-colors">
                      📂 Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CERTIFICATIONS SECTION ========== */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-center hover:border-blue-300 transition-colors">
                <div className="text-2xl mb-1">📜</div>
                <div className="font-semibold text-gray-800 text-sm">{cert.name}</div>
                <div className="text-xs text-gray-500">{cert.issuer} • {cert.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CONTACT SECTION ========== */}
      <section id="contact" className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-white">Let's Talk</h2>
          <p className="text-blue-100 mb-10 max-w-lg mx-auto">I'm always open to new opportunities, collaborations, or just a friendly chat — pick whatever's easiest for you.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={(e) => {
                  if (!method.href.startsWith('http')) {
                    e.preventDefault();
                    copyToClipboard(method.value, method.label);
                    setTimeout(() => { window.location.href = method.href; }, 400);
                  }
                }}
                className="group relative p-5 rounded-2xl bg-white shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 hover:-translate-y-1 transition-all duration-200 text-left flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-xl shadow-md shadow-blue-500/40 group-hover:scale-110 transition-transform">
                  <span className="drop-shadow-sm">{method.icon}</span>
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-gray-900">{method.label}</div>
                  <div className="text-xs text-gray-500 truncate">
                    {copied === method.label ? 'Copied ✓' : method.hint}
                  </div>
                </div>
                <span className="ml-auto text-blue-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all text-base font-bold">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="py-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-blue-600">MR</span>
              <span className="font-medium text-gray-700 text-sm">Muneeb ur Rehman</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => scrollToSection('home')} className="text-xs text-gray-500 hover:text-blue-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-xs text-gray-500 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-xs text-gray-500 hover:text-blue-600 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('experience')} className="text-xs text-gray-500 hover:text-blue-600 transition-colors">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="text-xs text-gray-500 hover:text-blue-600 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-xs text-gray-500 hover:text-blue-600 transition-colors">Contact</button>
            </div>
            <div className="text-xs text-gray-400">© {new Date().getFullYear()} Muneeb ur Rehman</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
