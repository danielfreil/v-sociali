import './App.css';
import acc from './acc2.jpg';
import Nav from './Nav';
import Lenta from './Lenta';
import Account from './Account';
import {BrowserRouter, NavLink, Routes, Route} from 'react-router-dom';
import Chat from './Chat';
import Cantakt from './Cantakt';
import Uvedom from './Uvedom';
import React from 'react';

const Posts=()=>{
    return(
    <div className="lenta">
    <input className="name_post" type="text" placeholder="Напишите название"/>
    <input className="coderjimoe_posta" type="text" placeholder="Напишите пост"/>
    <button>Опубликовать</button>
</div>
)
}

export default Posts;