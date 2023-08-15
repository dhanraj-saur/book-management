import React, { useState } from 'react';
import navIcon from './icon.png';
import heartIcon from './heartIcon.png'
import notification from './notifaction.png';
import diamondIcon from './dimond.png';
import imageIcon from './image.png';
import searchIcon from './search.png'

const Nav = ({getSearchText}) => {

    let [searchText, setSearchText] = useState("")
    
    return (
        <div  >
            <div className='navbar' >
                <div className='icon'>
                    <img src={navIcon} width={'40px'} height={'40px'} alt='groupIcon' />
                    <h4>KeazoN <span className='books'>BOOKS</span></h4>
                </div>
                <div className='searchbar-div'>
                    <div className='search-bar'>
                        <img src={searchIcon} alt='search' className='search-icon-img' />
                        <input className='search-input' type='search' placeholder='Search for the book you want and read it now... Sherlock Holmes, Harry Pot...' 
                         onChange={(e)=>setSearchText(e.target.value)}
                        />
                    </div>
                    <div className='search-button'>
                        <button className='search-btn' onClick={()=>{
                            getSearchText(searchText)
                        }}>Search</button>
                    </div>
                </div>

                <div className='img_icon'>
                    <img src={heartIcon} width={'30px'} height={'30px'} alt='heartIcon' />
                    <img src={notification} width={'30px'} height={'30px'} alt='notification' />
                    <img src={diamondIcon} width={'30px'} height={'30px'} alt='diamondIcon' />
                    <img src={imageIcon} width={'30px'} height={'30px'} alt='imageIcon' />
                </div>
               
            </div>
        </div>
    )
}

export default Nav;