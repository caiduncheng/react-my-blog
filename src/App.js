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
    </div>
  </Router>
)
export default App