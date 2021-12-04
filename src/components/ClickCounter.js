import React, { Component } from 'react'
import HoverCounter from './HoverCounter.js'
import UpdatedComponent from './withCounter.js'

class ClickCounter extends Component {
    
    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <button onClick={incrementCount}> Clicked {count} Times</button>
                <HoverCounter />
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter)
