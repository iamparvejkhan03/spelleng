import Container from "../components/Container";
import { Hero } from "../components";
import { useState, useEffect, useRef } from 'react';
import { Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import ProblemSection from "../components/ProblemSection";
import JourneySection from "../components/JourneySection";
import ComparisonSection from "../components/ComparisonSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";

function Home() {
    return (
        <>
            <Hero />
            <ProblemSection />
            <JourneySection />
            <ComparisonSection />
            <TestimonialsSection />
            <CTASection />
        </>
    );
}

export default Home;