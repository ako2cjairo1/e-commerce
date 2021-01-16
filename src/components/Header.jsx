import React from 'react'
import '../Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link, useHistory } from 'react-router-dom';
import { useProductContext } from '../ProductProvider';
import { auth } from '../firebase';

export default function Header() {
    const history = useHistory();
    const [{ basket, user }, _] = useProductContext();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        } else {
            history.push('/login')
        }
    };
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div 
                        className="header__option"
                        onClick={handleAuthentication}
                    >
                        <span className="header__optionLineOne">Hello, { user ? user.email : 'Guest'}</span>
                        <span className="header__optionLineTwo">
                            {
                                user ? 'Sign Out' : 'Sign In'
                            }
                        </span>
                    </div>
                </Link>

                <Link to='/orders'>
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <Link to="checkout">
                    <div className="header__optionBasket">
                        <ShoppingCartIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
