import React, {Component} from 'react'
import styled from 'styled-components'

const StyledMain = styled.div`
    background-color: #ffffff;
    padding-left: 290px;
    padding-right: 40px;
    max-width: 1390px;
`

const Article = styled.article`
    border-bottom: 1px solid #ddd;
    border-top: 1px solid #fff;
    position: relative;
    word-wrap: break-word;
    padding: 30px 0;
`

const Title = styled.h1`
    color: #333333;
    font-size: 2em;
    font-weight: 300;    
    line-height: 35px;
    margin-bottom: 25px;
`


class Main extends Component {
    render() {
        return (
            <StyledMain>
                <section>
                    <Article>
                        <Title></Title>
                    </Article>
                </section>
            </StyledMain>
        )
    }
} 

export default Main