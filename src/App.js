import React, { Component } from 'react'

class App extends Component {
  state = {
    count: 0
  }

  handleClick = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    const { count } = this.state
    
    return (
      <div>
        <h1 onClick={this.handleClick}>1Welcome to My App {count}</h1>
      </div>
    )
  }
}

export default App