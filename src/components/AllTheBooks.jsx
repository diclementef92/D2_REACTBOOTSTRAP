import { Component } from "react";
import { Nav } from "react-bootstrap";
import scifiBooks from "../books/scifi.json";

class AllTheBooks extends Component {
  render() {
    console.log(scifiBooks);
    return scifiBooks.map((book) => {
      return (
        <div className="card m-2">
          <img className="card-img-top h-50" src={book.img} alt="cover-libro" />
          <div className="card-body">
            <h5 className="card-title">{book.title}</h5>
            <p className="card-text">{book.price}€</p>
            <a href="#" className="btn btn-primary">
              Dettagli
            </a>
          </div>
        </div>
      );
    });
  }
}

export default AllTheBooks;
