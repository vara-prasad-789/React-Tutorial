import React, { Component } from 'react'

class ConditionalRendering extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    
    render() {
        
        return this.state.isLoggedIn && <div>Welcome React</div>
        
        /*return this.state.isLoggedIn ? (
        <div>Welcome react</div> ): ( 
        <div>Welcome Guest</div>)*/
        
        /*let message
        if (this.state.isLoggedIn) {
            message = <div>Welcome React</div>
        } else {
            message = <div>Welcome Guest</div>
        }

        return <div>{message}</div>*/

        /*if (this.state.isLoggedIn) {
            return (
                <div>Welcome React</div>
            )
        } else {
            return (
                <div>Welcome Guest</div>
            )
        }*/


        /*return (
            <div>
                <div>Welcome React</div>
                <div>Welcome Guest</div>
            </div>
        )*/
    }
}

export default ConditionalRendering
