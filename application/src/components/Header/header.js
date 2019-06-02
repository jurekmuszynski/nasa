import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


const Head = styled.div`
    margin-top: 5px;
    width: 100vw;
    height: 70px;
    background: transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const InlineLeft = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    margin: 50px;
    color: ${(props) => props.willcolour ? 'white': '#000'};
`
const InlineRight = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 50px;
`
const Styleda = styled.a`
    margin: 10px;
    font-size: 17px;
    font-weight: 600;
    text-decoration: none;
    transition: 0.6s ease;
    color: ${(props) => props.willcolour ? 'white' : '#b1aeae'};
    :hover{
        color: ${(props) => props.willcolour ? '#a9a9a9' : '#000'};
        transform: scale(1.2);
    }
`
const StyledHeading = styled.a`
    font-size: 18px;
    font-style: italic;
    font-weight: 600;
`

const StyledNasaAsset = styled.img.attrs({
    src: props => (props.emoji ? props.emoji: null)
})`
    width: 30px;
    height: 30px;
    margin-left: 10px;
`
export default class Header extends React.Component {
    render(){
        return (
            <Head>
                <InlineLeft willcolour = {this.props.isActive}>
                    <StyledHeading >
                        welcome to  {this.props.location} page
                    </StyledHeading>
                    <StyledNasaAsset emoji = {this.props.icon}/>
                </InlineLeft>
                <InlineRight>
                    <Styleda as = {Link} to = '/' willcolour = {this.props.isActive}>home</Styleda>
                    <Styleda as = {Link} to = '/asteroids' willcolour = {this.props.isActive}>asteroids</Styleda>
                    <Styleda as = {Link} to = '/assets' willcolour = {this.props.isActive}>assets</Styleda>
                    <Styleda as = {Link} to = '/about' willcolour = {this.props.isActive}>about</Styleda>
                </InlineRight>
            </Head>
        )
    }
}