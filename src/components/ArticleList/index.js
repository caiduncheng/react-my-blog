import React, {Component} from 'react'
import styled from 'styled-components'
import { TitleStyle, StyledArticle, media } from '@/style/style'
import { connect } from 'react-redux'
import {requestGetBlogList} from '@/reducers/blogList'
import Pagination from './Pagination'
import { Link } from 'react-router-dom'
import Loading from '@/components/Loading'
import { getDateObject } from '@/utils'
import marked from 'marked'


const Meta = styled.div`
    position: relative;
    float: right;
    color: #555;
    font-size: .9em;
    line-height: 2;
    width: auto;
    text-align: right;

    ${media.mobile} {
        display: none;
    }

`

const Comment = styled.div`
    & a {
        color: #999;
    }
`    

const Title = styled.h1`
    font-size: 33px;
    line-height: 35px;
    margin-bottom: 20px;
    font-weight: 500;
    & a:hover {
        color: #2479CC;
        transition: color .3s;
    }
`

const TagHeader = styled.h1`
    padding: 20px 30px;
    background-color: #f6f9fa;
    text-align: center;
    color: #999;
    font-size: 1.5em;    
`

const ReadMore = styled(Link)`
    &:hover {
        text-decoration: underline;
    }
`

@connect(
    state => state.blogList,
    { requestGetBlogList }
)
class Article extends Component {
    
    state = {
        tagName: ''
    }

    componentDidMount() {
        this.setState({
            tagName: this.props.match.params.name
        })
        this.props.requestGetBlogList(this.state.tagName)
    }

    componentWillReceiveProps(nextProps) {                   
        if(nextProps.location.pathname !== this.props.location.pathname) {
            this.setState({
                tagName: nextProps.match.params.name
            })
            this.props.requestGetBlogList(this.state.tagName)
        }                
    }
    

    render() {
        const { status, blogList } = this.props        
        const {tagName} = this.state
        if (status === 'pending' || status === '') {
            return (
                <Loading />
            )
        }
        const _blogList = blogList.map(blog => ({...blog, dateObject: getDateObject(blog.createTime)}))
        return (            
            <>
                {/* 如果是从标签页面进入，就渲染顶部的“标签xx下的文章” */}
                {tagName ? 
                    (
                        <TagHeader>                            
                            标签
                            <a>{tagName}下的文章</a>
                        </TagHeader>
                    ) : null }
            {
                _blogList.map(blog => (                                      
                    <StyledArticle key={blog._id}>                      
                        <Meta>
                            <span>caidc </span>
                            <span>发布于 </span>
                            <span>{`${blog.dateObject.month}月${blog.dateObject.date}, ${blog.dateObject.year}`}</span>
                            <Comment>
                                <a>0 comments</a>
                            </Comment>
                        </Meta>
                        <Title>
                            <Link to={`/article/${blog._id}`}>  
                                {blog.title}   
                            </Link>                   
                        </Title>
                        <div className="content">
                            <div dangerouslySetInnerHTML={{__html: marked(blog.summary)}}></div>
                            <p>
                                <ReadMore to={`/article/${blog._id}`}>阅读全文 →</ReadMore>
                            </p>
                        </div>    
                    </StyledArticle>  
                ))
            }  
                <Pagination />      
            </>
        )
    }
}

export default Article