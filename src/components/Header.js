import React, { Component } from "react";
import blkGif from "./../blackangel.gif";

export default class Header extends Component {
  render() {
    const { mode, category, description } = this.props;
    return (
      <>
        <div
          className="text-center my-2 p-4 head"
          style={
            mode === "light"
              ? { background: "black", color: "white" }
              : { background: "white", color: "black" }
          }
        >
          <div
            style={{
              backgroundImage: "url(" + blkGif + ")",
              backgroundSize: "cover",
              height: "20vh",
            }}
          >

            {category !== "general" ? (<h1>{category.charAt(0).toUpperCase() + category.slice(1) }</h1>) : (<h1>{"Top Headline"}</h1>) }
            
            <p>{description}</p>
          </div>
        </div>
      </>
    );
  }
}
