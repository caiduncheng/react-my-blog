import React from 'react'
import {colorStyle, colorName} from '../../utils'
import Styled from 'styled-components'

const StyledTag = Styled.div`
    display: inline-block;
    padding: 0 8px;
    margin-right: 7px;
    font-size : 12px;
    background-color: #fafafa;
    border: 1px solid #d9d9d9;
    line-height: 1.5;
    border-radius: 4px;    
    cursor: ${({ pointer }) => pointer ? 'pointer' : undefined };

    & a, & span {
        color: ${({ color }) => color && colorStyle[color]['color']};
    }

    background-color: ${({ color }) => color &&  colorStyle[color]['background-color']};
    border-color: ${({ color }) => color && colorStyle[color]['border-color']};

`


class Tag extends React.Component {
    constructor(props) {
        super(props)

        let color = undefined

        if(this.props.random) {
            color = colorName[Math.floor((Math.random() * 100) % 11)]
        }

        this.state = {
            color
        }
    }
    render() {
        return (
            <StyledTag color={this.state.color} pointer={this.props.pointer}>
                <span>
                    {this.props.children}
                </span>
            </StyledTag>
        )
    }
}

export default Tag