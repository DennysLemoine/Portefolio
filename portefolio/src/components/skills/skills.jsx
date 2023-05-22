import skills from './skills.css'

import skillLogo from '../../assets/creative.png'

function Skills() {
    return (
        <section className='sectionSkills'>
            <span className='sphere07'/>
            <span className='sphere08'/>
            <span className='sphere09'/>
            <div className='containerH2'>
                <h2>COMPÉTENCES</h2>
                <img src={skillLogo} alt="Logo créatif"/>
            </div>
            <div className='containerSkills01'>
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
                <span className='containerSkillsButtons'>
                    <span className='button1'></span>
                    <span className='button2'></span>
                </span>
            </div>
            <div className='containerSkills02'>
                <div className='containerSkillP'>
                    <p>BTS MUC<br/>2017</p>
                    <p>DÉVELOPPEUR WEB<br/>2023</p>
                </div>
            </div>
        </section>
    )
}

export default Skills;