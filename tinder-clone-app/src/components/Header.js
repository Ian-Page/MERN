import React from "react";

import {Link} from 'react-router-dom';

function Header (){
    return(
        <div class="header">
            
            <Link to="/profile"><img src="static\icons8-user-30.png" alt="profile" className="button"></img></Link>
            
            <Link to="/"><img src="static\icons8-orange-heart-48.png" alt="heart"></img></Link>

            <Link to="/chat"><img src="static\icons8-chat-messages-32.png" alt="chat" className="button"/></Link>
            
            
        </div>
    )
}

export default Header
