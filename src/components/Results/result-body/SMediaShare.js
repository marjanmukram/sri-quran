import React from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { faLink, faShareAlt } from '@fortawesome/free-solid-svg-icons';

const SMediaShare = props => {
  return (
    <UncontrolledDropdown>
      <DropdownToggle tag="span" size="sm">
        <FontAwesomeIcon icon={faShareAlt} />
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          <FontAwesomeIcon style={{ color: '#3b5999' }} icon={faFacebook} />
          Facebook
        </DropdownItem>
        <DropdownItem>
          <FontAwesomeIcon style={{ color: '#55acee' }} icon={faTwitter} />
          Twitter
        </DropdownItem>
        <DropdownItem>
          <FontAwesomeIcon style={{ color: '#25D366' }} icon={faWhatsapp} />
          Whatsapp
        </DropdownItem>
        <DropdownItem>
          <FontAwesomeIcon style={{ color: '#333' }} icon={faLink} />
          Copy Link
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default SMediaShare;
