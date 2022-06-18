import React from "react";
import profiledark from "./images/profiledark.jpg";

export default function About() {
    return (
        <>
            <h3 className="aboutme">About Me</h3>
            <div className="about">
                <img className="profile" src={ profiledark } />
                <p class="abouttext">I'm Aaron, or A.D, whichever you prefer. I've worked in many fields with the mantra "no matter what you happen to be, make sure you're a good one." 
                    I don't always get it right the first time. But getting it written is usually more important. Having been a writer, designer, musician and businessman 
                    for the past ten-fifteen years, I can say with some confidence that having a solid foundation that you build on will end with a result. "Finish" first, improve later. 
                    If that mentality works for you. Well, what are we going to build together?</p>
            </div>
        </>
    );    
}