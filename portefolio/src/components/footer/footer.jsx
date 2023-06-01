import {Link} from 'react-router-dom'

import footer from './footer.css'

import yuhiLogoWhite from '../../assets/logo_yh_white.png'
import linkedinLogoWhite from '../../assets/linkedin_white.png'
import githubLogoWhite from '../../assets/github_white.png'
import mailLogo from '../../assets/email.png'

function Footer() {

    return(
        <footer className='footer'>
            <img className='logoYuhiWhite' src={yuhiLogoWhite} alt="Logo de Dennys Lemoine"/>
            <p>Designed & Build by Dennys Lemoine</p>
            <div>
                <Link to="https://www.linkedin.com/in/dennys-lemoine-b4873313b/" target="_blank" className='footerLogo'>
                    <img src={linkedinLogoWhite} alt="Logo/Lien Linkedin"/>
                </Link>
                <Link to="mailto:dennys.lemoine.1@gmail.com" className='footerLogo'>
                    <img src={mailLogo} alt="Logo/Lien Mail"/>
                </Link>
                <Link to="https://github.com/DennysLemoine/" target="_blank" className='footerLogo'>
                    <img src={githubLogoWhite} alt="Logo/Lien Github"/>
                </Link>
            </div>
        </footer>
    )
}

export default Footer;