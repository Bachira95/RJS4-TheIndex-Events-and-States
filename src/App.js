import React, {Component} from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorList from "./AuthorList";
import AuthorDetail from "./AuthorDetail";

//1- we have to change the function app into class based so we can use state, since we using class, we will ahve a render
//I have to comment in Arabic so I'll understand what I'm doing
//3- For task 2.3, The AuthorCard is rendered in AuthorList, and the authorList is rendered in the App, سو بطتنا بطت بطتكون
//3- so the function will be called from App to List, and then from List to Card
//For task 2.4, go to Card
//For task 2.5 it says If no other is null, then display the list only, if author is selected display the author detail
class App extends Component {
  state = {
    //1- هي الستات رح تحفظلي الاوثر اللي رح ينعرض تحت الليست
    currentAuthor: null
  }

  //2- this will be used as event handler, when we click on an author this will run
  selectAuthor = author => {
    //2- set state is a function, here it takes an argument and assign its value to the state we have
    this.setState({currentAuthor: author});
  }

  //3.0 Deselect function that set the state to null, does not take any parameter,
  //but this function should run when click on Authors on sideBar(3.1),
  //So we have to pass this component to sideBar as props
  deselectAuthor = () =>{
    this.setState ({currentAuthor: null});
  };

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            {/* 3.0 , then go to Sidebar.js*/}
            <Sidebar deselectAuthor = {this.deselectAuthor} />
          </div>
          <div className="content col-10">
            {/* 3-pass selectAuthor as a prop */}
            {/* 2.5- If Null, display the list */}
            {/* this is how to render a Component in app.js */}
            {!this.state.currentAuthor ?( 
            <AuthorList authors={authors} selectAuthor={this.selectAuthor} />):
            (<AuthorDetail author={this.state.currentAuthor} />)} 
            {/* 2.6- Take the selectedAuthor to display it and I have to recieve it in author Detail
            so Run to Detail NOW*/}
            {/* If not null, Display the author detail */}
          </div>
        </div>
      </div>
  );
}
}

export default App;
