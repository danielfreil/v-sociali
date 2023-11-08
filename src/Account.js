import acc from './acc.jpg'
import './App.css'
import sait from './vproject.jpg';
import contakt from './contakts.jpg';
import chat from './chat2.jpg';
import uvedom from './uvedom.png';

const Account=()=>{
    return (
        <div className="account">
        <div className="button"><span>Аккаунт</span> <img src={acc} alt="acc.jpg" className="contakt"/></div>
        </div> 
    );
}
export default Account;