import React from 'react'
import styled from 'styled-components'

export default function Navbar() {
    return (
        <NavbarP>
            <ContainerSection>
                <NavUl>
                    <Navlink href='/'>Home</Navlink>
                    <Navlink href='#'>Portifolio</Navlink>
                    <Navlink href='repos'>Repositorio</Navlink>
                    <Navlink href='https://github.com/Luma8'>
                        <span>GitHub</span>
                    </Navlink>
                </NavUl>
            </ContainerSection>
        </NavbarP>
    )
}

const NavbarP = styled.nav`
    width: 100%;
    color: white;
    background-color: #242323;
    display: flex;
    justify-content: center;
    opacity: 0.8;
    position: fixed;
    padding: 1% 0;
`
const ContainerSection = styled.div `
    width: 50%;
`

const NavUl = styled.ul `
    list-style: none;
`
const Navlink = styled.a `
    
`