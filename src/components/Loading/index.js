import React from 'react'
import {Spin} from 'antd'
import styled from 'styled-components'

const LoadingContainer = styled.div`    
    height: ${({height}) => height ? `${height}px` : '100vh'};
    display: flex;    
    justify-content: center;
    align-items: center;
`

const Loading = props => (
    <LoadingContainer height={props.height}>
        <Spin tip="加载中..."></Spin>
    </LoadingContainer>
)

export default Loading