
import Unmute from './images/unmute.png';
import Phantom from './images/Phantom.png';
import Dropdown from './images/dropDown.png';
import Logo from './images/LogoB.png'
import Hambugger from './images/hamburger.png'
import './header.css'

export default function Header() {
  return(
    <header>
      <div className="headLeft">
        <img src={Logo} alt="" className="mobile logo" />
      </div>

      <div className="headRight">
        <div className="walletConnect">
          <img src={Phantom} alt="Wallet icon" className="phantom" />
          <p className="walletAddress">BRBK....sLJm</p>
          <img src={Dropdown} alt="" className="dropdown" />
        </div>
        <p className="tokenCount"><span className="number">129 </span> 
        <span className="world">WorldTokens</span></p>
      </div>
      <img src={Hambugger} alt="" className="hambuger" />
    </header>
  );
}