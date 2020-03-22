import React, { Component } from "react";

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";

class AuthorList extends Component {
  state = {
    authors: this.props.authors
  };

  //if the first name or the last name of an author CONTAIN the search, we'll get that author
  //this function will run when onChange in the SearchBar
  //and then we have to pass it to the searchbar component that is rendered in authorList
  //We filterd through this.props.authors to solve the problem of after clearing the search bar
  //You can change it this.state.authors.filter... and see what will happen
  //c'mon, scroll down
  filterAuthors = query => {
    // author here is an obj
    const filterdAuthors = this.props.authors.filter(author =>
      `${author.first_name} ${author.last_name}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );

    this.setState({ authors: filterdAuthors });
  };

  render() {
    // instead of using this.props.authors.. we have to say: this.state.authors..
    // because this is a function, not class based, and we have the authors in the state
    const authorCards = this.state.authors.map(author => (
      /*3- Now the List got selectAuthor as a prop from the App, and it will pass it to Card, 
    and we have to access the function selectAutor inside the props that's why we wrote: props.selectAuthor*/
      <AuthorCard
        key={author.first_name + author.last_name}
        author={author}
        selectAuthor={this.props.selectAuthor}
      />
    ));

    return (
      <div className="authors">
        <h3>Authors</h3>
        {/* passing the filtering function */}
        <SearchBar filter={this.filterAuthors} />
        <div className="row">{authorCards}</div>
      </div>
    );
  }
}

export default AuthorList;
