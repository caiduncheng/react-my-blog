import React from 'react'
import { Button, Input } from 'antd'
import axios from 'axios'

const { TextArea } = Input

class Categories extends React.Component {   
    
    state = {
        title: '',
        summary: '',
        markdownContent: ''
    }

    handleChange = e => {
        const {value, name} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        axios.post('/admin/api/blogs', {...this.state, tags: ['JavaScript'], category: 'JavaScript'})
    }

    render() {
        return (
            <div>
                <Input addonBefore="标题" name="title" placeholder="文章标题" onChange={this.handleChange} />
                 <TextArea 
                    autoSize={{ minRows: 5 }} 
                    name="summary" 
                    placeholder="文章摘要"
                    onChange={this.handleChange}
                />
                <TextArea 
                    name="markdownContent"
                    autoSize={{ minRows: 10, maxRows: 15 }} 
                    placeholder="文章内容 markdown格式" 
                    onChange={this.handleChange}
                />
                <Button onClick={this.handleSubmit}>发布</Button>
            </div>
        )
    }
}

export default Categories