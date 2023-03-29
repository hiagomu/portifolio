import styled from "styled-components";

const about = styled.section`
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8rem;
    color: #fff;
    padding: 10rem 0;

    img {
        height: 20rem;
        width: 20rem;
        border-radius: 0.5rem;

        
        @media (max-width: 520px) {
            width: 15rem;
            height: 15rem;
        }
    }

    @media (max-width: 1100px) {
        flex-direction: column;
    }
`

const aboutText = styled.div`
    width: 30rem;

    @media (max-width: 600px) {
        width: 80%;
    }
    
    h2 {
        margin-bottom: 2rem;
        font-weight: bold;
        font-size: 3rem;
        color: #ff3a5e;

        @media (max-width: 1100px) {
            text-align: center;
            font-size: 2.5rem;
        }
    }

    p {
        font-size: 1.3rem;
        letter-spacing: 0.1rem;

        @media (max-width: 600px) {
            font-size: 1rem;
        }
    }
`

export default {
    about,
    aboutText
}