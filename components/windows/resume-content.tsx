"use client"

import { Button } from "@/components/ui/button"
import { Download, GraduationCap, Briefcase, Award, Users, BookOpen } from "lucide-react"

const competencies = ["Learner Support & Inclusive Education", "Individualized Education Programmes (IEPs)", "Differentiated Instruction", "Autism & Neurodevelopmental Support", "Positive Behaviour Support", "Learner Assessment", "Child Safeguarding", "Mathematics & Physics", "Cambridge IGCSE", "KSL Interpretation", "Assistive Learning Technologies"]

export function ResumeContent() {
  const handleDownload = async () => {
    try {
      const { jsPDF } = await import("jspdf")
      const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" })
      const margin = 12
      const width = doc.internal.pageSize.getWidth()
      let y = margin
      const section = (title: string) => { doc.setFontSize(12); doc.setFont(undefined, "bold"); doc.text(title, margin, y); y += 6 }
      const text = (value: string, bold = false) => { doc.setFontSize(9); doc.setFont(undefined, bold ? "bold" : "normal"); const lines = doc.splitTextToSize(value, width - margin * 2); doc.text(lines, margin, y); y += lines.length * 4 + 2 }
      doc.setFontSize(17); doc.setFont(undefined, "bold"); doc.text("BRIAN PERU", width / 2, y, { align: "center" }); y += 7
      doc.setFontSize(10); doc.setFont(undefined, "normal"); doc.text("Learner Support Teacher | Special Needs Education", width / 2, y, { align: "center" }); y += 5
      doc.text("Nairobi, Kenya | +254 790 579 802 | brianperu2019@gmail.com", width / 2, y, { align: "center" }); y += 10
      section("PROFESSIONAL SUMMARY"); text("TSC-registered Special Needs Education Teacher with a Bachelor of Education (Science) and experience supporting learners with autism, ADHD, hearing impairment, and diverse learning needs in inclusive environments. Skilled in IEP development, differentiated instruction, curriculum adaptation, learner assessment, child safeguarding, and positive behaviour support.")
      section("EDUCATION & REGISTRATION"); text("Bachelor of Education (Science) – Special Needs Education, Kenyatta University (2020–2025)", true); text("Teachers Service Commission (TSC) – Registered Teacher"); text("KCSE – Kakamega High School (2016–2019)")
      section("PROFESSIONAL EXPERIENCE"); text("Special Needs Education Teacher – Dalyn Integrated School | May 2026 – Jul 2026", true); text("Adapted Cambridge IGCSE lessons, designed IEPs, modified assessments, and collaborated with teachers, parents, and therapists to support learners with autism and diverse learning needs."); text("Learner Support Teacher – Njathaini Comprehensive School | Apr 2025 – Apr 2026", true); text("Provided one-to-one and small-group interventions, planned differentiated literacy, numeracy, and life-skills programmes, monitored progress, and supported inclusion and learner wellbeing."); text("Teacher Trainee – Mathematics & Physics – Chavakali High School | Apr 2024 – Aug 2024", true); text("Planned competency-based lessons, used practical experiments and inquiry-based learning, prepared assessments, and provided targeted remedial support.")
      section("CORE COMPETENCIES"); text(competencies.map((item) => `• ${item}`).join("\n")); section("ADDITIONAL EXPERIENCE"); text("Kenyan Sign Language interpreter and communication support volunteer at Kenyatta University Chaplaincy. Completed KSL teaching practicum at Thawabu Comprehensive School, promoting inclusive learning for learners with hearing impairments."); doc.save("Brian-Peru-CV.pdf")
    } catch (error) { console.error("[v0] PDF generation failed:", error) }
  }

  return <div className="flex flex-col gap-6">
    <div className="flex items-center justify-between"><h2 className="text-2xl font-bold text-gray-900">Curriculum Vitae</h2><Button onClick={handleDownload} size="sm"><Download data-icon="inline-start" />Download CV</Button></div>
    <section className="flex flex-col gap-2"><h3 className="text-lg font-bold text-gray-900 flex items-center gap-2"><Users className="size-5 text-primary" />Personal Details</h3><div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700"><p><b>Full Name:</b> Brian Peru</p><p><b>Nationality:</b> Kenyan</p><p><b>Phone:</b> +254 790 579 802</p><p><b>Email:</b> brianperu2019@gmail.com</p><p><b>Location:</b> Nairobi, Kenya</p><p><b>Title:</b> Learner Support Teacher</p></div></section>
    <section className="flex flex-col gap-2"><h3 className="text-lg font-bold text-gray-900 flex items-center gap-2"><Briefcase className="size-5 text-green-700" />Profile Summary</h3><p className="text-sm text-gray-700 leading-relaxed">TSC-registered Special Needs Education Teacher with a Bachelor of Education (Science), experienced in inclusive education, learner support, IEPs, curriculum adaptation, assessment, safeguarding, Mathematics, Physics, and Kenyan Sign Language communication support.</p></section>
    <section className="flex flex-col gap-3"><h3 className="text-lg font-bold text-gray-900 flex items-center gap-2"><GraduationCap className="size-5 text-primary" />Education</h3><div className="p-3 bg-blue-50 rounded-lg border border-blue-200"><p className="font-semibold text-gray-900">Bachelor of Education (Science) – Special Needs Education</p><p className="text-sm text-gray-600">Kenyatta University · 2020–2025</p></div><div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200"><p className="font-semibold text-gray-900">KCSE</p><p className="text-sm text-gray-600">Kakamega High School · 2016–2019</p></div></section>
    <section className="flex flex-col gap-2"><h3 className="text-lg font-bold text-gray-900 flex items-center gap-2"><BookOpen className="size-5 text-green-700" />Core Competencies</h3><div className="flex flex-wrap gap-2">{competencies.map((skill) => <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium border border-gray-200">{skill}</span>)}</div></section>
    <section className="flex flex-col gap-3"><h3 className="text-lg font-bold text-gray-900 flex items-center gap-2"><Briefcase className="size-5 text-primary" />Experience</h3>{[["Special Needs Education Teacher", "Dalyn Integrated School · May 2026 – Jul 2026"], ["Learner Support Teacher", "Njathaini Comprehensive School · Apr 2025 – Apr 2026"], ["Teacher Trainee – Mathematics & Physics", "Chavakali High School · Apr 2024 – Aug 2024"]].map(([role, detail]) => <div key={role} className="p-3 bg-green-50 rounded-lg border border-green-200"><p className="font-semibold text-gray-900">{role}</p><p className="text-xs text-gray-600">{detail}</p></div>)}</section>
    <section className="flex flex-col gap-2"><h3 className="text-lg font-bold text-gray-900 flex items-center gap-2"><Award className="size-5 text-yellow-700" />Professional Registration</h3><p className="text-sm text-gray-700">Teachers Service Commission (TSC) – Registered Teacher</p><p className="text-sm text-gray-700">Recommended by Njathaini Comprehensive School for dedication, compassion, teamwork, and learner support.</p></section>
  </div>
}
