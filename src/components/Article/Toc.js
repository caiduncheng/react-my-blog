import React, { Components } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    float: right;
    border: 1px solid #e2e2e2;
    font-size: 14px;
    margin: 0 0 15px 20px;
    max-width: 260px;
    min-width: 120px;
    padding: 6px;
    background: #fff;
    line-height: 1.8;    
    
    &::before {
        content: '文章目录';
        font-weight: bold;
        border-bottom: 1px solid #e2e2e2;
        display: block;
    }
`

const List = styled.ul`
    margin: 15px 0 16px 25px;
    
`

const Toc = props =>(
    <Container>
        <List>
            {
                props.directories.map(item => (
                    <li>
                        <a>
                            {item}
                        </a>                        
                    </li>
                ))
            }
        </List>
    </Container>        
)

export default Toc