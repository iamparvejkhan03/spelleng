import { useEffect } from 'react';
import { CheckCircle, MessageCircle, Mail, Phone, Calendar, ArrowRight } from 'lucide-react';
import Container from '../components/Container';

const ThankYou = () => {
    return (
        <section className="min-h-screen bg-linear-to-b from-white via-gray-50 to-white flex items-center justify-center py-16 md:py-20">
            <Container className={`flex items-center justify-center`}>
                <div className="max-w-2xl mx-auto text-center">
                    {/* Success Icon */}
                    <div className="mb-6">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto animate-bounce">
                            <CheckCircle size={48} className="text-[#09B850]" />
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        🎉 Thank You! 🎉
                    </h1>

                    <p className="text-gray-500 mb-8">
                        We've received your details. Our team will contact you within 5 minutes.
                    </p>

                    {/* What Happens Next */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 mb-8 text-left">
                        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <MessageCircle size={20} style={{ color: '#09B850' }} />
                            What happens next?
                        </h3>

                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-[#09B850]/10 flex items-center justify-center shrink-0 mt-0.5">
                                </div>
                                <p className="text-gray-700">We'll WhatsApp/call you within <strong>5 minutes</strong>. Please don't miss it.</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => window.open('https://wa.link/z55k5h', '_blank')}
                            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
                        >
                            <MessageCircle size={18} />
                            Message on WhatsApp
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ThankYou;