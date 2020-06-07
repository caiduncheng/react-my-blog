import React from 'react'
import { Divider } from 'antd'
import {Card} from '../Card'


class TagCard extends React.Component {
    render() {
        return (
        <Card>
            <Divider orientation="left">标签</Divider>
        </Card>
        )
    }
}

export default TagCard