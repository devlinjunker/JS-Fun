import React, { Component } from 'react';


class SubmitInput extends Component{
  constructor(props){
    super(props);
    this.state = {
      val:""
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onSubmit(this.state.val)
  }

  handleValueChange(e){
    this.setState({
      val:e.target.value
    })
  }

  render(){
    return <form onSubmit={(e) => {this.handleSubmit(e)}}>
      <input type="text" value={this.state.val} placeholder={this.props.placeholder} onChange={(e)=>{
        this.handleValueChange(e)
      }} />
      <input type="submit" className="button"
        value={ this.props.btnText === undefined ? "Submit" :  this.props.btnText}/>
    </form>
  }
}

export default SubmitInput;
