import {Link} from 'react-scroll';
import About from "../../components/about/about";
import Skills from "../../components/skills/skills";
import Projects from "../../components/projects/projects"

import header from './header.css'

import yuhiLogo from '../../assets/logo_yh.png'

function Header() {

    return (
        <header className='header'>
            <img className='yuhiLogo' src={yuhiLogo} alt="Logo du site internet de Dennys Lemoine"/>
            <nav className='nav'>
                <div className='divLinkOrange'>
                    <Link to="aPropos" spy={true} smooth={true} offset={-70} duration={500} className="navLinkOrange">à propos</Link>
                </div>
                <div className='divLinkGreen'>
                    <Link to="competences" spy={true} smooth={true} offset={-70} duration={500} className="navLinkGreen">compétences</Link>
                </div>
                <div className='divLinkBlue'>
                    <Link to="projets" spy={true} smooth={true} offset={-70} duration={500} className="navLinkBlue">mes projets</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;