import React from 'react';
import Header from '../../components/Header/header';
import styled from 'styled-components'
import Searchbar from './Searchbar/Searchbar';
import MainView from './MainView/MainView';
import ItemsList from './ItemsList/ItemsList'
import Rocket from '../../assets/rocket.png'
import ReactLoading from 'react-loading'
import './App.css'
//import Searchbar from '../../components/Searchbar/Searchbar'
//<Searchbar/>
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ActualDisplay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
`
const Gridbox = styled.div`
    display: grid;
    grid-gap: 10px 25px;
    grid-template-columns: auto auto auto;
    padding: 10px;
`

export default class Home extends React.Component {

    state = {
        items: [],
        isActive: true,
        isLoading: false
    }
    searchingHandler = (searchValue) => {
        const url = 'https://images-api.nasa.gov/search';
        fetch(`${url}?q=${searchValue}&media_type=image`)
        .then(response => response.json())
        .then(response => this.setState({items: response.collection.items}))
        .catch(error => {
            console.log(error.status)
        })
        setTimeout(() => this.setState({isActive: false}), 500)
    }
    render(){
        const Display = (
            this.state.isActive ? 
            <>
                <MainView isActive = {this.state.isActive}/>
                <Searchbar isActive = {this.state.isActive} search = {this.searchingHandler}/>
            </> : null
        )
        const SecondaryDisplay = (
            this.state.isActive ? null : 
            <>
                <Searchbar isActive = {this.state.isActive} search = {this.searchingHandler}/>
                
                <Gridbox>
                    <ItemsList items = {this.state.items}/>
                </Gridbox>
            </>
        )
        return (
            <div>
                <Header location = {'home'} icon = {Rocket} isActive = {this.state.isActive}/>
                <Container>
                    <ActualDisplay>
                        {Display}
                        
                        {SecondaryDisplay}
                    </ActualDisplay>
                </Container>
            </div>
        )
    }
}