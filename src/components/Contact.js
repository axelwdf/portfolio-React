import './contact.css';
const Contact = ({ejectWhatsApp, ejectGithub, ejectLinked}) =>{

    return(
        <div className="Contact">
            <h2 className='h2' >Mis redes sociales</h2>
            <div className="tool-container">
                <div className="social-media" onClick={ejectWhatsApp} >
                    <img class='icon-lan' id="whatsapp" src="https://cdn-icons.flaticon.com/png/512/2504/premium/2504957.png?token=exp=1643854538~hmac=bf3d9123f0df1b971988f9d1f0f80947" alt="whatsapp" />
                </div>
                <div className="social-media" onClick={ejectGithub} >
                    <img class='icon-lan' id="github" src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="giuhub" />
                </div>
                <div className="social-media" onClick={ejectLinked}>
                    <img class='icon-lan' id="linked" src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1643697032~hmac=6e96f367a0176273debd097bc7c81c18" alt="linkedIn" />
                </div>
            </div>

        </div>
    );
}

export default Contact;