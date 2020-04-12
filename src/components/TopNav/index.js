import React from 'react'
import styled, { withTheme } from 'styled-components'
import Container from '../Container/index'
import { NavLink } from 'react-router-dom'


const activeStyle = {
    color: 'white',
    backgroundColor: '#1e90ff'
}

const StyledTopNav = styled.nav`
    overflow: hidden;

    background-color: #fff;
    position: relative;
    min-height: 22px;
    font-weight: 300;


    & a {
        float: left;
        display: block;
        padding: 14px 16px;
        color: #444;
        font-size: 17px;
        line-height: 22px;
        transition-duration: .3s;
    }

    & a:hover {
        background-color: #1e90ff;
        /* color: #FFFFFF; */
    }

    & i {
        font-size: 12px;
    }
`

const StyledBackground = styled(Container)`
    position: absolute;
    top: 0;
    left: 0;

    background: #FFFFFF;
    border-bottom: 1px solid #d6d3d3;
    border-top: 3px solid #268ffb;

`

class TopNav extends React.Component {
    render() {
        return (
            <StyledBackground fluid>
                <Container>
                    <StyledTopNav>
                        {this.props.navList.map(item => (
                            <NavLink
                                key={item.name}
                                to={item.to}
                                activeStyle={activeStyle}>
                                <i className={item.icon} />
                                &nbsp;
                                {item.name}
                            </NavLink>
                        ))}
                    </StyledTopNav>
                </Container>
            </StyledBackground>
        )
    }
}

export default TopNav