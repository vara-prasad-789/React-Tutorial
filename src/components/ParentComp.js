import React, { Component } from 'react'
import RegComp from './RegComp.js';
import PureComp from './PureComp.js';
import MemoComp from './MemoComp.js'

class ParentComp extends Component {
   
   constructor(props) {
       super(props)
   
       this.state = {
            name: 'React' 
       }
   }
   
   componentDidMount() {
       setInterval(() => {
           this.setState({
            name: 'React'
           })
       }, 2000)
   }

    render() {
        console.log('********************* Parent Component ******************************')
        return (
            <div>
                <MemoComp name={this.state.name}/>
                Parent Component
                {/*<RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/>*/}
            </div>
        )
    }
}

export default ParentComp
