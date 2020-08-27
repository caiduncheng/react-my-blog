import React, {Component} from 'react'
import styled from 'styled-components'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Footer from '@/components/Footer'
import { media } from '@/style/style'
import Loading from '@/components/Loading'

const Article = React.lazy(() => import('../Article'))
const ArticleList = React.lazy(() => import('../ArticleList'))
const Archives = React.lazy(() => import('../Archives'))
const Tags = React.lazy(() => import('../Tags'))
const About = React.lazy(() => import('../About'))

const StyledMain = styled.div`
    background-color: #ffffff;
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
                <React.Suspense fallback={<Loading></Loading>}>
                        <Switch>                   
                            <Route exact path="/" render={props => <ArticleList {...props}/> } />
                            <Route path="/article/:id" render={props => <Article {...props}/> } />
                            <Route exact path="/archives" render={() => <Archives />} />
                            <Route exact path="/tags" render={props => <Tags {...props} />} />
                            <Route path="/tag/:name" render={props => <ArticleList {...props}/>} />
                            <Route exact path="/about" render={() => <About />} />
                        </Switch>
                </React.Suspense>
                <Footer />    
            </StyledMain>
        )
    }
} 

export default Main