import styles from './styles'

const About: React.FC = () => {
    return (
        <styles.about
            id='about'
        >
            <img src="https://pbs.twimg.com/profile_images/1548517035289841669/BZNA6tJJ_400x400.jpg" alt="" />
            <styles.aboutText>
                <h2>Sobre mim</h2>
                <p>Olá, me chamo Hiago Paula, tenho 23 anos e atualmente sou estagiário em T.I. como Desenvolvedor Fullstack e estou cursando Engenharia da Computação na CESUPA. Sou apaixonado por tecnologia e sempre busco sempre evoluir em minhas habilidades e competências.</p>
            </styles.aboutText>
        </styles.about>
    )
}

export default About