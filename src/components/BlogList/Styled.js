import Styled from 'styled-components'

export const Container = Styled.div`
    &:after {
        content: '';
        clear: both;
        display: table;
    }


    background-color: #FFFFFF;
    box-shadow: 0 4px 16px 0 rgba(0,0,0,0.2);
    padding: 13px 15px;
    margin-bottom: 10px;
`

export const Title = Styled.h4`
    color: rgba(0,0,0,0.65);
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 10px;

    a {
        color: inherit;
    }

    & a:hover,
    & a:active {
        color: #1e90ff;
    }
`

export const Summary = Styled.div`
    color: rgba(0,0,0,0.45);
    line-height: 1.6;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 10px;
`

export const InfoContainer = Styled.div`
    font-size: 12px;
    color: rgba(0,0,0,0.45);
    line-height: 1.5;
`

export const Info = Styled.div`
    float: left;
    margin-right: 20px;
`