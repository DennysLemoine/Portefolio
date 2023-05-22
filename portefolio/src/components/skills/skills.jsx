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
            <div className='containerSkills'>
                <div className='containerSkill'>
                    <p>0%</p>
                    <p>100%</p>
                    <div className='divSkillBorder'>
                        <div className='divSkillFill'>
                            <p>HTML</p>
                            <p>90%</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;