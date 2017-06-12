/**
 * Created by F on 2017/4/28.
 */
var React = require('react');
var Header = require('./Header.react');
var Button = require('./Button.react');
var CollectionRenameForm = require('./CollectionRenameForm.react');
var CollectionExportForm = require('./CollectionExportForm.react');
var CollectionActionCreator = require('../actions/CollectionActionCreators');
var CollectionStore = require('../stores/CollectionStore');

var CollectionControls = React.createClass({
    getInitialState: function () {
        return {
            isEditingName: false
        };
    },

    getHeaderText: function () {
        var numberOfTweetsInCollection = this.props.numberOfTweetsInCollection;
        var collectionName = CollectionStore.getCollectionName();
        var text = " 中有 " + numberOfTweetsInCollection + " 条推特.";

        return (
            <span>专辑 <strong>{collectionName}</strong>{text}</span>
        );
    },

    toggleEditCollectionName: function () {
        this.setState({
            isEditingName: !this.state.isEditingName
        });
    },

    setCollectionName: function () {
        this.setState({
            isEditingName: false
        });
    },

    removeAllTweetsFromCollection: function () {
        CollectionActionCreator.removeAllTweetsFromCollection();
    },

    render: function () {
        if (this.state.isEditingName) {
            var collectionName = CollectionStore.getCollectionName();
            return (
                <CollectionRenameForm
                    name={collectionName}
                    onChangeCollectionName={this.setCollectionName}
                    onCancelCollectionNameChange={this.toggleEditCollectionName}
                    />
            );
        }

        return (
            <div>
                <Header text={this.getHeaderText()} />
                <Button label="重命名专辑"
                        handleClick={this.toggleEditCollectionName}
                        />
                <Button label="清空专辑"
                        handleClick={this.removeAllTweetsFromCollection}
                        />
                <CollectionExportForm htmlMarkup={this.props.htmlMarkup} />
                </div>
        );
    }
});

module.exports = CollectionControls;
