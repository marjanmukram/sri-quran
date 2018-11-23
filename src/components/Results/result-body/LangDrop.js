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

import { Consumer } from '../../../store';

const LangDrop = ({ id, lns, toggleSingleLngResult, ...rest }) => {
  return (
    <UncontrolledDropdown>
      <DropdownToggle tag="span" size="sm" {...rest}>
        <FontAwesomeIcon icon={faGlobe} />
      </DropdownToggle>
      <Consumer>
        {languages => {
          return (
            <DropdownMenu>
              {languages.map(ln => {
                const isLn = lns.indexOf(ln.codeName) >= 0;
                return (
                  <DropdownItem
                    key={ln.codeName}
                    onClick={e => toggleSingleLngResult(id, ln.codeName)}
                  >
                    <FontAwesomeIcon icon={!isLn ? faSquare : faCheckSquare} />
                    {ln.name}
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          );
        }}
      </Consumer>
    </UncontrolledDropdown>
  );
};

export default LangDrop;
