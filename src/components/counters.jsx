import React, { Component } from 'react'
import Counter from "./counter";
export default class Counters extends Component {
  
    render() { 
        console.log("App- counters render");
        const {onDelete, onIncrement, onReset, counters } = this.props; /*destructuring argument */
        return (<div>
            <button  onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
            {counters.map(counter =>
            <Counter  key={counter.id}  onDelete={onDelete} onIncrement={onIncrement} counter={counter}/>)}
                
        </div>);
    }
}
 
