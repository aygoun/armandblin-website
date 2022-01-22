import React from "react";
import {Fade} from "react-reveal";
import "./resume.css";
import "./../greeting/Greeting.css";
import Resume_button from "./button";

export default function Resume() {
    return (<Fade bottom duration={1000} distance="40px">
                <Resume_button />
            </Fade>
        );
}