import React from 'react'
import Styled from 'styled-components'

const StyledContentLoaderContainer = Styled.div`
    background-color: #FFFFFF;
    border: 1px solid #FFFFFF;
    padding: 0 20px;
    height: ${({ height }) => height + 'px'};
    box-shadow: 0 4px 16px 0 rgba(0,0,0,0.2);
`

const StyledContentContainer = Styled.div`
    width: ${({ width }) => width + '%'};
    margin-top: 20px;
    margin-bottom: 20px;
    height: 25px;
`

const StyledContent = Styled.div`
    background: #f1f1f1;
    width: 100%;
    height: 100%;
`

const getWidthArrayByHeight = height => {
    const count = Math.floor(height / 50)
    const arr = []
    for(let i = 0; i < count; i++ ) {
        arr.push(Math.floor(Math.random() * 90 + 10))
    }
    console.log(arr)
    return arr
}


class ContentLoader extends React.Component {
    constructor(props) {
        super(props)

        const height = this.props.height

        this.state = {
            height,
            WidthArrayByHeight: getWidthArrayByHeight(height)
        }
    }

    render() {
        return (
            <StyledContentLoaderContainer heihgt={this.state.height}>
                {this.state.WidthArrayByHeight.map((width, index) => (
                    <StyledContentContainer width={width} key={index}>
                        <StyledContent />
                    </StyledContentContainer>
                ))}
            </StyledContentLoaderContainer>
        )
    }
}

export default ContentLoader