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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeLang, changeTerm } from '../../store/actions/formActions';

class SimpleSearchForm extends React.Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <Form onSubmit={e => e.preventDefault()}>
        <InputGroup>
          <InputGroupButtonDropdown
            addonType="prepend"
            isOpen={this.state.isOpen}
            toggle={this.toggle}
          >
            <DropdownToggle color="default" size="sm" caret>
              {this.props.currentLang
                ? this.props.langList.find(
                    ln => ln.codeName === this.props.currentLang
                  ).name
                : 'Language'}
            </DropdownToggle>
            <DropdownMenu>
              {this.props.langList.map(ln => (
                <DropdownItem
                  onClick={() => this.props.changeLang(ln.codeName)}
                  key={ln.codeName}
                >
                  {ln.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </InputGroupButtonDropdown>
          <Input
            placeholder="Type search words"
            bsSize="sm"
            onChange={e => this.props.changeTerm(e.target.value)}
            value={this.props.searchTerm}
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

function mapStateToProps(state) {
  return {
    langList: state.language.languages,
    currentLang: state.searchForm.language,
    searchTerm: state.searchForm.term
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeLang,
      changeTerm
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleSearchForm);
