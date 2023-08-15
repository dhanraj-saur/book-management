import React from "react";
import crossIcon from "./cross.png";

const BookDetails = ({ showData, onClose }) => {



  console.log(showData);

  


  return (
    <div>
    
        <div className="book-list">
          <div className="select-book-item">
            <div className="select-book-img">
              <img src={showData?.volumeInfo?.imageLinks?.thumbnail} alt="icon"/>
            </div>
            <div className="select-book-info-div">
              <div className="select-book-title">
                <h3 className="select-prag">{showData?.volumeInfo?.title}</h3>
                <div className="date-cross">
                  <p className="publish-data">
                    Published Date: {showData?.volumeInfo.publishedDate}
                  </p>
                  <button className="cross-btn" onClick={onClose}>
                    <img
                      src={crossIcon}
                      width={25}
                      height={25}
                      alt="crossIcon"
                    />
                  </button>
                </div>
              </div>
              <div className="select-book-author">
                <p className="author">{showData?.volumeInfo?.title}</p>
              </div>
              <div className="select-book-description">
                <p>{showData?.volumeInfo?.description}</p>
              </div>
              <div className="info-book">
                <div className="box-1">
                  <p>Average Rating: {showData?.volumeInfo?.averageRating}</p>
                </div>
                <div className="box-2">
                  <p>Rating caount: {showData?.volumeInfo?.ratingsCount}</p>
                </div>
                <div className="box3">
                  <p>Publisher: {showData?.volumeInfo?.publisher}</p>
                </div>
                <div className="box-4">
                  <p>Language: {showData?.volumeInfo?.language}</p>
                </div>
                <a
                  href="http://books.google.co.in/books?id=xNgstAEACAAJ&amp;dq=harry+potter&amp;hl=&amp;cd=1&amp;source=gbs_api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="select-now-read-btn">Now Read!</button>
                </a>
                <a
                  href="http://books.google.co.in/books?id=xNgstAEACAAJ&amp;dq=harry+potter&amp;hl=&amp;source=gbs_api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="select-now-read-btn">More Info!</button>
                </a>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
};

export default BookDetails;
