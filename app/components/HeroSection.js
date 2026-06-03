import Image from "next/image";
import { GraduationCap, Globe, Briefcase, Users, ChevronRight, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white">

      {/* Modern Background Pattern */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 via-white to-white" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-16 md:pt-24 lg:pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-15 items-center">

          {/* Left Side - Content */}
          <div>
            {/* Trust Badge */}
            <div className="flex justify-center xl:justify-start">
              <div className="inline-flex items-center gap-3 bg-white shadow-lg rounded-full px-5 py-2 mb-8 border border-gray-100">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center"
                    >
                      <span className="text-blue-800 text-xs font-bold">S</span>
                    </div>
                  ))}
                </div>
                <span className="text-gray-700 text-sm font-medium">
                  Trusted by 500+ Students
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="w-full flex justify-evenly items-center">

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                <span className="text-gray-900">Learn </span>
                <span className="text-blue-900">Skills.</span>
                <br />
                <span className="text-gray-900">Build </span>
                <span className="text-blue-900">Careers.</span>
                <br />
                <span className="bg-linear-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                  Change Future.
                </span>
              </h1>

              <figure className=" block lg:hidden">
                <Image src="/logo.webp" alt="KLC Academy Building in Gujranwala" width={550} height={550} priority
                  // preload kr k rakhta ha 
                  // placeholder="blur"
                  // blurDataURL="..."
                  className="w-50 h-auto object-cover rounded-xl"
                />
                {/* Overlay Gradient */}
              </figure>
            </div>

            <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Join KLC Academy and transform your potential into expertise.
              World-class training in language proficiency and digital skills.
            </p>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="#courses"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-900 text-white font-semibold rounded-xl hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Start Learning
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-900 hover:text-blue-900 transition-all"
              >
                Watch Demo
              </a>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              {[
                { icon: GraduationCap, text: "Expert Faculty", color: "text-blue-900" },
                { icon: Globe, text: "Global Recognition", color: "text-blue-800" },
                { icon: Briefcase, text: "Job Assistance", color: "text-blue-700" },
                { icon: Users, text: "Small Batches", color: "text-blue-600" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Modern Image Layout */}
          <div className="relative lg:block hidden">
            {/* Main Image Card */}
            <div className="relative rounded-2xl p-3 ">
              <figure className="relative rounded-xl overflow-hidden">
                <Image src="/witbg.png" alt="KLC Academy Building in Gujranwala" width={550} height={550} priority
                  // preload kr k rakhta ha 
                  // placeholder="blur"
                  // blurDataURL="..."
                  className="w-[90%] mx-auto h-auto object-cover rounded-xl"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-blue-500/10 via-transparent to-transparent" />
              </figure>
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-xl p-4 border-l-4 border-blue-900 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Star className="w-5 h-5 text-green-600 fill-green-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-lg">4.9</p>
                  <p className="text-gray-500 text-xs">Rating (500+ reviews)</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4">
              <div className="text-center">
                <p className="text-blue-900 font-bold text-2xl">95%</p>
                <p className="text-gray-500 text-xs">Success Rate</p>
              </div>
            </div>

            {/* Course Chips */}
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 hidden lg:block">
              <div className="bg-white shadow-xl rounded-xl p-3 space-y-2 border border-gray-100">
                {["IELTS", "PTE", "OET", "LAT"].map((course) => (
                  <div key={course} className="px-3 py-1.5 bg-blue-50 rounded-lg text-center">
                    <span className="text-blue-900 text-sm font-semibold">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white flex justify-center items-center w-max gap-5 mx-auto shadow-xl rounded-xl p-3 space-y-2 border border-gray-100">
            {["IELTS", "PTE", "OET", "LAT"].map((course) => (
              <div key={course} className="px-3 py-1.5 bg-blue-50 rounded-lg text-center">
                <span className="text-blue-900 text-sm font-semibold">{course}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Students Trained", icon: "👨‍🎓" },
              { value: "25+", label: "Expert Trainers", icon: "👨‍🏫" },
              { value: "15+", label: "Active Courses", icon: "📚" },
              { value: "100%", label: "Satisfaction", icon: "😊" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-4 rounded-xl hover:bg-blue-50 transition group">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-blue-900 mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        {/* <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm mb-4">Trusted by leading companies</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {["Company 1", "Company 2", "Company 3", "Company 4"].map((company) => (
              <span key={company} className="text-gray-500 font-semibold text-sm">
                {company}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}