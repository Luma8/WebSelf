import React from 'react'
import styled from 'styled-components'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiReact } from 'react-icons/di'
import { SiJavascript } from 'react-icons/si'
import { RiVuejsFill } from 'react-icons/ri'
import { TbCSharp } from 'react-icons/tb'

export default function Home() {
    return (
        <Container>
            <ContainerProfile>
                <ContainerText>
                    <Name>LUCAS MATHEUS DE ALMEIDA MONTEIRO</Name>
                    <Role>FRONT-END DEVELOPER / GAMEDEV &#128377;</Role>
                </ContainerText>
                <ProfilePicture src="https://avatars.githubusercontent.com/u/81659487?v=4" alt="" />
            </ContainerProfile>
            <Name className='text-center fs-5 mt-3'>
                ABOUT ME
            </Name>
            <ContainerAbout>
                <Role>
                    hello my name is lucas i am a front-end developer and game developer, when i was 13 years old i saw a little web development and game development a while later in 2017 with 17 years old i started to study at college in computer science course, by I studied HTML CSS JS Vanilla and started developing my first games with Unity 3d and GameMaker Studio 2.
                </Role>
            </ContainerAbout>
            <Name className='text-center fs-5 mt-3'>
                SKILLS
            </Name>
            <ContainerSKill>
                <AiFillHtml5 size={'50px'} color={'red'} />
                <DiCss3 size={'50px'} color={'#1aaace'} />
                <SiJavascript className='ms-2 me-2' size={'43px'} color={'yellow'} />
                <RiVuejsFill size={'50px'} color={'#71eb71'} />
                <DiReact size={'50px'} color={'#6acde6'} />
                <TbCSharp size={'50px'} color={'#6ae68f'} />
            </ContainerSKill>
        </Container>
    )
}

const Container = styled.div`
    padding-top: 100px;
    width: 100%;
    color: ${props => props.theme.color.text};
    background-color: ${props => props.theme.color.background};
`
const ContainerAbout = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
`
const ContainerProfile = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`
const ContainerText = styled.div`
    text-align: center;
`
const ProfilePicture = styled.img`
    border-radius: 100%;
    width: 100px;
    border: 2px solid ${props => props.theme.color.secondary};
`
const Name = styled.h4`
    font-size: 20px;
    font-weight: bold;
`
const Role = styled.h5`
    font-size: 14px;
    max-width: 80vw;
`
const ContainerSKill = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.color.secondary};
`