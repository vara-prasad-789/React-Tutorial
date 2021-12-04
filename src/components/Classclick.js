import React, { Component } from 'react'

class Classclick extends Component {
    
    clickHandler() {
        console.log('Clicked the Button')
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default Classclick
