import React from 'react'
import {Spin} from 'antd'
import styled from 'styled-components'

const LoadingContainer = styled.div`    
    height: 100vh;
    display: flex;    
    justify-content: center;
    align-items: center;
`

const Loading = () => (
    <LoadingContainer>
        <Spin tip="加载中..."></Spin>
    </LoadingContainer>
)

export default Loading