import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Avatar, ContactContainer, ContactContent, ContactInfo, ContactNameEmail, Email, Title } from './styles';



const SupportContact = ({ name, email, phone }) => (
  <ContactContainer>
    <Title>YOUR FEEFO SUPPORT CONTACT</Title>
    <ContactContent>
      <Avatar>{name.charAt(0)}</Avatar>
      <ContactInfo>
        <ContactNameEmail>
          <strong>{name}</strong>
          <Email>
            <FontAwesomeIcon icon={faEnvelope} /> {email}
          </Email>
        </ContactNameEmail>
        <div>{phone}</div>
      </ContactInfo>
    </ContactContent>
  </ContactContainer>
);

SupportContact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default SupportContact;
