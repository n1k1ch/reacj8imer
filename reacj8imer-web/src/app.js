"use strict";

var React = require('react');
var ReactDom = require('react-dom');
var $ = require('jquery');


var rowStyle = {
    margin: '20px'
};

var firstStyle = {
    padding: '5px 5px',
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '10px',
    background: '#E38C1B',
    position: 'relative'
};

var secondStyle = {
    padding: '5px 5px 5px 15px',
    marginLeft: '-10px',
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',
    background: '#D8FAB9'
};


"use strict";

var UserRow = React.createClass({
    displayName: "UserRow",

    render: function render() {
        return React.createElement(
            "div",
            { style: rowStyle },
            React.createElement(
                "span",
                { style: firstStyle },
                this.props.user.name
            ),
            React.createElement(
                "span",
                { style: secondStyle },
                this.props.user.password
            )
        );
    }
});

var Users = React.createClass({
    displayName: "Users",

    getInitialState: function getInitialState() {
        return {
            users: []
        };
    },
    componentDidMount: function componentDidMount() {
        $.get("http://localhost:8080/reacj8imer/api/users/all", (function (result) {
            if (this.isMounted()) {
                this.setState({
                    users: result
                });
            }
        }).bind(this));
    },
    render: function render() {
        return React.createElement(
            "div",
            null,
            this.state.users.map(function (res) {
                console.log(res);
                return React.createElement(UserRow, { key: res.name, user: res });
            })
        );
    }
});

ReactDom.render(
    React.createElement(Users, null), document.getElementById('container')
);