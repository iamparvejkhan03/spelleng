import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, Loader2, User, Mail, Phone } from 'lucide-react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            whatsapp: ''
        }
    });

    const navigate = useNavigate();

    // Form submission handler with Axios
    const onSubmit = async (data) => {
        setIsSubmitting(true);

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/v1/request`,
                {
                    fullName: data.fullName,
                    email: data.email,
                    whatsapp: data.whatsapp,
                    timestamp: new Date().toISOString()
                }
            );

            if (response.data?.success) {
                reset(); // Reset first
                setIsSuccess(true);

                // Then redirect
                setTimeout(() => {
                    window.location.href = "https://pages.razorpay.com/spelleng";
                }, 500);
            }

        } catch (error) {
            console.error('❌ Error:', error.response?.data || error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 w-full mx-auto">
            {/* Header */}
            <div className="text-center mb-5">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                    🎯 Book Your Trial Class
                </h3>
                <p className="text-gray-500 text-sm">
                    Fill in your details. We'll book your trial class within 5 minutes.
                </p>
            </div>

            {/* Success Message */}
            {isSuccess && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 animate-fadeIn">
                    <CheckCircle size={18} className="text-green-600" />
                    <p className="text-green-700 text-sm font-medium">
                        ✅ Booking confirmed! We'll contact you shortly.
                    </p>
                </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Full Name Field */}
                <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User size={16} className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            {...register('fullName', {
                                required: 'Full name is required',
                                minLength: {
                                    value: 3,
                                    message: 'Name must be at least 3 characters'
                                }
                            })}
                            className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all ${errors.fullName
                                ? 'border-red-500 focus:ring-red-500'
                                : 'border-gray-300 focus:ring-[#09B850] focus:border-[#09B850]'
                                }`}
                            placeholder="Enter your full name"
                        />
                    </div>
                    {errors.fullName && (
                        <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
                    )}
                </div>

                {/* Email Field */}
                <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                        Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail size={16} className="text-gray-400" />
                        </div>
                        <input
                            type="email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Enter a valid email address'
                                }
                            })}
                            className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all ${errors.email
                                ? 'border-red-500 focus:ring-red-500'
                                : 'border-gray-300 focus:ring-[#09B850] focus:border-[#09B850]'
                                }`}
                            placeholder="your@email.com"
                        />
                    </div>
                    {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                    )}
                </div>

                {/* WhatsApp Number Field */}
                <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">
                        WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone size={16} className="text-gray-400" />
                        </div>
                        <input
                            type="tel"
                            {...register('whatsapp', {
                                required: 'WhatsApp number is required',
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: 'Enter a valid 10-digit mobile number'
                                }
                            })}
                            className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all ${errors.whatsapp
                                ? 'border-red-500 focus:ring-red-500'
                                : 'border-gray-300 focus:ring-[#09B850] focus:border-[#09B850]'
                                }`}
                            placeholder="9876XXXXXX"
                            inputMode="numeric"
                        />
                    </div>
                    {errors.whatsapp && (
                        <p className="text-red-500 text-xs mt-1">{errors.whatsapp.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className="w-full bg-[#09B850] hover:bg-[#08a048] text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 size={18} className="animate-spin" />
                            Submitting...
                        </>
                    ) : (
                        <>
                            <Send size={18} />
                            Book Trial Class @ ₹102
                        </>
                    )}
                </button>

                {/* Trust Text */}
                <p className="text-gray-400 text-xs text-center mt-3">
                    🔒 Your information is safe. We'll never share your data.
                </p>
            </form>

            {/* Add animation styles */}
            <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
        </div>
    );
};

export default BookingForm;