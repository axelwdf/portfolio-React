import './services.css';
const Services = () => {
    return(
        <div className="Services">
            {/* icons */}
            <div className="icon-start" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi-code" viewBox="0 0 16 16">
                <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"/>
                </svg>
            </div>


            <h2>
                Mis <span className='orange' >servicios</span>
            </h2>

            {/* mis servicios */}
            <h3>
                `Pruebas de penetración <span className="orange">(Pentesting)</span>`
            </h3>
            <p className="text-services-pather">
                Pruebas de vulnerabilidades a sitios web con <span className="text-services" >nmap</span>, <span className="text-services" >herramientas cisco</span>, 
                <span className="text-services" >wpscan</span>, etc.
                Así como la explicación de uso de cada herramienta y de las posibles vulnerabilidades que tenga.
            </p>

            {/* second services */}
            <h3>
                `Desarrollo <span className="orange">web(Dev)</span>`
            </h3>
            <p className="text-services-pather">
            Desarrollo de sitios web responsivos es decir, adaptables a varios dispositivos.
            Buen <span className="text-services" >Posicionamiento</span> en goole escribiendo de la manera más limpia y semánticamnte posible tu <span className="text-services" >código</span>.
            </p>

            {/* icon end */}
            <div className="icon-end" >  
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi-code" viewBox="0 0 16 16">
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                </svg>
            </div>
        </div>  
    );
}

export default Services;