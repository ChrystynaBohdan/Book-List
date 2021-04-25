import React, {Component, useEffect, useState} from "react";
import './CreateBooks.module.css';
import {connect} from "react-redux";
import axios from "axios";
import {addBookSuccess} from "../Actions/book.actions";
import {Link} from "react-router-dom";

const CreateBooks = (props) => {
    const [form, updateForm] = useState({
        title: '',
        author: '',
        category: '',
        isbn: '',
    });

    const [formErrors, updateFormErrors] = useState({
        title: null,
        author: null,
        category: null,
        isbn: null,
    });

    useEffect(() => {
        validateField('title')
    }, [form.title]);

    useEffect(() => {
        validateField('author');
    }, [form.author]);

    useEffect(() => {
        validateField('category');
    }, [form.category]);

    useEffect(() => {
        validateField('isbn')
    }, [form.isbn]);


    function handleTitleChange(event) {
        updateForm({...form, title: event.target.value});
    }

    function handleAuthorChange(event) {
        updateForm({...form, author: event.target.value});
    }

    function handleCategoryChange(event) {
        updateForm({...form, category: event.target.value});

    }

    function handleIsbnChange(event) {
        updateForm({...form, isbn: event.target.value});
    }

    function validateField(name) {
        switch (name) {
            case "title":
                if (form.title.length === 0) {
                    updateFormErrors({...formErrors, title: 'Should not be empty'});
                } else {
                    updateFormErrors({...formErrors, title: null});
                }
                break;
            case "author":
                if (form.author.length === 0) {
                    updateFormErrors({...formErrors, author: 'Should not be empty'});
                } else {
                    updateFormErrors({...formErrors, author: null});
                }
                break;
            case "category":
                if (form.category.length === 0) {
                    updateFormErrors({...formErrors, category: 'Should not be empty'});
                } else {
                    updateFormErrors({...formErrors, category: null});
                }
                break;
            case "isbn":
                if (form.isbn.length === 0) {
                    updateFormErrors({...formErrors, isbn: 'Should not be empty'});
                } else {
                    updateFormErrors({...formErrors, isbn: null});
                }
                break;
            default:
                break;
        }
    }

    return (
        <div className='create-book'>
            <form>
                <div className='form-group'>
                    <input
                        type='text'
                        className={`form-control ${formErrors.title !== null ? 'is-invalid' : ''}`}
                        name='title'
                        placeholder='Book title'
                        value={form.title} onChange={handleTitleChange}
                    />
                    <div className="invalid-feedback">
                        Should not be empty
                    </div>
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        className={`form-control ${formErrors.author !== null ? 'is-invalid' : ''}`}
                        name='author'
                        placeholder='Author name'
                        value={form.author} onChange={handleAuthorChange}
                    />
                    <div className="invalid-feedback">
                        Should not be empty
                    </div>
                </div>
                <div className='form-group'>
                    <select name='category'
                            className={`form-control ${formErrors.category !== null ? 'is-invalid' : ''}`}
                            aria-label="Category"
                            value={form.category} onChange={handleCategoryChange}
                    >
                        <option defaultValue={null}>Category</option>
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
                        className={`form-control ${formErrors.isbn !== null ? 'is-invalid' : ''}`}
                        name='isbn'
                        placeholder='ISBN'
                        value={form.isbn} onChange={handleIsbnChange}
                    />
                    <div className="invalid-feedback">
                        Should not be empty
                    </div>
                </div>
                <div className='form-group'>
                    <button type='button' className="btn btn-primary"
                            onClick={() => {
                                if (form.title && form.author && form.category && form.isbn) {
                                    props.addBook({
                                        id: props.bookId,
                                        header: form.title,
                                        author: form.author,
                                        category: form.category,
                                        isbn: form.isbn
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

