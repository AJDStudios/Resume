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
                        <p>I am the frontend software engineer on this project. Built with React.js and using a headless CMS via sanity-studio.</p> 
                        <p>Recently -- 21/05/2022 -- the new web design was launched along with three separate product launches that tied in with a wider popular highstreet store's national launch of our products.</p>
                        <p>My day to day at the moment is maintaining our dashboard and the frontend of our laboratory inventory system, the CMS - including its functionality - and updating content and metadata in-line with the needs of the business.</p>
                        <p>As we are a relatively small start-up, I do also wear a number of hats in the company.</p>     
                    </section>
                </section>
                <section className="games">
                    <h2>Game Projects</h2>
                    <section className="RPG">
                        <h3>Demons: Genesis <br></br>the RPG</h3>
                        <p className="portnote">note 2 * As these games will be commercial projects - the source code is not available. *</p>
                        <video src={ RPG } width="600" height="300" controls="controls" />
                        <p>Made with the RPG maker engine and Java plugins (for example the "breathing enemies). OST (mostly), original artwork (ongoing)"</p> 
                        <p>The original game has 25-40 hours of gameplay available. Now I'm working on replacing engine features with my own and making the game bigger.</p> 
                        <p>The original is fully functional, if less pretty. There is a more up-to-date and full-version gameplay <a href="https://youtu.be/vPeS85kVHEk" target="_blank" rel="noreferrer"> <span>video</span></a> but it takes longer to get into the game and there is an active chat.</p>
                        <a href="https://discord.gg/tMMVKstvac" target="_blank" rel="noreferrer" ><p>Both the original game and the current version of the new game can be downloaded for free directly via the linked discord</p></a>
                    </section>
                    <section className="VN">
                        <h3>Demons: Genesis <br></br>VN</h3>
                        <p className="portnote">Note 1 * As these games will be commercial projects - the source code is not available. *</p>
                        <video src={ VN } width="600" height="300" controls="controls" />
                        <p>made with Ren-py (Python)</p>
                        <p>The majority of the other project displays here are part of the design phase of this particular game - OST, sounds, art, story.</p>
                        <p>features to present are limited beyond the GUI for now</p>
                    </section>
                </section>    
                <Carousel />
            </div>
        </>
    );
}

