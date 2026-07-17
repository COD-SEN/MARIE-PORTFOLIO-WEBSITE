"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Download, FileText, GraduationCap, Briefcase, Award, Code, Users } from "lucide-react"

export function ResumeContent() {
  const handleDownload = () => {
    // Generate PDF as base64 using a simple PDF structure
    const cvContent = `
MARIE ESTHER ATIENO NYAWAGA
Data Analyst | BSc Data Science & Analytics
Nairobi, Kenya | +254 797 291 632 | nyawagamarieesther@gmail.com

PROFESSIONAL SUMMARY
Data Analyst with hands-on experience transforming raw datasets into actionable insights using Python, SQL, Excel, and Power BI. Proven ability to uncover trends, detect anomalies, and support business decision-making through data storytelling and visualization.

EDUCATION
BSc Data Science and Analytics - USIU-Africa (Sep 2022 – Apr 2026)
Cum Laude Candidate | GPA: 3.6+
Core Modules: Statistical Computing, Probability & Statistics, Machine Learning, Big Data Analytics, Data Visualization

PROFESSIONAL CERTIFICATIONS
• Data Analytics Skill Cohort – CC Academy (Certificate ID: CC-DA-0326-001) - March 2026
• Introduction to Python – DataCamp - June 2024
• Exploratory Data Analysis in Python – DataCamp - June 2024  
• Understanding Data Science – DataCamp - July 2024
• Preparing Data for Analysis with Microsoft Excel – Coursera
• Foundations: Data, Data, Everywhere – Coursera
• Professional Certification in M&E – The Kenya Institute of Management (In Progress)

TECHNICAL SKILLS
Programming: Python, R, SQL, VBA
Data Visualization: Power BI, Tableau, Google Data Studio
Data Processing: Pandas, NumPy, Excel
Machine Learning: Scikit-learn, TensorFlow/Keras
Statistical Analysis, EDA, Feature Engineering, ETL Pipeline Design, Git

WORK EXPERIENCE
Data Analytics Intern – KKCO East Africa LLP (Jan 2026 – Present)
• Analysed financial datasets to surface trends and anomalies for audit planning
• Built data cleaning and validation processes for multi-source financial files
• Developed Power BI dashboards for audit managers providing key financial metrics
• Supported IT audit cycles by reviewing data system outputs

Mathematics Tutor – Freelance (Dec 2024 – Aug 2025)
• Provided remote mathematics tutoring for university students
• Designed structured learning plans improving pass rates
• Developed ability to communicate complex statistical concepts

KEY COMPETENCIES
• Financial data analysis and anomaly detection
• ETL pipeline design and data quality validation
• Interactive Power BI/Tableau dashboards for stakeholder reporting
• Machine learning model development and cross-validation
• NLP text preprocessing and analysis
• Communicating complex findings to non-technical audiences

ACHIEVEMENTS
• Cum Laude Candidate (USIU-Africa)
• CC Academy Data Analytics Certified
• Financial Audit Analytics Expertise
• Machine Learning & NLP Projects
• Active GitHub Contributor
• Community Service Volunteer

CAREER OBJECTIVE
To leverage data analytics expertise to uncover actionable business insights and drive organizational impact. Seeking opportunities to work on complex financial and operational data challenges, build machine learning models, and create compelling data visualizations.
    `

    // Create a PDF-like document using html5 canvas approach
    // For now, we'll convert to PDF format by creating a proper blob
    const element = document.createElement("div")
    element.innerHTML = `
      <h1>MARIE ESTHER ATIENO NYAWAGA</h1>
      <p>Data Analyst | BSc Data Science & Analytics</p>
      <p>Nairobi, Kenya | +254 797 291 632 | nyawagamarieesther@gmail.com</p>
      <pre>${cvContent}</pre>
    `

    // Generate PDF using html2pdf if available, otherwise use a client library
    try {
      const script = document.createElement("script")
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"
      document.head.appendChild(script)
      
      script.onload = () => {
        const opt = {
          margin: 10,
          filename: "Marie-Nyawaga-CV.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { orientation: "portrait", unit: "mm", format: "a4" }
        }
        window.html2pdf().set(opt).from(element).save()
      }
    } catch (error) {
      console.error("PDF generation error:", error)
      // Fallback: Create a simple PDF structure
      const pdfContent = createSimplePDF(cvContent)
      const link = document.createElement("a")
      link.href = pdfContent
      link.download = "Marie-Nyawaga-CV.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  // Helper function to create a basic PDF structure
  const createSimplePDF = (content: string): string => {
    const pdf = `%PDF-1.4
1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj
2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj
3 0 obj<</Type/Page/Parent 2 0 R/Resources<</Font<</F1 4 0 R>>>>/MediaBox[0 0 612 792]/Contents 5 0 R>>endobj
4 0 obj<</Type/Font/Subtype/Type1/BaseFont/Helvetica>>endobj
5 0 obj<</Length ${content.length}>>stream
BT /F1 12 Tf 50 750 Td (${content.replace(/\(/g, "\\(").replace(/\)/g, "\\)")}) Tj ET
endstream endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000214 00000 n 
0000000301 00000 n 
trailer<</Size 6/Root 1 0 R>>
startxref
${content.length + 400}
%%EOF`
    return "data:application/pdf;base64," + btoa(pdf)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Curriculum Vitae</h2>
        <Button onClick={handleDownload} size="sm">
          <Download className="w-4 h-4 mr-1" />Download CV
        </Button>
      </div>

      {/* Personal Details */}
      <section className="space-y-2">
        <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2"><Users className="w-5 h-5 text-blue-600" />Personal Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
          <p><span className="font-semibold">Full Name:</span> Marie Esther Atieno Nyawaga</p>
          <p><span className="font-semibold">Nationality:</span> Kenyan</p>
          <p><span className="font-semibold">Phone:</span> +254 797 291 632</p>
          <p><span className="font-semibold">Email:</span> nyawagamarieesther@gmail.com</p>
          <p><span className="font-semibold">Location:</span> Nairobi, Kenya</p>
          <p><span className="font-semibold">Title:</span> Data Analyst</p>
        </div>
      </section>

      {/* Profile Summary */}
      <section className="space-y-2">
        <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2"><Briefcase className="w-5 h-5 text-violet-600" />Profile Summary</h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          Data Analyst with hands-on experience transforming raw datasets into actionable insights using Python, SQL, Excel, and PowerBI. Proven ability to uncover trends, detect anomalies, and support business decision-making through data storytelling and visualization. Passionate about solving real-world problems with data and continuously improving analytical skills through advanced training in financial audit analytics and IT systems.
        </p>
      </section>

      {/* Education */}
      <section className="space-y-3">
        <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2"><GraduationCap className="w-5 h-5 text-emerald-600" />Education &amp; Certifications</h3>
        <div className="space-y-4">
          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="font-semibold text-gray-900">BSc Data Science and Analytics</p>
            <p className="text-sm text-gray-600">USIU-Africa · Sep 2022 – Apr 2026 (Cum Laude candidate)</p>
            <div className="mt-2 text-xs text-gray-700 space-y-1">
              <p>Core modules: Statistical Computing, Probability & Statistics, Machine Learning, Big Data Analytics, Data Visualization</p>
            </div>
          </div>
          <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
            <p className="font-semibold text-gray-900">Professional Certifications</p>
            <p className="text-sm text-gray-600">2024 - 2026</p>
            <div className="mt-2 text-xs text-gray-700 space-y-1">
              <p>• Data Analytics Skill Cohort – CC Academy (Certificate ID: CC-DA-0326-001)</p>
              <p>• Introduction to Python – Datacamp</p>
              <p>• Exploratory Data Analysis in Python – Datacamp</p>
              <p>• Understanding Data Science – Datacamp</p>
              <p>• Preparing Data for Analysis with Microsoft Excel – Coursera</p>
              <p>• Foundations: Data, Data, Everywhere – Coursera</p>
              <p>• Professional Certification in M&amp;E – The Kenya Institute of Management (In Progress)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="space-y-2">
        <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2"><Code className="w-5 h-5 text-orange-600" />Technical &amp; Professional Skills</h3>
        <div className="flex flex-wrap gap-2">
          {["Python", "SQL", "R", "Excel", "Power BI", "Tableau", "Google Data Studio", "Pandas", "NumPy", "Scikit-learn", "TensorFlow/Keras", "Statistical Analysis", "Machine Learning", "NLP", "Data Visualization", "EDA", "Feature Engineering", "ETL Pipeline Design", "Git"].map((s) => (
            <span key={s} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium border border-gray-200">{s}</span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="space-y-3">
        <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2"><Briefcase className="w-5 h-5 text-teal-600" />Experience &amp; Projects</h3>
        <div className="p-3 bg-teal-50 rounded-lg border border-teal-200 space-y-1">
          <p className="font-semibold text-gray-900">Data Analytics Intern – KKCO East Africa LLP</p>
          <p className="text-xs text-gray-600 mb-2">Jan 2026 – Present | Nairobi, Kenya</p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Analysed financial datasets in Python and Excel to surface trends and anomalies for audit planning</li>
            <li>Built repeatable data cleaning and validation processes for multi-source financial files</li>
            <li>Developed Power BI dashboards for audit managers providing single-view of key financial metrics</li>
            <li>Supported IT audit cycles by reviewing data system outputs and documenting identified risks</li>
          </ul>
        </div>
        <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 space-y-1">
          <p className="font-semibold text-gray-900">Mathematics Tutor – Freelance</p>
          <p className="text-xs text-gray-600 mb-2">Dec 2024 – Aug 2025</p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Provided remote mathematics tutoring for university students</li>
            <li>Designed structured learning plans improving pass rates and exam confidence</li>
            <li>Developed ability to communicate complex statistical concepts in plain terms</li>
          </ul>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="space-y-2">
        <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2"><Users className="w-5 h-5 text-pink-600" />Key Competencies</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          <li>Financial data analysis and anomaly detection for audit support</li>
          <li>ETL pipeline design and data quality validation</li>
          <li>Building interactive Power BI dashboards for stakeholder reporting</li>
          <li>Machine learning model development and cross-validation</li>
          <li>Regression, classification, clustering, and deep learning (CNNs)</li>
          <li>NLP text preprocessing and analysis</li>
          <li>Communicating complex findings to non-technical audiences</li>
        </ul>
      </section>

      {/* Certifications */}
      <section className="space-y-3">
        <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2"><Award className="w-5 h-5 text-red-600" />Key Certifications</h3>
        <div className="space-y-2">
          <div className="p-3 bg-red-50 rounded-lg border border-red-200">
            <p className="font-semibold text-gray-900">Data Analytics Skill Cohort</p>
            <p className="text-sm text-gray-600">CC Academy · Certificate ID: CC-DA-0326-001 (March 2026)</p>
          </div>
          <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
            <p className="font-semibold text-gray-900">Coursera Data Certifications</p>
            <p className="text-sm text-gray-600">• Foundations: Data, Data, Everywhere • Preparing Data for Analysis with Microsoft Excel</p>
          </div>
          <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="font-semibold text-gray-900">DataCamp Learning Track</p>
            <p className="text-sm text-gray-600">• Introduction to Python • Exploratory Data Analysis in Python • Understanding Data Science</p>
          </div>
          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
            <p className="font-semibold text-gray-900">M&amp;E Professional Certification</p>
            <p className="text-sm text-gray-600">The Kenya Institute of Management (In Progress)</p>
          </div>
        </div>
      </section>

      {/* Honours */}
      <section className="space-y-2">
        <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2"><Award className="w-5 h-5 text-yellow-600" />Recognition &amp; Achievements</h3>
        <div className="flex flex-wrap gap-2">
          {["Cum Laude Candidate (USIU-Africa)", "CC Academy Data Analytics Certified", "Financial Audit Analytics Expertise", "Machine Learning &amp; NLP Projects", "Active GitHub Contributor", "Community Service Volunteer"].map((h) => (
            <span key={h} className="px-3 py-1 bg-yellow-50 text-yellow-800 rounded-full text-xs font-medium border border-yellow-200">{h}</span>
          ))}
        </div>
      </section>

      {/* Career Objective */}
      <section className="space-y-2 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200">
        <h3 className="text-lg font-bold text-gray-900">Career Objective</h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          To leverage data analytics expertise to uncover actionable business insights and drive organizational impact. Seeking opportunities to work on complex financial and operational data challenges, build machine learning models, and create compelling data visualizations across finance, audit, healthcare, and technology sectors. Committed to ethical data practices, mentoring junior analysts, and advancing the data analytics field in Africa.
        </p>
      </section>
    </div>
  )
}
