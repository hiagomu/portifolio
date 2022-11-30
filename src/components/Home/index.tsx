import styles from './styles'
import logo from '../../assets/logo.png'
import bg from '../../assets/bg.svg'
import {
    FaGithub as GithubIcon,
    FaTwitter as TwitterIcon
} from 'react-icons/fa'

import {
    ImLinkedin2 as LinkedinIcon
} from 'react-icons/im'

const Home: React.FC = () => {
    return <styles.body>
        <styles.header>
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
        <styles.main>
            <styles.welcome>
                <div>
                    <span>HELLO WORLD 👋🏾</span>
                    <h1>Eu sou Hiago,</h1>
                    <p>Desenvolvedor Front-end.</p>
                    <styles.wrapButtons>
                        <button className='cv'>BAIXAR CV</button>
                        <button>CONTATO</button>
                    </styles.wrapButtons>
                </div>
                <img src={bg} alt="" />
            </styles.welcome>
        </styles.main>
    </styles.body>
}

export default Home