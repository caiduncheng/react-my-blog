import React from 'react'
import { Divider } from 'antd'
import {StyledProfileCard} from '../ProfileCard'
import Styled from 'styled-components'

const StyledTagCard = StyledProfileCard


class TagCard extends React.Component {
    render() {
        return (
        <StyledTagCard>
            <Divider orientation="left">标签</Divider>
        </StyledTagCard>
        )
    }
}

export default TagCard