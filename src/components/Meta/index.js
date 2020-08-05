import React from 'react'
import styled from 'styled-components'
import {media} from '@/style/style'

const StyledMeta = styled.div`
    position: relative;
    float: right;
    color: #555;
    font-size: 1.2em;
    line-height: 2;
    width: auto;
    text-align: right;

    ${media.mobile} {
        display: none;
    }

    & .comments a {
        color: #999;
    }

`

const Meta = props => (
    <StyledMeta>
        <span>{ props.author} </span>
        <span>发布于 </span>
        <span>{props.date}</span>
        <div className="comments">
            <a>0 comments</a>
        </div>
    </StyledMeta>
)

export default Meta