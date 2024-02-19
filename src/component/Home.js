import React from 'react'
import './Home.css';
import keyChain from './gallery/key chain.png';
import stand2 from './gallery/stand2.png';
import stand from './gallery/stand.jpg';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

export default function Home() {
const history = useHistory();
const mainpagecall =()=>{
  history.push('./main');
}

  return (
    <div className='parentcontainer'>
      <div className="content">
        <h1>ELEVATE YOUR SPACE WITH EXQUISITE RESIN CREATIONS</h1>
        <p>Our passion lies in crafting unique epoxy designs for every room, ensuring that each piece adds a touch of artistry and personality to your home. Explore our collection and discover endless possibilities in resin décor, where every handcrafted masterpiece brings color and character to your surroundings.</p>
      <button id='discover' onClick={mainpagecall}>Discover Our Products</button>
      </div>
      <div className="pic">
        <div className="leftcontainer">
        <div className="keychain">
            <img src={keyChain} alt="#" />
        </div>
        <div className="stand2">
            <img src={stand2} alt="#" />
        </div>
        </div>

        <div className="stand">
            <img src={stand} alt="#" />
        </div>
      </div>
    </div>
  )
}
