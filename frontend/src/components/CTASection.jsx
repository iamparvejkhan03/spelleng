// CTASection.jsx - With Video Modal
import { useState } from 'react';
import Container from './Container';
import { MessageCircle, Play, Sparkles, Star, TrendingUp, X } from 'lucide-react';

const CTASection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section className="relative pt-24 md:pt-64 xl:pt-72 pb-12 md:pb-8 bg-linear-to-b from-white via-gray-50 to-white overflow-visible">
        <Container>
          {/* CTA Card with Video Overlap */}
          <div className="relative">

            {/* Video - Sticks out from top */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2/3 w-[90%] md:w-4/7 z-10">
              <div 
                onClick={() => setShowVideo(true)}
                className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20"
              >
                <img
                  src="https://img.youtube.com/vi/ku1vQ7_MWF0/maxresdefault.jpg"
                  alt="Watch how SpellEng works"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition">
                  <div className="bg-red-600 rounded-full p-4 md:p-5 shadow-xl transform group-hover:scale-110 transition duration-300">
                    <Play size={32} className="text-white fill-white md:w-8 md:h-8" />
                  </div>
                </div>
                {/* Brand color accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#09B850] to-transparent"></div>
              </div>
            </div>

            {/* CTA Card - With improved linears */}
            <div className="relative bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl pt-24 md:pt-36 pb-8 md:p-10 text-white shadow-2xl border border-white/10 overflow-hidden">
              
              {/* Background linear Accents */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#09B850]/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl"></div>
              
              {/* Top Border Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#09B850] to-transparent"></div>

              <div className="px-6 md:px-10 pb-6 md:pb-0 relative z-10">
                <div className="text-center max-w-full mx-auto">
                  
                  {/* Small Trust Badge Above Title */}
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 border border-white/10">
                    <Star size={14} style={{ color: '#09B850' }} fill="#09B850" />
                    <span className="text-xs font-medium text-gray-300">Trusted by 2000+ Students</span>
                  </div>

                  {/* Main Heading with linear */}
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    For a good job, not just skills,<br />
                    <span style={{ color: '#09B850' }} className="bg-none bg-clip-border text-transparent">
                      communication is also important.
                    </span>
                  </h2>
                  
                  {/* Subheading */}
                  <p className="text-sm md:text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                    Start your journey to build English speaking confidence today.
                  </p>

                  {/* Price Badge - Animated */}
                  <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full text-sm sm:text-base px-4 py-2 mb-6 border border-white/10">
                    <TrendingUp size={16} style={{ color: '#09B850' }} />
                    <span className="text-gray-300 text-sm hidden sm:block">Limited Offer</span>
                    <span className="text-white font-bold text-xs sm:text-sm">First Class at</span>
                    <span className="text-gray-400 line-through text-sm">₹599</span>
                    <span className="text-2xl font-bold" style={{ color: '#09B850' }}>₹102</span>
                    <span className="text-green-400 text-xs animate-pulse">🔥 83% OFF</span>
                  </div>

                  {/* CTA Button Group */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <button
                      onClick={() => window.location.href = 'https://pages.razorpay.com/spelleng'}
                      className="group bg-linear-to-r from-[#09B850] to-emerald-600 hover:from-[#08a048] hover:to-emerald-700 text-white font-bold py-3 px-4 sm:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2 cursor-pointer text-sm"
                    >
                      🚀 Try a 1-on-1 class today
                      <MessageCircle size={18} className="group-hover:rotate-12 transition-transform" />
                    </button>
                  </div>

                  {/* Trust Footer */}
                  <div className="flex flex-wrap gap-4 justify-center text-xs text-gray-400 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-1.5">
                      <span>Pay using:</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      <span>✓ UPI</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      <span>✓ PhonePe</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      <span>✓ Paytm</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      <span>✓ Google Pay</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Video Modal - Pops up when play button is clicked */}
      {showVideo && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setShowVideo(false)}
        >
          <div className="relative w-full max-w-4xl">
            {/* Close Button */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <X size={32} />
            </button>
            
            {/* YouTube Embed with autoplay */}
            <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/ku1vQ7_MWF0?autoplay=1&rel=0&modestbranding=1"
                title="SpellEng - How it works"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Video Info */}
            <div className="mt-4 text-white text-center">
              <h3 className="text-xl font-bold">How SpellEng Works</h3>
              <p className="text-gray-400 text-sm">Watch how our 1-on-1 classes build your confidence</p>
            </div>
          </div>
        </div>
      )}

      {/* Add animation styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default CTASection;