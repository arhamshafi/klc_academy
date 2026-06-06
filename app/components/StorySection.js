import Image from "next/image";
import { Target, Sprout, Zap, Users, Award, BookOpen, Briefcase, Globe, ChevronRight, Star, TrendingUp, Clock, Languages, Mic, FileText, Scale, PenTool } from "lucide-react";

export default function StorySection() {
  const milestones = [
    {
      year: "2026",
      phase: "Phase 01",
      icon: Target,
      title: "The Dream",
      description: "A bold vision to transform Gujranwala into a hub of skills — not just in tech, but in freelancing, digital literacy, and professional growth.",
      color: "text-blue-900",
      bgColor: "bg-blue-50",
      gradient: "from-blue-600 to-blue-800",
    },
    {
      year: "2026",
      phase: "Phase 02",
      icon: Sprout,
      title: "The Beginning",
      description: "Started with just 5 passionate students in a small room. Every concept taught with dedication, every student believed in. The journey of excellence began.",
      color: "text-blue-800",
      bgColor: "bg-blue-50",
      gradient: "from-blue-600 to-blue-800",
    },
    {
      year: "2026–2027",
      phase: "Phase 03",
      icon: Zap,
      title: "The Growth",
      description: "From 5 to 500+ learners. Today, KLC Academy is Gujranwala's most trusted skill development center — offering tech, non-tech, and career-ready programs.",
      color: "text-blue-700",
      bgColor: "bg-blue-50",
      gradient: "from-blue-600 to-blue-800",
    },
  ];


  const offerings = [
    { icon: Languages, text: "IELTS (International English Language Testing System)", color: "text-blue-900" },
    { icon: Mic, text: "PTE (Pearson Test of English)", color: "text-blue-800" },
    { icon: FileText, text: "OET (Occupational English Test)", color: "text-blue-700" },
    { icon: Scale, text: "LAT (Law Admission Test)", color: "text-blue-600" },
    { icon: PenTool, text: "Spoken English & Communication Skills", color: "text-blue-500" },
    { icon: Briefcase, text: "Professional Certification Prep", color: "text-blue-400" },
  ];

  return (
    <section
      className="relative py-20 px-4 bg-gray-50"
      id="story"
      aria-label="KLC Academy story - skill development since 2026"
    >


      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "KLC Academy",
            description:
              "Language and professional certification center in Gujranwala offering IELTS, PTE, OET, LAT, and spoken English courses since 2026.",
            foundingDate: "2026",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Gujranwala",
              addressCountry: "PK",
            },
            knowsAbout: [
              "IELTS",
              "PTE",
              "OET",
              "LAT",
              "Spoken English",
              "Professional Certifications"
            ],
            numberOfStudents: "500+",
          }),
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Header - Same style as Hero */}
        <div className="text-center mb-16">

          {/* Main Heading - Same style as Hero */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            <span className="text-gray-900">The </span>
            <span className="text-blue-900">KLC Academy</span>
            <br />
            <span className="bg-linear-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
              Story
            </span>
          </h1>

          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Founded in <strong className="text-blue-800">2026</strong>, KLC Academy started as a small dream in a small room.
            Today, we are Gujranwala's most trusted <strong>skill development & caching center</strong> —
            offering tech, freelancing, and professional courses.
          </p>
        </div>

        {/* Timeline Cards - Same styling as Hero features */}
        <div className="relative mb-24">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline dot */}
                <div className="hidden md:block absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <div className={`w-10 h-10 rounded-full bg-linear-to-br ${milestone.gradient} shadow-lg flex items-center justify-center text-white text-sm font-bold border-2 border-white`}>
                    {idx + 1}
                  </div>
                </div>

                {/* Card - Same as Hero feature cards */}
                <div className="relative h-full">
                  <div className={`absolute -inset-0.5 bg-linear-to-r ${milestone.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500`}></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    {/* Icon - Same as Hero */}
                    <div className="p-3 bg-blue-50 rounded-xl w-fit mb-5">
                      <milestone.icon className={`w-8 h-8 ${milestone.color}`} />
                    </div>

                    {/* Year Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-lg text-sm font-bold text-blue-900 mb-4 w-fit">
                      <span>{milestone.year}</span>
                    </div>

                    {/* Title & Phase */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <div className="inline-block px-3 py-1 bg-blue-100 rounded-lg text-sm font-semibold text-blue-900 mb-4 w-fit">
                      {milestone.phase}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed grow">
                      {milestone.description}
                    </p>

                    {/* Decorative border */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <span className="text-xs text-blue-700 font-medium">
                        {idx === 0 ? "Vision →" : idx === 1 ? "Mission →" : "Reality"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What We Offer Section - Same style as Hero stats bar */}
        <div className="mb-20  bg-linear-to-br from-blue-900 to-black/90 px-5 rounded-2xl py-5 ">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl text-white/80 mb-3">
              What <span className="text-white font-bold">KLC Academy</span> Offers
            </h3>
            <div className="h-1 w-16 bg-white mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {offerings.map((offer, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all group"
              >
                <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition">
                  <offer.icon className={`w-5 h-5 ${offer.color}`} />
                </div>
                <span className="text-gray-700 font-medium text-md ">
                  {offer.text}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-white text-sm mt-6 italic">
            * Rizq from Allah. We provide skills, not job guarantees.
          </p>
        </div>


        {/* Why Choose Us - Same as Hero features grid */}
        <div className="mb-16 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why <span className="text-blue-900">Gujranwala</span> Chooses KLC
            </h3>
            <div className="h-1 w-16 bg-blue-600 rounded-full mb-6"></div>
            <div className="space-y-4">
              {[
                { text: "Tech + Non-Tech Courses — Web, freelancing, caching center, soft skills", icon: Globe },
                { text: "Practical Learning — Real projects, not just theory", icon: BookOpen },
                { text: "Affordable & Accessible — Quality education for everyone", icon: Users },
                { text: "Guidance, not Guarantees — We help you grow, Rizq from Allah", icon: Target },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition mt-0.5">
                    <item.icon className="w-5 h-5 text-blue-900" />
                  </div>
                  <span className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">{item.text.split(" — ")[0]}</strong>
                    {item.text.split(" — ")[1] && ` — ${item.text.split(" — ")[1]}`}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Card - Same style as Hero floating cards */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-blue-900">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <Star className="w-6 h-6 text-green-600 fill-green-600" />
              </div>
              <div>
                <p className="text-gray-900 font-bold text-xl">4.9</p>
                <p className="text-gray-500 text-sm">Rating (150+ reviews)</p>
              </div>
            </div>
            <p className="text-gray-700 italic leading-relaxed mb-4">
              "Best decision I ever made. The mentors at KLC Academy are exceptional!
              They don't just teach — they guide you until you succeed."
            </p>
            <div className="border-t border-gray-100 pt-4">
              <p className="text-blue-900 font-semibold">— Muhammad Ali</p>
              <p className="text-gray-500 text-sm">Successful Freelancer</p>
            </div>
          </div>
        </div>

        {/* Call to Action - Same as Hero CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-900 text-white font-semibold rounded-xl hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl hover:scale-105 text-lg"
          >
            Start Your Journey
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </a>
          <p className="text-gray-500 text-sm mt-4">
            Limited seats available • 2026–2027 batch
          </p>
        </div>
      </div>
    </section>
  );
}