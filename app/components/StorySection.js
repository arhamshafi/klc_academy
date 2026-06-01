import Image from "next/image";

export default function StorySection() {
  return (
    <section className="py-20 px-4 bg-white" id="story">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold mb-3">Our Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">The KLC Academy Story</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            From humble beginnings to Gujranwala's most trusted tech academy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl flex items-center justify-center mb-5 shadow-lg">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">The Dream</h3>
              <p className="text-gray-600 leading-relaxed">
                In 2024, a group of passionate educators dreamed of creating a tech academy 
                that would transform Gujranwala into a hub of technological excellence.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-sm text-blue-900 font-semibold">Phase 01</span>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl flex items-center justify-center mb-5 shadow-lg">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">The Beginning</h3>
              <p className="text-gray-600 leading-relaxed">
                Started with just 5 students in a small room. Every line of code taught 
                with passion, every concept explained with patience.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-sm text-blue-900 font-semibold">Phase 02</span>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl flex items-center justify-center mb-5 shadow-lg">
                <span className="text-3xl">🌟</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">The Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Word spread. 5 became 50, 50 became 500. Today, we stand as Gujranwala's 
                most trusted name in tech education.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-sm text-blue-900 font-semibold">Phase 03</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold">500+</div>
              <div className="text-blue-200 text-sm">Students Trained</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">100%</div>
              <div className="text-blue-200 text-sm">Growth Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">10+</div>
              <div className="text-blue-200 text-sm">Expert Mentors</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">95%</div>
              <div className="text-blue-200 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}