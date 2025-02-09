import React, { Component } from "react";
import "./App.css";

class Header extends Component {
    render() {
        return (
            <div className="item-container">
                <div>
                    <span className="title-name">{this.props.personInfo.name}</span><br />{this.props.personInfo.occupation}
                </div>
                <div className="links"> Email: <a href={this.props.contactInfo.email}>&nbsp;{this.props.contactInfo.email}</a><br /> Web:
                    &nbsp;{this.props.contactInfo.web}<br /> Mobile:
                    &nbsp;{this.props.contactInfo.mobile}</div>
            </div>
        );
    }
}

export default Header;