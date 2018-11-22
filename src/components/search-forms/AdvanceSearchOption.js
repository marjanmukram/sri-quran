import React from 'react';
import {
  Popover,
  PopoverBody,
  PopoverHeader,
  Button,
  FormGroup,
  Label,
  Input,
  Col
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

class AdvanceSearchOption extends React.Component {
  state = {
    isAdvance: false
  };
  render() {
    const { isAdvance } = this.state;
    const {
      update,
      data: { chapter, verOne, verTwo }
    } = this.props;
    return (
      <React.Fragment>
        <Button
          id="popover"
          className="px-3"
          size="sm"
          onClick={() => this.setState({ isAdvance: !isAdvance })}
        >
          <FontAwesomeIcon icon={faCog} />
        </Button>
        <Popover
          placement="bottom"
          isOpen={isAdvance}
          target="popover"
          toggle={() => this.setState({ isAdvance: !isAdvance })}
        >
          <PopoverHeader>Search Options</PopoverHeader>
          <PopoverBody>
            Select a range
            <hr className="m-0 my-2" />
            <FormGroup row>
              <Col xs="6">
                <Label>Chapter</Label>
                <Input
                  value={chapter}
                  onChange={e => {
                    if (e.target.value === '0')
                      update({ chapter: '0', verOne: '0', verTwo: '0' });
                    else update({ chapter: e.target.value });
                  }}
                  name="chapter"
                  bsSize="sm"
                  type="select"
                >
                  <option value="0">Entire Quran</option>
                  <option value="1">Al Fathiha</option>
                  <option value="2">Al Bakarah</option>
                  <option value="3">Alu Imran</option>
                  <option value="4">An Nisa</option>
                </Input>
              </Col>
              <Col xs="3">
                <Label>From</Label>
                <Input
                  disabled={chapter === '0'}
                  onChange={e => {
                    if (e.target.value === '0')
                      update({ verOne: '0', verTwo: '0' });
                    else update({ verOne: e.target.value });
                  }}
                  name="verOne"
                  bsSize="sm"
                  type="select"
                  value={verOne}
                >
                  <option value="0">Empty</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </Input>
              </Col>
              <Col xs="3">
                <Label>To</Label>
                <Input
                  disabled={verOne === '0'}
                  value={verTwo}
                  bsSize="sm"
                  type="select"
                  onChange={e => update({ verTwo: e.target.value })}
                  name="verTwo"
                >
                  <option value="0">Empty</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </Input>
              </Col>
            </FormGroup>
          </PopoverBody>
        </Popover>
      </React.Fragment>
    );
  }
}

export default AdvanceSearchOption;
