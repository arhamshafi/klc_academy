import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "KLC Academy Gujranwala | Professional Web Development Training",
  description: "KLC Academy in collaboration with ARHAFi - Learn MERN Stack, Full Stack, Multi Stack Development in Gujranwala. Professional training with industry experts.",
  keywords: "KLC Academy, Gujranwala, MERN Stack, Full Stack, Web Development, ARHAFi, Programming Courses",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">KLC</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">KLC Academy</h1>
                <p className="text-xs text-gray-600">Gujranwala</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#courses" className="text-gray-700 hover:text-blue-900 font-medium transition">Courses</a>
              <a href="#about" className="text-gray-700 hover:text-blue-900 font-medium transition">About</a>
              <a href="#collaboration" className="text-gray-700 hover:text-blue-900 font-medium transition">Collaboration</a>
              <a href="#contact" className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition font-medium">Enroll Now</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm font-semibold">🎓 Professional Training in Gujranwala</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Master Modern
                <span className="block text-blue-300">Web Development</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Learn MERN Stack, Full Stack & Multi Stack Development from industry experts. 
                KLC Academy in collaboration with ARHAFi brings professional tech education to Gujranwala.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#courses" className="px-8 py-4 bg-white text-blue-900 rounded-lg font-bold hover:bg-blue-50 transition shadow-lg">
                  View Courses
                </a>
                <a href="#collaboration" className="px-8 py-4 bg-blue-800/50 backdrop-blur-sm text-white rounded-lg font-bold hover:bg-blue-800 transition border border-white/20">
                  Our Partnership
                </a>
              </div>
              <div className="flex items-center gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm text-blue-200">Students Trained</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-sm text-blue-200">Expert Instructors</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-sm text-blue-200">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <Image 
                  src="/frontdummy.png" 
                  alt="KLC Academy Opening Ceremony" 
                  width={600} 
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-semibold">KLC Academy Opening Ceremony</p>
                  <p className="text-blue-200 text-sm">Gujranwala's Premier Tech Institute</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section id="collaboration" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-900 font-semibold text-sm uppercase tracking-wider">Strategic Partnership</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">KLC Academy × ARHAFi</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
              A powerful collaboration bringing world-class tech education to Gujranwala
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold text-2xl">KLC</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">KLC Academy</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Gujranwala's leading tech education institute, dedicated to providing hands-on training 
                in modern web development technologies. Our experienced instructors and state-of-the-art 
                facilities ensure students receive the best learning experience.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-900 mt-1">✓</span>
                  <span className="text-gray-700">Modern training facilities in Gujranwala</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-900 mt-1">✓</span>
                  <span className="text-gray-700">Experienced industry professionals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-900 mt-1">✓</span>
                  <span className="text-gray-700">Hands-on project-based learning</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">ARHAFi</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ARHAFi</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                A leading technology company specializing in web development, software solutions, and 
                digital transformation. ARHAFi brings industry expertise and real-world project experience 
                to enhance the learning curriculum at KLC Academy.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-900 mt-1">✓</span>
                  <span className="text-gray-700">Industry-standard curriculum design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-900 mt-1">✓</span>
                  <span className="text-gray-700">Real-world project opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-900 mt-1">✓</span>
                  <span className="text-gray-700">Job placement assistance</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/backdummy.png" 
              alt="KLC Academy and ARHAFi Collaboration Event" 
              width={1200} 
              height={500}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70 flex items-center">
              <div className="px-12 text-white max-w-3xl">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Together, We're Building the Future</h3>
                <p className="text-xl text-blue-100 mb-6">
                  This collaboration combines KLC Academy's educational excellence with ARHAFi's 
                  industry expertise to create a comprehensive learning experience for aspiring developers.
                </p>
                <div className="flex gap-4">
                  <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                    <div className="font-bold text-2xl">2024</div>
                    <div className="text-sm text-blue-100">Partnership Started</div>
                  </div>
                  <div className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                    <div className="font-bold text-2xl">100%</div>
                    <div className="text-sm text-blue-100">Commitment to Quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-900 font-semibold text-sm uppercase tracking-wider">Our Programs</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">Professional Development Courses</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
              Comprehensive training programs designed to make you job-ready
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <div key={idx} className="group bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-blue-900 hover:shadow-2xl transition-all duration-300">
                <div className={`w-16 h-16 ${course.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <span className="text-3xl">{course.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-blue-900">⏱</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-blue-900">📚</span>
                    <span>{course.level}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {course.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-blue-900 mt-0.5">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Why Choose KLC Academy?</h2>
            <p className="text-blue-200 mt-4 text-lg">What makes us different from others</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
                  <span className="text-4xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-blue-200 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of students who have transformed their careers with KLC Academy
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="px-8 py-4 bg-white text-blue-900 rounded-lg font-bold hover:bg-blue-50 transition shadow-lg">
              Enroll Now
            </a>
            <a href="#courses" className="px-8 py-4 bg-blue-800/50 backdrop-blur-sm text-white rounded-lg font-bold hover:bg-blue-800 transition border-2 border-white/20">
              View All Courses
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">KLC</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">KLC Academy</h3>
                  <p className="text-sm text-gray-400">Gujranwala</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Professional web development training in collaboration with ARHAFi
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#courses" className="text-gray-400 hover:text-white transition">Courses</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#collaboration" className="text-gray-400 hover:text-white transition">Partnership</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Courses</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">MERN Stack</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Full Stack</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Multi Stack</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Frontend Development</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <span>📍</span>
                  <span>Gujranwala, Punjab, Pakistan</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>📧</span>
                  <span>info@klcacademy.pk</span>
                </li>
                <li className="flex items-start gap-3">
                  <span>📱</span>
                  <span>+92 300 1234567</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 KLC Academy × ARHAFi. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Data
const courses = [
  {
    icon: "🍃",
    title: "MERN Stack Development",
    description: "Master MongoDB, Express.js, React, and Node.js to build full-stack applications",
    duration: "6 Months",
    level: "Beginner to Advanced",
    bgColor: "bg-emerald-100",
    topics: [
      "MongoDB Database Design",
      "Express.js Backend APIs",
      "React Frontend Development",
      "Node.js Server Programming"
    ]
  },
  {
    icon: "⚡",
    title: "Full Stack Development",
    description: "Complete web development from frontend to backend with modern technologies",
    duration: "8 Months",
    level: "Intermediate to Advanced",
    bgColor: "bg-blue-100",
    topics: [
      "Frontend: React, Next.js",
      "Backend: Node.js, Python",
      "Database: SQL & NoSQL",
      "DevOps & Deployment"
    ]
  },
  {
    icon: "🚀",
    title: "Multi Stack Development",
    description: "Learn multiple technology stacks and become a versatile developer",
    duration: "10 Months",
    level: "Advanced",
    bgColor: "bg-purple-100",
    topics: [
      "MERN, MEAN, MEVN Stacks",
      "Python Django/Flask",
      "PHP Laravel",
      "Mobile App Development"
    ]
  },
  {
    icon: "🎨",
    title: "Frontend Development",
    description: "Create beautiful, responsive user interfaces with modern frameworks",
    duration: "4 Months",
    level: "Beginner to Intermediate",
    bgColor: "bg-pink-100",
    topics: [
      "HTML5, CSS3, JavaScript",
      "React.js & Next.js",
      "Tailwind CSS",
      "UI/UX Best Practices"
    ]
  },
  {
    icon: "🔧",
    title: "Backend Development",
    description: "Build robust server-side applications and RESTful APIs",
    duration: "5 Months",
    level: "Intermediate",
    bgColor: "bg-orange-100",
    topics: [
      "Node.js & Express",
      "Database Management",
      "API Development",
      "Authentication & Security"
    ]
  },
  {
    icon: "💼",
    title: "Professional Projects",
    description: "Work on real-world projects with ARHAFi's industry guidance",
    duration: "3 Months",
    level: "All Levels",
    bgColor: "bg-indigo-100",
    topics: [
      "Live Client Projects",
      "Team Collaboration",
      "Agile Methodology",
      "Portfolio Development"
    ]
  }
];

const features = [
  {
    icon: "👨‍🏫",
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of real-world experience"
  },
  {
    icon: "💻",
    title: "Hands-on Training",
    description: "Practice with real projects and build your portfolio while learning"
  },
  {
    icon: "🤝",
    title: "Industry Partnership",
    description: "Direct collaboration with ARHAFi for industry-standard curriculum"
  },
  {
    icon: "🎯",
    title: "Job Assistance",
    description: "Career guidance and job placement support after course completion"
  }
];
