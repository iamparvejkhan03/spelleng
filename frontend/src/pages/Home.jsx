import Container from "../components/Container";
import { Hero } from "../components";
import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { Coffee, Loader } from "lucide-react";
import { Link } from "react-router-dom";

const ProblemSection = lazy(() => import('../components/ProblemSection'));
const JourneySection = lazy(() => import('../components/JourneySection'));
const ComparisonSection = lazy(() => import('../components/ComparisonSection'));
const TestimonialsSection = lazy(() => import('../components/TestimonialsSection'));
const CTASection = lazy(() => import('../components/CTASection'));

function Home() {
    return (
        <>
            <Hero />

            <Suspense fallback={<Loader className="animate-spin w-full text-center" />}>
                <TestimonialsSection />
            </Suspense>
            
            {/* <Suspense fallback={<Loader className="animate-spin w-full text-center" />}>
                <ProblemSection />
            </Suspense> */}

            <Suspense fallback={<Loader className="animate-spin w-full text-center" />}>
                <JourneySection />
            </Suspense>

            <Suspense fallback={<Loader className="animate-spin w-full text-center" />}>
                <ComparisonSection />
            </Suspense>

            <Suspense fallback={<Loader className="animate-spin w-full text-center" />}>
                <CTASection />
            </Suspense>
        </>
    );
}

export default Home;