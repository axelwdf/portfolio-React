import './clients.css';
import './responsive.css';
const Client = () => {
    return(
        <div className="Client">
            <h2 className='h2' >
                Proyectos y Clientes
            </h2>
            {/* clientes */}
            {/* banquetes */}

            <div className="img-container">
                <a target='_blank' href="https://github.com/AxelHm/BanMi">
                    <img className='img-clients' src="https://github.com/AxelHm/img-hosting/blob/AxelHm-patch-1-BM/BAN-MI/logoBanMi.png?raw=true" alt="banquetes" />
                </a>

                {/* quotes */}
                <a target='_blank' href="https://github.com/axelwdf/Quotes">
                    <img className='img-clients' src="https://github.com/AxelHm/img-hosting/blob/AxelHm-patch-1-BM/BAN-MI/Quotes-img.png?raw=true" alt="Quotes" />
                </a>

                {/* R and M */}
                <a target='_blank' href="https://github.com/axelwdf/RickAndMorty.io">
                    <img className='img-clients' src="https://github.com/AxelHm/img-hosting/blob/AxelHm-patch-1-BM/BAN-MI/RnM.jpeg?raw=true" alt="RaM" />
                </a>

                {/* Crud User */}
                <a target='_blank' href="https://github.com/axelwdf/Crud-Users.io">
                    <img className='img-clients' src="https://github.com/AxelHm/img-hosting/blob/AxelHm-patch-1-BM/BAN-MI/CrudUser.jpeg?raw=true" alt="CrudUsers" />
                </a>
            </div>
        </div>
    );
}

export default Client;