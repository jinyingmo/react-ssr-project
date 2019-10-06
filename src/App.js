import React, { Component } from 'react'

class App extends Component {
  state = {
    count: 0
  }

  handleClick = () => {
    this.setState({
      count: this.state.count - 2
    })
  }

  render() {
    const { count } = this.state

    return (
      <div>
        <h1 onClick={this.handleClick}>Welcome to My App {count}</h1>
      </div>
    )
  }
}

export default App
