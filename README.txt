# Resume
A modern CV for frontend software engineer

Reflections from the project
    - I originally went into this with the mindset "I'll see what I can do". This was fine and I practiced a lot, but after I put the design I wanted on paper and pursued that design, 
    not knowing how to do much of it, I can safely say this will always be the approach going forward. Have an idea, make that work, not build an idea on what I know works. 
    - Now that I'm on the seventh iteration of this (Html/css only, with javascript,, game dev style through python, flask and now React.) I do not regret making any of these iterations, 
    in fact I'm proud that I managed to make each design work.
    - I started with a mobile first mindset that I lost track of somewhere in the React transition. I can certainly say mobile-first using media-queries to add complexity is a more 
    sensible approach, but "don't get it right, get it written" took over. I have a decision now, rebuild the CSS with mobile-first in mind, or refine what I have. 
    The next project will follow a mobile-first mindset, however. 
    - I've been slow. That makes me a little self-conscious, but I have to keep in mind that I'm working full-time as well, and I have to switch between mindsets for both jobs. 
    - Mostly, I'm gald I dropped only a couple of planned features (which I can always re-add) I didn't shy away from the unknown, and I gained more from that, than anything else. 



Core features 
          - responsive and (originally) built with a "mobile-first" mindset. (this particlular work-flow will readress these two points) 
          - built using multiple languages (a lot of which will be experimental)
          - Most features added with the mindset "what would you see on a shop website"?
          - Built with the potential for growth and easy-implementation of new features.   

Designing the current iteration (flask origin) block by block
 - first block was the nav bar (without links) made with Html, CSS and Javascript for the "hamburger"
 - second block was actually the top block (I moved this back below the navbar) - animated splash with my name and job aspired to.
 - Third block was the about section. Originally, I planned to add an easter-egg to the image on this page, I will look into this when everything is functional.
 - added a dark/light mode toggle (later broke this on transition) using javascript.
 - added the relevant needed templates, need to change the routing of "/" on the live version
 - animated the portfolio head - this typewriter effect was created four different ways, each time it worked. Javascript, python (2 variants) and now JSX.
 - laid the groundwork for a couple easter eggs - only found if you check the code or try fairly basic functionality. (this was removed again on the transition to react, I haven't decided whether or not to add these again.) 
 - imported some portfolio pieces as statics. Over time thee were almost all converted to webP and webM format. 
 - added the footer. 
 - navbar became functional  
 - added stage 1 of Easter egg 2 (redacted) 
 - navbar now sticky - later broken during transition.
 - added video for RPG
 - added image carousel - three iterations in the end with the current one definitely being the best.
 - blocked as much of the cookie data from YouTube as I know how to do (my ethical hacking still needs a ton of work - red and blue team). 
 this became a defunct bit of code when the embeds became webM
 - added the VN project video
 - added skills content - this was styled after the transition to React
 - transferred to a React framework
 - Transferred all content to react framework (without functioning JS)
                                    Took a few days off for wife's birthday and for migration purposes.
 - Contact form added, but had a bug for a few days. Added a Recapcha and fixed the bug.
 - First attempt to get this online using githubpages led to only having the readme online... Took me about a week to get it online, but I did it. 
  - it's live.
 - Added static contact info
 - custom icon added
 - Cleaned up CSS for Contact
 - As a lot of what I did in JS originally is different in React, the JS file is still available in the repository commented out for reference. 
 - All hero animations done. 
 - Carousel works again
 - converted images and videos to WebP and WebM files.
 - worked on general CSS responsiveness. 

        Known issues in order of priority
            - Burger functionality
            - the route for "/" needs to drop the "Resume" route - fixed it kind of but reverted it until I have a more realistic fix.
            - light and dark toggle

        Extra features
            - Add Russian
            - search bar
            - music player for compositions
            - the "secret" pages