import React from 'react';
import Header from '../../components/Header/header'
import styled, {createGlobalStyle} from 'styled-components'
import Satellite from '../../assets/satellite.png'


const GlobalStyles = createGlobalStyle`
    body {
        overflow-y: hidden;
    }
    .icon-container {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Styledi = styled.i`
    font-size: 60px;
    margin: 15px;
    transition: 0.6s;
    cursor: pointer;
    :hover{
        transform: scale(1.2)
    }
`

export default class About extends React.Component {
    render(){
        return (
            <div>
                <GlobalStyles/>
                <Header location = {'about'} icon = {Satellite}/>
                <Container>
                    <h1 style = {{fontSize: '10rem', textTransform: 'uppercase'}}>about</h1>
                    <p style = {{maxWidth: '600px', fontSize: '30px', textAlign: 'center'}}>this is a space-related application created with create-react-app by jerzy muszyński</p>
                    <div className = 'icon-container'>
                        <Styledi className = 'fab fa-github'/>
                        <Styledi className="fab fa-gitlab"/>
                    </div>
                    <a style = {{fontSize: '14px', fontWeight: '500'}}>my credentials</a>
                </Container>
            </div>
        )
    }
}