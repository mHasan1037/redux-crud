import { createSlice } from '@reduxjs/toolkit'
import {v4 as uuidv4} from 'uuid'

const initialBooks = {
    books: [
        {id: uuidv4(), title: 'A brief history of time', author: 'Stephen Hawking'},
        {id: uuidv4(), title: 'The alchemist', author: 'Paulo Coelho'}
    ]
}

export const booksSlice = createSlice({
    name: 'books',
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        updateBook: (state, action) =>{
            const {id, title, author} = action.payload
            const isBookExixt = state.books.filter((book)=> book.id === id)
            if(isBookExixt){
                isBookExixt[0].title = title;
                isBookExixt[0].author = author;
            }
        },
        deleteBook: (state, action) =>{
            const id = action.payload;
            state.books = state.books.filter(book => book.id !== id)
        }
    }
})


export const {showBooks, addBook, deleteBook, updateBook} = booksSlice.actions

export default booksSlice.reducer

