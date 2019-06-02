import React, { Component } from 'react';
import Page from './routes';
import Home from './pages/Home/home';
import About from './pages/About/about'
import Assets from './pages/Assets/Assets'
import Asteroids from './pages/Asteroids/Asteroids'
import NotFound from './pages/NotFound/404'
import LoginPrompt from './pages/LoginPrompt/login'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    overflow-x: hidden;
    box-sizing: border-box;
  }
`

class App extends Component {
  render() {
    return (
        <>
          <GlobalStyles/>
          <Page homePage = {Home} aboutPage = {About} assetsPage = {Assets} asteroidPage = {Asteroids} NotFoundPage = {NotFound} loginPage = {LoginPrompt}/>
        </>
    );
  }
}

export default App;
