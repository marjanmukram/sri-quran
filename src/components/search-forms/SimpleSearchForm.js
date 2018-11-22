import React from 'react';
import {
  InputGroup,
  InputGroupButtonDropdown,
  InputGroupAddon,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Form
} from 'reactstrap';
import { Consumer } from '../../store';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SimpleSearchForm extends React.Component {
  state = {
    isOpen: false,
    ln: null,
    sw: ''
  };
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const { ln, sw, isOpen } = this.state;
    return (
      <Form onSubmit={e => e.preventDefault()}>
        <InputGroup>
          <InputGroupButtonDropdown
            addonType="prepend"
            isOpen={isOpen}
            toggle={this.toggle}
          >
            <DropdownToggle color="default" size="sm" caret>
              {ln ? ln.name : 'Language'}
            </DropdownToggle>
            <DropdownMenu>
              <Consumer>
                {value =>
                  value.map(ln => (
                    <DropdownItem
                      onClick={() => this.setState({ ln })}
                      key={ln.codeName}
                    >
                      {ln.name}
                    </DropdownItem>
                  ))
                }
              </Consumer>
            </DropdownMenu>
          </InputGroupButtonDropdown>
          <Input
            placeholder="Type search words"
            bsSize="sm"
            onChange={e => this.setState({ sw: e.target.value })}
            value={sw}
          />
          <InputGroupAddon addonType="append">
            <Button type="submit" size="sm" color="default">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Form>
    );
  }
}

export default SimpleSearchForm;
