import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Img from '../../assets/mars.jpg'
import { Redirect } from 'react-router-dom'

const GlobalStyles = createGlobalStyle`
    body {
        overflow-y: hidden;
        background-image: url(${Img});
        background-size: cover;
        background-repeat: no-repeat;
    }
    
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        color: #ddd;
    }

`

export default class NotFound extends React.Component {
    state = {
        redirecting: false
    }
    componentDidMount(){
        setTimeout(() => this.setState({ redirecting: true }), 2500)
    }
    render(){
        if(this.state.redirecting){
            window.location.replace('/')
        }
        return (
            <React.Fragment>
                <GlobalStyles/>
                <div className = 'container'>
                    <a style = {{fontSize: '100px'}}>404</a>
                    <h3>it looks like the page was not found</h3>
                </div>
            </React.Fragment>
            
        )
    }
}