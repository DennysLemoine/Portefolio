import {Link} from 'react-router-dom'

import header from './header.css'

import yuhiLogo from '../../assets/logo_yh.png'
import linkedinLogo from '../../assets/linkedin.png'
import githubLogo from '../../assets/github.png'

function Header() {

    return (
        <header className='header'>
            <img className='yuhiLogo' src={yuhiLogo} alt="Logo du site internet de Dennys Lemoine"/>
            <nav className='nav'>
                {/*<button onClick={() => sectionRef.current.scrollIntoView({ behavior: 'smooth' })}>*/}
                {/*    À propos*/}
                {/*</button>*/}
                {/*<button onClick={() => sectionRef.current.scrollIntoView({ behavior: 'smooth' })}>*/}
                {/*    À propos*/}
                {/*</button>*/}
                {/*<button onClick={() => sectionRef.current.scrollIntoView({ behavior: 'smooth' })}>*/}
                {/*    À propos*/}
                {/*</button>*/}
                <div className='divLinkOrange'>
                    <Link to='à propos' className='navLinkOrange'>à propos</Link>
                </div>
                <div className='divLinkGreen'>
                    <Link to='mes compétences' className='navLinkGreen'>compétences</Link>
                </div>
                <div className='divLinkBlue'>
                    <Link to='mes projets' className='navLinkBlue'>mes projets</Link>
                </div>
                {/*<Link to="https://www.linkedin.com/in/dennys-lemoine-b4873313b/" className='linkedinLogo'>*/}
                {/*    <img src={linkedinLogo} alt="Logo de LinkedIn"/>*/}
                {/*</Link>*/}
                {/*<Link to="https://www.linkedin.com/in/dennys-lemoine-b4873313b/" className='githubLogo'>*/}
                {/*    <img src={githubLogo} alt="Logo de GitHub"/>*/}
                {/*</Link>*/}
            </nav>
        </header>
    )
}

export default Header;