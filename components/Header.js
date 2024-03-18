// Header.js
import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="container">
                <h1>{/* Nom Prénom */}Rüegg Simon</h1>
                <nav>
                    <ul>
                        <li><a href="#skills">Compétences</a></li>
                        <li><a href="#experience">Expérience</a></li>
                        <li><a href="#education">Éducation</a></li>
                        <li><a href="#projects">Projets</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
