import styles from './styles'
import React, { FormEvent, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {

    const form = useRef(null)
    const [message, setMessage] = useState({
        success: false,
        text: ''
    })

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current!,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
            .then(() => {
                setMessage({
                    success: true,
                    text: 'Email enviado com sucesso! ✅'
                });
            }, () => {
                setMessage({
                    success: false,
                    text: 'Serviço indisponível no momento 😞'
                });
            });
        
        return (document.getElementById('form') as HTMLFormElement).reset()
    };

    return (
        <styles.contact id="contact ">
            <h2>Fale comigo</h2>
            <styles.form
                id="form"
                ref={form}
                onSubmit={sendEmail}
            >
                <input
                    type="text"
                    name="name"
                    placeholder='Digite seu nome completo ou nome da empresa...'
                />
                <input
                    type="email"
                    name="email"
                    placeholder='Digite seu email...'
                />
                <textarea
                    name="message"
                    placeholder='Digite sua mensagem...'
                />
                <button
                    type='submit'
                >
                    Enviar
                </button>
                {
                    message.text.length > 0 && <styles.emailStatus success={message.success}>{message.text}</styles.emailStatus>
                }
            </styles.form>
        </styles.contact>
    )
}

export default Contact