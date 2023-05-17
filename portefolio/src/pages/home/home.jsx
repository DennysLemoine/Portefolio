import home from './home.css'

import backgroundImg from '../../assets/Background.png'
import profilPicture from '../../assets/dennys_pp.webp'
import starLogo from '../../assets/shining.png'

function Home() {
    return(
        <>
            <div>
                <div className='containerPictureHome'>
                    <div className='containerPicture'>
                        <img className='pictureHome' src={profilPicture} alt="Photo de Dennys Lemoine"/>
                    </div>
                    <div className='sphere01'/>
                    <div className='sphere02'/>
                    <div className='sphere03'/>
                </div>
                <div className='introducing'>
                    <div className='containerH1'>
                        <h1>Bonjour, je suis Dennys Lemoine</h1>
                        <img className='imgH1' src={starLogo} alt="Logo de scintillement"/>
                    </div>
                    <h2 className='introducingH2'>DÉVELOPPEUR WEB FRONT-END</h2>
                    <p className='introducingP'>Expérience dans la conception de sites web  responsives et accessibles. Disponible pour des projets de  développement web intéressants et stimulants. |</p>
                </div>
            </div>
        </>
    )
}

export default Home;