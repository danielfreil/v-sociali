import './App.css'
import Post from './Post'
import{useState,useEffect}from 'react';

function Timer(){
    const [count, setCount]=useState(0);

    useEffect(() =>{
        setTimeout(() =>{
            setCount((count)=>count+1);
        },1000);
    });
    return <h1>Прошло столько секунд {count}</h1>
}


// //function Timer1() {
//   const [count, setCount] = useState(10); // Set an initial count value

//   useEffect(() => {
//     if (count > 0) {
//       const timer = setTimeout(() => {
//         setCount(count - 1);
//       }, 1000);

//       return () => {
//         clearTimeout(timer);
//       };
//     }
//   }, [count]);

//   if (count === 0) {
//     return <TimeUpComponent />;
//   }

//   return (
//     <div>
//       <h1>У вас осталось времени {count}</h1>
//       {/* Render other content here */}
//     </div>
//   );


// function TimeUpComponent() {
//   // This component will be displayed when the time is up
//   return <h1>У вас закончилось время</h1> ;
//   return <div className='void'></div> ;

// }



 const Lenta=()=>{
    const  [david,setDavid]=useState(0);
    const increment=()=>setDavid(david+1);
    const decrement=()=>setDavid(david-1);
    const zero=()=>setDavid(david*0);
    
    
    
    return(
        
        <div className="lenta">
            <div>
                <h1>David:{david}</h1>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <button onClick={zero}>0</button>
            </div>
        
        
        <button type="text" placeholder='+'onClick='david'></button>
            <Post text="Mother sorry :(" name="David"/>
            <Post text="i f**** school" name="Dima"/>
            <Post  text="SOS" name="classmate"/ >
            
        </div>  
    );
}
export default Lenta;