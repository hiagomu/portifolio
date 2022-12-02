import styled from 'styled-components'

const header = styled.header`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 5rem;
    background: #000;

    nav {
        display: flex;
        justify-content: space-between;
        width: 35rem;
        font-size: 1.25rem;
    }

    img {
        height: 2.5rem;
        width: 2.5rem;
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


`


export default {
    header,
    link,
    social
}