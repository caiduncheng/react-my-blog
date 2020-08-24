import React, {Component} from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import ArticleList from '../ArticleList'
import Article from '../Article'
import Archives from '../Archives'
import Tags from '../Tags'
import About from '../About'
import Footer from '@/components/Footer'
import { media } from '@/style/style'

// const Article = React.lazy(() => import('../Article'))
// const ArticleList = React.lazy(() => import('../ArticleList'))
// const Archives = React.lazy(() => import('../Archives'))
// const Tags = React.lazy(() => import('../Tags'))
// const About = React.lazy(() => import('../About'))

const StyledMain = styled.div`
    background-color: #ffffff;
    /* padding-left: 290px;
    padding-right: 40px; */
    /* max-width: 1390px; */
    max-width: 1250px;
    padding: 20px 70px 0px 350px;
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
                    <Route path="/tag/:name" component={ArticleList} />
                    <Route exact path="/about" component={About}></Route>                    
                </Switch>
                <Footer />    
            </StyledMain>
        )
    }
} 

export default Main