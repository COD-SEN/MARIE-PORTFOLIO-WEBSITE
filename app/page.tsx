'use client';

import { Mail, Phone, Linkedin, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Marie</h1>
          <div className="flex gap-8">
            <a href="#projects" className="text-foreground hover:text-primary transition">
              Projects
            </a>
            <a href="#skills" className="text-foreground hover:text-primary transition">
              Skills
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
          Hi, I&apos;m Marie
        </h2>
        <p className="text-xl text-foreground-muted mb-8 max-w-2xl mx-auto">
          A passionate developer and designer creating beautiful, functional digital experiences
        </p>
        <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition">
          View My Work
        </button>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h3 className="text-3xl font-bold mb-12">Featured Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-surface border border-border rounded-xl p-6 hover:shadow-lg transition"
            >
              <div className="bg-border h-40 rounded-lg mb-4"></div>
              <h4 className="text-xl font-bold mb-2">Project {i}</h4>
              <p className="text-foreground-muted mb-4">
                A brief description of this project and the technologies used.
              </p>
              <div className="flex gap-6 mt-4">
                <button className="text-primary hover:text-primary-dark font-medium flex items-center gap-2 hover:scale-105 transition transform">
                  View <ExternalLink size={20} />
                </button>
                <button className="text-primary hover:text-primary-dark font-medium flex items-center gap-2 hover:scale-105 transition transform">
                  Code <Github size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-surface/50">
        <h3 className="text-3xl font-bold mb-12">Skills & Technologies</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
            { title: 'Backend', skills: ['Node.js', 'PostgreSQL', 'APIs', 'Authentication'] },
            { title: 'Tools', skills: ['Git', 'Docker', 'AWS', 'Figma'] },
          ].map((category) => (
            <div key={category.title} className="bg-background rounded-xl p-6 border border-border">
              <h4 className="text-xl font-bold mb-4">{category.title}</h4>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-foreground-muted">
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact/Messaging Section */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h3 className="text-3xl font-bold mb-12 text-center">Get In Touch</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Email */}
          <div className="bg-surface border border-border rounded-xl p-8 hover:shadow-lg transition flex flex-col items-center text-center">
            <div className="p-4 bg-primary/10 rounded-full mb-6">
              <Mail size={56} className="text-primary" />
            </div>
            <h4 className="text-xl font-bold mb-3">Email</h4>
            <a
              href="mailto:marie@example.com"
              className="text-foreground-muted hover:text-primary transition"
            >
              marie@example.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-surface border border-border rounded-xl p-8 hover:shadow-lg transition flex flex-col items-center text-center">
            <div className="p-4 bg-secondary/10 rounded-full mb-6">
              <Phone size={56} className="text-secondary" />
            </div>
            <h4 className="text-xl font-bold mb-3">Phone</h4>
            <a
              href="tel:+254797291632"
              className="text-foreground-muted hover:text-secondary transition font-medium text-lg"
            >
              +254 797 291632
            </a>
          </div>

          {/* Social */}
          <div className="bg-surface border border-border rounded-xl p-8 hover:shadow-lg transition flex flex-col items-center text-center">
            <div className="flex gap-6 mb-6">
              <a
                href="#"
                className="p-3 bg-primary text-white rounded-full hover:bg-primary-dark transition transform hover:scale-110"
              >
                <Linkedin size={32} />
              </a>
              <a
                href="#"
                className="p-3 bg-foreground text-white rounded-full hover:bg-foreground/80 transition transform hover:scale-110"
              >
                <Github size={32} />
              </a>
            </div>
            <h4 className="text-xl font-bold mb-2">Social</h4>
            <p className="text-foreground-muted">Connect with me online</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p>&copy; 2024 Marie. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
