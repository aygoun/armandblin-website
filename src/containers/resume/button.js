import React from "react";
import "./resume.css";
import {greeting} from "../../portfolio";

export default function Resume_button() {

    return (
        <div class="resume-container">
            <div class="d-flex flex-column min-vh-100 align-items-center">
                <h1>You like my work?</h1>
                <p>Check my resume!</p>
                <a class="myButton" href={greeting.resumeLink} target="_blank">Get Started</a>
            </div>     
        </div>
        );
}