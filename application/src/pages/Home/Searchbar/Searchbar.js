import React from 'react'
import styled from 'styled-components'
import './App.css'
import { Button } from 'react-bootstrap'
//import MainView from '../MainView/MainView'



const Styledinput = styled.input.attrs({
    type: 'text',
    name: 'searchValue',
    placeholder: 'type to search...',
    //onChange: {},
})`
    width: 300px;
    height: 60px;
    font-size: 22px;
    color: ${(props) => props.isActive ? 'white': 'black'};
    border: none;
    margin: 15px;
    text-align: center;
    background: transparent;
`
class SubmitButton extends React.Component{
    state = {
        isLoading: false
    }
    handleClick = () => {
        this.setState({ isLoading: true }, () => {
          this.props.onSubmit().then(() => {
            this.setState({ isLoading: false });
          });
        });
    }    
    render(){
        return (
            <Button
                variant="outline-primary"
                disabled={this.state.isLoading}
                onClick={!this.state.isLoading ? this.handleClick : null}
            >
                {this.state.isLoading ? 'Loading…' : 'Click to load'}
            </Button>
        )
    }
}

export default class Searchbar extends React.Component {
    state = {
        searchValue: '',
        sent: false,
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit = () => {
        //e.preventDefault();
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000)
            this.state.searchValue !== '' ? this.props.search(this.state.searchValue) : console.log('no input');
            setTimeout(() => this.setState({searchValue: ''}), 500)
        })
        //this.state.searchValue !== '' ? this.props.search(this.state.searchValue): console.log('no input');
    }
    render(){
        return (
            <>
                <div>
                    <Styledinput 
                        onChange = {this.onChange}
                        value = {this.state.searchValue}
                        onSubmit = {this.onSubmit}
                        autoComplete = 'off'
                        isActive = {this.props.isActive}
                    />
                    <SubmitButton onSubmit = {this.onSubmit}/>       
                </div>        
            </>
        )
    }
}