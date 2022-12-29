import styled from "styled-components"

const skills = styled.section`
    height: 40rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #fff;

    h2 {
        width: 68rem;
        margin-top: 2rem;
        font-weight: bold;
        font-size: 3rem;
        color: #ff3a5e;
    }
`

const stackWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60rem;
    margin-top: 5rem;
`

const selectStack = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 25rem;
    height: fit-content;
    background: #202024;
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
    height: 23rem;
    width: 23rem;
    padding: 2rem;
    background-color: #000;

    h3 {
        font-size: 1.5rem;
        color: #ff3a5e;
        margin-bottom: 2rem;
    }

    li {
        font-size: 1.25rem;
        margin-bottom: 1rem;
    }
`

export default {
    skills,
    stackWrapper,
    selectStack,
    selectStackButton,
    skillsBox
}