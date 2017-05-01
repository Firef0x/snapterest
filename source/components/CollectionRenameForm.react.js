/**
 * Created by F on 2017/4/28.
 */
var React = require('react');
var Header = require('./Header.react');
var Button = require('./Button.react');

var inputStyle = {
    marginRight: '5px'
};

var CollectionRenameForm = React.createClass({
    getInitialState: function () {
        return {
            inputValue: this.props.name
        };
    },

    setInputValue: function (inputValue) {
        this.setState({
            inputValue: inputValue
        });
    },

    handleInputValueChange: function (event) {
        var inputValue = event.target.value;

        this.setInputValue(inputValue);
    },

    handleFormSubmit: function (event) {
        event.preventDefault();
        var collectionName = this.state.inputValue;

        this.props.onChangeCollectionName(collectionName);
    },

    handleFormCancel: function (event) {
        event.preventDefault();
        var collectionName = this.props.name;
        this.setInputValue(collectionName);
        this.props.onCancelCollectionNameChange();
    },

    componentDidMount: function () {
        this.refs.collectionName.focus();
    },

    render: function () {
        return (
            <form className="form-inline"
                  onSubmit={this.handleFormSubmit}
                  >
                <Header text="专辑名称:" />
                <div className="form-group">
                    <input
                        className="form-control"
                        style={inputStyle}
                        onChange={this.handleInputValueChange}
                        value={this.state.inputValue}
                        ref="collectionName"
                        />
                </div>
                <Button label="更改" handleClick={this.handleFormSubmit} />
                <Button label="取消" handleClick={this.handleFormCancel} />
            </form>
        );
    }
});

module.exports = CollectionRenameForm;
