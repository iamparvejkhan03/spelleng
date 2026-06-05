// JourneySection.jsx
import { useState, useEffect, useRef } from 'react';
import Container from './Container';
import { CheckCircle2, ArrowRight, PlayCircle, TrendingUp, Briefcase, Target, Calendar } from 'lucide-react';

const JourneySection = () => {
    const [activeStep, setActiveStep] = useState(1);
    const [animatedSteps, setAnimatedSteps] = useState([]);
    const sectionRef = useRef(null);

    const handleBookTrial = () => {
        window.location.href = 'https://pages.razorpay.com/spelleng';
    };

    const steps = [
        {
            id: 1,
            title: "Today, You Are Here",
            icon: "😶",
            description: "You understand English and can read it, but you struggle to speak it.",
            pain: "Low confidence, words getting stuck, nervous feeling.",
            status: "current"
        },
        {
            id: 2,
            title: "Practice Start",
            icon: "🗣️",
            description: "Regular speaking practice with conversations & guidance.",
            benefit: "Hesitation starts reducing.",
            status: "upcoming"
        },
        {
            id: 3,
            title: "Confidence Build",
            icon: "💪",
            description: "You start answering in short sentences confidently.",
            benefit: "You stop avoiding English and start expressing your thoughts.",
            status: "upcoming"
        },
        {
            id: 4,
            title: "Real Life Apply",
            icon: "💼",
            description: "You start using English in interviews, meetings, and calls.",
            benefit: "Your practice is no longer limited to the classroom.",
            status: "upcoming"
        },
        {
            id: 5,
            title: "Opportunities Ready",
            icon: "🎯",
            description: "You can confidently express your thoughts.",
            benefit: "You become ready to capture better opportunities.",
            status: "upcoming"
        }
    ];

    useEffect(() => {
        // Animate steps when they come into view
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const stepId = parseInt(entry.target.getAttribute('data-step'));
                        setAnimatedSteps(prev => [...prev, stepId]);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const stepElements = document.querySelectorAll('.step-card');
        stepElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const handleStepClick = (stepId) => {
        setActiveStep(stepId);
    };

    const getProgressWidth = () => {
        return ((activeStep - 1) / (steps.length - 1)) * 100;
    };

    return (
        <section ref={sectionRef} className="pt-10 md:pt-20 bg-linear-to-b from-gray-50 to-white">
            <Container>
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
                        🚀 Your Journey With <span style={{ color: '#09B850' }}>SpellEng</span>
                    </h2>
                    <p className="text-gray-600 text-sm">From hesitation → Confidence → Opportunities</p>
                </div>

                {/* Progress Bar */}
                <div className="max-w-3xl mx-auto mb-10">
                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                        <span>Start</span>
                        <span>Progress</span>
                        <span>Goal</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-full transition-all duration-500 ease-out rounded-full"
                            style={{ width: `${getProgressWidth()}%`, backgroundColor: '#09B850' }}
                        ></div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-400">
                        <span>Step 1</span>
                        <span>Step 3</span>
                        <span>Step 5</span>
                    </div>
                </div>

                {/* Steps - Simplified Horizontal Scroll on Mobile, Grid on Desktop */}
                <div className="grid md:grid-cols-5 gap-4 mb-12">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            data-step={step.id}
                            className={`step-card cursor-pointer transition-all duration-300 ${animatedSteps.includes(step.id) ? 'animate-fadeInUp' : 'opacity-0'
                                } ${activeStep === step.id
                                    ? ' shadow-xl transform -translate-y-1'
                                    : 'hover:-translate-y-1 hover:shadow-lg'
                                }`}
                            style={{
                                ringColor: activeStep === step.id ? '#09B850' : 'transparent',
                                transition: 'all 0.3s ease'
                            }}
                            onClick={() => handleStepClick(step.id)}
                        >
                            <div className={`bg-white rounded-xl p-4 border ${activeStep === step.id ? 'border-[#09B850]' : 'border-gray-200'
                                } h-full`}>
                                {/* Step Number & Icon */}
                                <div className="flex items-center justify-between mb-3">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${activeStep === step.id
                                        ? 'bg-[#09B850] text-white'
                                        : 'bg-gray-100 text-gray-500'
                                        }`}>
                                        {step.id}
                                    </div>
                                    <div className="text-2xl">{step.icon}</div>
                                </div>

                                {/* Title */}
                                <h3 className={`font-bold text-sm mb-2 ${activeStep === step.id ? 'text-[#09B850]' : 'text-gray-900'
                                    }`}>
                                    {step.title}
                                </h3>

                                {/* Description - Show more on active step */}
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>

                                {activeStep === step.id && (
                                    <div className="mt-3 pt-3 border-t border-gray-100 animate-slideDown">
                                        <p className="text-xs text-gray-500 mb-2">
                                            {step.pain || step.benefit}
                                        </p>
                                        <div className="flex items-center gap-1 text-[#09B850] text-xs font-medium">
                                            <CheckCircle2 size={12} />
                                            <span>{step.id === 1 ? 'Need to change' : 'Progressing'}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Active Step Details - Compact */}
                <div className="max-w-full mx-auto bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-start gap-4">
                        <div className="text-2xl md:text-4xl">{steps[activeStep - 1].icon}</div>
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                {steps[activeStep - 1].title}
                            </h3>
                            <p className="text-gray-700 mb-3 text-sm">
                                {steps[activeStep - 1].description}
                            </p>
                            <div className={`p-3 rounded-lg mb-4 ${activeStep === 1 ? 'bg-red-50' : 'bg-green-50'
                                }`}>
                                <p className={`text-sm ${activeStep === 1 ? 'text-red-700' : 'text-green-700'
                                    }`}>
                                    {activeStep === 1
                                        ? '⚠️ ' + steps[0].pain
                                        : '✓ ' + steps[activeStep - 1].benefit}
                                </p>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                {activeStep > 1 && (
                                    <button
                                        onClick={() => handleStepClick(activeStep - 1)}
                                        className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm cursor-pointer text-center"
                                    >
                                        ← Previous
                                    </button>
                                )}
                                {activeStep < 5 && (
                                    <button
                                        onClick={() => handleStepClick(activeStep + 1)}
                                        className="px-4 py-2 text-white rounded-lg transition text-sm flex items-center justify-center gap-2 cursor-pointer text-center"
                                        style={{ backgroundColor: '#09B850' }}
                                    >
                                        Next Step <ArrowRight size={14} />
                                    </button>
                                )}
                                {activeStep === 5 && (
                                    <button
                                        onClick={() => window.location.href = 'https://pages.razorpay.com/spelleng'}
                                        className="px-4 py-2 cursor-pointer text-white rounded-lg transition text-sm flex items-center gap-2 animate-pulse"
                                        style={{ backgroundColor: '#09B850' }}
                                    >
                                        🚀 Start Your Journey <PlayCircle size={14} />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Goal - Compact */}
                <div className="hidden sm:block mt-8 text-center">
                    {/* CTA Button */}
                    <button
                        onClick={handleBookTrial}
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
                        style={{ backgroundColor: '#09B850' }}
                    >
                        <Calendar size={20} />
                        Try first class at <span className='line-through'>599</span> ₹102
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Goal - Compact */}
                <div className="block sm:hidden mt-8 text-center">
                    {/* CTA Button */}
                    <button
                        onClick={handleBookTrial}
                        className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white font-bold py-4 px-4 sm:px-10 rounded-xl text-sm transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
                        style={{ backgroundColor: '#09B850' }}
                    >
                        <Calendar size={20} />
                        Try first class at <span className='line-through'>599</span> ₹102
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </Container>

            <style>
  {`
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .animate-fadeInUp {
      animation: fadeInUp 0.5s ease-out forwards;
    }
    
    .animate-slideDown {
      animation: slideDown 0.3s ease-out forwards;
    }
  `}
</style>
        </section>
    );
};

export default JourneySection;