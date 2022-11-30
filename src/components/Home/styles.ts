import styled from 'styled-components'
import { Link } from 'react-router-dom'

const body = styled.body`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: hsl(0, 0%, 5%);
    font-family: 'Fira Sans', sans-serif;
`

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

const link = styled(Link)`
    text-decoration: none;
    color: #fff;
`

const social = styled.div`
    display: flex;
    justify-content: space-between;
    width: 10rem;

    .social-icon {
        height: 1.5rem;
        width: 1.5rem;
        color: #ff3a5e;
    }

`

const main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: #fff;
`

const welcome = styled.div`
    width: 70rem;
    display: flex;
    justify-content: space-between;

    span {
        display: block;
        color: #ff3a5e;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    h1 {
        font-size: 5rem;
        font-weight: bold;
        margin-bottom: 1.75rem;
    }

    p {
        font-size: 1.75rem;
        color: rgba(255, 255, 255, 0.66);
    }

    img {
        width: 30rem;
    }
`

const wrapButtons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 22rem;
    margin-top: 2rem;

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
    }

    .cv {
        background-color: #ff3a5e;
    }
`

export default {
    body,
    header,
    link,
    social,
    main,
    welcome,
    wrapButtons
}