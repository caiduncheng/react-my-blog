import React from 'react'
import * as Styled from './Styled'
import { requestGetBlog } from '../../reducers/blog'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Tag from '../Tag'
import './markdown.css'
import ContentLoader from '../ContentLoader'

class Blog extends React.Component {
    componentDidMount() {
        const {match} = this.props
        this.props.requestGetBlog(match.params.id)
    }

    render() {
        const { blog, status } = this.props
        console.log(this.props)
        if(status === '' || status === 'pending') {
            return (
                <ContentLoader height={800}/>
            )
        } else if (status === 'failure') {
            return (
                <div>数据加载失败</div>
            )
        }
        return (
            <Styled.BlogContainer>
                <Styled.InfoContainer>
                    <Styled.Title>{blog.title}</Styled.Title>
                    <Styled.Info>
                        <i className="fas fa-clock" />&nbsp;&nbsp;
                        {blog.createTime.toLocaleString().slice(0, 10)}
                    </Styled.Info>
                    <Styled.Info>
                        <i className="fas fa-eye" />&nbsp;&nbsp;
                        {blog.viewTimes}
                    </Styled.Info>
                    <Styled.Info>
                    <i className="fas fa-tag" />&nbsp;&nbsp;
                        {blog.tags.map(tag => (
                            <Tag random={true} key={tag} >
                                {tag}
                            </Tag>
                        ))}
                    </Styled.Info>
                    <Styled.Info>
                    <i className="fas fa-folder-open"></i>&nbsp;&nbsp;
                        <Tag random={true}>
                            {blog.category}
                        </Tag>
                    </Styled.Info>
                </Styled.InfoContainer>
                <Styled.BlogContent className={'markdown-body'}>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: blog.htmlContent
                        }}>
                    </div>
                </Styled.BlogContent>
            </Styled.BlogContainer>
        )
    }
}

const mapStateToProps = state => ({
    blog: state.blog.data,
    status: state.blog.status
})

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        requestGetBlog
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Blog)