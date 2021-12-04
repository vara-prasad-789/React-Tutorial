import React, { Component } from 'react'

class EventBind extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
        {/* Using for Third Button Method for Event binding */}
        this.clickHandler = this.clickHandler.bind(this)
    }

    
    clickHandler() {
        this.setState({
            message: 'Goodbye!'
        })
        console.log(this)
    }

    clickHandler1 = () => {
        this.setState({
            message: 'Goodbye!'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div><br />
                <button onClick={this.clickHandler.bind(this)}>Click</button><br /><br />
                <button onClick={() => this.clickHandler()}>Click</button><br /><br />
                <button onClick={this.clickHandler}>Clicks</button><br /><br />
                <button onClick={this.clickHandler1}>Click</button>
            </div>
        )
    }
}

export default EventBind
