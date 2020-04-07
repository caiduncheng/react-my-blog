import React from 'react'
import TopNav from './components/TopNav/index'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { navList } from './constants'
import Container from './components/Container'
import Grid from './components/Grid'
import ProfileCard from './components/ProfileCard'



const App = () => (
  <Router>
    <div>
      <TopNav navList={navList} />
      <Container style={{marginTop: '83px'}}>
        <Grid.Row>
          <Grid.Col xl={9}>
            <Switch>
            </Switch>
          </Grid.Col>
          <Grid.Col xl={3}>
            <ProfileCard />
          </Grid.Col>
        </Grid.Row>
      </Container>
    </div>
  </Router>
)
export default App