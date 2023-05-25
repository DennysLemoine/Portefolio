import React, {useState} from "react"
import Modal from "../modal-projects/modal-projects";

import project from './projects.css'

import blueprintLogo from '../../assets/blueprint.png'

function Projects({data}) {

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
        <section className='sectionProjects'>
            <span className='sphere10'/>
            <span className='sphere11'/>
            <span className='sphere12'/>
            <div className='containerH2'>
                <h2>MES PROJETS</h2>
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