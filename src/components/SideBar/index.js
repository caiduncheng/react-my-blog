import React, {Component} from 'react'
import styled from 'styled-components'
import avatar from '../../assets/duck.jfif'
import {Link} from 'react-router-dom'
import { media } from '@/style/style'
import { connect } from 'react-redux'

const StyledSideBar = styled.nav`
    width: 250px;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #202020;
    overflow: auto;
    z-index: 1;
    
    ${media.pad} {
        & {
            width: 75px;
        }
    }

    ${media.mobile} {
        & {
            transition: transform .2s cubic-bezier(.4,.01,.165,.99);
        }
        &.behavior {
            transform: translate3D(-250px,0,0);
        }
    }
`

const Profile = styled.div`
    padding-top: 40px;
    padding-bottom: 10px;

    ${media.pad} {
        padding-top: 20px;
    }

    & a {
        display: block;
        margin: 0 auto;
    }

    & a, & img {
        width: 140px;
        height: 140px;
        border-radius: 70px;
        overflow: hidden;
    }
    /* 头像下方名称 */
    & span {
        color: #999;
        display: block;
        padding: 10px 0;
        text-align: center;
        font-size: 18px;
    }

    ${media.pad} {
        & span {
            display: none;
        }

        & a, & img {
            width: 40px;
            height: 40px;
            border-radius: 40px;
        }
    }

    ${media.mobile} {
        & span {
            display: none;
        }
    }
`

const List = styled.ul`
    margin-bottom: 0 0 20px;     
`

const Item = styled.li`
    display: block;
    width: 100%;
    height: 45px;
    line-height: 45px;
    font-size: 16px;
    & a {
        padding-left: 25px;
        display: block;
        color: #999;
        &:hover {
            color: rgba(153,153,153,.8);
        }
        & span, & i {
            display: inline-block;
            vertical-align: middle;
        }

        & i {
            font-size: 20px;
            width: 25px;
            height: 45px;
            text-align: center;
            margin-right: 25px;
        }
    }    

    ${media.pad} {
        & a {
            padding: 0;
            & i {
                font-size: 18px;
                display: block;
                margin: 0 auto;
            }

            & span {
                display: none;
            }
        }
    }
`

const SideBarMask = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    overflow: hidden;
    display: ${({sideBarOpened}) => sideBarOpened ? 'block' : 'none'};
    background-color: rgba(255, 255, 255, 0);
`

@connect(
    state => state.app
)
class SideBar extends Component {
    render() {
        return (
            <>
                {/* <SideBarMask sideBarOpened={this.props.sideBarOpened}/> */}
                <StyledSideBar className="behavior" sideBarOpened={this.props.sideBarOpened}>               
                    <Profile>
                        <a href="/">
                            <img src={avatar} alt="avatar"/>
                        </a>
                        <span>Caidc的博客</span>
                    </Profile>
                    <List>
                        <Item>
                            <Link to="/">
                                <i className="iconfont icon-home"></i>
                                <span>首页</span>
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/archives">
                                <i className="iconfont icon-archive"></i>
                                <span>归档</span>
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/tags">
                                <i className="iconfont icon-tags"></i>
                                <span>标签</span>
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/about">
                                <i className="iconfont icon-user1"></i>
                                <span>关于</span>
                            </Link>
                        </Item>
                    </List>
                </StyledSideBar>
            </>
        )
    }
}

export default SideBar