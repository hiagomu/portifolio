import styles from "./styles"
import logo from '../../../assets/logo.png'

import {
    FaGithub as GithubIcon,
    FaTwitter as TwitterIcon
} from 'react-icons/fa'

import {
    ImLinkedin2 as LinkedinIcon
} from 'react-icons/im'

const Header: React.FC = () => {
    return <styles.header>
    <img src={logo} alt="" />
    <nav>
        <styles.link href='#about'>Sobre mim</styles.link>
        <styles.link href='#skills'>Conhecimentos</styles.link>
        <styles.link href='#projects'>Projetos</styles.link>
        <styles.link href='#contact'>Fale comigo</styles.link>
    </nav>
    <styles.social>
        <a href="https://github.com/hiagomu" target="_blank">
            <GithubIcon className='social-icon'/>
        </a>
        <a href="https://www.linkedin.com/in/hiago-murilo/" target="_blank">
            <LinkedinIcon className='social-icon'/>
        </a>
        <a href="https://twitter.com/hiagomux" target="_blank">
            <TwitterIcon className='social-icon'/>
        </a>
    </styles.social>
</styles.header>
}

export default Header