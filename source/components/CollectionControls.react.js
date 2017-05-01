/**
 * Created by F on 2017/4/28.
 */
var React = require('react');
var Header = require('./Header.react');
var Button = require('./Button.react');
var CollectionRenameForm = require('./CollectionRenameForm.react');
var CollectionExportForm = require('./CollectionExportForm.react');

var CollectionControls = React.createClass({
    getInitialState: function () {
        return {
            name: 'new',
            isEditingName: false
        };
    },

    getHeaderText: function () {
        var numberOfTweetsInCollection = this.props.numberOfTweetsInCollection;
        var text = " 中有 " + numberOfTweetsInCollection + " 条推特."

        return (
            <span>专辑 <strong>{this.state.name}</strong>{text}</span>
        );
    },

    toggleEditCollectionName: function () {
        this.setState({
            isEditingName: !this.state.isEditingName
        });
    },

    setCollectionName: function (name) {
        this.setState({
            name: name,
            isEditingName: false
        });
    },

    render: function () {
        if (this.state.isEditingName) {
            return (
                <CollectionRenameForm
                    name={this.state.name}
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
                        handleClick={this.props.onRemoveAllTweetsFromCollection}
                        />
                <CollectionExportForm htmlMarkup={this.props.htmlMarkup} />
                </div>
        );
    }
});

module.exports = CollectionControls;
