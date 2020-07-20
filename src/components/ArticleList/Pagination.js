import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.nav`
    width:  100%;
    line-height: 20px;
    position: relative;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #ddd;
    padding: 20px 0;
    overflow: hidden;
`

const ArchiveLink = styled.div`
    text-align: center;
    width: 80px;
    margin: auto;
`

class Pagination extends Component {
    render() {
        return (
            <Container>
               <ArchiveLink>
                   <Link to="/archives">博客归档</Link>
               </ArchiveLink>
            </Container>
        )
    }
}

export default Pagination