import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

export default class Page extends React.Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path = '/' component = {this.props.homePage} />
                    <Route exact path = '/about' component = {this.props.aboutPage}/>
                    <Route exact path = '/assets' component = {this.props.assetsPage}/>
                    <Route exact path = '/asteroids' component = {this.props.asteroidPage}/>
                    <Route exact path = '/login' component = {this.props.loginPage} />
                    <Route exact path = '/404' component = {this.props.NotFoundPage}/>
                    <Redirect from = '*' to = '/404'/>
                </Switch>
            </Router>
        )
    }
}