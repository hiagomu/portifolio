import styles from "./styles"

const Welcome: React.FC = () => {
    return (
        <styles.centerWelcome>
            <styles.welcome>
                <styles.wrapWelcome>
                    <span>HELLO WORLD 👋🏾</span>
                    <h1>Eu sou Hiago,</h1>
                    <p>Desenvolvedor Front-end.</p>
                    <styles.wrapButtons>
                        <button className='cv'>BAIXAR CV</button>
                        <button>CONTATO</button>
                    </styles.wrapButtons>
                </styles.wrapWelcome>
            </styles.welcome>
        </styles.centerWelcome>
    ) 
}

export default Welcome