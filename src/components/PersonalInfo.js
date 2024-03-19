// src/components/PersonalInfo.js
import React from 'react';

const PersonalInfo = () => {
    return (
        <div id="personal-info" className="my-8">
            <h2 className="text-xl font-semibold mb-4">Informations Personnelles</h2>
            <ul className="space-y-2">
                <li className="flex items-center">
                    <img src="/images/user-male-circle.png" alt="Nom Prénom" className="mr-2" />
                    Rüegg Simon
                </li>
                <li className="flex items-center">
                    <img src="/images/address.png" alt="Adresse" className="mr-2" />
                    Rue du Grenier 3, CH-2300 La Chaux-de-Fonds
                </li>
                <li className="flex items-center">
                    <img src="/images/phone.png" alt="Téléphone" className="mr-2" />
                    +41 79 451 54 00
                </li>
                <li className="flex items-center">
                    <img src="/images/email.png" alt="Email" className="mr-2" />
                    s.ruegg88@gmail.com
                </li>
                <li className="flex items-center">
                    <img src="/images/linkedin.png" alt="Profil LinkedIn" className="mr-2" />
                    <a href="https://www.linkedin.com/in/simon-r%C3%BCegg-770711179/" target="_blank" rel="noopener noreferrer">Profil LinkedIn</a>
                </li>
                <li className="flex items-center">
                    <img src="/images/github.png" alt="Profil GitHub" className="mr-2" />
                    <a href="https://github.com/Vorran" target="_blank" rel="noopener noreferrer">Profil GitHub</a>
                </li>
            </ul>
        </div>
    );
}

export default PersonalInfo;
