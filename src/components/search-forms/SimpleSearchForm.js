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
    const {
      currentLang,
      langList,
      searchTerm,
      changeLang,
      changeTerm
    } = this.props;
    return (
      <Form onSubmit={e => e.preventDefault()}>
        <InputGroup>
          <InputGroupButtonDropdown
            addonType="prepend"
            isOpen={this.state.isOpen}
            toggle={this.toggle}
          >
            <DropdownToggle color="default" size="sm" caret>
              {currentLang
                ? langList.find(ln => ln.codeName === currentLang).name
                : 'Language'}
            </DropdownToggle>
            <DropdownMenu>
              {langList.map(ln => (
                <DropdownItem
                  onClick={() => changeLang(ln.codeName)}
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
            onChange={e => changeTerm(e.target.value)}
            value={searchTerm}
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
