import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import Img from '../../../assets/mars.jpg'

const GlobalStyle = createGlobalStyle`
    body {
        background-image: url(${Img});
        background-size: cover;
        overflow-y: hidden;
    }
    .emoji {
        width: 22px;
        height: 22px;
    }
`
const MainContainer = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700');
    font-weight: 500;
`

export default class MainView extends React.Component {
    render(){
        return ( 
            <>
                <GlobalStyle/>
                <MainContainer>
                    <h1 style = {{fontSize: '5em', textTransform: 'uppercase', fontFamily: 'Montserrat'}}>spacer</h1>
                    <p style = {{textAlign: '', fontFamily: 'Montserrat', fontSize: '1.9em', marginTop: '20px'}}>
                        Spacer is a space-oriented search engine, type anything to get the space-resources. 
                        The data is fetched from an open source nasa api. Have fun ! 
                    </p>
                </MainContainer>
            </>
        )
    }
}