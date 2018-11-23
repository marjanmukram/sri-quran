import React from 'react';

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheckSquare, faGlobe } from '@fortawesome/free-solid-svg-icons';

import { Consumer } from '../../store';

const LangDrop = ({ lns }) => {
  return (
    <UncontrolledDropdown>
      <DropdownToggle tag="span" size="sm">
        <FontAwesomeIcon icon={faGlobe} />
      </DropdownToggle>
      <Consumer>
        {languages => (
          <DropdownMenu>
            {languages.map(ln => (
              <DropdownItem>
                <FontAwesomeIcon
                  icon={lns.indexOf(ln.codeName) < 0 ? faSquare : faCheckSquare}
                />
                {ln.name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        )}
      </Consumer>
    </UncontrolledDropdown>
  );
};

export default LangDrop;
