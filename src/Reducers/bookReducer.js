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
}  from '../Actions/types';

const defaultState = {
    books:[],
    error:null,
    isLoading:false,
};

const bookReducer = (state = defaultState, action) => {
    switch (action.type){
        case FETCH_BOOK_SUCCESS:
            return {...state, books: action.payload};
        case ADD_BOOK_SUCCESS:
            return {...state, books: [...state.books, action.newBook]};
        case DELETE_BOOK_SUCCESS:
            return {...state, books: state.books.filter(book => book.id !== action.id)}
        default:
            return state;
    }
}

export default bookReducer;
