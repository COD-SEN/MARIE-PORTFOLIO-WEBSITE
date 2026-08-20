"use client"

import { BookOpen, Users, Languages, HeartHandshake, Calculator, Lightbulb, ShieldCheck, Laptop } from "lucide-react"

const interests = [
  [BookOpen, "Inclusive Education", "Creating accessible, learner-centred classrooms where every learner can participate, grow, and achieve."],
  [Users, "Learner Support", "Supporting learners with autism, ADHD, hearing impairment, dyslexia, and other learning differences through patient, structured interventions."],
  [Calculator, "Mathematics & Physics", "Making Mathematics and Physics practical, understandable, and engaging through experiments, inquiry, and differentiated instruction."],
  [Languages, "Kenyan Sign Language", "Using KSL interpretation and communication support to strengthen inclusion for deaf and hard-of-hearing learners."],
  [HeartHandshake, "Mentorship & Wellbeing", "Building trusting relationships with learners, families, teachers, and multidisciplinary teams."],
  [Lightbulb, "Creative Lesson Planning", "Designing interactive lessons, hands-on activities, and accessible resources that respond to different learning profiles."],
  [ShieldCheck, "Safeguarding", "Promoting positive behaviour, learner protection, wellbeing, and supportive learning environments."],
  [Laptop, "Assistive Technology", "Exploring adaptive tools and classroom technology that improve access, independence, and participation."],
]

export function InterestsContent() {
  return <div className="flex flex-col gap-6"><div><h2 className="text-2xl font-bold text-gray-900">My Interests</h2><p className="text-sm text-gray-500 mt-1">The people, practices, and ideas that shape my work in inclusive education.</p></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{interests.map(([Icon, title, description]) => <div key={title as string} className="p-4 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-md transition-all"><div className="flex items-start gap-3"><div className="size-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#102a72] to-[#3f8f61] shadow-md"><Icon className="size-5 text-white" strokeWidth={1.8} /></div><div><h3 className="font-bold text-gray-900 text-sm">{title as string}</h3><p className="text-xs text-gray-600 mt-1 leading-relaxed">{description as string}</p></div></div></div>)}</div></div>
}
