/**
 * Created by F on 2017/4/28.
 */
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Button from '../components/Button';
import CollectionRenameForm from './CollectionRenameForm';
import CollectionExportForm from '../components/CollectionExportForm';
import { removeAllTweetsFromCollection } from '../actions/CollectionActionCreators';
import stores from '../stores';

class CollectionControls extends PureComponent {
  constructor() {
    super();
    this.toggleEditCollectionName = this.toggleEditCollectionName.bind(this);
    this.removeAllTweetsFromCollection = this.removeAllTweetsFromCollection.bind(this);
    this.setCollectionName = this.setCollectionName.bind(this);

    console.log('[Snapterest] CollectionControls: 1. 运行初始化状态方法');
    this.state = {
      isEditingName: false
    };
  }

  getHeaderText() {
    const { numberOfTweetsInCollection } = this.props;
    const collectionName = stores.getState().get('collectionName');
    const text = ` 中有 ${numberOfTweetsInCollection} 条推特.`;

    return (
      <span>
        专辑&nbsp;
        <strong>{collectionName}</strong>
        {text}
      </span>
    );
  }

  setCollectionName(e) {
    this.setState({
      isEditingName: false
    });
  }

  toggleEditCollectionName(e) {
    this.setState(prevState => ({
      isEditingName: !prevState.isEditingName
    }));
  }

  removeAllTweetsFromCollection(e) {
    this.props.removeAllTweetsFromCollection();
  }

  render() {
    const { isEditingName } = this.state;
    if (isEditingName) {
      const collectionName = stores.getState().get('collectionName');
      return (
        <CollectionRenameForm
          name={collectionName}
          onChangeCollectionName={this.setCollectionName}
          onCancelCollectionNameChange={this.toggleEditCollectionName}
        />
      );
    }

    const { htmlMarkup } = this.props;
    return (
      <div>
        <Header text={this.getHeaderText()} />
        <Button
          label="重命名专辑"
          handleClick={this.toggleEditCollectionName}
        />
        <Button
          label="清空专辑"
          handleClick={this.removeAllTweetsFromCollection}
        />
        <CollectionExportForm
          htmlMarkup={htmlMarkup}
        />
      </div>
    );
  }
}

CollectionControls.propTypes = {
  htmlMarkup: PropTypes.string,
  numberOfTweetsInCollection: PropTypes.number,
  removeAllTweetsFromCollection: PropTypes.func.isRequired
};

const bindStateToProps = state => state;
const bindDispatchToProps = dispatch => ({
  removeAllTweetsFromCollection:
    bindActionCreators(removeAllTweetsFromCollection, dispatch)
});

export default connect(bindStateToProps, bindDispatchToProps)(CollectionControls);
