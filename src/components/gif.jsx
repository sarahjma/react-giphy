import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = "https://media2.giphy.com/media/xT9IgDEI1iZyb2wqo8/200.gif"
    return (
      <img src="{src}" alt="" className="gif"/>
    );
  }
}


export default Gif;
