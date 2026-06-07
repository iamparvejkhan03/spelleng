import { heroImg } from '../assets';
import Container from './Container';
import {
    Star,
    Clock,
    Globe,
    Calendar,
    ArrowRight,
    CheckCircle2,
    Users,
    TrendingUp,
    MessageCircle,
    Play,
    X
} from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import { useState } from 'react';
import BookingForm from './BookingForm';

export default function Hero() {
    const [showHeroVideo, setShowHeroVideo] = useState(false);

    const handleBookTrial = () => {
        window.location.href = 'https://pages.razorpay.com/spelleng';
    };

    return (
        <section className="relative bg-linear-to-br from-white via-gray-50 to-gray-100 overflow-hidden">
            {/* Subtle background pattern - light version */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 50%, rgba(9,184,80,0.08) 0%, transparent 50%)`
                }} />
            </div>

            <Container className="relative z-10 flex items-center py-12 md:py-20">
                <div className="grid lg:grid-cols-2 gap-12 mt-12 lg:gap-16 items-center">

                    {/* LEFT COLUMN - TEXT & CTA */}
                    <div className="text-center lg:text-left">
                        {/* Small label */}
                        {/* <div className="inline-flex items-center gap-2 bg-white shadow-sm rounded-full px-4 py-1.5 mb-6 border border-gray-200">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: '#09B850' }}></span>
                                <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: '#09B850' }}></span>
                            </span>
                            <span className="text-gray-700 text-sm font-medium tracking-wide" style={{ color: '#09B850' }}>FREE TRIAL • NO COMMITMENT</span>
                        </div> */}

                        {/* Main headline - properly sized for mobile/desktop */}
                        <h1 className="text-3xl sm:text-5xl lg:text-[45px] font-bold text-gray-900 leading-tight tracking-tight">
                            Speak {' '}
                            <span style={{ color: '#09B850' }} className="relative inline-block">
                                English
                                <svg className="absolute bottom-0 left-0 w-full h-3 -z-10 opacity-30" style={{ color: '#09B850' }} viewBox="0 0 100 10">
                                    <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="3" />
                                </svg>
                            </span>
                            {' '} Confidently in 60 Days.
                            {/* <br /> */}
                            {/* <span className="italic">Lekin</span> Bol Nahi Pate? */}
                        </h1>

                        <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Don't let poor communication hide your skills. Learn to express your ideas confidently in English through live 1-on-1 speaking practice. Book your Trial Class now.
                        </p>

                        {/* <CountdownTimer /> */}
                        <div className="relative flex justify-center items-center mt-8">
                            {/* Decorative circles - light version */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ backgroundColor: '#09B850' }} />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" style={{ backgroundColor: '#09B850' }} />

                            {/* Main image card */}
                            <div className="relative group">
                                <div className="absolute inset-0 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" style={{ backgroundColor: '#09B850' }} />
                                <div className="relative bg-white rounded-2xl p-2 border border-gray-200 shadow-xl">
                                    {/* Image with Play Overlay */}
                                    <div className="relative cursor-pointer" onClick={() => setShowHeroVideo(true)}>
                                        <img
                                            src={heroImg}
                                            loading='eager'
                                            alt="Student celebrating English success"
                                            className="w-full h-auto rounded-xl object-cover"
                                            style={{ aspectRatio: '16/9' }}
                                        />

                                        {/* Play Button Overlay - Centered */}
                                        <div className="absolute inset-0 bg-black/30 rounded-xl flex items-center justify-center opacity-100 group-hover:opacity-100 transition-all duration-300">
                                            <div className="bg-red-600 rounded-full p-4 shadow-xl transform group-hover:scale-110 transition-all duration-300">
                                                <Play size={32} className="text-white fill-white" />
                                            </div>
                                        </div>

                                        {/* Always visible play button indicator (smaller) */}
                                        <div className="absolute bottom-3 right-3 bg-black/70 rounded-full p-2 backdrop-blur-sm">
                                            <Play size={14} className="text-white fill-white" />
                                        </div>
                                    </div>

                                    {/* Floating badge - success rate */}
                                    <div className="absolute -bottom-4 -right-4 rounded-lg px-4 py-2 shadow-lg" style={{ backgroundColor: '#09B850' }}>
                                        <div className="text-white font-bold text-lg flex items-center gap-1">
                                            <TrendingUp size={16} />
                                            92%
                                        </div>
                                        <div className="text-white/90 text-xs">better results</div>
                                    </div>

                                    {/* Bottom badge - student count */}
                                    <div className="absolute -bottom-4 -left-4 bg-white rounded-lg px-4 py-2 border border-gray-200 shadow-lg">
                                        <div className="flex items-center gap-2">
                                            <div className="flex -space-x-2">
                                                <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs text-white" style={{ backgroundColor: '#09B850' }}>
                                                    <Users size={12} />
                                                </div>
                                            </div>
                                            <span className="text-gray-900 text-sm font-medium">1-on-1 Class</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Stats floating element */}
                            <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 hidden lg:block">
                                <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <MessageCircle size={20} style={{ color: '#09B850' }} />
                                        <div>
                                            <div className="text-gray-900 text-xs font-medium">Instant</div>
                                            <div className="text-gray-500 text-xs">Correction</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        {/* <div className="mt-6 sm:mt-8">
                            <button
                                onClick={handleBookTrial}
                                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
                                style={{ backgroundColor: '#09B850' }}
                            >
                                <Calendar size={20} />
                                Try first class at <span className='line-through'>599</span> ₹102
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <p className="text-gray-500 text-sm mt-3 flex items-center justify-center lg:justify-start gap-2">
                                <CheckCircle2 size={14} />
                                No credit card • 30 min session • Your timezone
                            </p>
                        </div> */}

                        {/* Trust indicators */}
                        {/* <div className="mt-10 pt-8 border-t border-gray-200">
                            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#09B85010' }}>
                                        <Star size={16} style={{ color: '#09B850', fill: '#09B850' }} />
                                    </div>
                                    <div>
                                        <div className="text-gray-900 font-semibold">4.9/5</div>
                                        <div className="text-gray-500 text-xs">Rating (200+ reviews)</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#09B85010' }}>
                                        <Clock size={16} style={{ color: '#09B850' }} />
                                    </div>
                                    <div>
                                        <div className="text-gray-900 font-semibold">30-min</div>
                                        <div className="text-gray-500 text-xs">Per session</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#09B85010' }}>
                                        <Globe size={16} style={{ color: '#09B850' }} />
                                    </div>
                                    <div>
                                        <div className="text-gray-900 font-semibold">15+</div>
                                        <div className="text-gray-500 text-xs">Countries</div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    <BookingForm />

                    {/* Video Modal */}
                    {showHeroVideo && (
                        <div
                            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn"
                            onClick={() => setShowHeroVideo(false)}
                        >
                            <div className="relative w-full max-w-4xl">
                                {/* Close Button */}
                                <button
                                    onClick={() => setShowHeroVideo(false)}
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
                </div>
            </Container>

            {/* Bottom gradient fade - light version */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-50 to-transparent pointer-events-none" />
        </section>
    );
}