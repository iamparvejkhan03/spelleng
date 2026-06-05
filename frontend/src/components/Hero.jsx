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
    MessageCircle
} from 'lucide-react';
import CountdownTimer from './CountDownTimer';

export default function Hero() {
    const handleBookTrial = () => {
        window.location.href = 'https://pages.razorpay.com/spelleng';
    };

    return (
        <section className="relative min-h-screen bg-linear-to-br from-white via-gray-50 to-gray-100 overflow-hidden">
            {/* Subtle background pattern - light version */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 50%, rgba(9,184,80,0.08) 0%, transparent 50%)`
                }} />
            </div>

            <Container className="relative z-10 flex items-center min-h-screen py-12 md:py-20">
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
                        <h1 className="text-3xl sm:text-5xl lg:text-[40px] font-bold text-gray-900 leading-tight tracking-tight">
                            Speak {' '}
                            <span style={{ color: '#09B850' }} className="relative inline-block">
                                English Confidently 
                                <svg className="absolute bottom-0 left-0 w-full h-3 -z-10 opacity-30" style={{ color: '#09B850' }} viewBox="0 0 100 10">
                                    <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="3" />
                                </svg>
                            </span>
                           {' '} in Interviews & Meetings in 90 Days.
                            {/* <br /> */}
                            {/* <span className="italic">Lekin</span> Bol Nahi Pate? */}
                        </h1>

                        <p className="text-sm sm:text-lg text-gray-600 mt-4 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Meeting and Interview mein English samajh toh aati hain.
                            Lekin jab bolne ki baari aati hai, toh confidently bol nahi pate? Uske liye SpellEng hai na! Join now.
                        </p>

                        <CountdownTimer />

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

                    {/* RIGHT COLUMN - IMAGE */}
                    <div className="relative flex justify-center items-center">
                        {/* Decorative circles - light version */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ backgroundColor: '#09B850' }} />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" style={{ backgroundColor: '#09B850' }} />

                        {/* Main image card */}
                        <div className="relative group">
                            <div className="absolute inset-0 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" style={{ backgroundColor: '#09B850' }} />
                            <div className="relative bg-white rounded-2xl p-2 border border-gray-200 shadow-xl">
                                <img
                                    src={heroImg}
                                    alt="Student celebrating English success"
                                    className="w-full h-auto rounded-xl object-cover"
                                    style={{ aspectRatio: '16/11' }}
                                />

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
                </div>
            </Container>

            {/* Bottom gradient fade - light version */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-50 to-transparent pointer-events-none" />
        </section>
    );
}