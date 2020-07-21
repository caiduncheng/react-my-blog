import React, {Component} from 'react'
import styled from 'styled-components'
import {media} from '@/style/style'
import avatar from '../../assets/duck.jfif'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

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
        opacity: ${({sideBarOpened}) => sideBarOpened ?  '0' : 1}
    }
   
    & i, &:after, &:before {                   
            width: 22px;
            height: 1px;
            position: absolute;
            left: 14px;
            background: #999;
            transition: all .2s cubic-bezier(.4,.01,.165,.99) .2s;             
    }   

    &:after {
        content: '';   
        bottom: ${({sideBarOpened}) => sideBarOpened ?  '24px' : '16px'};
        width: ${({sideBarOpened}) => sideBarOpened ?  '24px' : undefined};
        transform: ${({sideBarOpened}) => sideBarOpened ?  'rotate(45deg)' : undefined}
    }  

    &:before {
        content: '';
        top: ${({sideBarOpened}) => sideBarOpened ?  '25px' : '17px'};
        transform: ${({sideBarOpened}) => sideBarOpened ?  'rotate(-45deg)' : undefined};
        width: ${({sideBarOpened}) => sideBarOpened ?  '24px' : undefined};
    }
`

const Avatar = styled.div `
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

@connect(
    state => state.app
)
class Header extends Component {

    toggleSideBar = () => {
        this.props.dispatch({
            type: 'TOGGLE_SIDE_BAR',
            payload: !this.props.sideBarOpened
        })
        document.body.classList.toggle('side')

    }

    render() {
        return (
            <Container>
                <Bar onClick={this.toggleSideBar} sideBarOpened={this.props.sideBarOpened}>
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