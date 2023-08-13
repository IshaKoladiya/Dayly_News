import React, { Component } from 'react'
import blankImg from './../blank.jpg'

export default class Newsiteam extends Component {
  render() {
    const {title,description,image,url,author,publishedAt,mode} = this.props;
    return (
      <>
        <div className="col-4 my-3">
                <div className="card bg" style={mode === "light" ? {background:"black", color:"white"} : {backgroud:"white", color:"black"}}>
                    <img src={image ? image : blankImg} className="card-img-top" alt="card" style={{height:"300px" , objectFit:"cover"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{title ? title.substr(0,50) + "...":" No title available!"}</h5>
                        <p className="card-text" style={{minHeight:"100px"}}>{description ? description.substr(0,100) + "...": "No description avaiable!"}</p>
                        <p className="card-text text-end text-danger"><small>author : {author ? author.substr(0,15) : "Unknown"} </small></p>
                        <p className="card-text text-end text-warning"><small>publishedAt : {publishedAt ? publishedAt: "Unknown"}</small></p>
                        <a href={url} target='_blank' rel="noreferrer" className="btn btn-primary">Read More</a>
                        {/* new Date().toLocaleString() => set formate */}
                    </div>
                 </div>
             </div>
      </>
    )
  }
}
