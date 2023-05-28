import React, {useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

import modalProjects from './modal-projects.css'
import projects from "../projects/projects";

import gitHubLogo from '../../assets/github.png'

const Modal = ({isOpen, closeModal, data}) => {
    const modalRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            // Scroll to top when the modal opens
            modalRef.current.scrollTop = 0;
        }

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                closeModal();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, closeModal]);

    if (!isOpen) {
        return null;
    }

    const {image_banner, description, problematique, competences, githubLink} = data

    const handleContentClick = (e) => {
        e.stopPropagation();
    };

    return (
            <div className="modal" onClick={closeModal}>
                <span className='backgroundColorModal'></span>
                <div className="modal-content" onClick={handleContentClick} ref={modalRef}>
                    <button className="modal-close" onClick={closeModal}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </button>
                    <span className='bannerContainer'>
                    <img className='bannerImg' src={image_banner} alt="Image bannière du projet"/>
                </span>
                    <h2>DESCRIPTION</h2>
                    <p>{description}</p>
                    <h2>PROBLEMATIQUE</h2>
                    <p>{problematique}</p>
                    <h2>COMPETENCES APPRISES</h2>
                    <p>{competences}</p>
                    <Link to={githubLink}>
                        <img className='githubLogo' src={gitHubLogo} alt="Logo GitHub"/>
                    </Link>
                </div>
            </div>
    );
};

export default Modal;