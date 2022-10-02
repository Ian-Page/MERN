import React, { useEffect, useState } from "react";
import TinderCard from 'react-tinder-card'
import database from './firebase';

function Home (){
    const[people,setPeople]= useState([
        {
            name:'steve jobs',
            url: 'https://papers.co/wallpaper/papers.co-hc03-young-steve-jobs-face-1-wallpaper.jpg'
        },
        {
            name:'Pamella Anderson',
            url: 'https://images-na.ssl-images-amazon.com/images/I/41jwZM0FHlL._AC_UL600_SR600,600_.jpg'
        }
        
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
    )
}

export default Home