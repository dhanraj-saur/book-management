
import React, { useState } from 'react'

import BookDetails from './BookDetails'

const Book = ({newData,chankData}) => {
    let [showData, setShowData] = useState([])
    let [showDetails, setShowDetails] = useState(false)
    
    return (
        <div>
            {showDetails == true ? <BookDetails showData={showData} onClose={()=>setShowDetails(false)} /> :
                <div className='books-list' >
                    {
                        chankData.map((item) => {
                            return (
                                <div className='book-item' key={item.id} onClick={() => {

                                    setShowData(item)
                                    setShowDetails(true)
                                }} >
                                    <div className='book-img-div'>
                                        <img src={item.volumeInfo.imageLinks.smallThumbnail} alt='book-image' />
                                    </div>
                                    <div className='book-info-div'>
                                        <div className='book-title'>
                                            <h5>{item.volumeInfo.title}</h5><br />
                                        </div>
                                        <div className='book-description'>
                                            <p >{item.volumeInfo.description}</p>
                                        </div>
                                        <div className='book-read-now'>
                                            <a href='http://books.google.co.in/books?id=xNgstAEACAAJ&dq=harry+potter&hl=&cd=1&source=gbs_api'
                                                target='_blank' rel='noopener noreferrer'>
                                                <button className="now-read-btn">Now Read!</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }
            <h4 style={{ marginLeft: '2%', marginTop: '20px' }}>More Books</h4>
            <div className="book-list-more">
                {
                    newData.map((items) => {
                        return (
                            <div className='book-image' key={items.id} onClick={() => {
                                setShowData(items)
                                setShowDetails(true)
                            }} >
                                <img src={items.volumeInfo.imageLinks.smallThumbnail} />
                            </div>
                        )
                    })
                }
            </div>
            <div>

            </div>
        </div>
    )
}
export default Book;



