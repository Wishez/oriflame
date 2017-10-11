import React, { Component } from 'react';
import { Icon, Container } from 'semantic-ui-react';


import { 
  phone,
  email,
  address,
  addressHref
 } from './../constants/conf.js';
import FooterContacts from './FooterContacts';
import Paragraph from './Paragraph';
import Copyright from './Copyright';

const Footer = () => (
  <footer className='footer'> 
    <Container>
      <Paragraph block='footer'
        text='Регистрируясь на нашем сайте, вы попадаете в нашу команду! 
        Мы поможем вам научиться оформлять заказы, будем консультировать и сопровождать. 
        А если вы захотите зарабатывать с нами, научим всему необходимому' 
      />
      <FooterContacts email={email}
        phone={phone}
        address={address}
        addressHref={addressHref}
      />
      <Copyright />
    </Container>
  </footer>
);

export default Footer;