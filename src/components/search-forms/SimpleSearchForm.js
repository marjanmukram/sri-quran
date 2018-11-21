import React from 'react';
import {
  InputGroup,
  InputGroupButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input
} from 'reactstrap';

class SimpleSearchForm extends React.Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <InputGroup>
        <InputGroupButtonDropdown
          addonType="prepend"
          isOpen={this.state.isOpen}
          toggle={this.toggle}
        >
          <DropdownToggle color="default" size="sm" caret>
            Language
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Arabic</DropdownItem>
          </DropdownMenu>
        </InputGroupButtonDropdown>
        <Input placeholder="Type search words" size="sm" />
      </InputGroup>
    );
  }
}

export default SimpleSearchForm;
