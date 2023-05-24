import home from './home.css'

import backgroundImg from '../../assets/Background.png'

import Introduction from "../../components/introduction/introduction";
import About from "../../components/about/about";
import Skills from "../../components/skills/skills";
import Projects from "../../components/projects/projects"

function Home() {
    return (
        <>
            <img className='backgroundImg' src={backgroundImg} alt="Image d'arrière plan"/>
            <Introduction/>
            <About/>
            <Skills/>
            <Projects/>
        </>
    )
}

export default Home;