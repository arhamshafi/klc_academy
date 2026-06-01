export default function CTASection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-blue-900 to-blue-800">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"></div>
        </div>
      </div>
      <div className="relative max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-5">Ready to Write Your Own Story?</h2>
        <p className="text-xl text-blue-100 mb-8">
          Join 500+ students who transformed their careers with KLC Academy & ARHAFi
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-8 py-3 bg-white text-blue-900 rounded-full font-bold hover:bg-blue-50 transition-all hover:shadow-xl hover:-translate-y-1">
            Start Your Journey →
          </button>
          <button className="px-8 py-3 bg-blue-800/50 backdrop-blur-sm text-white rounded-full font-bold hover:bg-blue-800 transition-all border-2 border-white/30">
            Schedule a Call 📞
          </button>
        </div>
        <p className="text-blue-200 text-sm mt-6">⚡ Limited seats for next batch. Apply today!</p>
      </div>
    </section>
  );
}