
import home from './home.css'

import backgroundImg from '../../assets/Background.png'
import starLogo from '../../assets/shining.png'
import aboutLogo from '../../assets/information.png'
import skillLogo from '../../assets/creative.png'
import graduateLogo from '../../assets/graduation-cap.png'
import blueprintLogo from '../../assets/blueprint.png'

import Introduction from "../../components/introduction/introduction";

function Home() {
    return (
        <>
            <img className='backgroundImg' src={backgroundImg} alt="Image d'arrière plan"/>
            <section className='sectionIntroducing'>
                <Introduction/>
            </section>
            <section className='sectionAbout'>
                <span className='sphere04'/>
                <span className='sphere05'/>
                <span className='sphere06'/>
                <h2>À propos</h2>
                <h3>DÉVELOPPEUR WEB FRONT-END</h3>
                <div>
                    <p>Suite à plusieurs années dans l'univers de la 3D, j'ai décidé de me lancer dans une reconversion au métier de développeur front-end ! Toujours avive de créativité, je souhaite désormais pouvoir amener mes compétences dans la réalisation de sites web !</p>
                </div>
            </section>
        </>
    )
}

export default Home;