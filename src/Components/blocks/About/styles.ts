import styled from "styled-components";

const about = styled.section`
    height: 40rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #fff;

    img {
        height: 20rem;
        width: 20rem;
        border-radius: 0.5rem;
    }
`

const aboutText = styled.div`
    width: 30rem;
    
    h2 {
        margin-bottom: 2rem;
        font-weight: bold;
        font-size: 3rem;
        color: #ff3a5e;
    }

    p {
        font-size: 1.3rem;
        letter-spacing: 0.1rem;
    }
`

export default {
    about,
    aboutText
}