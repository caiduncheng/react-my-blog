import React from 'react'
import { Button, Badge } from 'antd';
import Tag from '../Tag'
import { colorName } from '../../utils'

const Tags = () => {
    return (
        <div>
            <Badge count={5}>
                <Tag random pointer>
                    JavaScript
                </Tag>
            </Badge>
        </div>
    )
}

export default Tags