"use client";
import { useEffect } from "react";

export default function CourseDetailModal({ course, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl animate-modalIn">
        <div className="sticky top-0 bg-white border-b border-gray-100 p-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 ${course.color} rounded-xl flex items-center justify-center`}>
              <span className="text-2xl">{course.icon}</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{course.title}</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex gap-3">
            <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm">⏱ {course.duration}</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-900 rounded-full text-sm">⭐ {course.level}</span>
          </div>

          <p className="text-gray-700 leading-relaxed">{course.description}</p>

          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-3">📚 What You'll Learn</h3>
            <div className="grid grid-cols-2 gap-2">
              {course.topics.map((topic, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-700">
                  <span className="text-blue-900">▸</span>
                  <span className="text-sm">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {course.projects && (
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-3">🚀 Projects You'll Build</h3>
              <div className="flex flex-wrap gap-2">
                {course.projects.map((project, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                    {project}
                  </span>
                ))}
              </div>
            </div>
          )}

          {course.jobRoles && (
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-3">💼 Career Opportunities</h3>
              <div className="flex flex-wrap gap-2">
                {course.jobRoles.map((role, i) => (
                  <span key={i} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="bg-blue-50 rounded-xl p-4">
            <p className="text-blue-900 font-semibold mb-2">🎓 What makes this course special?</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">✓ Taught by ARHAFi industry experts</li>
              <li className="flex items-center gap-2">✓ Live projects with real clients</li>
              <li className="flex items-center gap-2">✓ 100% job placement assistance</li>
              <li className="flex items-center gap-2">✓ Certificate recognized by industry</li>
            </ul>
          </div>

          <button className="w-full py-3 bg-blue-900 text-white rounded-xl font-bold hover:bg-blue-800 transition-all">
            Enroll Now → Limited Seats Available
          </button>
        </div>
      </div>
    </div>
  );
}