import './../assets/main.css';

import React, { Component } from 'react';
import { TutorialList } from './TutorialList';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        tutorials: [],
        mode: 'home',
        searchtype: 'terms',
        terms: ''
    };

    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.searchTermChange = this.searchTermChange.bind(this);
    this.loadTutorials = this.loadTutorials.bind(this);
    
}

componentDidMount() {
  this.loadTutorials(this.state.mode, this.state.terms);
}

componentWillUnmount() {
  // fix Warning: Can't perform a React state update on an unmounted component
  this.setState = (state,callback)=>{
      return;
  };
}
 
getapi(mode, searchtype, terms) {
  switch (mode) {
    case 'home' : return 'http://localhost:3001/tutorials';
    case 'search' : 
      switch (searchtype) {
        case "tags" : return 'http://localhost:3001/tutorials?tags=' + terms; //getTopRatedTutorialsForTags
        case "terms" : return 'http://localhost:3001/tutorials?searchterm=' + terms; //searchForTutorials
        default : return 'http://localhost:3001/tutorials';
      }
    default : return 'http://localhost:3001/tutorials';
  }
}

loadTutorials(mode, searchtype, terms) {
  
  if(mode =='search' && !(searchtype == 'tags' || searchtype == 'terms') ) {
    this.setState({ tutorials: [] });
    return;
  }

  fetch(this.getapi(mode, searchtype, terms))
      .then((res) => {
          return res.json();
      })
      .then((data) => {
          if(searchtype == 'tags') {
            data = data.sort((t1, t2) => { return t1.averageUserRating < t2.averageUserRating }).slice(0,19);
          }
          this.setState({ tutorials: data });
      });
}

searchTermChange = (e) =>  {
  this.setState({terms: e.target.value});
}

clickHandler = (e) =>  {
  let searchtype = this.state.searchtype
  if(e.target.value == 'home'){
    this.setState({searchtype: ''});
    searchtype = '';
  }
  this.setState({mode: e.target.value});
  this.loadTutorials(e.target.value, searchtype, this.state.terms);
}

onChangeSearch(e) {
  this.setState({searchtype: e.target.value});
}

render () {

    return (    
      <>
      <div className="p-2 bg-green-100" role="header">
          <header>
            <h1>Tutorial Videos</h1>
          </header>
          <div className="p-2 bg-green-200 border-2 border-green-300">
            <button value="home" onClick={this.clickHandler}>View All</button>
          </div>
          <div className="p-2 bg-green-200 border-2 border-green-300">
            <input defaultValue="" onChange={this.searchTermChange} type="text" role="search"/><br/>
            
            <label>
              <input name="searchtype" type="radio" value="terms" role="terms" checked={this.state.searchtype == "terms"} onChange={this.onChangeSearch} />
              by search term
            </label>
            <br/>
            
            <label>
              <input name="searchtype" type="radio" value="tags" role="tags" checked={this.state.searchtype == "tags"} onChange={this.onChangeSearch} />
              by search tags
              </label>
              <br/>
            <button value="search" onClick={this.clickHandler} role="buttonsearch">Search</button>
          </div>
      </div>
      <TutorialList model={this.state.tutorials} mode={this.state.mode} />
      </>
    );
  }
}
