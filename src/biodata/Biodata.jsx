import React, { useState } from 'react';
import './Biodata.css';

export default function Biodata() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
  
    

    return (
        <div className={`biodataKu ${darkMode ? 'dark' : ''}`}>
            <button onClick={toggleDarkMode} className="dark-mode-toggle">
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <h2>Nama : Muhammad Rayhan Aulia</h2>
            <p>Absen : 25</p>
            <p>Asal : Kudus</p>
            <p>Status : Siswa SMK RUS Kudus</p>
        </div>
    );
}

