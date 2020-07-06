import React, { Component } from 'react'
import { Timeline, Spin } from 'antd'
import {Card} from '../Card'
import { connect } from 'react-redux'
import { requestGetBlogList } from '@/reducers/blogList'
import { bindActionCreators } from 'redux'
import './style.css'
import { ClockCircleOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 22px;
    position: relative;
    top: -5px;
`
const TagName = styled.small`
    color: #bbb;
    margin-left: 5px;
`


class TagBlog extends Component {

    componentDidMount() {
        this.props.requestGetBlogList()
        console.log(this.props)
    }

    render() {
        return (
            <Card style={{padding: 20}} className='tag-blog'>
                <Timeline>
                        <Timeline.Item>
                            <Title>{this.props.match.params.name}<TagName>Category</TagName></Title>
                        </Timeline.Item>
                {this.props.blogs.map(blog => (
                        <Timeline.Item>
                            <span style={{fontSize: 13, marginRight: 16}}>06-15</span>
                            <a>123</a>
                        </Timeline.Item>
                        
                        ))}
                </Timeline>    
            </Card>
        )
    }
}

const mapDispatchToProps = dispatch => 
    bindActionCreators({
        requestGetBlogList
    }, dispatch)

const mapStateToProps = state => ({
    blogs: state.blogList.blogList
})

export default connect(mapStateToProps, mapDispatchToProps)(TagBlog)