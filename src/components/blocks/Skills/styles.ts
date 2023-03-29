import styled from "styled-components"

const skills = styled.section`
    height: fit-content;
    min-height: 40rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #fff;

    h2 {
        width: 70%;
        margin-top: 2rem;
        font-weight: bold;
        font-size: 3rem;
        color: #ff3a5e;

        @media (max-width: 520px) {
            font-size: 2.5rem;
            text-align: center;
        }
    }

    @media (max-width: 1100px) {
        height: fit-content;
    }
`

const stackWrapper = styled.div`
    display: flex;
    gap: 2rem;
    margin-top: 5rem;
    padding-bottom: 2rem;

    @media (max-width: 1100px) {
        flex-direction: column;
        align-items: center;
    }
`

const selectStack = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 25rem;
    height: fit-content;
    background: #202024;

    @media (max-width: 1100px) {
        margin-bottom: 1rem;
        width: 24rem;        
    }

    @media (max-width: 520px) {
        width: 18rem; 
    }
`

const selectStackButton = styled.button<{active: boolean}>`
    height: 4rem;
    padding: 0 2rem;
    width: 100%;
    text-align: start;
    font-size: 1.25rem;
    border: none;
    border-left: ${props => props.active ? '4px solid #ff3a5e' : '4px solid #000'};
    color: ${props => props.active ? '#ff3a5e' : '#fff'};
    background: none;
    cursor: pointer;
`

const skillsBox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: start;
    flex-direction: column;
    height: fit-content;
    width: 23rem;
    padding: 2rem;
    background-color: #000;

    @media (max-width: 1100px) {
        margin-bottom: 2rem;
        width: 20rem;        
    }

    @media (max-width: 520px) {
        width: 14rem; 
    }

    h3 {
        font-size: 1.5rem;
        color: #ff3a5e;
        margin-bottom: 2rem;
    }

    li {
        font-size: 1.25rem;
        margin-bottom: 1rem;
        display: flex;
        gap: 0.5rem;
    }

    .verified {
        color: #ff3a5e;
    }
`

export default {
    skills,
    stackWrapper,
    selectStack,
    selectStackButton,
    skillsBox
}