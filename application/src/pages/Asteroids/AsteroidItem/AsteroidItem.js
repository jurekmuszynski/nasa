import React from 'react'
import { Card } from 'react-bootstrap'
 
export default class AsteroidItem extends React.Component {
    render(){
        return (
            <Card border="dark" style={{ width: '17rem', margin: '20px' }}>
                <Card.Header>{this.props.asteroid.name}</Card.Header>
                <Card.Body>
                    <Card.Title>{this.props.asteroid.name} Info</Card.Title>
                    <div style = {{display: 'flex', flexDirection: 'column', fontSize: '13px'}}>
                        <a>max diameter: {this.props.asteroid.estimated_diameter.kilometers.estimated_diameter_max}km</a>
                        <a>min diameter: {this.props.asteroid.estimated_diameter.kilometers.estimated_diameter_min}km</a>
                        <a>first observation date:  
                             {this.props.asteroid.orbital_data.first_observation_date}
                        </a>
                        <a>last observation date:  
                             {this.props.asteroid.orbital_data.last_observation_date}
                             
                        </a>
                        <a>
                           description:  {this.props.asteroid.orbital_data.orbit_class.orbit_class_description}
                        </a>
                        <a>
                            relative velocity : {this.props.asteroid.close_approach_data[0] ? 
                                `${Math.round(this.props.asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour)} km/h`:
                            'no data'} 
                        </a>
                        <a>
                            orbiting body: {this.props.asteroid.close_approach_data[0] ? this.props.asteroid.close_approach_data[0].orbiting_body: 'no data'}
                        </a>
                        <a>
                            is potentially hazardous: {this.props.asteroid.is_potentially_hazardous ? 'yes': 'no'}
                        </a>
                        <Card.Link href={this.props.asteroid.links.self} target = "_blank" style = {{textAlign: 'center', margin: '10px', fontSize: '16px'}}> origin data </Card.Link>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}