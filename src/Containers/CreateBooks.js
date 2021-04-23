import React, {Component} from "react";
import './CreateBooks.module.css';
import {connect} from "react-redux";
import axios from "axios";
import {addBookSuccess} from "../Actions/book.actions";
import {Link} from "react-router-dom";

class CreateBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            category: '',
            isbn: '',
        };
    }

    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }

    handleAuthorChange(event) {
        this.setState({author: event.target.value});
    }

    handleCategoryChange(event) {
        this.setState({category: event.target.value});
    }

     handleIsbnChange(event) {
        this.setState({isbn: event.target.value});
    }

    render() {
        return (
            <div className='create-book'>
                <form>
                    <div className='form-group'>
                        <input
                            type='text'
                            className='form-control'
                            name='title'
                            placeholder='Book title'
                            value={this.state.title} onChange={this.handleTitleChange.bind(this)}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            className='form-control'
                            name='author'
                            placeholder='Author name'
                            value={this.state.author} onChange={this.handleAuthorChange.bind(this)}
                        />
                    </div>
                    <div className='form-group'>
                        <select name='category' className="form-control" aria-label="Category"
                                value={this.state.category} onChange={this.handleCategoryChange.bind(this)}
                        >
                            <option selected>Category</option>
                            <option value="Novel">Novel</option>
                            <option value="Detective">Detective</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            className='form-control'
                            name='isbn'
                            placeholder='ISBN'
                            value={this.state.isbn} onChange={this.handleIsbnChange.bind(this)}
                        />
                    </div>
                    <div className='form-group'>
                        <button type='button' className="btn btn-primary"
                        onClick={() => {this.props.addBook({
                            id: this.props.bookId,
                            header: this.state.title,
                            author: this.state.author,
                            category: this.state.category,
                            isbn: this.state.isbn
                        })}}
                        >
                            ADD
                        </button>
                    </div>
                    <div className='form-group'>
                        <button type='button' className="btn btn-light">
                            <Link to='/'>BACK</Link>
                        </button>
                    </div>

                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBook: (data) => {
            axios.post('http://localhost:3000/books', data).then(response => {
                dispatch(addBookSuccess(data));
            })
        }
    }
}

const mapStateToProps = (state) => {
    return {
        bookId: state.booksData.books.length + 1,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBooks);

