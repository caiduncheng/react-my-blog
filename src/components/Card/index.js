import styled from 'styled-components'

export const Card = styled.div`
    background-color: #FFFFFF;
    box-shadow: 0 4px 16px 0 rgba(0,0,0,0.2);
    text-align:  ${ ({center}) => center ? 'center' : ''};
    margin-bottom: 20px;
    height: ${({height}) => height ? height + 'px' : null}    
`