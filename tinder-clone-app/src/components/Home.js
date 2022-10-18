import React, { useEffect, useState } from "react";
import TinderCard from 'react-tinder-card'
import database from './firebase';
import {Link} from 'react-router-dom';

function Home (){
    const[people,setPeople]= useState([
    //   {
    //        name:'steve jobs',
    //        url: 'https://papers.co/wallpaper/papers.co-hc03-young-steve-jobs-face-1-wallpaper.jpg'
    //    },
    //    {
    //        name:'Pamella Anderson',
    //        url: 'https://images-na.ssl-images-amazon.com/images/I/41jwZM0FHlL._AC_UL600_SR600,600_.jpg'
    //    }
    //    
    ]);
    
    useEffect(()=>{

        const unsubscribe = database.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ));

        return () => {
            //clean up
            unsubscribe();
        };
    },[]);


    return(
        
        <div class="Home">

            <div class="header">
                
                <Link to="/profile"><img src="static\icons8-user-30.png" alt="profile" className="button"></img></Link>
                
                <Link to="/"><img src="static\icons8-orange-heart-48.png" alt="heart"></img></Link>

                <Link to="/chat"><img src="static\icons8-chat-messages-32.png" alt="chat" className="button"/></Link>
                
                
            </div>
        <div>
            
            {people.map(person =>(<TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up','down']}>
                <div
                style={{backgroundImage: `url(${person.url})`}} 
                className="card">

                    <h3>{person.name}</h3>

                </div>
            </TinderCard>))}
            </div>
            
            <div className="bottom-wrap">
            <div class="bottom___buttons">
            
            <img src="\static\icons8-go-back-55.png" alt="go back" className="button"></img>
            <img src="\static\icons8-multiply-48.png" alt="no-swipe-left" className="button"></img>
            <img src="\static\icons8-heart-55.png" alt="yes-swipe-right" className="button"></img>
            </div>
            </div>
        </div>
        
    )
}

export default Home