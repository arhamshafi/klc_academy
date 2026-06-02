import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      
      {/* Clean Background Accents */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-slate-50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-slate-100 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-100 rounded-full px-5 py-2 mb-8">
              <span className="h-2 w-2 rounded-full bg-blue-900"></span>
              <span className="text-blue-900 text-sm font-semibold">
                Admissions Open 2026
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-gray-900 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15]">
              Learn Skills.
              <br />
              Build Careers.
              <br />
              <span className="text-blue-900">
                Change Your Future.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg text-gray-600 max-w-lg leading-relaxed">
              KLC Academy helps students achieve success through
              IELTS, PTE, OET, LAT preparation and professional
              IT courses including Graphics Designing, Social Media
              Marketing and MS Office.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#courses"
                className="px-8 py-3.5 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-950 transition shadow-md"
              >
                Explore Courses
              </a>

              <a
                href="#contact"
                className="px-8 py-3.5 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-900 hover:text-blue-900 transition"
              >
                Contact Us
              </a>
            </div>

            {/* Course Tags */}
            <div className="flex flex-wrap gap-2 mt-10">
              {[
                "IELTS",
                "PTE",
                "OET",
                "LAT",
                "Graphics Design",
                "SMM",
                "MS Office",
              ].map((course) => (
                <span
                  key={course}
                  className="px-4 py-1.5 bg-gray-50 text-gray-700 text-sm rounded-md border border-gray-200"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-200">
              <Image
                src="/frontdummy.png"
                alt="KLC Academy"
                width={600}
                height={600}
                priority
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-blue-900/60 to-transparent h-32" />
            </div>

            {/* Info Cards */}
            <div className="absolute -left-4 top-10 bg-white rounded-lg shadow-lg p-4 border-l-4 border-blue-900">
              <h3 className="text-blue-900 font-bold text-sm">
                IELTS / PTE
              </h3>
              <p className="text-gray-600 text-xs">
                Test Preparation
              </p>
            </div>

            <div className="absolute -right-4 bottom-10 bg-white rounded-lg shadow-lg p-4 border-l-4 border-blue-900">
              <h3 className="text-blue-900 font-bold text-sm">
                IT Courses
              </h3>
              <p className="text-gray-600 text-xs">
                Design • Marketing
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-24 pt-8 border-t border-gray-200">
          <div className="text-center">
            <h2 className="text-blue-900 text-4xl font-bold">500+</h2>
            <p className="text-gray-600 mt-1">Students Trained</p>
          </div>

          <div className="text-center">
            <h2 className="text-blue-900 text-4xl font-bold">10+</h2>
            <p className="text-gray-600 mt-1">Professional Courses</p>
          </div>

          <div className="text-center">
            <h2 className="text-blue-900 text-4xl font-bold">2024</h2>
            <p className="text-gray-600 mt-1">Established</p>
          </div>
        </div>
      </div>
    </section>
  );
}