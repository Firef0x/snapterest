/**
 * Created by F on 2017/4/28.
 */
var React = require('react');

var formStyle = {
    display: 'inline-block'
};

var CollectionExportForm = React.createClass({
    render: function () {
        return (
            <form
                action="http://codepen.io/pen/define"
                method="POST"
                target="_blank"
                style={formStyle}
                >
                <input
                    type="hidden"
                    name="data"
                    value={this.props.htmlMarkup}
                    />
                <button
                    type="submit"
                    className="btn btn-default"
                    >
                    导出专辑到 Codepen.io
                </button>
            </form>
        );
    }
});

module.exports = CollectionExportForm;
