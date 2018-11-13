import React from 'react'

class LoginPanel extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      userId:"",
      pass:""
    }
  }

  handleOnLogin(e){
    this.props.onLogin(this.state.userId, this.state.pass);
    e.preventDefault();
  }

  handleIdChange(e){
    this.setState({
      userId:e.target.value
    })
  }

  handlePassChange(e){
    this.setState({
      pass:e.target.value
    })
  }

  render () {
    return <form onSubmit={(e) => { this.handleOnLogin(e) } }>
      <label htmlFor="userId" >
        User:
        <input type="text" name="userId" value={this.state.userId} onChange={(e) => { this.handleIdChange(e) } } />
      </label>
      <label htmlFor="password">
        Password:
        <input type="password" name="password" value={this.state.pass} onChange={(e) => { this.handlePassChange(e) } } />
      </label>
      <input type="submit" value="Login"/>
    </form>
  }
}

export default LoginPanel;
