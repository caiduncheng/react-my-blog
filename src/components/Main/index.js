import React, {Component} from 'react'
import styled from 'styled-components'
import ArticleList from '../ArticleList'
import Article from '../Article'
import { Route, Switch } from 'react-router-dom'
import Archives from '../Archives'
import Tags from '../Tags'
import Footer from '@/components/Footer'

const StyledMain = styled.div`
    background-color: #ffffff;
    padding-left: 290px;
    padding-right: 40px;
    max-width: 1390px;
    @media only screen and (max-width: 1024px) and (min-width: 768px) {
        & {
            padding-left: 115px;
        }
    }
`

class Main extends Component {
    render() {
        return (
            <StyledMain>
                <Switch>
                    <Route exact path="/" component={ArticleList} />
                    <Route path="/blog/:id" component={Article} />
                    <Route exact path="/archives" component={Archives} />
                    <Route exact path="/tags" component={Tags} />
                </Switch>
                <Footer />    
            </StyledMain>
        )
    }
} 

export default Main