import React, { Component } from 'react'

class Counter extends Component {
   
   constructor(props) {
       super()
       this.state = {
           count: 0
       }
   }
   
   increment() {
    this.setState({
        count: this.state.count + 1
    }, () => {
        console.log('Callback value',this.state.count)
    })

    console.log(this.state.count)
   }

   incrementFive() {
       this.increment5()
       this.increment5()
       this.increment5()
       this.increment5()
       this.increment5()
   }

   increment5() {
       this.setState((prevState) => ({
           count: prevState.count + 1
       }))
       console.log(this.state.count)
   }

   
    render() {
        return (
            <div>
                <div>Count - {this.state.count} </div>
                <button onClick={() => this.increment()}>Increment</button><br /><br />
                <button onClick={() => this.incrementFive()}>Increment 5</button><br /><br />
                <button onClick={() => this.increment5()}>Increment 5 using prevState</button>
            </div>
        );
    }
}

export default Counter
