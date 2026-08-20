"use client"

import { MapPin, Mail, Phone, GraduationCap, BookOpen, Users, Languages, Award } from "lucide-react"

const skills = ["IEP Development", "Differentiated Instruction", "Autism Support", "Positive Behaviour Support", "Learner Assessment", "Mathematics", "Physics", "Cambridge IGCSE", "KSL Interpretation", "Child Safeguarding", "Assistive Technologies", "Parent Engagement"]

export function ProfileContent() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <img src="/brian-portrait.jpeg" alt="Brian Peru" className="size-20 rounded-2xl object-cover border-2 border-primary shadow-md" />
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Brian Peru</h2>
          <p className="text-sm text-gray-500 font-medium">Learner Support Teacher | Special Needs Education</p>
          <p className="text-xs text-gray-500">Maths &amp; Physics Tutor | KSL Interpreter</p>
        </div>
      </div>

      <p className="text-sm text-gray-700 leading-relaxed">I am a TSC-registered Special Needs Education Teacher with a Bachelor of Education (Science) and experience supporting learners with autism, ADHD, hearing impairment, and diverse learning needs in inclusive environments. I am skilled in IEP development, differentiated instruction, curriculum adaptation, learner assessment, child safeguarding, and positive behaviour support.</p>

      <section>
        <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><BookOpen className="size-4 text-primary" />Professional focus</h3>
        <div className="flex flex-wrap gap-2">{["Inclusive Education", "Special Needs Support", "Mathematics & Physics", "Kenyan Sign Language", "Learner-Centred Teaching", "Cambridge IGCSE"].map((item) => <span key={item} className="px-3 py-1 bg-blue-50 text-blue-900 rounded-full text-xs font-medium border border-blue-200">{item}</span>)}</div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-200"><MapPin className="size-5 text-blue-700" /><div><p className="text-xs text-gray-500">Location</p><p className="text-sm font-medium text-gray-800">Nairobi, Kenya</p></div></div>
        <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-xl border border-yellow-200"><Mail className="size-5 text-yellow-700" /><div><p className="text-xs text-gray-500">Email</p><p className="text-sm font-medium text-gray-800">brianperu2019@gmail.com</p></div></div>
        <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl border border-green-200"><Phone className="size-5 text-green-700" /><div><p className="text-xs text-gray-500">Phone</p><p className="text-sm font-medium text-gray-800">+254 790 579 802</p></div></div>
        <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-xl border border-indigo-200"><GraduationCap className="size-5 text-indigo-700" /><div><p className="text-xs text-gray-500">Education</p><p className="text-sm font-medium text-gray-800">B.Ed (Science), Kenyatta University</p></div></div>
      </div>

      <section><h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><Users className="size-4 text-green-700" />Core skills</h3><div className="flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium border border-gray-200">{skill}</span>)}</div></section>

      <section><h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><Award className="size-4 text-yellow-700" />Highlights</h3><ul className="text-sm text-gray-700 flex flex-col gap-1 list-disc list-inside"><li>Recommended by Njathaini Comprehensive School after a year of dedicated service.</li><li>Supported learners with autism, hearing impairment, ADHD, and learning differences.</li><li>Registered with the Teachers Service Commission.</li><li>Experienced in Mathematics and Physics instruction and KSL communication support.</li></ul></section>

      <section><h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2"><Languages className="size-4 text-primary" />Languages</h3><div className="flex flex-wrap gap-3">{["English", "Kiswahili", "Kenyan Sign Language (KSL)"].map((language) => <span key={language} className="px-3 py-2 bg-green-50 rounded-lg border border-green-200 text-sm font-semibold text-gray-800">{language}</span>)}</div></section>
    </div>
  )
}
