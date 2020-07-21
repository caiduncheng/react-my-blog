import React, { Component } from 'react'
import { Badge } from 'antd';
import Tag from '../Tag'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getTagList } from '@/reducers/tag'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { TitleStyle, StyledArticle } from '@/style/style'

const Title = styled.h1`
    ${TitleStyle}
`

class Tags extends Component {        
    
    componentDidMount() {
        this.props.getTagList()
    }       


    render() {
        return (  
            <>
                <StyledArticle>
                    <Title>标签</Title>
                    <Tag pointer random>
                        JavaScript
                    </Tag>
                </StyledArticle>                             
                    {/* <h2>Tags</h2>      
                    {
                        this.props.tags.map(tag => (                            
                            <Badge count={tag.count} key={tag._id} onClick={() => this.props.history.push('/tags/' + tag.name)}>
                                <Tag random pointer>
                                    {tag.name}
                                </Tag>    
                            </Badge>                            
                        ))
                    }   */}
            </>                  
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