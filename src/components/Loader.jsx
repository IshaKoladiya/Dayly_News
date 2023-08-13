import React, { Component } from 'react';
import loadimg from './../loading-gif.gif'

export default class Loader extends Component {
  render() {
    return (
      <>
      <div className="col text-center">
        <img src={loadimg} alt="" />
      </div>
        
      </>
    )
  }
}
