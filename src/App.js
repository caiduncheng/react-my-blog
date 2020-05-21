import React from 'react'
import TopNav from './components/TopNav/index'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { navList } from './constants'
import Container from './components/Container'
import Grid from './components/Grid'
import ProfileCard from './components/ProfileCard'
import TagCard from './components/TagsCard'
import BlogList from './components/BlogList'
import Blog from './components/Blog'
import Categories from './components/Categories'
import Tags from './components/Tags'
import ScrollUp from './components/ScrollUp'
import ArticleDirectory from './components/ArticleDirectory'
import './index.css';


const App = () => (
  <Router>
    <div class="app">
      <TopNav navList={navList} />
      <Container  lrPadding={0} style={{marginTop: '83px'}}>
        <Grid.Row>
          <Grid.Col xs={12} sm={12} md={12} lg={8.5} xl={9}>
            <Switch>
              <Route exact path="/" component={BlogList} />
              <Route exact path="/blogs" component={BlogList} />
              <Route path="/blog/:id" component={Blog} />
              <Route path="/tags" component={Tags} />
              <Route path="/categories" component={Categories} />
            </Switch>
          </Grid.Col>
          <Grid.Col xs={0} sm={0} md={0} lg={3.5} xl={3}>
            <ProfileCard />
            <TagCard />
            <Route path="/blog/:id" component={ArticleDirectory} />
          </Grid.Col>
        </Grid.Row>
      </Container>
      {/* <Footer /> */}
      <ScrollUp/>
    </div>
  </Router>
)
export default App