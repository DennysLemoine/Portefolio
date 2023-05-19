import home from './home.css'

import backgroundImg from '../../assets/Background.png'
import profilPicture from '../../assets/dennys_pp.webp'
import starLogo from '../../assets/shining.png'

function Home() {
    return(
        <>
            <section className='sectionIntroducing'>
                <div className='containerPictureHome'>
                    <img className='pictureHome' src={profilPicture} alt="Photo de Dennys Lemoine"/>
                    <span className='sphere01'/>
                    <span className='sphere02'/>
                    <span className='sphere03'/>
                </div>
                <div className='introducing'>
                    <div className='containerH1'>
                        <h1>Bonjour, je suis Dennys Lemoine</h1>
                        <img className='imgH1' src={starLogo} alt="Logo de scintillement"/>
                    </div>
                    <h2 className='introducingH2'>DÉVELOPPEUR WEB FRONT-END</h2>
                    <p className='introducingP'>Expérience dans la conception de sites web  responsives et accessibles. Disponible pour des projets de  développement web intéressants et stimulants.</p>
                </div>
            </section>
        </>
    )
}

export default Home;