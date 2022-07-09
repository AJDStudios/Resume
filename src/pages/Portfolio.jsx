import React from "react";
import Typewriter from "typewriter-effect";
import title from "./images/title.jpg";
import friends from "./images/friends.png";
import fravashiad from "./images/fravashiad.png";
import fravashijolana from "./images/fravashijolana.jpg";
import dissolve from "./images/dissolve.png";
import genericdemons from "./images/genericdemons.png";
import kreagore from "./images/kreagore.png";
import sonny from "./images/sonny.png";
import teenjo from "./images/teenjo.png";
import triad from "./images/triad.png";
import youngjo from "./images/youngjo.png";

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
                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Jdhs5-FWpYo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
                        <p>Made with the RPG maker engine and Java plugins (for example the "breathing enemies). OST (mostly), original artwork (ongoing)"</p> 
                        <p>The original game has 25-40 hours of gameplay available. Now I'm working on replacing engine features with my own and making the game bigger.</p> 
                        <p>The original is fully functional, if less pretty. There is a more up-to-date and full-version gameplay <a href="https://youtu.be/vPeS85kVHEk" target="_blank"> <span>video</span></a> but it takes longer to get into the game and there is an active chat.</p>
                        <a href="https://discord.gg/tMMVKstvac" target="_blank"><span>Both the original game and the current version of the new game can be downloaded for free directly via the linked discord</span></a>
                    </section>
                    <section class="VN">
                        <h3>Demons:Genesis VN</h3>
                        <p class="portnote">Note 1 * The videos may require some loading time - this is to prevent non-essential cookies tracking you here, but if you prefer the quicker video with cookies - watching on YouTube will be faster *</p>
                        <p class="portnote">note 2 * As these games will be commercial projects - the source code is not available. *</p>
                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/aRoYfyIdp0w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>made with Ren-py (Python)</p>
                        <p>The majority of the other project displays here are part of the design phase of this particular game - OST, sounds, art, story.</p>
                        <p>features to present are limited beyond the GUI for now</p>
                    </section>
                </section>    
                <section class="Art">
                    <h2>Art for VN</h2>
                    <div class="carousel-container">
                        <i class="fas fa-arrow-left" id="prevBtn"></i>
                        <i class="fas fa-arrow-right" id="nextBtn"></i>
                        <div class="carousel-slide">
                            <img id="lastclone" src={ friends } />
                            <img src={ title } />
                            <img src={ genericdemons } />
                            <img src={ fravashiad } />
                            <img src={ triad } />
                            <img src={ dissolve } />
                            <img src={ sonny } />
                            <img src={ youngjo } />
                            <img src={ teenjo } />
                            <img src={ fravashijolana } />
                            <img src={ kreagore } />
                            <img src={ friends } />
                            <img id="firstclone" src={ title } />
                        </div>
                        <p>All 3D models are made using daz 3D. Post work is handled with a combination of Gimp, Paint(vanilla and 3D), and PhotoEditor</p>
                    </div>
                </section>
            </div>
        </>
    );
}

