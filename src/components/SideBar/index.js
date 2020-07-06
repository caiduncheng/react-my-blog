import React, {Component} from 'react'
import styled from 'styled-components'
import avatar from '../../assets/duck.jfif'

const StyledSideBar = styled.div`
    width: 250px;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #202020;
    overflow: auto;
    z-index: 1;
`

const Profile = styled.div`
    padding-top: 40px;
    padding-bottom: 10px;

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
`



class SideBar extends Component {
    render() {
        return (
            <StyledSideBar>
                <Profile>
                    <a href="/">
                        <img src={avatar} alt="avatar"/>
                    </a>
                    <span>Caidc的博客</span>
                </Profile>
                <List>
                    <Item>
                        <a>
                            <i className="iconfont icon-home"></i>
                            <span>首页</span>
                        </a>
                    </Item>
                    <Item>
                        <a>
                            <i className="iconfont icon-archive"></i>
                            <span>归档</span>
                        </a>
                    </Item>
                    <Item>
                        <a>
                            <i className="iconfont icon-tags"></i>
                            <span>标签</span>
                        </a>
                    </Item>
                    <Item>
                        <a>
                            <i className="iconfont icon-user1"></i>
                            <span>关于</span>
                        </a>
                    </Item>
                </List>
            </StyledSideBar>
        )
    }
}

export default SideBar