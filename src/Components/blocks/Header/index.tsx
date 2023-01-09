import styles from "./styles"
import logo from '../../../assets/logo.png'
import React, { useState } from 'react'

import {
    FaGithub as GithubIcon,
    FaTwitter as TwitterIcon
} from 'react-icons/fa'
import {
    FiMenu as MenuIcon
} from 'react-icons/fi'
import {
    ImLinkedin2 as LinkedinIcon
} from 'react-icons/im'

const Header: React.FC = () => {

    const [isActive, setIsActive] = useState(false)

    return (
        <styles.header>
            <img src={logo} alt="" />
            <nav>
                <styles.link href='#about'>Sobre mim</styles.link>
                <styles.link href='#skills'>Conhecimentos</styles.link>
                <styles.link href='#projects'>Projetos</styles.link>
                <styles.link href='#contact'>Fale comigo</styles.link>
            </nav>
            <styles.mobileMenu isActive={isActive}>
                <span
                    onClick={() => setIsActive(!isActive)}
                >
                    <MenuIcon  className="icon"/>
                </span>
                {
                    isActive &&
                    <nav>
                        <styles.link
                            href='#about'
                            onClick={() => setIsActive(!isActive)}
                        >
                            Sobre mim
                        </styles.link>
                        <styles.link
                            href='#skills'
                            onClick={() => setIsActive(!isActive)}
                        >
                            Conhecimentos
                        </styles.link>
                        <styles.link
                            href='#projects'
                            onClick={() => setIsActive(!isActive)}
                        >
                            Projetos
                        </styles.link>
                        <styles.link
                            href='#contact'
                            onClick={() => setIsActive(!isActive)}                            
                        >
                            Fale comigo
                        </styles.link>
                        <styles.mobileSocial>
                            <a href="https://github.com/hiagomu" target="_blank">
                                <GithubIcon className='social-icon'/>
                            </a>
                            <a href="https://www.linkedin.com/in/hiago-murilo/" target="_blank">
                                <LinkedinIcon className='social-icon'/>
                            </a>
                            <a href="https://twitter.com/hiagomux" target="_blank">
                                <TwitterIcon className='social-icon'/>
                            </a>
                        </styles.mobileSocial>
                    </nav>
                }
            </styles.mobileMenu>
            <styles.social>
                <a href="https://github.com/hiagomu" target="_blank">
                    <GithubIcon className='social-icon'/>
                </a>
                <a href="https://www.linkedin.com/in/hiago-murilo/" target="_blank">
                    <LinkedinIcon className='social-icon'/>
                </a>
                <a href="https://twitter.com/hiagomux" target="_blank">
                    <TwitterIcon className='social-icon'/>
                </a>
            </styles.social>
        </styles.header>
    )
}

export default Header