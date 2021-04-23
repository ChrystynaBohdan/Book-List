import {
    // ADD_BOOK_ERROR,
    // ADD_BOOK_LOADING,
    ADD_BOOK_SUCCESS,
    // DELETE_BOOK_ERROR,
    // DELETE_BOOK_LOADING,
    DELETE_BOOK_SUCCESS,
    // EDIT_BOOK_ERROR,
    // EDIT_BOOK_LOADING,
    // EDIT_BOOK_SUCCESS,
    // FETCH_BOOK_ERROR,
    // FETCH_BOOK_LOADING,
    FETCH_BOOK_SUCCESS


} from './types';

import axios from "axios";

export const fetchBooksSuccess = (data) => {
    return {
        type: FETCH_BOOK_SUCCESS,
        payload: data,
    }
}

export const addBookSuccess = (data) => {
    return {
        type: ADD_BOOK_SUCCESS,
        newBook: data,
    }
}

export const deleteBookSuccess = (data) => {
    return {
        type: DELETE_BOOK_SUCCESS,
        id: data
    }
}

export const fetchBooks = () => {
    return (dispatch) => {
        const url = 'http://localhost:3000/books';
        axios.get(url).then(res => {
            dispatch(fetchBooksSuccess(res.data));
        })
    };
}