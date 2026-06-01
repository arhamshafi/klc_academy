"use client";
import { useState } from "react";
import CourseDetailModal from "./CourseDetailModal";

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState("before");
  const [selectedCourse, setSelectedCourse] = useState(null);

  const beforeCourses = [
    {
      icon: "🌐",
      title: "Web Development Basics",
      duration: "2 Months",
      description: "Foundation course for beginners - HTML, CSS, JavaScript fundamentals",
      topics: ["HTML5", "CSS3", "JavaScript Basics", "Responsive Design"],
      color: "bg-emerald-100"
    },
    {
      icon: "🎨",
      title: "Frontend Essentials",
      duration: "2.5 Months",
      description: "Learn to build beautiful websites with modern frontend tools",
      topics: ["Tailwind CSS", "Bootstrap", "jQuery", "Figma Basics"],
      color: "bg-pink-100"
    },
    {
      icon: "⚙️",
      title: "Backend Fundamentals",
      duration: "2.5 Months",
      description: "Server-side programming with PHP and MySQL",
      topics: ["PHP", "MySQL", "APIs Basics", "Authentication"],
      color: "bg-orange-100"
    }
  ];

  const afterCourses = [
    {
      icon: "⚡",
      title: "MERN Stack Development",
      duration: "6 Months",
      level: "Complete Modern Stack",
      description: "Master MongoDB, Express.js, React, and Node.js - Build full-stack applications like a pro",
      topics: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "JWT Auth"],
      color: "bg-blue-100",
      jobRoles: ["MERN Developer", "Full Stack Developer", "React Specialist"],
      projects: ["E-commerce App", "Social Media Dashboard", "Task Management System"]
    },
    {
      icon: "🚀",
      title: "Full Stack Development",
      duration: "8 Months",
      level: "Professional Track",
      description: "Complete web development mastery - Frontend, Backend, Database, and Deployment",
      topics: ["React/Next.js", "Node.js/Python", "SQL/NoSQL", "Docker", "AWS Basics", "CI/CD"],
      color: "bg-purple-100",
      jobRoles: ["Full Stack Developer", "Software Engineer", "Tech Lead"],
      projects: ["Real-time Chat App", "Video Streaming Platform", "E-learning Portal"]
    },
    {
      icon: "🎯",
      title: "Multi Stack Development",
      duration: "10 Months",
      level: "Expert Level",
      description: "Master multiple technology stacks - Become a versatile developer companies love to hire",
      topics: ["MERN", "MEAN", "Python Django", "Laravel", "Mobile Apps", "Cloud Computing"],
      color: "bg-indigo-100",
      jobRoles: ["Senior Developer", "Solutions Architect", "Technical Consultant"],
      projects: ["Enterprise ERP System", "Marketplace Platform", "Mobile App Suite"]
    },
    {
      icon: "🎨",
      title: "Modern Frontend",
      duration: "4 Months",
      level: "React + Next.js Focus",
      description: "Create stunning, high-performance user interfaces with modern frameworks",
      topics: ["React Hooks", "Next.js 14", "TypeScript", "Tailwind", "State Management", "Performance"],
      color: "bg-rose-100",
      jobRoles: ["Frontend Developer", "UI Engineer", "React Developer"],
      projects: ["Portfolio Website", "Admin Dashboard", "E-commerce Storefront"]
    },
    {
      icon: "🔧",
      title: "Backend Engineering",
      duration: "5 Months",
      level: "Node.js & Python",
      description: "Build robust, scalable server-side applications and microservices",
      topics: ["Node.js", "Python", "GraphQL", "PostgreSQL", "Redis", "Microservices"],
      color: "bg-amber-100",
      jobRoles: ["Backend Engineer", "API Developer", "Database Architect"],
      projects: ["Payment Gateway", "Real-time Analytics", "Notification System"]
    },
    {
      icon: "💼",
      title: "Industry Projects",
      duration: "3 Months",
      level: "Live Client Work",
      description: "Work on real ARHAFi projects with their team - Build your portfolio with actual clients",
      topics: ["Agile Methodology", "Git/GitHub", "Team Collaboration", "Code Review", "Deployment"],
      color: "bg-cyan-100",
      jobRoles: ["Junior Developer", "Freelancer", "Intern → Full Time"],
      projects: ["Live ARHAFi Projects", "Open Source Contributions", "Client Deliverables"]
    }
  ];

  return (
    <section id="courses" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold mb-3">
            Our Courses
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            From {""}
            <span className="bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent">
              Basics
            </span>
            {" "}to{" "}
            <span className="bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
              Industry Excellence
            </span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            See how our collaboration with ARHAFi transformed our course offerings
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-gray-100 rounded-full p-1 inline-flex gap-1">
            <button
              onClick={() => setActiveTab("before")}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "before" 
                  ? "bg-blue-900 text-white shadow-lg" 
                  : "text-gray-600 hover:text-blue-900"
              }`}
            >
              📚 Before Collaboration
            </button>
            <button
              onClick={() => setActiveTab("after")}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "after" 
                  ? "bg-blue-900 text-white shadow-lg" 
                  : "text-gray-600 hover:text-blue-900"
              }`}
            >
              🚀 After Collaboration
            </button>
          </div>
        </div>

        {/* Before Courses Grid */}
        {activeTab === "before" && (
          <div className="grid md:grid-cols-3 gap-6">
            {beforeCourses.map((course, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className={`w-14 h-14 ${course.color} rounded-xl flex items-center justify-center mb-4`}>
                  <span className="text-2xl">{course.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{course.title}</h3>
                <p className="text-sm text-gray-500 mb-3">⏱ {course.duration}</p>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                <div className="flex flex-wrap gap-2">
                  {course.topics.map((topic, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-white rounded-full text-gray-600 shadow-sm">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-dashed border-blue-300 flex flex-col items-center justify-center text-center">
              <span className="text-4xl mb-3">➕</span>
              <h3 className="text-lg font-bold text-blue-900">Limited Offerings</h3>
              <p className="text-sm text-gray-600 mt-2">Only 3 basic courses were available before the ARHAFi partnership</p>
            </div>
          </div>
        )}

        {/* After Courses Grid */}
        {activeTab === "after" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {afterCourses.map((course, idx) => (
              <div 
                key={idx} 
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 cursor-pointer relative overflow-hidden"
                onClick={() => setSelectedCourse(course)}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-900/5 to-transparent rounded-full -mr-10 -mt-10"></div>
                <div className={`w-14 h-14 ${course.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300`}>
                  <span className="text-2xl">{course.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{course.title}</h3>
                <div className="flex gap-2 mb-3">
                  <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-900 rounded-full">⏱ {course.duration}</span>
                  <span className="text-xs px-2 py-0.5 bg-purple-100 text-purple-900 rounded-full">⭐ {course.level}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{course.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {course.topics.slice(0, 3).map((topic, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 bg-gray-100 rounded-full text-gray-600">
                      {topic}
                    </span>
                  ))}
                  {course.topics.length > 3 && (
                    <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full text-gray-600">
                      +{course.topics.length - 3}
                    </span>
                  )}
                </div>
                <button className="w-full py-2 bg-blue-900 text-white rounded-xl font-semibold hover:bg-blue-800 transition-all duration-300 text-sm">
                  View Details →
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Collaboration Impact Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-6 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-4xl">📈</span>
              <div>
                <h4 className="font-bold text-lg">The ARHAFi Impact</h4>
                <p className="text-blue-200 text-sm">What changed after collaboration?</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold">3x → 12+</div>
                <div className="text-xs text-blue-200">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">0 → 95%</div>
                <div className="text-xs text-blue-200">Placement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">₹15k → ₹80k</div>
                <div className="text-xs text-blue-200">Avg. Salary</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <CourseDetailModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      )}
    </section>
  );
}