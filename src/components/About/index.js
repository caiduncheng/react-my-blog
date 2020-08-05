import React, { Component } from 'react'
import styled from 'styled-components'
import {StyledArticle, TitleStyle} from '@/style/style'
import avatar from '@/assets/duck.jfif'
import { Divider } from 'antd'

const Title = styled.h1`
    ${TitleStyle}
`

const About = () => (
    <StyledArticle>
        <Title>关于</Title>
        <img src={avatar} width="128" height="128"></img>
        <Divider orientation="left">博客简述</Divider>
        <p>本博客使用的技术为 react + redux + koa2 + mongodb</p>
        <Divider orientation="left">关于我</Divider>
    </StyledArticle>
    
)

export default About