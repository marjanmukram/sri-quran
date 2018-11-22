import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faShare,
  faGlobe,
  faSquare,
  faCheckSquare
} from '@fortawesome/free-solid-svg-icons';
import {
  Dropdown,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from 'reactstrap';

const Result = ({ ver: { chapId, verId, verse, lns } }) => {
  return (
    <div className="card p-2 my-1 border-0 bg-light">
      <div className="row">
        <div className="col-sm-2">
          <div className="opt-btns">
            <FontAwesomeIcon icon={faPlay} />

            <UncontrolledDropdown>
              <DropdownToggle tag="span" size="sm">
                <FontAwesomeIcon icon={faShare} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <FontAwesomeIcon icon={faSquare} />
                  Arabic
                </DropdownItem>
                <DropdownItem>
                  <FontAwesomeIcon icon={faCheckSquare} />
                  English
                </DropdownItem>
                <DropdownItem>
                  <FontAwesomeIcon icon={faSquare} />
                  Sinhala
                </DropdownItem>
                <DropdownItem>
                  <FontAwesomeIcon icon={faSquare} />
                  Tamil
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown>
              <DropdownToggle tag="span" size="sm">
                <FontAwesomeIcon icon={faGlobe} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <FontAwesomeIcon icon={faSquare} />
                  Arabic
                </DropdownItem>
                <DropdownItem>
                  <FontAwesomeIcon icon={faCheckSquare} />
                  English
                </DropdownItem>
                <DropdownItem>
                  <FontAwesomeIcon icon={faSquare} />
                  Sinhala
                </DropdownItem>
                <DropdownItem>
                  <FontAwesomeIcon icon={faSquare} />
                  Tamil
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
          {chapId} - {verId}
        </div>
        <div className="col-sm-10">
          {lns.map(ln => (
            <p className={ln} key={ln}>
              {verse}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Result;
