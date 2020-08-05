import React from 'react'
import TopNav from './components/TopNav/index'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import { navList } from './constants'
import Container from './components/Container'
import Grid from './components/Grid'
import ProfileCard from './components/ProfileCard'
import SideBar from './components/SideBar'
import Main from './components/Main'
import Archives from './components/Archives'
import GlobalStyle from './style/style'
import './style/iconfont.css'
import Header from '@/components/Header'
import { connect } from 'react-redux'

const App = () => (
  <Router>
    <GlobalStyle />
    <div className="app">
      <Header />
      <SideBar />      
      <Main />
      {/* <TopNav navList={navList} />
      <Container  lrPadding={0} style={{marginTop: '83px'}}>
        <Grid.Row>
          <Grid.Col xs={12} sm={12} md={12} lg={8.5} xl={9}>
            <Switch>
              <Route exact path="/" render={() => <Redirect to='/blogs' />}/>
              <Route exact path="/blogs" component={BlogList} />
              <Route path="/blog/:id" component={Blog} />
              <Route exact path="/tags" component={Tags}/>
              <Route path="/tags/:name" component={TagBlog} />
              <Route path="/categories" />
            </Switch>
          </Grid.Col>
          <Grid.Col xs={0} sm={0} md={0} lg={3.5} xl={3}>
            <ProfileCard />            
            <TagCard />
            <Route path="/blog/:id" component={ArticleDirectory} />
          </Grid.Col>
        </Grid.Row>
      </Container>      
      <ScrollUp/> */}
    </div>
  </Router>
)
export default App