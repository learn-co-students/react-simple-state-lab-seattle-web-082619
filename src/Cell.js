import React from 'react';

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.color
    }
  }

  handleDivClick = () => {
    this.setState({
      color: '#333'
    })
  }

  render() {
    return (
      <div className="cell" onClick={this.handleDivClick} style={{background: this.state.color}}></div>
    )
  }
}

export default Cell