"use strict";

var React = require('react');
var ReactDom = require('react-dom');
var $ = require('jquery');


var rowStyle = {
    margin: '10px'
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


var UserRow = React.createClass({
    render() {
        return <div style={rowStyle}><span style={firstStyle}>{this.props.user.name}</span><span style={secondStyle}>{this.props.user.password}</span></div>
    }
});

var Users = React.createClass({
    getInitialState(){
        return {
            users: []
        }
    },
    componentDidMount(){
        $.get("http://localhost:8080/reacj8imer/api/users/all", function(result){
            if(this.isMounted()) {
                this.setState({
                    users: result
                });
            }
        }.bind(this));
    },
    render(){
        return <div>
            {
                this.state.users.map(function(res) {
                    console.log(res);
                    return <UserRow key={res.name} user={res} />
                    })
                }
        </div>
    }
});

ReactDom.render(
    //<UserRow name="Fedya" password="1234"></UserRow>,
    <Users />,
    document.getElementById('container')
);