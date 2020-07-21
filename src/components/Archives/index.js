import React, {Component} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { StyledArticle, TitleStyle } from '@/style/style'

const List = styled.ul`
    margin: 15px 0 0 25px;
`

const Date = styled.span`
    color: #999;
    font-size: 14px;
    font-style: italic;
`

const Title = styled.h1`
    ${TitleStyle}
`

class Archives extends Component {
    render() { 
        return (    
            <StyledArticle>
                <Title>
                    归档
                </Title>
                <div className="content">
                    <h3>2020年04月 (7)</h3>
                    <List>
                        <li>
                            <span>谈谈区块链</span>
                            &nbsp;
                            <Date>2020年7月16日 </Date>
                        </li>
                    </List>
                </div>
            </StyledArticle>
        )
    }
}

export default Archives