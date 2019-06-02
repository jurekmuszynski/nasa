import React from 'react'
import Header from '../../components/Header/header'
import Saucer from '../../assets/saucer.png'
import { Button } from 'react-bootstrap'
import styled, { createGlobalStyle } from 'styled-components'
import AsteroidsList from './AsteroidsList/AsteroidsList'

const GlobalStyles = createGlobalStyle`
    .main_container{
        display: flex;
        flex-direction: row;
        flex-flow: row wrap;
        align-items: center;
        width: 100vw;
        justify-content: center;
    }
`

export default class Asteroids extends React.Component{
    state = {
        isLoading: false,
        data: {},
        loaded: false
    }
    
    handleClick = () => {
        this.setState({ isLoading: true }, () => {
            this.getData().then(() => {
                this.setState({ isLoading: false })
                this.setState({ loaded: true })
            })
        })
    }

    getData = () => {
        return new Promise((resolve, reject) => {
            const baseUrl = 'https://api.nasa.gov/neo/rest/v1/neo/browse'
            const apiKey = 'KZBUuw2IAPb4ixcbXebFrOMqcqs5VGVkeqWHBIVR'
            fetch(`${baseUrl}?api_key=${apiKey}`)
            .then(response => response.json())
            .then(response => this.setState({ data: response }))
            .catch(error => {
                console.log(error)
            })
            console.log(this.state.data.near_earth_objects)
            //var recordList2 = this.state.data.near_earth_objects[2015-09-08];
            //console.log(recordList2);
            setTimeout(resolve, 700)
        })
    }

    _SubmitBtn(){
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
            <div>
                <GlobalStyles/>
                <Header location = 'asteroids' icon = {Saucer}/>
                <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                    <h1>near earth objects</h1>
                    {!this.state.loaded ? this._SubmitBtn() : null}
                </div>
                <div className = 'main_container'>
                    {this.state.data.near_earth_objects ? <AsteroidsList asteroids = {this.state.data.near_earth_objects}/>: null}
                </div>
            </div>
        )
    }
}