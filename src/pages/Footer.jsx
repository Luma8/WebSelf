import React from 'react'
import styled from 'styled-components'

export default function Footer() {
    return (
        <FooterP>© 2022 Lucas Matheus. All Rights Reserved.</FooterP>
    )
}

const FooterP = styled.footer `
    overflow: hidden;
    white-space: nowrap;
    background-color: #34344E;
    color: gray;
    text-align: center;
`
