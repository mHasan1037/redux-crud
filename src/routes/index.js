import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error from '../pages/Error'
import Navbar from '../layOuts/Navbar'
import BooksView from '../fetaures/books/BooksView'
import AddBooks from '../fetaures/books/AddBooks'
import EditBooks from '../fetaures/books/EditBooks'

const Index = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <main>
            <Routes>
                <Route path='/' element={<BooksView />} />
                <Route path='/redux-crud' element={<BooksView />} />
                <Route path='/add-book' element={<AddBooks />} />
                <Route path='/edit-book' element={<EditBooks />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </main>
    </BrowserRouter>
  )
}

export default Index