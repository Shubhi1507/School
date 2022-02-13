import React, { Component } from "react";
class EventBind extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      id: "0", firstname : "Shubhi " , lastname : "Singh"
    };
  this.clickHandler=this.clickHandler.bind(this)

  }
  clickHandler(Okay) {
    console.log(Okay);
  }

  render() {
    return (
      <div>
        <p>{this.state.id +' '+this.state.firstname + ' '+this.state.lastname}</p>
        <button onClick={this.clickHandler}>Clicked</button>
        <button onClick={()=> this.clickHandler("ABC")}>ok</button>
      </div>
    );
  }
}

export default EventBind;
