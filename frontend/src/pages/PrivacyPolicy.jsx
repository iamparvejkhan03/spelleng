import Container from '../components/Container';
import { Shield, Mail, Phone, Globe, Clock, Lock } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <section className="py-12 md:py-16 bg-linear-to-b from-white via-gray-50 to-white min-h-screen">
            <Container>
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-white shadow-sm rounded-full px-4 py-1.5 mb-4 border border-gray-200">
                            <Shield size={16} style={{ color: '#08B851' }} />
                            <span className="text-sm font-medium" style={{ color: '#08B851' }}>Your Privacy Matters</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-gray-600">
                            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>

                    {/* Content */}
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8 space-y-6">

                        {/* Section 1 - Introduction */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
                            <p className="text-gray-700 mb-2">
                                Welcome to <strong>SpellEng</strong> ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy.
                            </p>
                            <p className="text-gray-700">
                                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>spelleng.com</strong> (the "Site") and book our English speaking courses.
                            </p>
                        </div>

                        {/* Section 2 - Information We Collect */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
                            <p className="text-gray-700 mb-2">We collect the following information when you book a trial class:</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                <li><strong>Full Name</strong> - To address you personally during classes</li>
                                <li><strong>Email Address</strong> - To send class links and updates</li>
                                <li><strong>WhatsApp Number</strong> - To share instant reminders and support</li>
                                <li><strong>Payment Information</strong> - Processed securely via Razorpay (we don't store card details)</li>
                            </ul>
                        </div>

                        {/* Section 3 - How We Use Your Information */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
                            <p className="text-gray-700 mb-2">We use your information to:</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                <li>Confirm your trial class booking</li>
                                <li>Send Google Meet/Zoom links for your sessions</li>
                                <li>Share personalized feedback after classes</li>
                                <li>Send payment reminders and receipts</li>
                                <li>Improve our teaching methods and customer support</li>
                                <li>Respond to your queries and support requests</li>
                            </ul>
                        </div>

                        {/* Section 4 - Cookies & Tracking */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Cookies & Tracking Technologies</h2>
                            <p className="text-gray-700 mb-2">
                                We use cookies and similar tracking technologies to:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                <li>Understand how you use our website</li>
                                <li>Measure ad performance (Google Ads)</li>
                                <li>Improve user experience</li>
                            </ul>
                            <p className="text-gray-700 mt-2">
                                You can disable cookies through your browser settings. However, this may affect some website features.
                            </p>
                        </div>

                        {/* Section 5 - Third-Party Services */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Third-Party Services We Use</h2>
                            <div className="space-y-3">
                                <div className="bg-gray-50 rounded-lg p-3">
                                    <p className="font-semibold text-gray-900">📊 Google Ads & Analytics</p>
                                    <p className="text-gray-600 text-sm">We use Google services to measure ad performance and website traffic. Google may collect your IP address and browsing behavior.</p>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-3">
                                    <p className="font-semibold text-gray-900">💰 Razorpay</p>
                                    <p className="text-gray-600 text-sm">All payments are processed securely through Razorpay. We do not store your credit/debit card information.</p>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-3">
                                    <p className="font-semibold text-gray-900">📹 Google Meet / Zoom</p>
                                    <p className="text-gray-600 text-sm">We use these platforms for conducting live 1-on-1 classes. Their respective privacy policies apply.</p>
                                </div>
                            </div>
                        </div>

                        {/* Section 6 - Data Security */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Data Security</h2>
                            <p className="text-gray-700">
                                We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure. We strive to protect your data but cannot guarantee absolute security.
                            </p>
                        </div>

                        {/* Section 7 - Data Retention */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">7. How Long We Keep Your Data</h2>
                            <p className="text-gray-700">
                                We retain your personal information only as long as necessary to:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mt-2">
                                <li>Provide our services to you</li>
                                <li>Comply with legal obligations</li>
                                <li>Resolve disputes</li>
                                <li>Enforce our agreements</li>
                            </ul>
                            <p className="text-gray-700 mt-2">
                                Typically, we keep student records for up to 3 years after your last class.
                            </p>
                        </div>

                        {/* Section 8 - Your Rights */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Your Rights</h2>
                            <p className="text-gray-700 mb-2">You have the right to:</p>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                <li>Access the personal information we hold about you</li>
                                <li>Request correction of inaccurate data</li>
                                <li>Request deletion of your data</li>
                                <li>Opt-out of marketing communications</li>
                            </ul>
                            <p className="text-gray-700 mt-2">
                                To exercise these rights, contact us at <a href="mailto:spellengeducation@gmail.com" className="text-[#08B851] font-medium">spellengeducation@gmail.com</a>
                            </p>
                        </div>

                        {/* Section 9 - Children's Privacy */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Children's Privacy</h2>
                            <p className="text-gray-700">
                                Our services are intended for adults (18+ years) and working professionals. We do not knowingly collect information from children under 13. If you believe we have collected such information, please contact us immediately.
                            </p>
                        </div>

                        {/* Section 10 - Changes to Policy */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Changes to This Privacy Policy</h2>
                            <p className="text-gray-700">
                                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last updated" date. We encourage you to review this policy periodically.
                            </p>
                        </div>

                        {/* Section 11 - Contact Us */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">11. Contact Us</h2>
                            <p className="text-gray-700 mb-3">
                                If you have questions about this Privacy Policy or how we handle your data, please contact us:
                            </p>
                            <div className="space-y-2 text-gray-700">
                                <p className="flex items-center gap-2">
                                    <Mail size={16} style={{ color: '#08B851' }} />
                                    <strong>Email:</strong> <a href="mailto:spellengeducation@gmail.com" className="text-[#08B851]">spellengeducation@gmail.com</a>
                                </p>
                                <p className="flex items-center gap-2">
                                    <Phone size={16} style={{ color: '#08B851' }} />
                                    <strong>WhatsApp:</strong> <a href="tel:+919982117398" className="text-[#08B851]">+91 99821 17398</a>
                                </p>
                                <p className="flex items-center gap-2">
                                    <Globe size={16} style={{ color: '#08B851' }} />
                                    <strong>Website:</strong> <a href="https://spelleng.com" className="text-[#08B851]">spelleng.com</a>
                                </p>
                                <p className="flex items-center gap-2">
                                    <Clock size={16} style={{ color: '#08B851' }} />
                                    <strong>Response Time:</strong> Within 24 hours
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer Note */}
                    <div className="text-center mt-8 text-gray-500 text-sm">
                        <p>By using our website, you consent to this Privacy Policy.</p>
                        <p className="mt-2">© 2026 SpellEng. All rights reserved.</p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PrivacyPolicy;