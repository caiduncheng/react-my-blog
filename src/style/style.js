import { createGlobalStyle } from 'styled-components'
import styled, { css } from 'styled-components'

export const media = {
    pad: '@media only screen and (max-width: 1024px) and (min-width: 769px)',
    mobile: '@media screen and (max-width: 768px)'
}

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
    }

    *, *::after, *::before {
        box-sizing: border-box;
    }

    html {
        /* background-color: #F4F5F5; */
        min-height: 100%;
    }

    a {        
        color: #2479CC;    
        text-decoration: none;
    }

    h1 {
        font-weight: bold;
    }

    body {
        /* background-color: #F4F5F5; */
        font-size: 16px;
        /* font-family: -apple-system, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Arial, sans-serif; */
        font-family: "Helvetica Neue",Arial,"Hiragino Sans GB",STHeiti,"Microsoft YaHei";
        color: #666;
        transition: transform .2s cubic-bezier(.4,.01,.165,.99),-webkit-transform .2s cubic-bezier(.4,.01,.165,.99);

        ${media.mobile} {
            &.side {
               position: fixed;
                transform: translate3D(250px, 0, 0);
            }
        }
    }
`

export const TitleStyle = css`
    color: #333333;
    font-size: 2em;
    font-weight: 300;    
    line-height: 35px;
    margin-bottom: 25px;
    ${media.mobile} {
        padding: 5px 0 10px;
    }
`

export const StyledArticle = styled.article`
    border-bottom: 1px solid #ddd;
    border-top: 1px solid #fff;
    position: relative;
    word-wrap: break-word;
    padding: 30px 0;

    & .content {
        font-size: 16px;
        line-height: 1.8;

        & p, & h3 {
            margin-top: 15px;
        }

        & h3 {
            font-weight: 700;
            color: #666;
        }
    }
    & a {
        color: #2479CC;
    }

    & h1 a {
        color: #333;
    }

    ${media.mobile} {
        & {
            background-color: #fff;
            padding: 10px;
        }
    }
`

export default GlobalStyle