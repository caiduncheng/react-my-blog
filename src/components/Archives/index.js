import React, {Component, Suspense} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { StyledArticle, TitleStyle } from '@/style/style'
import { connect } from 'react-redux'
import { requestGetBlogList } from '@/reducers/blogList'
import { getDateObject } from '@/utils'

const List = styled.ul`
    margin: 15px 0 0 25px;
    & a, & a:hover {
        color: #2571B8;        
    }
`

const Date = styled.span`
    color: #999;
    font-size: 14px;
    font-style: italic;
`

const Title = styled.h1`
    ${TitleStyle}
`
@connect(
    state => state.blogList,
    { requestGetBlogList }
)
class Archives extends Component {
    componentDidMount() {
        this.props.requestGetBlogList()
    }

    groupByYearMonth(list) {
        let newArr = [];
        list.forEach((item, i) => {
            let index = -1;
            let isExists = newArr.some((newItem, j) => {
                if(item.year + item.month === newItem.yearMonth) {
                    index = j
                    return true
                }
            })
            if(!isExists) {
                newArr.push({
                   id: i,
                   yearMonth: item.year + item.month,
                   year: item.year,
                   month: item.month,
                   list: [item]
                })
            } else {
                newArr[index].list.push(item)
            }
        })     
        return newArr   
    }

    render() { 
        const { blogList } = this.props       
        for(let i = 0; i < blogList.length; i++) {
            let dateObject = getDateObject(blogList[i].createTime)
            blogList[i].year = dateObject.year
            blogList[i].month = dateObject.month
            blogList[i].date = dateObject.date
        }
        const groupedBlogList = this.groupByYearMonth(blogList)                     
        return (                
            <StyledArticle>
                <Title>
                    归档
                </Title>
                {
                    groupedBlogList.map(item => (
                        <div className="content" key={item.id}>
                            <h3>{`${item.year}年${item.month}月 (${item.list.length})`}</h3>
                            <List>
                                {
                                    item.list.map(blog => (
                                        <li key={blog._id}>
                                            <Link to={`/article/${blog._id}`}>{blog.title}</Link>
                                            &nbsp;
                                            &nbsp;
                                            <Date>{`${blog.year}年${blog.month}月${blog.date}日`}</Date>
                                        </li>
                                    ))
                                }
                            </List>
                        </div>
                    ))
                }               
            </StyledArticle>
        )
    }
}

export default Archives