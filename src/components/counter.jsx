import React, {Component} from 'react';

export default class Counter extends Component{
    componentDidUpdate(prevProps,prevState){
        console.log("prevPrps",prevProps);
        console.log("prevState",prevState);
        if(prevProps.counter.value !== this.props.counter.value){
// called and get new data from server
        }
    }

    componentWillUnmount(){
        console.log("app - unmount");

    }
    //  state ={
    //      value: this.props.counter.value,
    //      tags: []
    //  };

    //  rendertags(){
    //      if(this.state.tags.length === 0) return <p>There are no tags</p>;
          
    //      return <ul>{this.state.tags.map(tag=> <li>{tag}</li>)}</ul>
         
    //  }
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    // handleIncrement=()=>{/** arrow method inheritance */
       
    //    this.setState({value : this.state.value + 1})
    // }

    render(){
        // console.log("props", this.props);
         console.log("app - counetr render")
        return (
            
           <div>
               {/* {this.props.children} */}
               <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
               <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
               <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
           </div>
            // <div> 
            //     {(this.state.tags.length === 0) && " enter the tags"}
            //     {this.rendertags()}
            //  </div>
        );
    }
   
    getBadgeClasses(){
        let classes = "badge m-2 bg-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value} = this.props.counter;
        return value === 0 ? "zero" : value;
    }

}