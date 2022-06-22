import React from 'react'
import styled from 'styled-components'

export default function Home() {
    return (
        <Container>
            {/* <ContainerSection> */}
                {/* <div>
                    <span>Hellow</span>
                </div> */}
                <div className='d-flex justify-content-center align-items-center mt-1'>
                    <div className='text-center me-2'>
                        <Name className='fw-bold'>LUCAS MATHEUS DE ALMEIDA MONTEIRO</Name>
                        <h5>FRONT-END DEVELOPER / GAMEDEV &#128377;</h5>
                    </div>
                    <ProfilePicture src="https://avatars.githubusercontent.com/u/81659487?v=4" alt="" />
                </div>
            {/* </ContainerSection> */}
        </Container>
    )
}

const Container =  styled.div `
    padding-top: 100px;
    width: 100%;
    height: 90vh;
    // display: flex;
    // justify-content: center;
    color: white;
    background-color: #272626;
`
/*const ContainerSection = styled.div `
    width: 50%;
`*/

const ProfilePicture = styled.img `
    border-radius: 100%;
    width: 100px;
    border: 2px solid #424040;
`
const Name = styled.h4 `

`