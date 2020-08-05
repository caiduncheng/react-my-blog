import React, { Component } from 'react'
import { requestGetBlog } from '../../reducers/blog'
import { connect } from 'react-redux'
import { TitleStyle, StyledArticle } from '@/style/style'
import styled from 'styled-components'
import Loading from '@/components/Loading'
import Meta from '@/components/Meta'
import Toc from './Toc'
import hljs from 'highlight.js'
import '@/style/markdown.css'
import 'highlight.js/styles/monokai-sublime.css';
import ScrollUp from '../ScrollUp'

const ArticleTitle = styled.h1`
    font-size: 3.5em;
    font-weight: 300;
    line-height: 1em;
    margin-bottom: 20px;
`

const Container = styled(StyledArticle)`
    font-size: 13px;
`

@connect(
    state => state.blog,
    { requestGetBlog }
)
class Article extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        const {match} = this.props                
        this.props.requestGetBlog(match.params.id)  
        this.updateCodeSyntaxHighlighting()
    }

    componentDidUpdate() {
        this.updateCodeSyntaxHighlighting()        
    }

    updateCodeSyntaxHighlighting = () => {
        document.querySelectorAll("pre").forEach(block => {
          hljs.highlightBlock(block);
        });
      };

    render() {     
        const {status, data} = this.props
        if(status === 'pending' || status === '') {
            return <Loading />
        }
        return (
            <>
                <Container>                
                    <Meta author="caidc" date=" 07月12, 2020"/>
                    <ArticleTitle>{data.title}</ArticleTitle>               
                    <div  className="markdown-body" dangerouslySetInnerHTML={{__html: data.htmlContent}} >                    
                    </div>
                </Container>
                <ScrollUp />
            </>
        )
    }
}

export default Article
