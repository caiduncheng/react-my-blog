import React from 'react'
import styled, { withTheme } from 'styled-components'
import Container from '../Container/index'
import { NavLink } from 'react-router-dom'

const activeLinkClassName = 'active-link'
const responsiveTopNavClassName = 'reponsize-top-nav'

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

    & .icon {
        display: none;
    }

    @media only screen and (max-width: 575px) {
        & a:not(.${activeLinkClassName}) {
            display: none;
        }

        & a.icon {
            display: block;
            float: right;
        }

        &.${responsiveTopNavClassName} {
            padding-top: 50px;
        }

        &.${responsiveTopNavClassName} a {
            display: block;
            float: none;
        }

        &.${responsiveTopNavClassName} .icon {
            position: absolute;
            top: 0;
            right: 0;
        }

        &.${responsiveTopNavClassName} a.${activeLinkClassName} {
            width: 100%;
            position: absolute;
            left: 0;
            top: 0;
        }


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

const StyledIcon = styled.a`
    font-size: 15px;
`

class TopNav extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            className : ''
        }

        this.onIconClick = this.onIconClick.bind(this)
        this.onLinkClick = this.onLinkClick.bind(this)
    }

    onIconClick(e) {
        e.preventDefault()
        if(this.state.className === '') {
            this.setState({
                className: responsiveTopNavClassName
            })
        } else {
            this.setState({
                className: ''
            })
        }
    }

    onLinkClick() {
        this.setState({
            className: ''
        })
    }

    render() {
        return (
            <StyledBackground fluid lrPadding={0}>
                <Container lrPadding={0}>
                    <StyledTopNav className={this.state.className}>
                        {this.props.navList.map(item => (
                            <NavLink
                                key={item.name}
                                to={item.to}
                                activeClassName={activeLinkClassName}
                                onClick={this.onLinkClick}
                                activeStyle={activeStyle}>
                                <i className={item.icon} />
                                &nbsp;
                                {item.name}
                            </NavLink>
                        ))}
                        <StyledIcon
                            className="icon"
                            href="#ignore"
                            onClick={this.onIconClick}>
                            &#9776;
                        </StyledIcon>
                    </StyledTopNav>
                </Container>
            </StyledBackground>
        )
    }
}

export default TopNav