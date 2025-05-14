

import Logo from './images/LogoB.png'
import './sidebar.css'
import NavIcon from './images/homeIMG.png';
import johnson from './images/johnson.png'
import Blaze from './images/blaze.png';
import Unmute from './images/unmute.png'
import Henry from './images/johnson.png'


export default function Sidebar() {
  return(
    <>
      <div className="sidear">
        <div className="logoHolder">
          <img src={Logo} alt="" className="logo" />
        </div>

        <div className="navBody">
          <div className="navBTNs">
            <div className="btn navBTN1">
              <img src={NavIcon} alt="" className="navicon play1" />
              <p className="navTXT">Play</p>
            </div>

            <div className="btn navBTN2">
              <img src={NavIcon} alt="" className="navicon play2" />
              <p className="navTXT">Inventory</p>
            </div>

            <div className="btn navBTN3">
              <img src={NavIcon} alt="" className="navicon play3" />
              <p className="navTXT">Source NFTs</p>
            </div>

            <div className="btn navBTN4">
               <img src={NavIcon} alt="" className="navicon play4" />
               <p className="navTXT">Leaderboard</p>
            </div>

            <div className="btn navBTN5">
              <img src={NavIcon} alt="" className="navicon play5" />
              <p className="navTXT">How to play</p>
            </div>
          </div>

          <div className="horizontal"></div>

          <div className="worldBuddies">
            <h3 className="buddieTXT">World Buddies</h3>

            <div className="uddie buddie1">
              <img src={Henry} alt="" className="buddie buddie1" />
              <p className="name">John Norman</p>
              <div className="radio"></div>
            </div>

            <div className="uddie buddie2">
              <img src={Blaze} alt="" className="buddie buddie2" />
              <p className="name">Blaze Jack</p>
              <div className="radio"></div>
            </div>
            
            <div className="uddie buddie3">
              <img src={Henry} alt="" className="buddie buddie3" />
              <p className="name">Henry Scott</p>
              <div className="radio noBg"></div>
            </div>
          </div>
        </div>

        <button className="exitBTN">
          Exit Game
        </button>
        
      </div>
    </>
  )
}