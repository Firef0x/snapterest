var React       = require('react');
var ReactDOM    = require('react-dom');
var Application = require('./components/Application.react');

ReactDOM.render(<Application />, document.getElementById('react-application'));
/*var ReactClass = React.createClass({
    getInitialState: function () {
        return {
            isHeaderHidden: false,
            title: 'Stateful React Component'
        };
    },

    handleClick: function () {
        this.setState({
            isHeaderHidden: !this.state.isHeaderHidden
        })
    },

    render: function () {
        var headerElement = <h1 className="header" key="header">{this.state.title}</h1>;
        var buttonElement = <button className="btn btn-default" onClick={this.handleClick} key="button">
                                Toggle Header
                            </button>;
        if (this.state.isHeaderHidden) {
            return React.createElement("div", null, [buttonElement]);
        }
        return React.createElement("div", null, [headerElement,buttonElement]);
    }
});

var ReactComponentElement=React.createElement(ReactClass);
var ReactComponent=ReactDOM.render(ReactComponentElement,
                    document.getElementById('react-application'));
*/
