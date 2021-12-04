import React, { Component } from 'react'

class RefsSecondMethod extends Component {
    constructor(props) {
        super(props)
        this.cbRef = null
        this.setcbRef = (element) => {
            this.cbRef = element
        }
    }
    
    componentDidMount() {
        if(this.cbRef) {
            this.cbRef.focus()
        }
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.setcbRef} />
            </div>
        )
    }
}

export default RefsSecondMethod
