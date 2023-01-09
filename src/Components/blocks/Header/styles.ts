import styled from 'styled-components'

const header = styled.header`
    top: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 5rem;
    background: #000;
    position: fixed;

    @media (max-width: 1100px) {
        justify-content: space-between;
        align-items: flex-start;
    }

    nav {
        display: flex;
        justify-content: space-between;
        width: 35rem;
        font-size: 1.25rem;

        @media (max-width: 1100px) {
            display: none;
        }
    }

    img {
        height: 2.5rem;
        width: 2.5rem;
        
        @media (max-width: 1100px) {
            margin-left: 2rem;
            margin-top: 1.5rem;
        }
    }
`

const link = styled.a`
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #ff3a5e;
        transform: scale(1.05);
    }
`

const social = styled.div`
    display: flex;
    justify-content: space-between;
    width: 10rem;

    .social-icon {
        height: 1.5rem;
        width: 1.5rem;
        color: #fff;
        transition: all 200ms linear; 
        
        &:hover {
            color: #ff3a5e;
        }
    }

    @media (max-width: 1100px) {
        display: none;
    }
`

const mobileMenu = styled.div<{isActive: boolean}>`
    display: none;

    @media (max-width: 1100px) {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        border-radius: 0.5rem;
        height: fit-content;
        margin: 1.5rem 2rem 0 0;
    }
    
    nav {
        display: flex;
        flex-direction: column;
        width: fit-content;
        height: fit-content;
        background: #202024;
        padding: 0.5rem 1.25rem;
        margin-top: 0.5rem;
        border-radius: 0.25rem;
    }

    a {
        font-family: 'Roboto', sans-serif;
        color: #fff;
        text-align: center;
        font-size: 1rem;
        margin-top: 1rem;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            transform: scale(1.1);
        }
    }
    
    span {
        border-radius: 50%;
        cursor: pointer;
        padding: 0.5rem;
        width: 1.5rem;
        background-color: ${props => props.isActive ? "#202024": ""}; 

        .icon {
            height: 1.5rem;
            width: 1.5rem;
            color: #fff;
        }


        &:hover {
            background-color: #202024;
        }
    }
`

const mobileSocial = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 1rem;
    width: 100%;
    border-top: 2px solid #fff;

    .social-icon {
        height: 1.1rem;
        width: 1.1rem;
        color: #fff;
        transition: all 200ms linear; 
        
        &:hover {
            color: #ff3a5e;
        }
    }
`

export default {
    header,
    link,
    social,
    mobileMenu,
    mobileSocial
}