import React, {Component} from 'react'
import styled from 'styled-components'
import {media} from '@/style/style'
import avatar from '../../assets/duck.jfif'
import { Link } from 'react-router-dom'

const Container  = styled.div`
    width: 100%;
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9;
    background-color: #323436;
    display: none;

    ${media.mobile} {
        display: block;
    }
`

const Title = styled.h1`
    text-align: center;
    font-size: 16px;
    
    & a {
        color: #999;
    }
`

const Bar = styled.div`
    width: 50px;
    height: 50px;
    position: absolute;
    left: 0;
    top: 0;
    & i {
        top: 25px;
        opacity: 1;    
    }
    &:after {
        content: '';   
        top: 16px;
    }
    &:before {
        content: '';
        top: 17px;
    }
    & i, &:after, &:before {                   
            width: 22px;
            height: 1px;
            position: absolute;
            left: 14px;
            background: #999;
            transition: all .2s cubic-bezier(.4,.01,.165,.99) .3s;             
    }   
`

const Avatar = styled.a `
    position: absolute;
    right: 10px;
    top: 10px;

    &, & img {
        width: 30px;
        height: 30px;
        border-radius: 30px;
        overflow: hidden;                
    }

    & img {
        vertical-align: baseline;
    }
`

class Header extends Component {
    render() {
        return (
            <Container>
                <Bar>
                    <i></i>
                </Bar>
                <Title>
                    <Link to="/">Caidc的博客</Link>
                </Title>
                <Avatar>
                    <a>
                        <img src={avatar}></img>
                    </a>
                </Avatar>
            </Container>
        )
    }
}

export default Header