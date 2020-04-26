import React from 'react'
import { Button, Badge } from 'antd'

const Tags = () => (
    <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
        <Badge count={5}></Badge>
    </div>
)

export default Tags