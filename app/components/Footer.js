export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">KLC</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">KLC Academy</h3>
                <p className="text-xs text-gray-400">Gujranwala</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              From a small dream to Gujranwala's premier tech institute — in collaboration with ARHAFi.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#story" className="text-gray-400 hover:text-white transition">Our Story</a></li>
              <li><a href="#collaboration" className="text-gray-400 hover:text-white transition">Collaboration</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-white transition">Courses</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">After Collaboration</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>MERN Stack</li>
              <li>Full Stack</li>
              <li>Multi Stack</li>
              <li>Industry Projects</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📍 Gujranwala, Pakistan</li>
              <li>📧 info@klcacademy.pk</li>
              <li>📱 +92 300 1234567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-400 text-xs">
            © 2025 KLC Academy × ARHAFi. From dream to reality — every line of code matters.
          </p>
          <div className="flex gap-5 text-xs">
            <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}