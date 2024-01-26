import React from "react";
import Typewriter from "typewriter-effect";
import Carousel from "./Carousel.js"
import VN from "./VN.webm"
import RPG from "./RPG.webm"
import mhc from "./mhc.webp"

export default function Portfolio() {
    return (
        <>
            <div className="openp">
                <h1>Aaron James Dodd</h1>
                <Typewriter className="typewriter" 
  
                    onInit={(typewriter)=> {

                    typewriter
   
                    .typeString("Entrepeneur")
                        
                    .pauseFor(1000)
                    .deleteAll()
                   
                    .typeString("Designer")
                    
                    .pauseFor(1000)
                    .deleteAll()

                    .typeString("Indie Game Dev")
                        
                    .pauseFor(1000)
                    .deleteAll()

                    .typeString("Composer")
                        
                    .pauseFor(1000)
                    .deleteAll()

                    .typeString("Writer")
                        
                    .pauseFor(1000)
                    .deleteAll()

                    .typeString("Freelancer")
                        
                    .pauseFor(1000)
                    .deleteAll()

                    .typeString("Portfolio")
                        
                    .pauseFor(1000)
                    
                    .start();
                    
                    }}
                />
            </div>
            <div className="portcontainer">
                <section classname="workprojects">
                    <h2>Work Projects</h2>
                    <section classname="mhcproject">
                        <a href="https://myhealthchecked.com/" target="_blank" rel="noreferrer" ><h3>myhealthchecked.com</h3></a>
                        <a href="https://myhealthchecked.com/" target="_blank" rel="noreferrer" ><img className="mhc" src={ mhc } alt=""/></a>
                        <h5>Position: Frontend Developer</h5>
                        <h5>Company: MyHealthChecked.com - Concepta</h5>
                        <h5>Startdate: DEC 2022</h5>
                        <p>
                        Role Overview:
                        <br></br>
                        Primarily responsible for the development, maintenance, and enhancement of the company's frontend website.
                        <br></br>
                        Play a pivotal role in the release management, feature implementation, and bug fixing processes.
                        </p>
                        <p>
                        Key Responsibilities:
                        <br></br>
                        Extensive control and oversight of the website development, ensuring its optimal functionality and user experience.
                        <br></br>
                        Heavy involvement in both CMS management and direct code modifications to enhance the website's performance and features.
                        <br></br>
                        Notable task: the development and integration of a search bar, handling all aspects from conception to deployment.
                        <br></br>
                        Regularly work with SQL and data management, as well as frontend elements of our dashboard and LIMS.
                        </p>
                        <p>
                        Collaborations and Contributions:
                        <br></br>
                        Actively collaborate with various departments, particularly with the product, design and marketing teams, to align development goals with business objectives.
                        </p>
                        <p>
                        Achievements:
                        <br></br>
                        Significantly influenced the current iteration of the website, contributing to its improved usability and functionality. As well as being the sole-frontend developer during a major product launch in summer 2023.
                        <br></br>
                        Demonstrated a strong capability in both technical and collaborative aspects of web development, particularly in a fast-paced startup environment.
                        </p>     
                    </section>
                </section>
                <section className="games">
                    <h2>Game Projects</h2>
                    <section className="RPG">
                        <h3>Demons: Genesis <br></br>the RPG</h3>
                        <video src={ RPG } width="600" height="300" controls="controls" />
                        <h5>Role: Solo Developer</h5>
                        <h5>Platform: RPG Maker</h5>
                        <h5>Duration: 30-40 hours of gameplay</h5>
                        <p>
                            Overview:
                            <br></br>
                            Developed a fully functional role-playing game with a comprehensive narrative arc, which later also became a 100,000 page book.
                            <br></br>
                            Managed all aspects of game development including story writing, character design, and gameplay mechanics.
                        </p>
                        <p>
                            Key Features:
                            <br></br>
                            Branching storyline enriched with significant player choices, allowing for diverse gameplay experiences.
                            <br></br>
                            Non-linear chapter progression enabling players to explore the game's world in any order they prefer.
                            <br></br>
                            Extensive character roster with over 20 unique characters, including 3 main characters and numerous optional party members. Each character is distinct with some having additional post-work enhancements.
                            <br></br>
                            Partial Original Soundtrack (OST), enhancing the game's immersive experience.
                            <br></br>
                            Game tested by approximately 15 people, available for free download.
                        </p>
                        <p>
                            Achievements:
                            <br></br>
                            Successfully completed a solo game development project.
                            <br></br>
                            Integrated a rich, player-driven narrative, with extensive storytelling and interactive design.
                            <br></br>
                            Handled various aspects from conceptualization to final execution.</p>      
                        <p>There is a more up-to-date and full-version gameplay <a href="https://youtu.be/vPeS85kVHEk" target="_blank" rel="noreferrer"> <span>video</span></a> but it takes longer to get into the game and there is an active chat.</p>
                    </section>
                    <section className="VN">
                        <h3>Demons: Genesis <br></br>VN</h3>
                        <video src={ VN } width="600" height="300" controls="controls" />
                        <h5>Role: Game Developer / Artist</h5>
                        <h5>Platform: Ren'Py</h5>
                        <h5>Development Stage: Early Development</h5>
                        <p>
                            Overview:
                            <br></br>
                            Currently developing a visual novel game with an emphasis on story and unique art, it follows the same basic story of the RPG and the book, but more polished.
                            <br></br>
                            Successfully implemented foundational game elements including a splash screen and a pre-game content warning.
                        </p>
                        <p>
                            Key Features:
                            <br></br>
                             Early Custom-designed game menu, derived and enhanced from Ren'Py's default options.
                            <br></br>
                            Successfully implemented foundational game elements including a splash screen and a pre-game content warning.
                            <br></br>
                            A significant collection of high-quality, semi-realistic character art, with over 50 unique characters developed for the game.
                        </p>
                        <p>
                            Current Progress:
                            <br></br>
                            In the early stages of game development, focusing on establishing the visual and thematic tone of the game.
                            <br></br>
                            Laying the groundwork for narrative development and gameplay mechanics.
                        </p>
                    </section>
                </section>    
                <Carousel />
            </div>
        </>
    );
}

