import React from "react";
import ContactForm from "./Contactform.tsx";

export default function Contact() {
    return (
        <>
            <div className="open">
				<div className="name">
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
						<a href="tel:+79777466273" target="_blank" rel="noreferrer"><span>+7-977-746-62-73</span></a>
					</li>
					<li>
						<i className="fa fa-envelope"></i>
						<a href="mailto:aaronjdodd1989@gmail.com" target="_blank" rel="noreferrer"><span>Aaronjdodd1989@gmail.com</span></a>
					</li>
					<li>
						<i className="fa fa-map-marker"></i>
						<a href="https://yandex.com/maps/-/CCUJiUf0CC" target="_blank" rel="noreferrer"><span>Khoroshovskoye Highway, Moscow</span></a>
					</li>
				</ul>
			</div>
        </>
    )
}

