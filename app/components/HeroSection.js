import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="story" className="relative pt-28 pb-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-bounce-slow">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-semibold">✨ From Dream to Reality | Est. 2024</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              KLC Academy
              <span className="block bg-gradient-to-r from-blue-300 via-white to-blue-200 bg-clip-text text-transparent">
                Where Dreams Take Flight
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              From a small room with 5 students to Gujranwala's premier tech institute — 
              this is our story of passion, perseverance, and purpose.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#story" className="group relative px-8 py-3 bg-white text-blue-900 rounded-full font-bold overflow-hidden shadow-xl">
                <span className="relative z-10">Read Our Story →</span>
                <div className="absolute inset-0 bg-blue-50 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </a>
              <a href="#courses" className="px-8 py-3 bg-blue-800/50 backdrop-blur-sm text-white rounded-full font-bold hover:bg-blue-800 transition-all border-2 border-white/30">
                Explore Courses 📚
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 transform hover:scale-105 transition-transform duration-500">
              <Image 
                src="/frontdummy.png" 
                alt="KLC Academy Opening" 
                width={600} 
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-bold text-lg">The Beginning</p>
                <p className="text-blue-200 text-sm">Day 1 at KLC Academy • 5 Brave Students</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full shadow-lg animate-bounce-slow text-sm font-bold">
              ⭐ 500+ Students Now!
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}