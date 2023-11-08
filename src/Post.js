import React from "react";

let reference=React.createRef();

const zatemnenie=()=>{
    reference.current.style.color="red";
};


const Post = (props) => {
    return(
        <div className="post" onMouseEnter={zatemnenie}>
            <div className="name_container" >
                <h1 ref={reference}>{props.name}</h1>
            </div>
           
            <div className="text_container">
                <h1>{props.text}</h1>
            </div>
        </div>

    );
}
let posts=[
    {id:1 ,text:"Mother sorry :(", postTitle:"David"},
    {id:2 ,text:"i f**** school", postTitle:"Dima"},
    {id:3 ,text:"SOS", postTitle:"classmate"}
]
export default Post;