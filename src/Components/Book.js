import React from "react";


const Book = ({book, deleteBook}) => {
    return (
        <tr>
            <td>{book.header}</td>
            <td>{book.author}</td>
            <td>{book.category}</td>
            <td>{book.isbn}</td>
            <td>
                <button type="button" className="btn btn-secondary">Edit</button>
                <button type="button" className="btn btn-danger" onClick={deleteBook}>Delete</button>
            </td>
        </tr>
    )

}

export default Book;