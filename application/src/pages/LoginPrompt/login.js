import React from 'react'

export default class LoginPrompt extends React.Component {
    render(){
        return (
            <div>
                <input type = 'text' name = 'username' onChange = {this.props.onChange}/>
                <button onClick = {this.onSubmit}/>
            </div>
        )
    }
}