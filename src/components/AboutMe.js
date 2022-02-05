import React from "react";
import './responsive.css';
import './aboutMe.css';

const AboutMe = ({about}) => {
    return(
        <div className="AboutMe">

            <div className="icon-start" >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-code" viewBox="0 0 16 16">
                <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"/>
                </svg>
            </div>
            <h2 className="h2" >
                Sobre <span className='orange'>mi</span>
            </h2>

            {/* images */}
            <div className="image">
                <img  className="photo" src="https://avatars.githubusercontent.com/u/95008306?v=4" alt="foto" />
            </div>

            {/* text me */}

            <p className='about-text' >
            Hola, mi nombre es Axel Martinez Hernandez. Tengo desarrollano ya 1 año, 
            usando tecnologías como 'HTML, CSS, JS y ReactJS'. <br/>
            Además de eso, soy un apacionado de la seguridad infromática, 
            sabeindo utilizar + 10 softwares enfocados en Pentesting. <br/>
            Espero sea de tu agrado este espacio, 
            así como también estar colaborando contigo en algún proyecto :3 .
            </p>
        
            <div className="icon-end" >  
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                </svg>
            </div>
        </div>
    );
}

export default AboutMe;