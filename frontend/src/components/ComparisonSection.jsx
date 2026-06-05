import { heroImg, physicalInstitute } from '../assets';
import Container from './Container';
import { Users, User, X, Check, MessageCircle, Zap, Calendar, ArrowRight } from 'lucide-react';

const ComparisonSection = () => {
  const traditionalProblems = [
    "Kam bolne ka mauka",
    "Personal feedback nahi milta",
    "Class me chup rehna easy hai",
    "Sabki speed alag hoti hai"
  ];

  const spellengBenefits = [
    "Zyada speaking time",
    "Personal feedback",
    "Weak areas pe focus",
    "Apni speed se seekho",
  ];

  const comparisonTable = [
    { traditional: "20–30 students ek saath", spelleng: "1 student + 1 tutor" },
    { traditional: "Sabke beech attention", spelleng: "Sirf tum pe focus" },
    { traditional: "Bolne ka time kam", spelleng: "Zyada speaking time" },
    { traditional: "General feedback", spelleng: "Personal feedback" },
    { traditional: "Sabke liye ek speed", spelleng: "Apni speed se seekho" }
  ];

  const handleBookTrial = () => {
    window.location.href = 'https://pages.razorpay.com/spelleng';
  };

  return (
    <section className="pt-14 md:pt-20 pb-10 md:pb-10 bg-linear-to-b from-white to-gray-50 overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white shadow-sm rounded-full px-4 py-1.5 mb-4 border border-gray-200">
            <Zap size={16} style={{ color: '#09B850' }} />
            <span className="text-sm font-medium" style={{ color: '#09B850' }}>Kyuki SpellEng alag hai</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            One-on-One <span style={{ color: '#09B850' }}>Attention</span> Kyun Zaroori Hai?
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Aapki progress class me kitne students hain, ispe depend nahi honi chahiye
          </p>
        </div>

        {/* Side by Side Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">

          {/* Traditional Institutes - Left */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Image Placeholder */}
            <div
              className="relative h-56 sm:h-80 flex items-center justify-center bg-cover bg-center"
              style={{
                backgroundImage: `url('${physicalInstitute}')`,
                 backgroundPosition: 'center 35%'
              }}
            >
              <div className="text-center">
                <Users size={48} className="text-white mx-auto mb-2" />
                <p className="text-white text-sm">Traditional Institute</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                  <Users size={16} className="text-red-600 shrink-0" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Purane tarike ke institutes mein</h3>
              </div>

              <p className="text-gray-600 mb-4">
                👥 <span className="font-semibold">20–30 students</span> ek saath padhte hain.
                <br className='hidden sm:block' />
                Teacher ko sabko sambhalna padta hai.
              </p>

              <p className="text-gray-700 font-medium mb-3">Isliye:</p>

              <div className="space-y-2">
                {traditionalProblems.map((problem, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700">
                    <X size={16} className="text-red-500 shrink-0" />
                    <span>{problem}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Spelleng - Right */}
          <div className="bg-white rounded-2xl shadow-lg border-2 relative overflow-hidden hover:shadow-xl transition-shadow duration-300" style={{ borderColor: '#09B85020' }}>
            {/* Brand Badge */}
            <div className="absolute top-4 right-4 bg-[#09B850] text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
              Best for You
            </div>

            {/* Image Placeholder */}
            <div
              className="relative h-56 sm:h-80 flex items-center justify-center bg-cover bg-center"
              style={{
                backgroundImage: `url('${heroImg}')`,
                backgroundPosition: 'center 65%'
              }}
            >
              <div className="text-center">
                <User size={48} className="text-white mx-auto mb-2" />
                <p className="text-white text-sm">SpellEng - Live 1-on-1</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#09B85020' }}>
                  <User size={16} style={{ color: '#09B850' }} />
                </div>
                <h3 className="text-lg font-bold" style={{ color: '#09B850' }}>SpellEng mein</h3>
              </div>

              <p className="text-gray-600 mb-4">
                👨‍🏫 <span className="font-semibold">Live 1-on-1 Classes</span>
                <br className='hidden sm:block' />
                Tutor sirf tumpe focus karta hai.
              </p>

              <p className="text-gray-700 font-medium mb-3">Iska matlab:</p>

              <div className="space-y-2">
                {spellengBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700">
                    <Check size={16} style={{ color: '#09B850' }} className="shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Goal - Compact */}
        <div className="mt-8 text-center">
          {/* CTA Button */}
          <button
                    onClick={handleBookTrial}
                    className="group w-full sm:w-full inline-flex items-center justify-center gap-2 text-white font-semibold py-3 px-4 sm:px-10 rounded-xl text-sm sm:text-base shadow-lg cursor-pointer"
                    style={{ backgroundColor: '#09B850' }}
                >
                    <Calendar size={20} />
                    Try first class at <span className='line-through'>599</span> ₹102
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
        </div>
      </Container>
    </section>
  );
};

export default ComparisonSection;