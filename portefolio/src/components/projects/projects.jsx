import React, {useEffect, useRef, useState} from "react"
import Modal from "../modal-projects/modal-projects";

import project from './projects.css'

import blueprintLogo from '../../assets/blueprint.png'

function Projects({data}) {

    const projectRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    projectRef.current.classList.add('fade-in');
                } else {
                    projectRef.current.classList.remove('fade-in');
                }
            });
        });

        if (projectRef.current) {
            observer.observe(projectRef.current);
        }

        // Nettoyer l'observer lorsque le composant est démonté
        return () => {
            if (projectRef.current) {
                observer.unobserve(projectRef.current);
            }
        };
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState(null);

    const openModal = (data) => {
        setIsOpen(true);
        setModalData(data);
    }

    const closeModal = () => {
        setIsOpen(false);
        setModalData(null);
    }

    return (
        <section className='sectionProjects' ref={projectRef}>
            <span className='sphere10'/>
            <span className='sphere11'/>
            <span className='sphere12'/>
            <div className='containerH2'>
                <h2 id='projets'>MES PROJETS</h2>
                <img src={blueprintLogo} alt="Logo blueprint"/>
            </div>
            <div className='containerProjects'>
                {data.map((projects) => (
                    <div className='containerProject' key={projects.id}>
                        <button className='buttonModal' onClick={() => openModal(projects)}>
                            <img src={projects.image_pp} alt="Miniature du projet"/>
                        </button>
                        <p>{projects.name}</p>
                    </div>
                ))}
            </div>
            <Modal isOpen={isOpen} closeModal={closeModal} data={modalData} />
        </section>
    )
}

export default Projects;