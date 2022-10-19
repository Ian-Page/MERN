import React from "react";
import {Link} from 'react-router-dom';
function Chat (){
    return(
        <div className="chat-wrap">
            <div class="header">
                
                <Link to="/profile"><img src="static\icons8-user-30.png" alt="profile" className="button"></img></Link>
                
                <Link to="/"><img src="static\icons8-orange-heart-48.png" alt="heart"></img></Link>

                <Link to="/chat"><img src="static\icons8-chat-messages-32.png" alt="chat" className="button"/></Link>
                
                
            </div>
        <div class="Chat">
             
            <div className="message-box-wrapper">
            <div className="">
            <img src ="https://img4.hotnessrater.com/4838267/jena-frumes-bikini.jpg?w=600&h=900" className="profile-pic"  ></img>
            </div>
            <div className="message-box">STUFF YOU SAY GOES HEREEEEEEE!</div>
            </div>
            <div className="message-box-wrapper-match">
            <div className="message-box-match">STUFF they SAY GOES HEREEEEEEE!</div>
            <div className="">
            <img src ="https://papers.co/wallpaper/papers.co-hc03-young-steve-jobs-face-1-wallpaper.jpg" className="profile-pic"  ></img>
            </div>
            </div>
        
        </div>
        </div>
    )
}

export default Chat