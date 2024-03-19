import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Rüegg Simon</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link href="/#skills">Compétences</Link></li>
                        <li><Link href="/#experience">Expérience</Link></li>
                        <li><Link href="/#education">Éducation</Link></li>
                        <li><Link href="/#projects">Projets</Link></li>
                        <li><Link href="/PersonalInfo">Personal Info</Link></li>
                        <li><Link href="/Competences">Compétences</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
