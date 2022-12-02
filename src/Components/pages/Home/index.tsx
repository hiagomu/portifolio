import About from '../../blocks/About'
import Header from '../../blocks/Header'
import Projects from '../../blocks/Projects'
import Welcome from '../../blocks/Welcome'
import styles from './styles'

const Home: React.FC = () => {
    return <styles.main>
        <Header />
        <Welcome />
        <About />
        <Projects />
    </styles.main>
}

export default Home