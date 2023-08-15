import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Book from './Components/Book';
import axios from 'axios';

const App = () => {
  let [search, setSearch] = useState("harry+potter")
  let [bookData1, setBookData1] = useState([])
  let [bookData, setBookData] = useState([])


  const getSearchText = (searchText) => {
    setSearch(searchText);

  }

  useEffect(() => {
    let baseURL = `https://www.googleapis.com/books/v1/volumes?q=${search}`;
    let baseURL1 = `https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes`;

    axios.get(baseURL).then((response) => {
      setBookData(response.data.items)

    }).catch((error) => console.log(error));
    axios.get(baseURL1).then((response) => {
      setBookData1(response.data.items)

    }).catch((error) => console.log(error));

  }, [search])

  let newData = [...bookData, ...bookData1]
  let chankData = newData.slice(0, 3);

  return (
    <div >
      <Nav getSearchText={getSearchText} />
      <Book newData={newData} chankData={chankData} />
    </div>
  )


}
export default App;
