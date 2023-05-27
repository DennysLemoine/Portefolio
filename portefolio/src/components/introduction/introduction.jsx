import React, { useRef, useEffect } from 'react';
import profilPicture from "../../assets/dennys_pp.webp";
import introduction from './introduction.css';

function Introduction() {

    return (
        <>
            <section className='sectionIntroducing'>
                <div className='containerPictureHome'>
                    <img className='pictureHome' src={profilPicture} alt="Photo de Dennys Lemoine" />
                    <span className='sphere01' />
                    <span className='sphere02' />
                    <span className='sphere03' />
                </div>
                <div className='introducing'>
                    <h1>Bonjour 👋🏼<br/> je suis Dennys Lemoine</h1>
                    <h2  className='introducingH2'>DÉVELOPPEUR WEB FRONT-END</h2>
                    <p className='introducingP'>Expérience dans la conception de sites web responsives et accessibles.
                        Disponible pour des projets de développement web intéressants et stimulants 🌱 !</p>
                </div>
            </section>
        </>
    );
}

export default Introduction;
