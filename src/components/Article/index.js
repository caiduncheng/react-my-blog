import React, { Component } from 'react'
import { Title } from '@/style/style'
import { requestGetBlog } from '../../reducers/blog'
import { connect } from 'react-redux'

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
        return (
            <div></div>
        )
    }
}

export default Article
