import React from "react";
import ContactForm from "./Contactform.tsx";

export default function Contact() {
    return (
        <>
            <div className="open">
				<div className="cname">
					<span>C</span>
					<span>o</span>
					<span>n</span>
					<span>t</span>
					<span>a</span>
					<span>c</span>
					<span>t</span>
				</div>
            </div>
            <ContactForm />
            <div className="contact">
				<ul>
					<li>
						<i className="fa fa-phone"></i>
						<a href="tel:+447498284613" target="_blank" rel="noreferrer"><span>+44-7498-284-613</span></a>
					</li>
					<li>
						<i className="fa fa-envelope"></i>
						<a href="mailto:aaronjdodd1989@gmail.com" target="_blank" rel="noreferrer"><span>Aaronjdodd1989@gmail.com</span></a>
					</li>
					<li>
						<i className="fa fa-map-marker"></i>
						<a href="https://goo.gl/maps/UpuqQFsWMfMGMSYy8" target="_blank" rel="noreferrer"><span>Monmouth</span></a>
					</li>
				</ul>
			</div>
        </>
    )
}

