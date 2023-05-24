import React from "react";

import project from './projects.css'

import blueprintLogo from '../../assets/blueprint.png'


function Projects() {

    return(
        <section className='sectionProjects'>
            <span className='sphere10'/>
            <span className='sphere11'/>
            <span className='sphere12'/>
            <div className='containerH2'>
                <h2>MES PROJETS</h2>
                <img src={blueprintLogo} alt="Logo blueprint"/>
            </div>
            <div className='containerProjects'>
                <div className='containerProject'>
                    <img src="" alt=""/>
                </div>
            </div>
        </section>
    )
}

export default Projects;