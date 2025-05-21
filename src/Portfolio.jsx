import { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, ChevronRight, ExternalLink, Menu, X } from 'lucide-react';
import myImage from './assets/pic.png';
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-[70vh] bg-gray-50 text-gray-800">
      {/* Navigation */}
      <nav className=" w-full bg-white shadow-md ">
        <div className=" mx-auto px-4 py-3 flex justify-between items-center">
          {/* <div className="text-xl font-bold text-blue-600">Sohrab Memari</div> */}
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <NavItem active={activeSection === 'home'} onClick={() => scrollToSection('home')}>Home</NavItem>
            <NavItem active={activeSection === 'about'} onClick={() => scrollToSection('about')}>About</NavItem>
            <NavItem active={activeSection === 'education'} onClick={() => scrollToSection('education')}>Education</NavItem>
            <NavItem active={activeSection === 'projects'} onClick={() => scrollToSection('projects')}>Projects</NavItem>
            <NavItem active={activeSection === 'experience'} onClick={() => scrollToSection('experience')}>Experience</NavItem>
            <NavItem active={activeSection === 'skills'} onClick={() => scrollToSection('skills')}>Skills</NavItem>
            <NavItem active={activeSection === 'achievements'} onClick={() => scrollToSection('achievements')}>Achievements</NavItem>
            <NavItem active={activeSection === 'contact'} onClick={() => scrollToSection('contact')}>Contact</NavItem>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md ">
            <div className="flex flex-col ">
              <MobileNavItem active={activeSection === 'home'} onClick={() => scrollToSection('home')}>Home</MobileNavItem>
              <MobileNavItem active={activeSection === 'about'} onClick={() => scrollToSection('about')}>About</MobileNavItem>
              <MobileNavItem active={activeSection === 'education'} onClick={() => scrollToSection('education')}>Education</MobileNavItem>
              <MobileNavItem active={activeSection === 'projects'} onClick={() => scrollToSection('projects')}>Projects</MobileNavItem>
              <MobileNavItem active={activeSection === 'experience'} onClick={() => scrollToSection('experience')}>Experience</MobileNavItem>
              <MobileNavItem active={activeSection === 'skills'} onClick={() => scrollToSection('skills')}>Skills</MobileNavItem>
              <MobileNavItem active={activeSection === 'achievements'} onClick={() => scrollToSection('achievements')}>Achievements</MobileNavItem>
              <MobileNavItem active={activeSection === 'contact'} onClick={() => scrollToSection('contact')}>Contact</MobileNavItem>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-9">
        {/* Hero Section */}
        <section id="home" className="min-h-[70vh] flex items-center bg-gradient-to-br from-blue-50 to-indigo-50 ">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                      <img src={myImage} alt="Description" />

                {/* <img src="/api/placeholder/400/400" alt="Sohrab Memari" className="w-full h-auto rounded-lg" /> */}
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-12 ">
              <h1 className="text-5xl font-bold mb-4 text-blue-700">Sohrab Memari</h1>
              <h2 className="text-2xl text-gray-600 mb-6">Computer Engineering Student</h2>
              <p className="text-lg mb-8">Hard-working and dedicated Computer Engineering bachelor's student with strong programming skills and experience in team projects, working environment and teaching; known for a strong sense of responsibility and precision in completing assigned tasks.</p>
              <div className="flex flex-wrap gap-4">
                <SocialButton  icon={<Github size={20} color='white'  />} href="https://github.com/Sohrab098"><span className="!text-white">GitHub</span></SocialButton>
                <SocialButton icon={<Linkedin size={20} color='white'/>} href="https://linkedin.com/in/sohrab-memari"><span className="!text-white">LinkedIn</span></SocialButton>
                <SocialButton icon={<Mail size={20} color='white'/>} href="mailto:sohrab.mri@gmail.com"><span className="!text-white">Email</span></SocialButton>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader>About Me</SectionHeader>
            <div className="flex flex-col md:flex-row gap-10">
              <div className="w-full md:w-2/3">
                <p className="text-lg mb-6">I am a 4th year Computer Engineering student at Eastern Mediterranean University with a strong academic record (CGPA: 3.60/4.00). My technical expertise includes AI development, software engineering, and web development.</p>
                <p className="text-lg mb-6">I'm passionate about applying technology to solve real-world problems, as demonstrated by my AI classifier project that achieved 92% precision and my contribution to the Teknofest tourism website project.</p>
                <p className="text-lg">My experience includes roles as a System Administrative Assistant at EMU, working in R&D at Comtech, and tutoring Object-Oriented Programming in Java. I'm proficient in multiple programming languages and frameworks, including Python, C, Java, React, and Django.</p>
              </div>
              <div className="w-full md:w-1/3">
                <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-blue-700">Personal Details</h3>
                 
          
                  <PersonalDetail icon={<MapPin size={18} />} label="Location">Trikomo, Cyprus</PersonalDetail>
                  <PersonalDetail icon={<Phone size={18} />} label="Phone">+905338242540</PersonalDetail>
                  <PersonalDetail icon={<Mail size={18} />} label="Email">sohrab.mri@gmail.com</PersonalDetail>
                  <h3 className="text-xl font-bold mb-4 mt-6 text-blue-700">Languages</h3>
                  <LanguageSkill language="English" level="Upper intermediate" />
                  <LanguageSkill language="Persian" level="Native language" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader>Education</SectionHeader>
            <div className="space-y-10">
              <EducationCard 
                years="2021 - Present"
                degree="Bachelor of Computer Engineering"
                institution="Eastern Mediterranean University (EMU)"
                description="4th year of Computer engineering with a CGPA of 3.60/4.00"
              />
              <EducationCard 
                years="2014 - 2020"
                degree="Diploma"
                institution="National Organization for Development of Exceptional Talents (Sampad)"
                description="Completed secondary education at a prestigious institution known for its rigorous academic curriculum."
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader>Projects</SectionHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard 
                title="AI Classifier"
                description="Created an AI classifier using RoBERTa as the model, which successfully passed the testing phase with 92% precision and 90% DummyClassifier accuracy. Besides gathering datasets, I handled tasks such as data augmentation using various methods, including leveraging models for synonym replacement."
                tags={["Python", "Machine Learning", "NLP", "RoBERTa"]}
              />
              <ProjectCard 
                title="Keyword Extractor"
                description="Created a keyword extractor by using RAKE algorithm, which detects the input language and supports English, Turkish and Persian for the purpose of ticket extraction."
                tags={["Python", "NLP", "RAKE Algorithm", "Multilingual"]}
              />
              <ProjectCard 
                title="Parser"
                description="A parser that reads valid mathematical expressions from a file and generates a parse tree that accurately represents each expression. While reading the file, expressions can be split across multiple lines and may contain white spaces between tokens."
                tags={["Python", "Parsing", "Data Structures", "Algorithms"]}
              />
              <ProjectCard 
                title="Cyplanner"
                description="The Teknofest project, a tourism website with AI-powered personalized trip planning and interactive map that notifies users about real-time local events. Although not fully finished, the front-end is complete."
                tags={["React", "AI", "Tourism", "Web Development"]}
              />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader>Experience</SectionHeader>
            <div className="space-y-10">
              <ExperienceCard 
                period="February 2024 - Present"
                position="System Administrative Assistant"
                company="Eastern Mediterranean University (EMU)"
                description="Managed and maintained laboratory systems, including system optimization and debugging, using freezing software to ensure that any user changes were reset. Also resolved IT issues, such as projector malfunctions, to ensure classes could proceed smoothly."
              />
              <ExperienceCard 
                period="July 2024 - March 2025"
                position="Research and Development"
                company="Comtech (Internship)"
                description="Built an AI classifier for a chatbot to reduce customer service workload. It uses ticket extraction methods to analyze customer questions and requests, providing accurate answers allowing customers to receive support at any time."
              />
              <ExperienceCard 
                period="November 2024 - January 2025"
                position="Tutoring"
                company="Eastern Mediterranean University (EMU)"
                description="Taught Object-Oriented Programming in Java to assigned students. Responsibilities included solving examples, reviewing past papers, answering students' questions, and teaching fundamental principles."
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader>Skills</SectionHeader>
            <div className="flex flex-col md:flex-row gap-10">
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-bold mb-6 text-blue-700">Languages & Frameworks</h3>
                <div className="grid grid-cols-2 gap-4">
                  <SkillBadge>Python</SkillBadge>
                  <SkillBadge>C</SkillBadge>
                  <SkillBadge>Java</SkillBadge>
                  <SkillBadge>Oracle SQL</SkillBadge>
                  <SkillBadge>React</SkillBadge>
                  <SkillBadge>JavaScript</SkillBadge>
                  <SkillBadge>Node.js</SkillBadge>
                  <SkillBadge>Flask</SkillBadge>
                  <SkillBadge>Django</SkillBadge>
                  <SkillBadge>Fast API</SkillBadge>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-bold mb-6 text-blue-700">Hard Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  <SkillBadge>Software Development</SkillBadge>
                  <SkillBadge>Website Design</SkillBadge>
                  <SkillBadge>Teamwork</SkillBadge>
                  <SkillBadge>Adaptation</SkillBadge>
                  <SkillBadge>AI Development</SkillBadge>
                  <SkillBadge>System Administration</SkillBadge>
                  <SkillBadge>Problem Solving</SkillBadge>
                  <SkillBadge>Teaching</SkillBadge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <SectionHeader>Achievements</SectionHeader>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AchievementCard 
                title="High Honor Certificate"
                issuer="Eastern Mediterranean University"
                description="Achieved the High Honor Certificate in my 1st, 2nd, 4th, and 6th semesters. Awarded to GPAs above 3.50."
              />
              <AchievementCard 
                title="Honor Certificate"
                issuer="Eastern Mediterranean University"
                description="Achieved the Honor Certificate in my 3rd, 5th and 7th semesters. Awarded to GPAs above 3.00."
              />
              <AchievementCard 
                title="Teknofest Tourism Technologies Competition"
                issuer="Teknofest"
                description="Participated in the Teknofest competition as a team and managed to reach the semifinals."
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        {/* <section id="contact" className="py-20 bg-blue-600 text-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <ContactInfo icon={<Mail size={32} />} title="Email" content="sohrab.mri@gmail.com" link="mailto:sohrab.mri@gmail.com" />
              <ContactInfo icon={<Phone size={32} />} title="Phone" content="+905338242540" link="tel:+905338242540" />
              <ContactInfo icon={<MapPin size={32} />} title="Location" content="Trikomo, Cyprus" />
            </div>
            <div className="mt-12 flex justify-center space-x-6">
              <SocialIconButton href="https://github.com/Sohrab098" icon={<Github size={24} />} />
              <SocialIconButton href="https://linkedin.com/in/sohrab-memari" icon={<Linkedin size={24} />} />
              <SocialIconButton href="mailto:sohrab.mri@gmail.com" icon={<Mail size={24} />} />
            </div>
          </div>
        </section> */}
      </main>

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Sohrab Memari. All rights reserved.</p>
          <p className="mt-2 text-gray-400">Computer Engineering Student | Developer</p>
        </div>
      </footer> */}
    </div>
  );
}

