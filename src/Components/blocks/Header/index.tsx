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
        <styles.link to=''>Sobre mim</styles.link>
        <styles.link to=''>Conhecimentos</styles.link>
        <styles.link to=''>Fale comigo</styles.link>
        <styles.link to=''>Projetos</styles.link>
    </nav>
    <styles.social>
        <GithubIcon className='social-icon'/>
        <LinkedinIcon className='social-icon'/>
        <TwitterIcon className='social-icon'/>
    </styles.social>
</styles.header>
}

export default Header