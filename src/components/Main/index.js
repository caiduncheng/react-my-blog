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

const Content = styled.div`
    font-size: 16px;
    line-height: 1.8;
    & p {
        margin-top: 15px;
    }
`

class Main extends Component {
    render() {
        return (
            <StyledMain>
                <section>
                    <Article>
                        <Title>React</Title>
                        <Content>
                            <p>Ullamco qui in nulla laboris dolor sunt culpa nostrud labore dolor.</p>
                            <p>
                                <a>阅读全文 »</a>
                            </p>
                        </Content>
                    </Article>
                </section>
            </StyledMain>
        )
    }
} 

export default Main