// Navigation Components
function NavItem({ children, active, onClick }) {
  return (
    <button 
      onClick={onClick} 
      className={`font-medium transition-colors duration-300 ${active ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
    >
      {children}
    </button>
  );
}

function MobileNavItem({ children, active, onClick }) {
  return (
    <button 
      onClick={onClick} 
      className={`block  text-left px-6 py-2 transition-colors duration-300 ${active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
    >
      {children}
    </button>
  );
}

// Header Components
function SectionHeader({ children }) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold text-center">{children}</h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
    </div>
  );
}

// Button Components
function SocialButton({ icon, children, href }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-300"
    >
      {icon}
      {children}
    </a>
  );
}

function SocialIconButton({ icon, href }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-white text-blue-600 p-3 rounded-full hover:bg-blue-50 transition-colors duration-300"
    >
      {icon}
    </a>
  );
}

// Info Components
function PersonalDetail({ icon, label, children }) {
  return (
    <div className="flex mb-4">
      <div className="text-blue-600 mr-3 mt-1">{icon}</div>
      <div>
        <div className="text-sm text-gray-500">{label}</div>
        <div className="font-medium">{children}</div>
      </div>
    </div>
  );
}

function LanguageSkill({ language, level }) {
  return (
    <div className="mb-3">
      <div className="font-medium">{language}</div>
      <div className="text-sm text-gray-500">{level}</div>
    </div>
  );
}

