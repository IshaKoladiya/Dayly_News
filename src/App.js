import React, { Component } from "react";
import Navbar from "./components/Navbar";
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter,Route,Routes } from "react-router-dom"
import ScrollToTop from "react-scroll-to-top";
import News from "./components/News";



export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "light",
      progress:0
    };
  }

  theme = () => {
    if (this.state.mode === "light") {
      this.setState({
        mode: (this.state.mode = "dark"),
      });
    } else {
      this.setState({
        mode: (this.state.mode = "light"),
      });
    }
  };

  setProgress=(pr)=>{
    this.setState({
      progress:pr
    })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={4}
        
      />
       <ScrollToTop smooth component={<p style={{ color: "blue" }}><i className="bi bi-sort-alpha-up-alt fs-3"></i></p>} />

        <Navbar mode={this.state.mode} theme={this.theme} />
        

        <Routes>
          
        <Route exact path="/" element={<News setProgress={this.setProgress} key="general" category="general"  mode={this.state.mode}/>} />
        <Route exact path="/top-headlines" element={<News setProgress={this.setProgress} key="general" category="general"  mode={this.state.mode}/>} />
        <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" category="business"  mode={this.state.mode}/>} />
        <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" category="entertainment"  mode={this.state.mode}/>} />
        <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" category="health"  mode={this.state.mode}/>} />
        <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" category="science"  mode={this.state.mode}/>} />
        <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" category="sports"  mode={this.state.mode}/>} />
        <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" category="technology"  mode={this.state.mode}/>} />
        </Routes>

        </BrowserRouter>
      
      </div>
    );
  }
}
