import React from 'react'
import Styled from 'styled-components'

const StyledFooter = Styled.footer`
    text-align: center;
    font-size: 18px;
    line-height: 2;
    color: #3c3b3b;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100px;
    width: 100%;
`



const Footer = () => (
    <StyledFooter>
        @2020 CAIDC
    </StyledFooter>
)

export default Footer