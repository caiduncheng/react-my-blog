import  * as Styled  from './Styled'
import React from 'react'
import {requestGetBlogList} from '../../reducers/blogList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { blogListPerPageCount } from '../../constants'
import Tag from '../Tag'
import { getPaginationArray } from '../../utils'
import ContentLoader from '../ContentLoader'
import ScrollUp from '../ScrollUp'
import { Skeleton } from 'antd';

class BlogList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentPage: 1
        }
        this.onTitleClick = this.onTitleClick.bind(this)
        this.onPagnitaionClick = this.onPagnitaionClick.bind(this)
    }

    onTitleClick(event, to) {
        event.preventDefault()
        this.props.history.push(`/blog/${to}`)
    }

    onPagnitaionClick(event, page) {
        event.preventDefault()
        this.setState({currentPage: page})
    }

    componentDidMount() {
        this.props.requestGetBlogList()
    }

    render() {
        const { currentPage } = this.state
        const { blogList, status, count } = this.props
        const totalPage = Math.ceil(count / blogListPerPageCount)

        if (status === 'pending' || status === '') {
            return <Skeleton active />
        } else if (status === 'failure') {
            return <div>数据加载失败</div>
        }

        const blogListStartIndex = (currentPage - 1) * blogListPerPageCount
        const blogListEndIndex = blogListStartIndex + blogListPerPageCount
        const listData = blogList.slice(blogListStartIndex, blogListEndIndex)
        const list = listData.map((item, index) => (
            <Styled.Container key={item._id}>
                <Styled.Title>
                    <a
                        href={`/blog/${item._id}`}
                        onClick={e => this.onTitleClick(e, item._id)}
                    >
                        {item.title}
                    </a>
                </Styled.Title>
                <Styled.Summary>{item.summary}</Styled.Summary>
                <Styled.InfoContainer>
                    <Styled.Info>
                        <i className="fas fa-clock" />&nbsp;&nbsp;
                        {item.createTime.toLocaleString().slice(0, 10)}
                    </Styled.Info>
                    <Styled.Info>
                        <i className="fas fa-eye" />&nbsp;&nbsp;
                        {item.viewTimes}
                    </Styled.Info>
                    <Styled.Info>
                    <i className="fas fa-tag" />&nbsp;&nbsp;
                        <Tag random={true}>
                            {item.tags[0]}
                        </Tag>
                    </Styled.Info>
                    <Styled.Info>
                    <i className="fas fa-folder-open"></i>&nbsp;&nbsp;
                        <Tag random={true}>
                            {item.category}
                        </Tag>
                    </Styled.Info>
                </Styled.InfoContainer>
            </Styled.Container>
        ))
        const pageArray = getPaginationArray(currentPage, totalPage)
        const pagination =
            <Styled.Pagination>
                <a href="#ignore" onClick={e => this.onPagnitaionClick(e, 1)}>
                    &laquo;
                </a>
                {pageArray.map(page => (
                    <a
                        key={page}
                        href="#ignore"
                        className={currentPage === page ? 'active-pagination' : ''}
                        onClick={e => this.onPagnitaionClick(e, page)}>
                        {page}
                    </a>
                ))}
                 <a href="#ignore" onClick={e => this.onPagnitaionClick(e, totalPage)}>
                    &raquo;
                </a>
            </Styled.Pagination>
        return(
            <div>
                {list}
                {pagination}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    blogList: state.blogList.blogList,
    count: state.blogList.count,
    status: state.blogList.status
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        requestGetBlogList
    }, dispatch)

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(BlogList)
)