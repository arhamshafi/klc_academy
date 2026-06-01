import Image from "next/image";

export default function CollaborationSection() {
  return (
    <section id="collaboration" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold mb-3">The Milestone</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            KLC Academy <span className="text-blue-900">×</span> ARHAFi
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            When passion met expertise — a partnership that changed everything
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-blue-900 rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">KLC</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">KLC Academy</h3>
            <p className="text-gray-600 leading-relaxed mb-5">
              Before collaboration, KLC Academy was already teaching core web development 
              with a focus on practical skills and individual attention.
            </p>
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-sm text-blue-900 font-semibold mb-2">📚 Courses They Offered:</p>
              <div className="flex flex-wrap gap-2">
                {["Web Basics", "HTML/CSS", "JavaScript", "Bootstrap", "PHP Basics"].map((course) => (
                  <span key={course} className="px-2 py-1 bg-white rounded-lg text-xs text-gray-700 shadow-sm">{course}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative w-16 h-16 bg-gradient-to-br from-blue-800 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">ARHAFi</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">ARHAFi</h3>
            <p className="text-gray-600 leading-relaxed mb-5">
              A leading tech company that saw KLC's potential and decided to collaborate, 
              bringing industry expertise and real-world projects.
            </p>
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-sm text-blue-900 font-semibold mb-2">🚀 What ARHAFi Brought:</p>
              <div className="flex flex-wrap gap-2">
                {["Industry Mentors", "Live Projects", "Modern Curriculum", "Job Placements", "Internships"].map((item) => (
                  <span key={item} className="px-2 py-1 bg-white rounded-lg text-xs text-gray-700 shadow-sm">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
          <Image 
            src="/backdummy.png" 
            alt="KLC Academy and ARHAFi Collaboration" 
            width={1200} 
            height={500}
            className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/90 to-transparent flex items-center">
            <div className="px-8 md:px-12 text-white max-w-2xl">
              <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mb-4 backdrop-blur-sm">
                🤝 Signed: January 2025
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-3">The Game-Changing Partnership</h3>
              <p className="text-blue-100 text-lg mb-4">
                This collaboration transformed KLC Academy from a local institute to 
                Gujranwala's premier tech training destination.
              </p>
              <div className="flex gap-3">
                <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg">
                  <div className="font-bold">10+</div>
                  <div className="text-xs">New Courses</div>
                </div>
                <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg">
                  <div className="font-bold">100%</div>
                  <div className="text-xs">Industry Aligned</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}