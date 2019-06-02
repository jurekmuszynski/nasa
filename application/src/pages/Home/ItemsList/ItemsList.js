import React from 'react'
import styled from 'styled-components'
import './Index.css'

const Closebtn = styled.a`
    color: #b1aeae;
    font-weight: 600;
    transition: 0.4s;
    &:hover {
        color: #122;
        text-shadow: #000;
        transform: scale(1.4)
    }
`
const StyledImg = styled.img`
    width: 260px;
    height: 250px;
    border-radius: 4px;
    margin: 40px;
    transition: 0.6s ease;
    :hover {
        transform: scale(1.2);
    }
`
const StyledOpener = styled.a`
    text-align: center;
    cursor: pointer;
    transition: 0.6s ease;
    font-size: 19px;
    :hover {
        transform: scale(1.2);
        color: #aaa;        
    }
`
const StyledModalImage = styled.img`
    width: 14em;
    height: 14em;
    margin: 40px;
    border-radius: 4px;
    grid-column-start: 2;
    grid-column-end: five;
    grid-row-start: row1-start;
    grid-row-end: 1;
`
const StyledDescription = styled.p`
    text-align: center;
    grid-row-start: 1;
    grid-row-end: 2;
    max-height: 400px;
`
const SubDescription = styled.a`

`

class Item extends React.Component {
    state = {
        visible: false
    }
    onModalOpen = () => {
        this.setState({visible: true})
    }
    onModalClose = () => {
        this.setState({visible: false})
    }
    render(){
        const _ModalContent = (
            <div style = {{width: '100%', height: '100%', display: 'grid', gridTemplateRows: 'auto auto auto', gridAutoFlow: 'row dense', alignItems: 'start    '}}>
                    <StyledModalImage 
                        src = {this.props.item.links[0].href}
                    />
                    <div style = {{gridRowStart: '2', alignItems: 'center'}}>
                        <StyledDescription>
                            {this.props.item.data[0].description}
                        </StyledDescription>
                        <p style = {{textAlign: 'center'}}>
                            {this.props.item.data[0].date_created}
                        </p>
                    </div>
            </div>
        )
        const Modal =  (
            this.state.visible ? (
                <div className = 'modal'>
                    <div className = 'modal-content'>
                        <Closebtn className = 'closebtn' onClick = {this.onModalClose}>&times;</Closebtn>
                        {_ModalContent}
                    </div>
                </div>
            ) :
            null
        )
        return (
            <>
                <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <StyledImg
                        src = {this.props.item.links[0].href}
                        //onClick = {() => window.location.replace(this.props.item.links[0].href)}

                    />
                    <StyledOpener onClick = {this.onModalOpen}>details</StyledOpener>
                    {Modal}
                </div>
            </>
        )
    }
}
export default class ItemsList extends React.Component {
    render(){
        console.log(this.props.items)
        if(this.props.items.length < 1){
            console.log('no results')
            return (<div style = {{marginTop: '20px'}}>no results found</div>)
        }
        return (
            this.props.items.map(item => (
                <Item
                    item = {item}
                    key = {Math.random()}
                />
            ))
        )
    }
}