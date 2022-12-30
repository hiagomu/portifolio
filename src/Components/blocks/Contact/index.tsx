import styles from './styles'

const Contact: React.FC = () => {
    return (
        <styles.contact id="contact">
            <h2>Fale comigo</h2>
            <styles.form action="submit">
                <input type="text" placeholder='Digite seu nome completo ou nome da empresa...' />
                <input type="email" placeholder='Digite seu email...'/>
                <textarea name="" id="" placeholder='Digite sua mensagem...'/>
                <button>Enviar</button>
            </styles.form>
        </styles.contact>
    )
}

export default Contact