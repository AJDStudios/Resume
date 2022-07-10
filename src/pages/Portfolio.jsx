import React from "react";
import Typewriter from "typewriter-effect";
import Carousel from "./Carousel.js"
import VN from "./VN.webm"


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
                <section class="games">
                    <h2>Game Projects</h2>
                    <section class="RPG">
                        <h3>Demons:Genesis the RPG</h3>
                        <p class="portnote">Note 1 * The videos may require some loading time - this is to prevent non-essential cookies tracking you here, but if you prefer the quicker video with cookies - watching on YouTube will be faster *</p>
                        <p class="portnote">note 2 * As these games will be commercial projects - the source code is not available. *</p>
                        <video src={VN} width="600" height="300" controls="controls" autoplay="true" />
                        <p>Made with the RPG maker engine and Java plugins (for example the "breathing enemies). OST (mostly), original artwork (ongoing)"</p> 
                        <p>The original game has 25-40 hours of gameplay available. Now I'm working on replacing engine features with my own and making the game bigger.</p> 
                        <p>The original is fully functional, if less pretty. There is a more up-to-date and full-version gameplay <a href="https://youtu.be/vPeS85kVHEk" target="_blank"> <span>video</span></a> but it takes longer to get into the game and there is an active chat.</p>
                        <a href="https://discord.gg/tMMVKstvac" target="_blank"><span>Both the original game and the current version of the new game can be downloaded for free directly via the linked discord</span></a>
                    </section>
                    <section class="VN">
                        <h3>Demons:Genesis VN</h3>
                        <p class="portnote">Note 1 * The videos may require some loading time - this is to prevent non-essential cookies tracking you here, but if you prefer the quicker video with cookies - watching on YouTube will be faster *</p>
                        <p class="portnote">note 2 * As these games will be commercial projects - the source code is not available. *</p>
                        <video src={VN} width="600" height="300" controls="controls" autoplay="true" />
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

