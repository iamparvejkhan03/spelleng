import { useState, useEffect } from 'react';
import { ArrowRight, Calendar, CheckCircle2, Clock } from 'lucide-react';

const CountdownTimer = () => {
    const [isBlinking, setIsBlinking] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsBlinking(prev => !prev);
        }, 800);
        return () => clearInterval(interval);
    }, []);

    // Set initial target (24 hours from now for testing)
    // You can change this to any future date
    const getNextResetTime = () => {
        const now = new Date();
        const nextReset = new Date(now);

        // Add 27 minutes to current time
        nextReset.setMinutes(now.getMinutes() + 37);
        nextReset.setSeconds(0);
        nextReset.setMilliseconds(0);

        return nextReset;
    };

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const handleBookTrial = () => {
        window.location.href = 'https://pages.razorpay.com/spelleng';
    };

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            let targetTime = getNextResetTime();

            // If target time passed, reset to next day
            if (targetTime <= now) {
                targetTime = getNextResetTime();
            }

            const difference = targetTime - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            } else {
                // Reset timer when it hits zero
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                });
                // Optional: Trigger any action when timer resets
                console.log('Timer reset! Offer refreshed.');
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-linear-to-r from-[#09B850]/10 to-[#09B850]/15 rounded-xl p-4 border border-[#09B850] shadow-sm my-4">
            {/* Header - like your image */}
            <div className="text-center mb-3">
                <h3
                    className={`text-red-600 font-bold text-sm uppercase tracking-wide flex items-center justify-center gap-2 transition-all duration-300 ${isBlinking ? 'opacity-100 scale-105' : 'opacity-80 scale-100'
                        }`}
                >
                    <Clock size={16} />
                    Huge Discount!
                </h3>
                <p className="text-gray-600 text-xs mt-1">Offer ends in</p>
            </div>

            {/* Timer Display - similar to image layout */}
            <div className="grid grid-cols-4 gap-2 text-center">
                {/* Days */}
                <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-100">
                    <div className="text-lg md:text-xl font-bold text-gray-800">
                        {String(timeLeft.days).padStart(2, '0')}
                    </div>
                    <div className="text-xs text-gray-500 uppercase">Days</div>
                </div>

                {/* Hours */}
                <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-100">
                    <div className="text-lg md:text-xl font-bold text-gray-800">
                        {String(timeLeft.hours).padStart(2, '0')}
                    </div>
                    <div className="text-xs text-gray-500 uppercase">Hours</div>
                </div>

                {/* Minutes */}
                <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-100">
                    <div className="text-lg md:text-xl font-bold text-gray-800">
                        {String(timeLeft.minutes).padStart(2, '0')}
                    </div>
                    <div className="text-xs text-gray-500 uppercase">Minutes</div>
                </div>

                {/* Seconds */}
                <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-100">
                    <div className="text-lg md:text-xl font-bold text-gray-800">
                        {String(timeLeft.seconds).padStart(2, '0')}
                    </div>
                    <div className="text-xs text-gray-500 uppercase">Seconds</div>
                </div>
            </div>

            {/* Purchase button - from your image */}
            <div className="mt-6 sm:mt-8">
                <button
                    onClick={handleBookTrial}
                    className="group w-full sm:w-full inline-flex items-center justify-center gap-2 text-white font-semibold py-3 px-4 sm:px-10 rounded-xl text-sm sm:text-base shadow-lg cursor-pointer"
                    style={{ backgroundColor: '#09B850' }}
                >
                    <Calendar size={20} />
                    Try first class at <span className='line-through'>599</span> ₹102
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-gray-500 text-xs sm:text-sm mt-3 flex items-center justify-center lg:justify-center gap-2 text-center">
                    <CheckCircle2 size={14} />
                    Pay using: UPI • PhonePe • Paytm • Google Pay
                </p>
            </div>
        </div>
    );
};

export default CountdownTimer;