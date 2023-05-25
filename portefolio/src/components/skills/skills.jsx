import React, {useState, useRef, useEffect} from "react";

import skills from './skills.css'

import skillLogo from '../../assets/creative.png'

function Skills() {

    const [visibleDiv, setVisibleDiv] = useState('div1');
    const touchStartRef = useRef(null);

    const toggleSkills = (divId) => {
        setVisibleDiv(divId);
    };

    // CONFIGURATION POUR SLIDE DIV POUR MOBILE/TABLETTE
    const handleTouchStart = (event) => {
        touchStartRef.current = event.touches[0].clientX;
    };

    const handleTouchEnd = (event) => {
        const touchEnd = event.changedTouches[0].clientX;
        const touchDifference = touchStartRef.current - touchEnd;

        if (touchDifference > 50 || visibleDiv !== 'div1') {
            // SWIPE POUR ALLER A LA DIV SUIVANTE
            setVisibleDiv('div2');
        } else if (touchDifference < -50) {
            // SWIPE POUR REVENIR A LA DIV PRECEDENTE
            setVisibleDiv('div1');
        }
    };

    useEffect(() => {
        const containerSkills = document.querySelector('.containerSkills');
        containerSkills.addEventListener('touchstart', handleTouchStart);
        containerSkills.addEventListener('touchend', handleTouchEnd);

        return () => {
            containerSkills.removeEventListener('touchstart', handleTouchStart);
            containerSkills.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    return (
        <section className='sectionSkills'>
            <span className='sphere07'/>
            <span className='sphere08'/>
            <span className='sphere09'/>
            <div className='containerH2'>
                <h2 id='competences'>COMPÉTENCES</h2>
                <img src={skillLogo} alt="Logo créatif"/>
            </div>
            <div className='containerSkills'>
                <div className={visibleDiv === 'div1' ? 'containerSkills01' : 'containerSkills01 hide'}>
                    <div className='containerSkill'>
                        <div className='containerSkillP'>
                            <p>0%</p>
                            <p>100%</p>
                        </div>
                        <div className='divSkillBorder'>
                            <div className='divSkillHtml'>
                                <p>HTML</p>
                                <p>80%</p>
                            </div>
                        </div>
                    </div>
                    <div className='containerSkill'>
                        <div className='containerSkillP'>
                            <p>0%</p>
                            <p>100%</p>
                        </div>
                        <div className='divSkillBorder'>
                            <div className='divSkillCss'>
                                <p>CSS</p>
                                <p>80%</p>
                            </div>
                        </div>
                    </div>
                    <div className='containerSkill'>
                        <div className='containerSkillP'>
                            <p>0%</p>
                            <p>100%</p>
                        </div>
                        <div className='divSkillBorder'>
                            <div className='divSkillJs'>
                                <p>JAVASCRIPT</p>
                                <p>60%</p>
                            </div>
                        </div>
                    </div>
                    <div className='containerSkill'>
                        <div className='containerSkillP'>
                            <p>0%</p>
                            <p>100%</p>
                        </div>
                        <div className='divSkillBorder'>
                            <div className='divSkillReact'>
                                <p>REACT</p>
                                <p>60%</p>
                            </div>
                        </div>
                    </div>
                    <div className='containerSkill'>
                        <div className='containerSkillP'>
                            <p>0%</p>
                            <p>100%</p>
                        </div>
                        <div className='divSkillBorder'>
                            <div className='divSkillNode'>
                                <p>NODE</p>
                                <p>30%</p>
                            </div>
                        </div>
                    </div>
                    <div className='containerSkill'>
                        <div className='containerSkillP'>
                            <p>0%</p>
                            <p>100%</p>
                        </div>
                        <div className='divSkillBorder'>
                            <div className='divSkillSeo'>
                                <p>SEO</p>
                                <p>50%</p>
                            </div>
                        </div>
                    </div>
                    <div className='containerSkill'>
                        <div className='containerSkillP'>
                            <p>0%</p>
                            <p>100%</p>
                        </div>
                        <div className='divSkillBorder'>
                            <div className='divSkillPhotoshop'>
                                <p>PHOTOSHOP</p>
                                <p>60%</p>
                            </div>
                        </div>
                    </div>
                    <div className='containerSkill'>
                        <div className='containerSkillP'>
                            <p>0%</p>
                            <p>100%</p>
                        </div>
                        <div className='divSkillBorder'>
                            <div className='divSkillInfographie'>
                                <p>INFOGRAPHIE</p>
                                <p>70%</p>
                            </div>
                        </div>
                    </div>
                    <div className='containerSkill'>
                        <div className='containerSkillP'>
                            <p>0%</p>
                            <p>100%</p>
                        </div>
                        <div className='divSkillBorder'>
                            <div className='divSkill3d'>
                                <p>3D</p>
                                <p>80%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={visibleDiv === 'div2' ? 'containerSkills02' : 'containerSkills02 hide'}>
                    <div className='containerSkillGraduate'>
                        <div className='containerGraduateRelatif'>
                            <span className='lineSkill'></span>
                            <span className='circleSkillP01'></span>
                            <span className='circleSkillP02'></span>
                            <span className='circleSkillP03'></span>
                            <p className='skillBts'>BTS MUC<br/>2017</p>
                            <p className='skill3d'>MODÉLISATION<br/>ANIMATION 3D<br/>2021</p>
                            <p className='skillDev'>DÉVELOPPEUR WEB<br/>2023</p>
                        </div>
                    </div>
                </div>
                <span className='containerSkillsButtons'>
                    <span className={visibleDiv === 'div1' ? 'button1 active' : 'button1'} onClick={() => toggleSkills('div1')}></span>
                    <span className={visibleDiv === 'div2' ? 'button2 active' : 'button2'} onClick={() => toggleSkills('div2')}></span>
                </span>
            </div>
        </section>
    )
}

export default Skills;