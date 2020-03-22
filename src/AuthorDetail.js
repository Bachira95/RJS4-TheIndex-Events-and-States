import React from "react";

// here, we are gonna receive the currentAuthor -as props- and display its information here
function AuthorDetail(props) {
  // here we got the author objectHash, so we don't use props. any more
  const author = props.author;
  //here we are gonna map on the books for each author, instead of for loop
  const bookList = author.books.map(book => {
    return (
      <tr key={book.title}>
        <td>{book.title}</td>
        <td>
          {author.first_name} {author.last_name}
        </td>
        <td>
          <button className="btn" style={{ backgroundColor: book.color }} />
        </td>
      </tr>
    );
  });

  return (
    <div className="author col-xs-10">
      <div>
        <h3>
          {author.first_name} {author.last_name}
        </h3>
        <img
          src={author.imageUrl}
          className="img-thumbnail"
          alt={`${author.first_name} ${author.last_name}`}
        />
      </div>
      <table className="mt-3 table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Authors</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>{bookList}</tbody>
      </table>
    </div>
  );
}

export default AuthorDetail;
