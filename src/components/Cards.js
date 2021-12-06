import React from 'react'
import CardItem from './CardItem';
import './Cards.css';
function Cards() {
    return (
        <div className='cards'>
           <h1>Check out Epic Destinations</h1> 
           <div class='cards__container'>   
                <div cla='cards__wrapper'>
                    <ul class='cards__items'>
                        <CardItem
                        src='images/img-9.jpg' 
                        text="Exprole The hidden Water deep inside the amazon jungle"
                        label="Adventure"
                        path="/Services"
                        />
                          <CardItem
                        src='images/img-2.jpg' 
                        text="Exprole The hidden Water deep inside the amazon jungle"
                        label="Adventure"
                        path="/Services"
                        />
                    </ul>
                    <ul class='cards__items'>
                        <CardItem
                        src='images/img-9.jpg' 
                        text="Exprole The hidden Water deep inside the amazon jungle"
                        label="Adventure"
                        path="/Services"
                        />
                          <CardItem
                        src='images/img-2.jpg' 
                        text="Exprole The hidden Water deep inside the amazon jungle"
                        label="Adventure"
                        path="/Services"
                        />
                    </ul>
                    <ul class='cards__items'>
                        <CardItem
                        src='images/img-9.jpg' 
                        text="Exprole The hidden Water deep inside the amazon jungle"
                        label="Adventure"
                        path="/Services"
                        />
                          <CardItem
                        src='images/img-2.jpg' 
                        text="Exprole The hidden Water deep inside the amazon jungle"
                        label="Adventure"
                        path="/Services"
                        />
                         <CardItem
                        src='images/img-2.jpg' 
                        text="Exprole The hidden Water deep inside the amazon jungle"
                        label="Adventure"
                        path="/Services"
                        />
                    </ul>
                </div>
           </div>
        </div>
    )
}

export default Cards
