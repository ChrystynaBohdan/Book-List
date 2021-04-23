import React, {Component} from "react";
import Book from "../Components/Book";
import {connect} from "react-redux";
import axios from "axios";
import {deleteBookSuccess} from "../Actions/book.actions";



class Books extends Component {
    render() {
        return (
            <div>
                <table className='table table-striped'>
                    <thead>
                    <tr>
                        <th>Header</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>ISBN</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      this.props.books.map(book => {
                          return (
                              <Book key ={book.id} book={book} deleteBook={() => (this.props.deleteBook(book.id))}/>
                          )
                      })
                    }
                    </tbody>
                </table>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
      return {
          books: state.booksData.books || [],
      }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteBook: (id) => {
            axios.delete('http://localhost:3000/books/'+ id).then(response => {
                dispatch(deleteBookSuccess(id));
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Books);