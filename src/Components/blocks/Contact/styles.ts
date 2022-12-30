import styled from "styled-components"

const contact = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40rem;
    align-items: center;
    background-color: #000;
    color: #fff;

    h2 {
        width: 68rem;
        font-weight: bold;
        font-size: 3rem;
        color: #ff3a5e;
        margin: 2rem 0 5rem 0;
    }
`

const form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input, textarea {
        height: 1.75rem;
        font-family: 'Fira Sans', sans-serif;
        width: 30rem;
        padding: 0.5rem;
        border: none;
        border-radius: 4px;
        margin-bottom: 1.25rem;
        font-size: 1.1rem;
        background-color: #202024;
        color: #fff;
    }

    textarea {
        height: 10rem;
    }

    button {
        background: none;
        font-size: 1rem;
        font-weight: 600;
        border: 2px solid #ff3a5e;
        border-radius: 5px;
        color: #fff;
        height: 2.5rem;
        width: 10rem;
        cursor: pointer;

        &:hover {
            background: #ff3a5e;
        }
    }
`

const emailStatus = styled.p<{success: boolean}>` 
    margin-top: 1rem;
    color: ${props => props.success ? '#00ff00' : '#ff3a5e'}
`


export default {
    contact,
    form,
    emailStatus
}