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
                        <a href="https://drive.google.com/uc?id=10RCIU1ayCMtg83t0atx5a3r-foPwtF_p&export=download">
                            <button className='curriculum'>BAIXAR CV</button>
                        </a>
                        <a href="http://api.whatsapp.com/send?phone=5591991244519">
                            <button>CONTATO</button>
                        </a>
                    </styles.wrapButtons>
                </styles.wrapWelcome>
            </styles.welcome>
        </styles.centerWelcome>
    ) 
}

export default Welcome