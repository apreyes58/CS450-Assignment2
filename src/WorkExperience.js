import React, { Component } from "react";
import "./App.css";


class WorkExperience extends Component {
    render() {
        return (
            <div class="divide2">
                <div class="title">
                    <p>{this.props.workExperience.title}</p>
                </div>
                <div class="columns">
                    <p><strong class="title-name">{this.props.workExperience.job1}</strong></p>
                    <p>
                        {this.props.workExperience.job1Content}
                    </p>
                    <p><strong class="title-name">{this.props.workExperience.job2}</strong></p>
                    <p>
                        {this.props.workExperience.job2Content}
                    </p>
                </div>
            </div>
        );
    }
}

export default WorkExperience;