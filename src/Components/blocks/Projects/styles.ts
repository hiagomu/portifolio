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
        width: 70%;
        margin-top: 2rem;
        font-weight: bold;
        font-size: 3rem;
        color: #ff3a5e;
    }

    @media (max-width: 1100px) {
        height: fit-content;
    }
`

const project = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin-top: 4rem;

    @media (max-width: 1100px) {
        flex-direction: column;
        align-items: center;        
    }
`

const selectProject = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 17rem;
    height: fit-content;
    background: #202024;

    @media (max-width: 1100px) {
        margin-bottom: 1rem;
        width: 24rem;        
    }
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
    display: flex;
    position: relative;
    height: fit-content;
    
    
    img {
        width: 24rem;
        height: 16rem;
        object-fit: cover;
    }

    &:hover > .fade-background {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .fade-background {
        display: none;
        cursor: pointer;
        gap: 2rem;
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .link-icon {
        color: #ff3a5e;
        height: 2rem;
        width: 2rem;

        &:hover {
            color: #fff;
            transform: scale(1.1);
        }
    }

`

const wrapDescription = styled.div`
    width: 26rem;
    height: 14rem;
    border-radius: 1rem;
    padding: 1rem;

    @media (max-width: 1100px) {
        margin-bottom: 2rem;
        width: 24rem;        
    }

    h3 {
        font-size: 1.75rem;
    }

    p {
        font-size: 1.1rem;
        margin: 2rem 0;
        height: 4rem;
    }

    ul {
        display: flex;
        align-items: end;
        flex-wrap: wrap;
        height: 4rem;

        li {
            background: #ff3a5e;
            border-radius: 0.25rem;
            padding: 0.25rem 0.5rem;
            margin: 0.5rem 0.5rem 0 0;
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