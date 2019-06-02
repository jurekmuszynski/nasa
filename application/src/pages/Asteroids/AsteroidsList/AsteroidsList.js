import React from 'react'
import AsteroidItem from '../AsteroidItem/AsteroidItem'

export default class AsteroidsList extends React.Component{
    render(){
        return (
            this.props.asteroids.map((asteroid) => (
                <AsteroidItem
                    asteroid = {asteroid}
                    key = {Math.random()}
                />
            ))
        )
    }
}