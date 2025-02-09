import React, { Component } from "react";
import "./App.css";


class PersonalProfile extends Component {
    render() {
        return (
            <div class="divide1">
                <div class="title">
                    <p>{this.props.profile.title}</p>
                </div>
                <div>
                    <p>
                        {this.props.profile.content}
                    </p>
                </div>
            </div>
        );
    }
}

export default PersonalProfile;