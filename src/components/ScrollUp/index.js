import Styled from 'styled-components'
import React from 'react'
import ScrollToTop from 'react-scroll-up'
import {media} from '@/style/style'

const StyledScrollUp = Styled.div`
    font-size: 30px;
    color: #1c93e0;    
`

const ScrollUp = () => (
    <ScrollToTop showUnder={160}>
        <StyledScrollUp>
            <i className="far fa-arrow-alt-circle-up" />
        </StyledScrollUp>
    </ScrollToTop>
)

export default ScrollUp