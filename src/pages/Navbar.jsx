import React from 'react'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Navbar() {
    return (
        <NavbarP>
            <Hamburger>
                <GiHamburgerMenu color='#CBDAD5' size={'30px'}/>
            </Hamburger>
            <NavUl className='d-md-inline d-none'>
                <Navlink href='/'>
                    <span>Home</span>
                </Navlink>
                <Navlink href='#'>
                    <span>Portifolio</span>
                </Navlink>
                <Navlink href='repos'>
                    <span>Repositorio</span>
                </Navlink>
                <Navlink href='https://github.com/Luma8'>
                    <span>GitHub</span>
                </Navlink>
            </NavUl>
        </NavbarP>
    )
}

const NavbarP = styled.nav`
    width: 100%;
    background-color: #34344E;
    display: flex;
    justify-content: center;
    opacity: 0.8;
    position: fixed;
    padding: 1% 0;
`
const Hamburger = styled.button`
    border: none;
    top: 15%;
    background-color: transparent;
`
const NavUl = styled.ul `
    list-style: none;
`
const Navlink = styled.a `
    color: ${props => props.theme.color.text_nav};
    text-decoration: none;
    margin: 0 20px;
    &:hover {
        color: ${props => props.theme.color.text_nav_hover}
    }
`