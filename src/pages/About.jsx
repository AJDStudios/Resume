import React from "react";
import profileimg from "./profilephoto2.webp";

export default function About() {
    return (
        <>
            <div className="open">
                <h1 className="name">Aaron James Dodd <br></br> - <br></br> Frontend Software Engineer</h1>
            </div>
            <h3 className="aboutme">About Me</h3>
            <div className="about">
                <img className="profile" src={ profileimg } alt=""/>
                <p className="abouttext">
                    <br></br><br></br>
                    I'm Aaron, or A.D, whichever you prefer. 
                    I've worked in many fields with the mantra "no matter what you happen to be, make sure you're a good one." 
                    I don't always get it right the first time. But getting it written is usually more important. 
                    Having been a writer, designer, musician and businessman for the past ten-fifteen years before switching to software engineering, I can say with some confidence that having a solid foundation that you build on will end with a result. 
                    "Finish" first, improve later. 
                    If that mentality works for you. Well, what are we going to build together?
                </p>
            </div>
        </>
    );    
}