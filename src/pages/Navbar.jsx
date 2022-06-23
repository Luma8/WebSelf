import React from 'react'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsFillSunFill, BsFillMoonStarsFill  } from 'react-icons/bs'

export default function Navbar({ toggleTheme, theme }) {

    return (
        <NavbarP>
            <Hamburger className='d-md-none'>
                <GiHamburgerMenu color='#CBDAD5' size={'30px'}/>
            </Hamburger>
            <ToggleContainer>
                <ToggleThemesButton
                    onClick={toggleTheme}
                >
                    { theme.title === 'light' ? <BsFillMoonStarsFill  className="toggle-button" size={'25px'} /> : <BsFillSunFill className="toggle-button" size={'25px'} />}
                </ToggleThemesButton>
            </ToggleContainer>
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
    background-color: ${props => props.theme.color.secondary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    opacity: 0.8;
    position: fixed;
    padding: 1% 0;
`
const Hamburger = styled.button`
    border: none;
    top: 15%;
    background-color: transparent;
`
const ToggleContainer = styled.div`
    
`
const ToggleThemesButton = styled.button`
    border: 1px solid ${props => props.theme.color.toggleButton};
    background-color: ${props => props.theme.color.toggleBackground};
    border-radius: 5px;
    .toggle-button {
        color: ${props => props.theme.color.toggleButton};
    }
    
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