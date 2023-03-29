import styled from "styled-components"

const centerWelcome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40rem;
    background-color: #000;
    color: #fff;
`

const welcome = styled.div`
    width: 70rem;
    display: flex;
    justify-content: center;

`

const wrapWelcome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        display: block;
        color: #ff3a5e;
        font-weight: bold;
        margin-bottom: 1rem;
        font-size: 1.25rem;
    }

    h1 {
        font-size: 5rem;
        font-weight: bold;
        margin-bottom: 1.75rem;

        @media (max-width: 600px) {
            font-size: 4rem;
        }

        @media (max-width: 520px) {
            font-size: 3rem;
        }
    }

    p {
        font-size: 1.75rem;
        color: rgba(255, 255, 255, 0.66);

        @media (max-width: 520px) {
            font-size: 1.5rem;
        }
    }

    img {
        width: 30rem;
    }
`

const wrapButtons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 22rem;
    margin-top: 3rem;

    @media (max-width: 520px) {
        width: 18rem;
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

        @media (max-width: 520px) {
            width: 8rem;
        }
    }

    .cv {
        background-color: #ff3a5e;
    }
`

export default {
    centerWelcome,
    welcome,
    wrapWelcome,
    wrapButtons
}