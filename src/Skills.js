import React, { Component } from "react";
import "./App.css";


class Skills extends Component {
    render() {
        return (
            <div class="divide3">
                <div class="title">
                    <p>{this.props.keySkills.title}</p>
                </div>
                <div class="skills">
                    <p>{this.props.keySkills.content1} &emsp;&emsp; {this.props.keySkills.content1} &emsp;&emsp; {this.props.keySkills.content1}</p>
                    <p>{this.props.keySkills.content1} &emsp;&emsp; {this.props.keySkills.content1} &emsp;&emsp; {this.props.keySkills.content1}</p>
                    <p>{this.props.keySkills.content1} &emsp;&emsp; {this.props.keySkills.content1} &emsp;&emsp; {this.props.keySkills.content1}</p>
                </div>
            </div>
        );
    }
}

export default Skills;