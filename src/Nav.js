import './App.css'
import sait from './vproject.jpg';
import contakt from './contakts.jpg';
import chat from './chat2.jpg';
import uvedom from './uvedom.png';
import Uvedom from './Uvedom';
import { NavLink } from 'react-router-dom';
import React from 'react';

let reference=React.createRef();

const viewer=()=>{
  reference.current.style.backgroundColor="yellow";  
};
const mouseleve=()=>{
    reference.current.style.backgroundColor="black";  
};
const zvet_texta=()=>{
    reference.current.styleColor="white";  
};
const sidebar1=()=>{
    reference.current.backgroundColor="gray";
    reference.current.width="25px"; 
    reference.current.height="50px";

}

const Nav=()=>{
    return (
        <div className="nav">
            <div className="button_container">
            
              
            <img src={sait} className="sait"/>
                
                </div>
                <div className="navigation">
                <div className="button"  ref={reference} onMouseLeave={mouseleve}><h3  onMouseEnter={zvet_texta}><NavLink to='/' >Главная</NavLink></h3></div>
                <div className="button"  onMouseLeave={mouseleve}><NavLink to='/cantakt'><h3>Контакты </h3></NavLink><img src={contakt} className="contakt"/></div>
                <div className="button"><h3><NavLink to='/chat'>Чаты</NavLink></h3><img src={chat} className="contakt"/></div>
                <div className="button"ref={reference} ><NavLink to='/uvedom'><h6>Уведомление</h6></NavLink><img src={uvedom} className="contakt"/></div>
                <div className="button"ref={reference} ><NavLink to='/posts'><h6>Опубликовать</h6></NavLink><img src={uvedom} className="contakt"/></div>
                </div>
                <div className="filler" ></div>
            </div>
        
    );
}
export default Nav;