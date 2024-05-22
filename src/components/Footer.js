import React, { useState } from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  const [email, setEmail] = useState('');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = () => {
    // Add your subscription logic here
    // For now, let's just clear the email field
    setEmail('');
    alert("Subscribe Request Sent Over")
  };

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the newsletter to receive our best deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas' >
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
              value={email}
              onChange={handleInputChange}
            />
            <Button buttonStyle='btn--outline' onClick={handleSubscribe}>Subscribe</Button>
          </form>
        </div>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              ATOM
            </Link>
          </div>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <div className='footer-text'>
                <i class="fa-regular fa-copyright">
                  Atom<br/> Engineers and Builders
                </i>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
