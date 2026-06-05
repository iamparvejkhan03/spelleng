import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar, Menu, X } from 'lucide-react';
import Container from './Container';
import { logo } from '../assets';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleBookTrial = () => {
        window.location.href = 'https://pages.razorpay.com/spelleng';
    };

    return (
        <header className={`absolute bg-opacity-0 w-full transition-all duration-150 z-50`}>
            <Container className="flex items-center justify-center sm:justify-between py-4">
                <Link to="/">
                    <img src={logo} alt="SpellEng Logo" className="h-8 md:h-10 z-10" />
                </Link>

                <button
                    onClick={handleBookTrial}
                    className="group hidden w-full sm:w-auto sm:inline-flex items-center justify-center gap-2 text-white font-medium py-2.5 px-8 rounded-lg text-base cursor-pointer shadow-lg"
                    style={{ backgroundColor: '#09B850' }}
                >
                    <Calendar size={20} />
                    Try first class at ₹102
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </Container>
        </header>
    );
};

export default Header;