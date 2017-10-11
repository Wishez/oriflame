import React from 'react';
import Title from './Title';

const FooterContacts = ({
	phone,
	email,
	address,
	addressHref
}) => (
  <ul className='footerContacts'>
    <Title block='footerContacts' 
      text='Контакты' />
		<li className='footerContactsItem'>
          <span className='footerContactsItem__label'>Адрес: </span>
          <a href={addressHref}
             className='footerContactsItem__contact not-follow'>
         	{address}
          </a>
        </li>
        <li className='footerContactsItem'>
          <span className='footerContactsItem__label'>E-mail: </span>
          <a href={`mailto:${email}`}
            className='footerContactsItem__contact'>
            	{email}
          </a>
        </li>
        <li className='footerContactsItem'>
          <span className='footerContactsItem__label'>Телефон: </span>
          <a href={`tel:${phone}`}
             className='footerContactsItem__contact'>
         	{phone}
          </a>
        </li>
      </ul>
);

export default FooterContacts;