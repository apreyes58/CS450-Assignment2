import React, { Component } from "react";
import "./App.css";


class Education extends Component {
    render() {
        return (
            <div class="divide3-bottom">
                <div class="title">
                    <p>{this.props.education.title}</p>
                </div>
                <div class="education">
                    <p>
                        <strong class="title-name">{this.props.education.bsInstitution}</strong>
                        <br />{this.props.education.bsDegree}
                        <br />{this.props.education.bsDates}
                        <br />GPA: {this.props.education.bsGpa}
                        <br /> <strong class="title-name">{this.props.education.msInstitution}</strong>
                        <br /> {this.props.education.msDegree}
                        <br /> {this.props.education.msDates}
                        <br /> GPA: {this.props.education.msGpa}
                    </p >
                </div >
            </div >
        );
    }
}

export default Education;