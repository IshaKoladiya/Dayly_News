import React, { Component } from "react";
import Newsiteam from "./Newsiteam";
import Header from "./Header";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

// import allNews from "./../SampleOutput.json";

export default class News extends Component {
  // create class base state

  // constructor(){
  //   super();

  //   // create a new state
  //   this.state = {
  //        counter:0,
  //        name:"Isha"
  //   }
  // }

  // json file API calling
  // constructor() {
  //   super();
  //   this.state = {
  //     News: allNews.articles,
  //   };
  // }

  // increment = () =>{
  //   // update state
  //   this.setState({
  //     counter:this.state.counter+1,
  //     name:"Nova"

  //   });
  // }

  // online API calling

  constructor() {
    super();
    this.state = {
      News: [],
      pageNo: 1,
      totleResults: 0,
      pageSize: 15,
      // loding
      loader:false 
    };
  }

  updateNews = async (page) => {
    // hide key
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&category=${this.props.category}&page=${page}&pageSize=${this.state.pageSize}`;
    this.props.setProgress(30);
    let N_news = await fetch(url);
    this.props.setProgress(60);
    let parseNews = await N_news.json();
    this.props.setProgress(80);
    //  console.log(N_news)
     console.log(parseNews);

    // news update in state
    this.setState({
      loader:false,
      News: parseNews.articles,
      pageNo: page,
      totalResults: parseNews.totalResults
      
    });
    this.props.setProgress(100);
  }

  componentDidMount() {
    this.setState({loader:true})
    this.updateNews(1);

    if(this.props.category !== "general"){
      document.title=this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1) + ' Top Headline DailyNews, Todays News Headlines, Breaking News and Live ... '
    }
    else{
      document.title = "Top headline DailyNews, Today's News Headlines, Breaking News and Live ..."
    }
  }

  // next privios button function

  // hendalNext = () => {
  //   this.setState({loader:true})
  //   this.updateNews(this.state.pageNo+1);
    // console.log(this.updateNews(this.state.pageNo+1))
    
  // }
  // handlePrev = () => {
  //   this.setState({loader:true})
  //   this.updateNews(this.state.pageNo-1);
    // console.log(this.updateNews(this.state.pageNo-1))
  // }

  // componentDidUpdate(){
  //   console.log("componentDidupdate")
  // }

  // componentWillUnmount(){
  //   console.log("componentWillUnmount")
  // }


  // infinet scroll 

  fetchData = async () =>{

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&category=${this.props.category}&page=${this.state.pageNo+1}&pageSize=${this.state.pageSize}`;
    let N_news = await fetch(url);
    let parseNews = await N_news.json();
    
    //  console.log(N_news)
    //  console.log(parseNews);

    // news update in state
    this.setState({
      loader:false,
      News:this.state.News.concat(parseNews.articles),
      pageNo:this.state.pageNo+1,
      totalResults: parseNews.totalResults
      
    });
  }

  render() {
    const { mode } = this.props;
    return (
      <>
      <Header mode={mode} category={this.props.category} description={`Read today ${this.props.category} articles`}/>
        <div className="container-fluid" style={mode === "light" ? {background:"black", color:"white"} : {backgroud:"white", color:"black"}}>

        {/* infinet scroll  */}

        <InfiniteScroll
            dataLength={this.state.News.length} //This is important field to render the next data
            next={this.fetchData}
            hasMore={this.state.News.length<this.state.totalResults}
            loader={<Loader/>}>
          <div className="container"> 
            {/* class base state */}
            {/* <div className="row">
              <h1>Hello,{this.state.name}</h1>
              <h1>Hello,{this.state.counter}</h1>
              <button type='button' onClick={this.increment}> increment</button>
            </div> */}
            <div className="row">
              {this.state.loader && <Loader/>}
              {this.state.loader === false &&  this.state.News.map((single) => {
                return (
                  <Newsiteam key={single.title} title={single.title} description={single.description} image={single.urlToImage} url={single.url} author={single.author} publishedAt={single.publishedAt} mode={mode}/>
                );
               }
               )
              }
            </div>

            {/* button next previos */}
            {/* <div className="row">
              <div className="col text-end">
                <button type="button"className="btn btn-secondary mx-2" disabled={this.state.pageNo<=1} onClick={this.handlePrev}>&#8592; Previous</button>
                <button type="button" className="btn btn-secondary mx-2"  onClick={this.hendalNext}>Next&#8594;</button> */}
                {/* disabled={Math.ceil(this.state.totleResults/this.state.pageSize) <= this.state.pageNo}  */}
              {/* </div>
            </div> */}
          </div>
          </InfiniteScroll>
        </div>
      </>
    )
  }
}
