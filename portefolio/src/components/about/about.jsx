import React, { useEffect, useRef } from 'react';
import about from './about.css';
import logoAbout from '../../assets/information.png';

function About() {
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    aboutRef.current.classList.add('fade-in');
                } else {
                    aboutRef.current.classList.remove('fade-in');
                }
            });
        });

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        // Nettoyer l'observer lorsque le composant est démonté
        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    return (
        <section className="sectionAbout" ref={aboutRef}>
            <span className="sphere04" />
            <span className="sphere05" />
            <span className="sphere06" />
            <div className="containerH2">
                <h2 id="aPropos">À PROPOS</h2>
                <img src={logoAbout} alt="Logo d'information" />
            </div>
            <h3 id="àPropos">DÉVELOPPEUR WEB FRONT-END</h3>
            <div className="containerP">
                <p>
                    Suite à plusieurs années dans l'univers de la 3D, j'ai décidé de me lancer dans une reconversion au métier de
                    développeur front-end !<br />
                    Toujours avide de créativité, je souhaite désormais pouvoir amener mes compétences dans la réalisation de sites
                    web !
                </p>
            </div>
        </section>
    );
}

export default About;
