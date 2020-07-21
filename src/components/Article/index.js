import React, { Component } from 'react'
import { requestGetBlog } from '../../reducers/blog'
import { connect } from 'react-redux'
import { TitleStyle, StyledArticle } from '@/style/style'
import styled from 'styled-components'
import Loading from '@/components/Loading'
import '@/style/markdown.css'
import Meta from '@/components/Meta'
import Toc from './Toc'

const Title = styled.h1`
    ${TitleStyle}
`

const Container = styled.article`

`

@connect(
    state => state.blog,
    { requestGetBlog }
)
class Article extends Component {

    componentDidMount() {
        const {match} = this.props                
        this.props.requestGetBlog(match.params.id)  
    }

    render() {     
        const {status, data} = this.props
        if(status === 'pending' || status === '') {
            return <Loading />
        }
        return (
            <StyledArticle>
                <Meta author="caidc" date=" 07月12, 2020"/>
                <Title>{data.title}</Title>
                <Toc directories={['第一章', '第二章']}/>
                <div dangerouslySetInnerHTML={{__html: data.htmlContent}} className="markdown-body">                    
                </div>
            </StyledArticle>
        )
    }
}

export default Article
