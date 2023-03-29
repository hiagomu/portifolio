import About from '../../blocks/About'
import Contact from '../../blocks/Contact'
import Header from '../../blocks/Header'
import Projects from '../../blocks/Projects'
import Skills from '../../blocks/Skills'
import Welcome from '../../blocks/Welcome'
import styles from './styles'

const Home: React.FC = () => {
    return <styles.main>
        <Header />
        <Welcome />
        <About />
        <Projects />
        <Skills />
        <Contact />
    </styles.main>
}

export default Home