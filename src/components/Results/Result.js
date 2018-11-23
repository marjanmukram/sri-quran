import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faGlobe,
  faCheckSquare,
  faShareAlt,
  faLink
} from '@fortawesome/free-solid-svg-icons';
import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from 'reactstrap';

import {
  faFacebook,
  faTwitter,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

import { faSquare } from '@fortawesome/free-regular-svg-icons';

const Result = ({ ver: { chapId, verId, verses, lns } }) => {
  return (
    <div className="card p-2 my-1 border-0 bg-light">
      <div className="row">
        <div className="col-sm-2">
          <div className="opt-btns">
            <FontAwesomeIcon icon={faPlay} />

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
            <UncontrolledDropdown>
              <DropdownToggle tag="span" size="sm">
                <FontAwesomeIcon icon={faShareAlt} />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <FontAwesomeIcon
                    style={{ color: '#3b5999' }}
                    icon={faFacebook}
                  />
                  Facebook
                </DropdownItem>
                <DropdownItem>
                  <FontAwesomeIcon
                    style={{ color: '#55acee' }}
                    icon={faTwitter}
                  />
                  Twitter
                </DropdownItem>
                <DropdownItem>
                  <FontAwesomeIcon
                    style={{ color: '#25D366' }}
                    icon={faWhatsapp}
                  />
                  Whatsapp
                </DropdownItem>
                <DropdownItem>
                  <FontAwesomeIcon style={{ color: '#333' }} icon={faLink} />
                  Copy Link
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
          {chapId} - {verId}
        </div>
        <div className="col-sm-10">
          {verses.map(({ ln, verse }) => (
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
