import React from 'react';
import {Link} from 'react-router-dom';
import logo from './Assets/Logo/logo.png';

const Nav = () => {
    return (
        <div> 
            <ul class="nav-ui">
                <li><Link to='/'><img class = "logo" src={logo}/> </Link></li>
                <li><Link to="/Cards"> Cards</Link></li>
                <li><Link to="/DeckBuilder"> Deck Builder</Link></li>
                <li><Link to="/BanList"> Ban list</Link></li>
                <li><Link to="/Rule"> Rule</Link></li>
                <li><Link to="/Elo"> Elo</Link></li>
                <div class="right-section">
                    <input class="search-bar" type="text" placeholder="Search..."/>
                    <button class="login-button">Đăng Nhập</button>
                    <button class="register-button">Đăng Ký</button>
                </div>
                
            </ul>
            
        </div>
    )
}
export default Nav