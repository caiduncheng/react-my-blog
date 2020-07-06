import React, { Component } from 'react'
import { Badge } from 'antd';
import Tag from '../Tag'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getTagList } from '@/reducers/tag'
import {Card} from '../Card'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'


class Tags extends Component {        
    
    componentDidMount() {
        this.props.getTagList()
    }       


    render() {
        return (

            <Card height={500} style={{padding: 20}}>       
                    <h2>Tags</h2>      
                    {
                        this.props.tags.map(tag => (                            
                            <Badge count={tag.count} key={tag._id} onClick={() => this.props.history.push('/tags/' + tag.name)}>
                                <Tag random pointer>
                                    {tag.name}
                                </Tag>    
                            </Badge>                            
                        ))
                    }                    
            </Card>
        )    
    }
}

const mapDispatchToProps = dispatch => 
    bindActionCreators({
        getTagList
    }, dispatch)

const mapStateToProps = state => ({
    tags: state.tag.tags
})

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Tags)
)