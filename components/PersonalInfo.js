// PersonalInfo.js
import React from 'react';

const PersonalInfo = () => {
    return (
        <div>
            <h2>Informations Personnelles</h2>
            <ul>
                <li>
                    <img src="https://img.icons8.com/ios/20/000000/user-male-circle.png" alt="Nom Prénom" />
                    Rüegg Simon
                </li>
                <li>
                    <img src="https://img.icons8.com/ios/20/000000/address.png" alt="Adresse" />
                    Rue du Grenier 3, CH-2300 La Chaux-de-Fonds
                </li>
                <li>
                    <img src="https://img.icons8.com/ios/20/000000/phone.png" alt="Téléphone" />
                    +41 79 451 54 00
                </li>
                <li>
                    <img src="https://img.icons8.com/ios/20/000000/email.png" alt="Email" />
                    s.ruegg88@gmail.com
                </li>
                <li>
                    <img src="https://img.icons8.com/ios/20/000000/linkedin.png" alt="Profil LinkedIn" />
                    <a href="https://www.linkedin.com/in/simon-r%C3%BCegg-770711179/" target="_blank" rel="noopener noreferrer">Profil LinkedIn</a>
                </li>
                <li>
                    <img src="https://img.icons8.com/ios/20/000000/github.png" alt="Profil GitHub" />
                    <a href="https://github.com/Vorran" target="_blank" rel="noopener noreferrer">Profil GitHub</a>
                </li>
            </ul>
        </div>
    );
}

export default PersonalInfo;
