import Header from '../../blocks/Header'
import Welcome from '../../blocks/Welcome'
import styles from './styles'

const Home: React.FC = () => {
    return <styles.main>
        <Header />
        <Welcome />
    </styles.main>
}

export default Home