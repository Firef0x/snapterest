/**
 * Created by F on 2017/4/28.
 */
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Button from '../components/Button';
import { setCollectionName } from '../actions/CollectionActionCreators';
import stores from '../stores';

const inputStyle = {
  marginRight: '5px'
};

class CollectionRenameForm extends PureComponent {
  constructor() {
    super();
    this.handleInputValueChange = this.handleInputValueChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormCancel = this.handleFormCancel.bind(this);

    this.state = {
      collectionName: stores.getState().get('collectionName')
    };
  }

  componentDidMount() {
    this.collectionNameInput.focus();
  }

  setInputValue(collectionName) {
    this.setState({
      collectionName
    });
  }

  handleInputValueChange(event) {
    const { value } = event.target;

    this.setInputValue(value);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const { collectionName } = this.state;
    this.props.setCollectionName(collectionName);
    this.props.onChangeCollectionName();
  }

  handleFormCancel(event) {
    event.preventDefault();
    const collectionName = stores.getState().get('collectionName');
    this.setInputValue(collectionName);
    this.props.onCancelCollectionNameChange();
  }

  render() {
    return (
      <form
        className="form-inline"
        onSubmit={this.handleFormSubmit}
      >
        <Header text="专辑名称:" />
        <div className="form-group">
          <input
            className="form-control"
            style={inputStyle}
            onChange={this.handleInputValueChange}
            value={this.state.collectionName}
            ref={(node) => { this.collectionNameInput = node; }}
          />
        </div>
        <Button label="更改" handleClick={this.handleFormSubmit} />
        <Button label="取消" handleClick={this.handleFormCancel} />
      </form>
    );
  }
}

CollectionRenameForm.propTypes = {
  onCancelCollectionNameChange: PropTypes.func.isRequired,
  onChangeCollectionName: PropTypes.func.isRequired,
  setCollectionName: PropTypes.func.isRequired
};

export default connect(
  state => state,
  dispatch => ({
    setCollectionName: () => dispatch(setCollectionName())
  })
)(CollectionRenameForm);
