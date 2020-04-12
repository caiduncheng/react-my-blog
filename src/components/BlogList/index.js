import  * as Styled  from './Styled'
import React from 'react'
import {requestGetBlogList} from '../../reducers/blogList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import Tag from '../Tag'

class BlogList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            page: 1
        }
        this.onTitleClick = this.onTitleClick.bind(this)
    }

    onTitleClick(event, to) {
        event.preventDefault()
        this.props.history.push(`/blog/${to}`)
    }

    componentDidMount() {
        this.props.requestGetBlogList()
    }

    render() {
        const list = this.props.list.map((item, index) => (
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
        return(
            <div>
                {list}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    list: state.blogList.list
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        requestGetBlogList
    }, dispatch)

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(BlogList)
)