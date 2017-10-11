import React, { Component } from 'react';
import { Icon, Container } from 'semantic-ui-react';

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
      <FooterContacts email='support@cosmeticsyou.ru'
        phone='8 (965) 158-14-81'
        address='Ивантеевская д. 13 кор.1'
        addressHref={'https://www.google.ru/maps/place/%D0%98%D0%B2%D0%B0%D0%BD%D1%82%D0%B5%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D1%83%D0%BB.,+13%D0%BA1,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+107150/@55.818067,37.7239063,17z/data=!4m5!3m4!1s0x46b53450cf0645b9:0x869f26e9d7ad24d3!8m2!3d55.818067!4d37.726095'}
      />
      <Copyright />
    </Container>
  </footer>
);

export default Footer;