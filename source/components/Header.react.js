/**
 * Created by F on 2017/4/21.
 */
var React = require('react');

var headerStyle = {
    fontSize: '16px',
    fontWeight: '300',
    display: 'inline-block',
    margin: '20px 10px'
};

var Header = React.createClass({
    getDefaultProps: function () {
        return {
            text: '默认标题'
        };
    },

    render: function () {
        return (
            <h2 style={headerStyle}>{this.props.text}</h2>
        );
    }
});

module.exports = Header;
