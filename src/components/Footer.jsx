import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-bootstrap'
import { FaDiscord, FaInstagram, FaYoutube, FaTwitter} from "react-icons/fa";

import { useNavigate } from 'react-router-dom';

const Footer = () => {

  let navigate = useNavigate();


  return (
    <Wrapper>
      <section className='contact-short'>
        <div className='grid grid-two-column'>
         <div>
          <h6>Ready to get started ?</h6>
          <h6>Talk to us today</h6>
         </div>
         <div>
          <NavLink to="/showcase">
      
            <button type="button" class="btn btn-primary" onClick={()=> navigate("/contact")}>Contact Us</button>
          </NavLink>
         </div>
        </div>
      </section>

      {/* footer section */}
      <footer>
        <div className='container grid grid-four-column'>
          <div className='footer-about'>
            <h3>Global E-tour</h3>
            <h6>Medi-caps University,AB Road Rau, Indore, Madhya Pradesh.</h6>
          </div>

          <hr/>
          <div className='footer-contact'>
       
            <h3>Call us</h3>
            <h6>+91 7566444965</h6>
          </div>
          <hr/>
          <div className='footer-subscribe'>
            <h3>Subscribe to get important updates</h3>
            <form action='#'>
              <input 
              type="email"
              required
              autoComplete='off'
              placeholder='Email'
            /> 
            <input type='submit' value="Subscribe" />
            </form>
          </div>
          <hr/>
          <div className='footer-social'>
            <h3>Follows Us</h3>
            <div className='footer-social--icons'>
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <FaYoutube className="icons" />
              </div>
              <div>
                <FaTwitter className="icons" />
              </div>
            </div>
            
          </div>
          <div className='footer-bottom--section'>
            <hr />
            <div className='container grid grid-two-column'>
              <p>
                @{new Date().getFullYear()} Global E-Tour. All Rights Reserved
              </p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.contact-short {
  max-width:40vw;
  margin: auto;
  padding: 2rem 2rem;
  background-color: beige;
  border-radius: 1rem;
  box-shadow: 10px 5px 5px grey;
  transform: translateY(50%);

  .grid div:last-child {
    justify-self: end;
    align-self: center;
  }
}

footer{
  padding: 5rem 0 2rem 0;
  background-color: lightblue;
  

  h3{
    color: white;
    margin-bottom: 2.4rem; 
  }

  h6{
    color: white;
    margin-bottom: 2.4rem; 
  }

  p{
    color: white
  }

  .footer-social--icons{
    display: flex;
    gap: 2rem;
    padding-left: 391px;

    div{
      padding: 0.5rem;
      border-radius: 50%;
      border: 2px solid white;

      .icons {
        color: white;
        font-size: 2.4rem;
        position: relative;
        cursor: pointer;
        
      }
    }
  }
}

`;

export default Footer;
