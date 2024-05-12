import React from "react";
import { FaInstagram,FaLinkedin,FaWhatsapp} from "react-icons/fa";
const Help = () => {
    return (
    
        <div className="help_section">
          <section id="Help"> 
          
            <h2 className="help_title">NEED ASSISTANCE?</h2>
            <img className="help_img" src="formal_eye.png" alt=""></img>
            <div className="contact_section">
                  <div className="Icons">
                   <a className="Icons" id="one" href="https://www.instagram.com/theeye.network/?igsh=dGQydzVsbGw1eDR1 "> <FaInstagram/> </a>
                   <a className="Icons" href="https://www.linkedin.com/company/theeye-csea/"><FaLinkedin/></a>
                   <a className="Icons" href=""><FaWhatsapp/></a>
                  </div>
            </div> 
        
          <div className="footer-section-columns">
            <span>About |</span>
            <span>Event info |</span>
            <span>Help </span>
         </div>
         </section> 
        </div>
    
    );
  };
  
  export default Help;