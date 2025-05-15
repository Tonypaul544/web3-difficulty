

import { useState } from 'react'
import './App.css'
import Sidebar1 from './Sidebar';
import HowToPlay from './images/howPlay.png'
import Header from './header';

function App() {

  return (
    <>
      <div className='container'>
        <div className="bodyDiv">
          <Sidebar1 />
          <div className="rightody">
            <Header />

                {/* BODY CENTER  */}
            <div className="bodyCenter">
              {/* <p className="inventory mobile">Inventory</p> */}
               <p className="ballance mobile"><span className='ballancdNUM'>129 </span> WorldTokens</p>
               <h2 className="difficulty">Select Difficulty Level</h2>
               <p className="difficultyTXT">Play against time to earn WordBit tokens. Mint an NFT every 10 levels.</p>

              {/* <div className="textBox">
                <p className='smalltxt'><span className="increase">NFT</span>Collection</p>
              </div> */}

              <div className="colors">
                <div className="color green">
                  <h2>Easy</h2>
                  <p>+3 WorldBits per win</p>
                </div>

                <div className="color yello">
                  <h2>Medium</h2>
                  <p>+6 WorldBits per win</p>
                </div>

                <div className="color red">
                  <h2>Hard</h2>
                  <p>+9 WorldBits per win</p>
                </div>
              </div>

              <button className="selectBTN">Select</button>
              {/* <button className="noNFT">No NFT available</button> */}
            </div>
              <img src={HowToPlay} alt="" className="HowPlay" />
          </div>

            <div className="howToPlay">
            </div>
        </div>


      </div>
    </>
  )
}

export default App
