import styled from "styled-components"

const projects = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40rem;
    align-items: center;
    background-color: #000;
    color: #fff;

    h2 {
        width: 68rem;
        margin-top: 2rem;
        font-weight: bold;
        font-size: 3rem;
        color: #ff3a5e;
    }
`

const project = styled.div`
    display: flex;
    justify-content: space-between;
    height: 10rem;
    width: 68rem;
    margin-top: 4rem;
`

const selectProject = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 17rem;
    height: fit-content;
    background: #202024;
`

const selectProjectButton = styled.button<{active: boolean}>`
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

const imagePreview = styled.div`
    img {
        border-radius: 1rem;
        width: 20rem;
        height: 12rem;
    }
`

const wrapDescription = styled.div`
    width: 26rem;
    height: fit-content;
    border-radius: 1rem;
    padding: 1rem;

    h3 {
        font-size: 1.75rem;
    }

    p {
        font-size: 1.1rem;
        margin: 2rem 0;
    }

    ul {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;

        li {
            background: #ff3a5e;
            border-radius: 0.25rem;
            padding: 0.25rem 0.5rem;
            margin-right: 0.5rem;
            color: #fff;
        }
    }
`

export default {
    projects,
    project,
    imagePreview,
    selectProject,
    selectProjectButton,
    wrapDescription
}