import React from 'react'
import Header from '../../components/Header/header'
import Telescope from '../../assets/telescope.png'
import styled, { createGlobalStyle } from 'styled-components'
import { Button } from 'react-bootstrap'

const MainContainer = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const GlobalStyles = createGlobalStyle`    
    .styled-img{
        cursor: pointer;
        transition: 0.6s ease;
    }
    .styled-img:hover{
        transform: scale(1.1);
    }
`
const StyledIframe = styled.iframe`
    border: none;
    width: 60vw;
    height: 55vh;
    margin: 10px;
`

export default class Assets extends React.Component {

    state = {
        isLoading: false,
        data: {},
        loaded: ''
    }

    handleClick = () =>{
        this.setState({ isLoading: true }, () => {
            this.getData().then(() => {
                this.setState({ isLoading: false })
                this.setState({ loaded: true })
            })
        })
    }

    getData(){
        return new Promise(resolve => {
            const BaseUrl = 'https://api.nasa.gov/planetary'
            const apiKey = 'KZBUuw2IAPb4ixcbXebFrOMqcqs5VGVkeqWHBIVR'
            fetch(`${BaseUrl}/apod?api_key=${apiKey}`)
            .then(response => response.json())
            .then(response => this.setState({data: response}))
            console.log(this.state.data)
            setTimeout(resolve, 1000)
            
        })
    }

    _MediaType(){
       return (
           this.state.data.media_type === 'video' ? (
                <StyledIframe
                    src = {this.state.data.url}
                >
                </StyledIframe>
           ): (
                <img 
                    className = 'styled-img'
                    src = {this.state.data.hdurl ? this.state.data.hdurl : this.state.data.url}
                    style = {{borderRadius: '4px', marginTop: '16px', width: '53vw', height: '49vh'}}
                    onClick = {() => window.location.replace(`https://${this.state.data.hdurl}`)}
                />
           )
       ) 
    }

    _Markup(){
        return (
            <div style = {{margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h4>{this.state.data.title}</h4>
                <a>{this.state.data.date}</a>
                {this._MediaType()}
            </div>
        )
    }

    _Button(){
        return (
            <Button
                onClick = {!this.state.isLoading ? this.handleClick: null}
                disabled = {this.state.isLoading}
                variant = 'outline-dark'
                style = {{marginTop: '10px'}}
            >
               {this.state.isLoading ? 'Loading...' : 'Click to load'}
            </Button>
        )
    }

    render(){
        return (
            <>
                <GlobalStyles/>
                <Header location = 'assets' icon = {Telescope}/>
                <MainContainer>
                    <h1>astronomy picture of the day</h1>
                    {!this.state.loaded ? this._Button() : null}
                    {this.state.loaded ? this._Markup() : <></>}
                </MainContainer>  
            </>
        )
    }
}