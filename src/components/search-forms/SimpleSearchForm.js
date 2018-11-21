import React from 'react';
import {
  InputGroup,
  InputGroupButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input
} from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeLang } from '../../store/actions/formActions';

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
        <Input placeholder="Type search words" size="sm" />
      </InputGroup>
    );
  }
}

function mapStateToProps(state) {
  return {
    langList: state.language.languages,
    currentLang: state.searchForm.language
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeLang
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleSearchForm);
