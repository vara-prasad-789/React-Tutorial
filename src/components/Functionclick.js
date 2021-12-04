import React from 'react'

function Functionclick() {
  
  function clickHandler() {
      console.log('Button Clicked')
  }
    return (
        <div><br />
            {/*Differenece in function between Paranthesis fucntion(no paranthesis) And function call(with paranthesis) */}
            <button onClick={clickHandler}>Click</button><br/><br />
            <button onClick={clickHandler()}>Click</button>
        </div>
    )
}

export default Functionclick
