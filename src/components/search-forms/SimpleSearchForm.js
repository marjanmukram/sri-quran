import React from 'react';
import { withRouter } from 'react-router-dom';
import AdvanceSearchOption from './AdvanceSearchOption';
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
    form: {
      ln: null,
      sw: '',
      chapter: '0',
      verOne: '0',
      verTwo: '0'
    }
  };

  updateFormData = updateVal => {
    this.setState({ form: { ...this.state.form, ...updateVal } });
  };

  render() {
    const {
      form: { ln, sw, chapter, verOne, verTwo },
      isOpen
    } = this.state;
    return (
      <Form
        onSubmit={e => {
          e.preventDefault();
          this.props.history.push(
            `/search/${ln.codeName}/${sw.split(' ').join('-')}`
          );
        }}
      >
        <InputGroup>
          <InputGroupButtonDropdown
            addonType="prepend"
            isOpen={isOpen}
            toggle={() => this.setState({ isOpen: !this.state.isOpen })}
          >
            <DropdownToggle color="default" size="sm" caret>
              {ln ? ln.name : 'Language'}
            </DropdownToggle>
            <DropdownMenu>
              <Consumer>
                {value =>
                  value.map(ln => (
                    <DropdownItem
                      onClick={e => this.updateFormData({ ln })}
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
            onChange={e => this.updateFormData({ sw: e.target.value })}
            value={sw}
          />
          <InputGroupAddon addonType="append">
            <AdvanceSearchOption
              update={this.updateFormData}
              data={{ chapter, verOne, verTwo }}
            />
          </InputGroupAddon>
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

export default withRouter(SimpleSearchForm);
