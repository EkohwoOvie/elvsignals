import React, { useState } from 'react';
import './App.css';



function App() {
  const [show, setShow] = useState(false);
  const shew = () => {
    setShow(!show)
  }
  const [show1, setShow1] = useState(false);
  const shew1 = () => {
    setShow1(!show1)
  }
  const [show2, setShow2] = useState(false);
  const shew2 = () => {
    setShow2(!show2)
  }
  const [show3, setShow3] = useState(false);
  const shew3 = () => {
    setShow3(!show3)
  }
  const [show4, setShow4] = useState(false);
  const shew4 = () => {
    setShow4(!show4)
  }
  return (
    <div className="App">
      <div id="heading2">
      <section onClick={shew}>CCTV CAMERA & INSTALLATION<span><i class="fas fa-chevron-right"></i></span></section>
      { show? <div>Feel safe, feel secure and feel good knowing that you have a CCTV system installed by 
        professional CCTV installers. You get enhanced monitoring 
        on a computer, tablet or mobile phone over 
        the internet. For your installation,<b> pay a 70% deposit and when our team is done with your installation you pay the 30% balance.</b> 
        &#8287;Proceed below
          <button><a href="https://ekohwosportfolio.netlify.app"><b>PROCEED</b></a></button></div>:null}
        
          <section onClick={shew1}>STREETS LIGHTS & SOLAR PANEL INSTALLATION<span><i class="fas fa-chevron-right"></i></span></section>
      { show1? <div> <b>Pay a 70% deposit and when our team is done with your installation you pay the 30% balance.</b> Get your solar street lights installed for you by top professionals. 
        Solar power is the number one source of renewable energy with no negative impact to the environment. For your installation, 
        proceed below
          <button><a href="https://ekohwosportfolio.netlify.app"><b>PROCEED</b></a></button></div>:null}
          
          <section onClick={shew2}>WIRELESS ROUTER INSTALLATION FOR OFFICE INTERNET<span><i class="fas fa-chevron-right"></i></span></section>
      { show2? <div> In need of a wireless router with rapid internet upstream in your company? We've got you covered with 
        all the installation and configuration of your equipment to establish a fully-functional WiFi network.
        <b>You get to pay a 70% deposit and when our team is done with your installation you pay the 30% balance.</b>&#8287;For your installation, 
        proceed below
          <button><a href="https://ekohwosportfolio.netlify.app"><b>PROCEED</b></a></button></div>:null}
        
          <section onClick={shew3}>VEHICLE AUTO TRACKING<span><i class="fas fa-chevron-right"></i></span></section>
      { show3? <div> <b>Pay a 70% deposit first for your installation and pay 30% after installation.</b>&#8287; We install the best GPS Tracker in all range of vehicles from automobiles to kekes and motocycles.
        With our services, you will know where your vehicle is located within seconds.
         For your installation, 
        proceed below
          <button><a href="https://ekohwosportfolio.netlify.app"><b>PROCEED</b></a></button></div>:null}
        
          <section onClick={shew4}>GENERAL CONTRACTOR<span><i class="fas fa-chevron-right"></i></span></section>
      { show4? <div> We are your trusted partner for all your construction needs. As a leading
        general contractor in Nigeria, we take pride in delivering hight-quality services that turn your dream to reality.
        To get in touch, proceed below
          <button><a href="https://ekohwosportfolio.netlify.app"><b>PROCEED</b></a></button></div>:null}
         <div id="design"> <div id="design1"></div>
          <div id="design2"></div>
          </div>
         </div>
        
         </div>
        
  );
}

export default App;