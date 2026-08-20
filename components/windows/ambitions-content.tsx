"use client"

import { Target, GraduationCap, Building2, Globe, Users, Lightbulb, Briefcase, HeartHandshake } from "lucide-react"

const ambitions = [
  [GraduationCap, "Continue Special Needs Education Practice", "Keep developing as an inclusive education professional through reflective practice, targeted training, and evidence-informed learner support.", "Now"],
  [Users, "Expand Learner Support Programmes", "Create stronger one-to-one and small-group interventions for learners with autism, ADHD, hearing impairment, and learning differences.", "Ongoing"],
  [Building2, "Grow as a Professional Teacher", "Build a long-term teaching career grounded in compassion, classroom excellence, collaboration, and measurable learner progress.", "2026–2030"],
  [Lightbulb, "Advance Assistive Learning", "Use adaptive technologies, accessible resources, and differentiated assessments to improve participation and learner independence.", "Ongoing"],
  [Globe, "Promote Inclusive Education", "Advocate for inclusive classrooms and help mainstream teachers, families, and communities understand diverse learning needs.", "Ongoing"],
  [Briefcase, "Develop Maths & Physics Tutoring", "Support primary, secondary, IGCSE, and CBE learners through structured home and online tutoring that builds confidence and achievement.", "Ongoing"],
  [HeartHandshake, "Strengthen KSL Communication Support", "Continue using Kenyan Sign Language interpretation and training to make education and community spaces more accessible.", "Ongoing"],
  [Target, "Every Learner Matters", "Keep the central goal of my work clear: support, encourage, empower, and help every learner reach meaningful outcomes.", "Always"],
]

export function AmbitionsContent() { return <div className="flex flex-col gap-6"><div><h2 className="text-2xl font-bold text-gray-900">Teaching Ambitions &amp; Goals</h2><p className="text-sm text-gray-500 mt-1">A roadmap for inclusive education, learner support, and academic excellence.</p></div><div className="flex flex-col gap-4">{ambitions.map(([Icon, title, description, timeline]) => <div key={title as string} className="p-4 bg-gradient-to-br from-white to-blue-50 rounded-xl border border-gray-200 hover:border-primary hover:shadow-md transition-all"><div className="flex items-start gap-3"><div className="size-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#102a72] to-[#d9a514] shadow-md"><Icon className="size-5 text-white" strokeWidth={1.8} /></div><div className="flex-1"><div className="flex items-start justify-between gap-2 flex-wrap"><h3 className="font-bold text-gray-900 text-sm">{title as string}</h3><span className="text-[10px] font-semibold text-primary bg-blue-50 px-2 py-0.5 rounded-full whitespace-nowrap">{timeline as string}</span></div><p className="text-xs text-gray-600 mt-1.5 leading-relaxed">{description as string}</p></div></div></div>)}</div></div> }
