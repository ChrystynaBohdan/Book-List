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
            form: {
                title: '',
                author: '',
                category: '',
                isbn: '',
            },
            formErrors: {
                title: null,
                author: null,
                category: null,
                isbn: null,
            }
        };
    }

    handleTitleChange(event) {
        this.setState({form: {...this.state.form, title: event.target.value}}, ()=> {
            this.validateField('title');
        });
    }

    handleAuthorChange(event) {
        this.setState({form: {...this.state.form, author: event.target.value}}, () => {
            this.validateField('author');
        });
    }

    handleCategoryChange(event) {
        this.setState({form: {...this.state.form, category: event.target.value}}, () => {
            this.validateField('category');
        });
    }

    handleIsbnChange(event) {
        this.setState({form: {...this.state.form, isbn: event.target.value}}, ()=>{
            this.validateField('isbn')
        });
    }

    validateField(name) {
        switch (name) {
            case "title":
                if (this.state.form.title.length === 0) {
                    this.setState({formErrors: {...this.state.formErrors, title: 'Should not be empty'}});
                } else {
                    this.setState({formErrors: {...this.state.formErrors, title: null}});
                }
                break;
            case "author":
                if (this.state.form.author.length === 0) {
                    this.setState({formErrors: {...this.state.formErrors, author: 'Should not be empty'}});
                } else {
                    this.setState({formErrors: {...this.state.formErrors, author: null}});
                }
                break;
            case "category":
                if (this.state.form.category.length === 0) {
                    this.setState({formErrors: {...this.state.formErrors, category: 'Should not be empty'}});
                } else {
                    this.setState({formErrors: {...this.state.formErrors, category: null}});
                }
                break;
            case "isbn":
                if (this.state.form.isbn.length === 0) {
                    this.setState({formErrors: {...this.state.formErrors, isbn: 'Should not be empty'}});
                } else {
                    this.setState({formErrors: {...this.state.formErrors, isbn: null}});
                }
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className='create-book'>
                <form>
                    <div className='form-group'>
                        <input
                            type='text'
                            className={`form-control ${this.state.formErrors.title !== null ? 'is-invalid': ''}`}
                            name='title'
                            placeholder='Book title'
                            value={this.state.form.title} onChange={this.handleTitleChange.bind(this)}
                        />
                        <div className="invalid-feedback">
                            Should not be empty
                        </div>
                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            className={`form-control ${this.state.formErrors.author !== null ? 'is-invalid': ''}`}
                            name='author'
                            placeholder='Author name'
                            value={this.state.form.author} onChange={this.handleAuthorChange.bind(this)}
                        />
                        <div className="invalid-feedback">
                            Should not be empty
                        </div>
                    </div>
                    <div className='form-group'>
                        <select name='category'                             className={`form-control ${this.state.formErrors.category !== null ? 'is-invalid': ''}`}
                                aria-label="Category"
                                value={this.state.form.category} onChange={this.handleCategoryChange.bind(this)}
                        >
                            <option selected>Category</option>
                            <option value="Novel">Novel</option>
                            <option value="Detective">Detective</option>
                            <option value="Other">Other</option>
                        </select>
                        <div className="invalid-feedback">
                            Should not be empty
                        </div>
                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            className={`form-control ${this.state.formErrors.isbn !== null ? 'is-invalid': ''}`}
                            name='isbn'
                            placeholder='ISBN'
                            value={this.state.form.isbn} onChange={this.handleIsbnChange.bind(this)}
                        />
                        <div className="invalid-feedback">
                            Should not be empty
                        </div>
                    </div>
                    <div className='form-group'>
                        <button type='button' className="btn btn-primary"
                                onClick={() => {
                                    if(this.state.form.title && this.state.form.author && this.state.form.category && this.state.form.isbn) {
                                        this.props.addBook({
                                            id: this.props.bookId,
                                            header: this.state.form.title,
                                            author: this.state.form.author,
                                            category: this.state.form.category,
                                            isbn: this.state.form.isbn
                                        })
                                    }
                                }}
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

