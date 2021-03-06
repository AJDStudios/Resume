import React from "react";

export default function Skills() {
    return (
        <>
            <div className="opens">
                <ul>
                    <li>
                        <input type="checkbox" />
                        <div>S</div>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <div>K</div>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <div>I</div>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <div>L</div>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <div>L</div>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <div>S</div>
                    </li>
                </ul>
            </div>
            <div className="skills">
                <section className="Devskills">
                    <ul>
                        <h4>Code and script skills</h4>
                        <li> Git/Github </li>
                        <li> HTML/CSS </li>
                        <li> Javascript </li>
                        <li> Python - Mostly in the context of game dev - but I can also use Flask </li>
                        <li> Java - experience in the context of game plugins </li>
                    </ul> 
                </section>
                <section className="swskills">
                    <div className="codesw">
                        <ul>
                            <h4>Coding Software</h4>
                            <li> Visual Studio Code </li>
                            <li> Notepad ++ </li>
                            <li> Atom </li>
                            <li> IntelliJ </li>
                            <li> Ren'py </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="othersw">
                            <h4>Other Software</h4>
                            <li> RPG Maker</li>
                            <li> Daz 3D</li>
                            <li> Gimp </li>
                            <li> Paint3D </li>
                            <li> Corel VideoStudio </li>
                            <li> Windows PhotoEditor (videos too) </li>
                            <li> OBS </li>
                            <li> Streamlabs </li>
                            <li> Musescore and Sibilius </li>
                            <li> Scriverner </li>
                        </ul>
                    </div>
                </section>
                <section className="softskills">
                    <ul>
                        <h4>Soft Skills</h4>
                        <li> Streaming/public speaking </li>
                        <li> Linguistics </li>
                        <li> Wrting/Editing </li>
                        <li> Proofreading (English) and Translation </li>
                        <li> Communication (including deescalation in a hostile setting) </li>
                    </ul>
                </section>
                <section className="work">
                    <h4>Work History</h4>
                    <p>Though I've worked in many fields, they are not directly relevant to software devlopment. I can provide a detailed work history if requested.</p>
                        <ul>
                            <li>IP - Private English tutor</li>
                            <li>Eight years experience as an employed EFl Teacher - UK, Czech Republic, Russia</li>
                            <li>Guitar Tutor - Freelance</li>
                            <li>Freelance Editor, writer, translator</li>
                            <li>Casino Card Room Supervisor</li>
                            <li>Prison Service</li>
                            <li>Early years in Retail as worker and middle management.</li>
                        </ul>
                </section>
                <section className="education">
                    <h4>Education and Professional Certification</h4>
                    <ul>
                        <li>TEFL Diploma + Research paper "Gaming in the classroom"</li>
                        <li>CTBE - Certificate for Teaching business English</li>
                        <li>TEFL</li>
                        <li>4 A levels</li>
                        <li>Guitar Grade 1-8 and Teaching Certificate</li>
                        <li>UK Gambling Commission - PFL</li>
                    </ul>
                </section>	
            </div>
         </>
    );
}