// Card Components
function EducationCard({ years, degree, institution, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-sm font-semibold text-blue-600 mb-2">{years}</div>
      <h3 className="text-xl font-bold mb-2">{degree}</h3>
      <div className="text-gray-600 font-medium mb-3">{institution}</div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProjectCard({ title, description, tags }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <h3 className="text-xl font-bold mb-3 text-blue-700">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({ period, position, company, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-sm font-semibold text-blue-600 mb-2">{period}</div>
      <h3 className="text-xl font-bold mb-2">{position}</h3>
      <div className="text-gray-600 font-medium mb-3">{company}</div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function SkillBadge({ children }) {
  return (
    <div className="bg-blue-50 border border-blue-100 text-blue-800 py-2 px-4 rounded-lg font-medium">
      {children}
    </div>
  );
}

function AchievementCard({ title, issuer, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <h3 className="text-xl font-bold mb-2 text-blue-700">{title}</h3>
      <div className="text-gray-600 font-medium mb-3">{issuer}</div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ContactInfo({ icon, title, content, link }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-blue-500 p-4 rounded-full mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      {link ? (
        <a href={link} className="hover:text-blue-200 transition-colors duration-300">
          {content}
        </a>
      ) : (
        <p>{content}</p>
      )}
    </div>
  );
}