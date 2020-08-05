import React, { Component } from 'react'
import { Badge } from 'antd';
import { connect } from 'react-redux'
import { getTagList } from '@/reducers/tag'
import styled from 'styled-components'
import { TitleStyle, StyledArticle } from '@/style/style'
import axios from 'axios'
import Loading from '../Loading'

const Title = styled.h1`
    ${TitleStyle}
`   

const Tag = styled.a`    
    display: inline-block;
    font-size: 14px;
    padding: 0 15px;
    height: 40px;
    line-height: 40px;
    color: rgba(36,121,204,.8);
    border: 1px solid rgba(36,121,204,.8);
    border-radius: 4px;
    margin: 0 15px 10px 0;
    transition: color .2s cubic-bezier(.4,.01,.165,.99),border .2s cubic-bezier(.4,.01,.165,.99);
    &:hover {
        color: #2479CC;
        border-color: #2479CC;
    }
`
@connect(
    state => state.tag,
    { getTagList }
)
class Tags extends Component {        
    
    componentDidMount() {
        this.props.getTagList()
    }       

    handleClick(name) {
        this.props.history.push(`/tag/${name}`)
    }


    render() {
        const {status} = this.props
        return (  
            <>
                <StyledArticle>
                    <Title>标签</Title>
                    {
                        status === 'pending' || status === '' ? 
                        <Loading height={50}/> : 
                        this.props.tags.map(tag => (
                            <Tag key={tag._id} onClick={() => this.handleClick(tag.name)}>
                                {`${tag.name}(${tag.count})`}
                            </Tag>
                        ))
                    }
                    {}
                </StyledArticle>
            </>                  
        )    
    }
}

export default Tags