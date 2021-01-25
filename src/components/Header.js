import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
//import { ShoppingBasket } from '@material-ui/icons';
const Header = () => {
  const [{basket,user}]=useStateValue();
  const login=()=>{
    if(user){
      auth.signOut();
    }
  }
    return (
        <nav className="header">
           <Link to="/">
            <img className="header__logo" 
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt="Amazon logo" />
            </Link>
            {/** search box*/}
            
            <div className="header__search">
              <input type="text" className="header__searchInput"/>
              <SearchIcon className="header__searchIcon"/>
            </div>
            {/** 3 link*/}

            <div className="header__nav">
                <Link to={!user && '/login'} className="header__link">
                  <div onClick={login} className="header__option">
                    <span className="header__optionlineone">>Hello {!user ? 'Guest' : user.email}</span>
                    <span className="header__optionlinetwo">{user ? 'Sign Out' : 'sign In'}</span>
                  </div>
                </Link>

                <Link to="/" className="header__link">
                  <div className="header__option">
                    <span className="header__optionlineone"> Returns </span>
                    <span className="header__optionlinetwo">&Orders </span>
                  </div>
                </Link>

                <Link to="/" className="header__link">
                  <div className="header__option">
                    <span className="header__optionlineone"> Your  </span>
                    <span className="header__optionlinetwo"> Prime </span>
                  </div>
                </Link>

                <Link to="/checkout" className="header__link">
                 <div className="header__optionBasket">
                    <AddShoppingCartIcon/>
                    <span className="header__optionlinetwo header__basketCount">{basket?.length}</span>
                 </div>
                </Link>
            </div>
            
        </nav>
    )
}

export default Header

