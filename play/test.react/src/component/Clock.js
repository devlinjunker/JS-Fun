import React, { Component } from 'react';


class Clock extends Component{

  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({date: new Date()})
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render(){
    return <div className="Clock">
      {this.state.date.toLocaleString()}
    </div>
  }
}

export default Clock;
