import React, {Component} from 'react'
import styled from 'styled-components'
import ArticleList from '../ArticleList'
import Article from '../Article'
import { Route, Switch } from 'react-router-dom'
import Archives from '../Archives'
import Tags from '../Tags'
import Footer from '@/components/Footer'
import { media } from '@/style/style'

const StyledMain = styled.div`
    background-color: #ffffff;
    padding-left: 290px;
    padding-right: 40px;
    max-width: 1390px;
    ${media.pad} {
        & {
            padding-left: 115px
        }
    }

    ${media.mobile} {
        width: 100%;
        min-height: 100%;
        padding-top: 50px;
        padding-left: 10px;
        padding-right: 10px;        
    }
`

class Main extends Component {
    render() {
        return (
            <StyledMain>
                <Switch>
                    <Route exact path="/" component={ArticleList} />
                    <Route path="/article/:id" component={Article} />
                    <Route exact path="/archives" component={Archives} />
                    <Route exact path="/tags" component={Tags} />
                </Switch>
                <Footer />    
            </StyledMain>
        )
    }
} 

export default Main