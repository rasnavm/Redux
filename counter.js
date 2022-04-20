
import React, { Component } from 'react';
import {connect} from 'react-redux';

 class CounterComp extends Component
  {
      
      /* ageUp=()=>
      {
          this.setState({age:this.state.age+1});
      }
      ageDown=()=>
      {
          this.setState({age:this.state.age-1});
      } */
      
  render() {
    return <div>
        <h1>Age:<span>{this.props.age}</span></h1>
        <button onClick={this.props.ageUp}>AgeUP</button>
        <button onClick={this.props.ageDown}>AgeDown</button>
    </div>;
  }
}
const mapStateToProps=(state)=>
{
    return{
        age:state.age
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return{
        ageUp:()=>dispatch({type:"ADD_AGE"}),
        ageDown:()=>dispatch({type:"SUB_AGE"})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CounterComp);
