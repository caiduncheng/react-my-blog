import React, {Component} from 'react'
import styled from 'styled-components'
import { TitleStyle, StyledArticle, media } from '@/style/style'
import { connect } from 'react-redux'
import {requestGetBlogList} from '@/reducers/blogList'
import Pagination from './Pagination'
import { Link } from 'react-router-dom'
import Loading from '@/components/Loading'

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
    ${TitleStyle}

    & a:hover {
        color: #2479CC;
        transition: color .3s;
    }
`
@connect(
    state => state.blogList,
    { requestGetBlogList }
)
class Article extends Component {
    componentDidMount() {
        this.props.requestGetBlogList()
    }

    render() {
        const { status, blogList } = this.props                
        if (status === 'pending' || status === '') {
            return (
                <Loading />
            )
        }
        return (            
            <>
            {
                blogList.map(blog => (
                <StyledArticle key={blog._id}>  
                    <Meta>
                        <span>caidc </span>
                        <span>发布于 </span>
                        <span>07月12, 2020</span>
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
                        <p>Ullamco qui in nulla laboris dolor sunt culpa nostrud labore dolor.</p>
                        <p>
                            <Link to={`/article/${blog._id}`}>阅读全文 »</Link>
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