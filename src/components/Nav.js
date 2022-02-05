import './nav.css';
const Nav = () => {
    // const nav = document.querySelector('nav');
    // window.addEventListener('scroll', function(){
    //     nav.classList.toggle('active', window.scrollY < 0)
    // })
    return(
        <div className="Nav" >
            {/* <nav className='nav' > */}
                <b>
                    <p className="name">
                        AXL <span className="name-ch">WEB</span> DEVELOPER
                    </p>
                </b>

                <ul className='ul-container' >
                    <li className="ul-ch">
                        <a className='ul-link' href="#">Sobre Mi</a>
                    </li>
                    <li className="ul-ch">
                        <a className='ul-link' href="#"> Portafolio </a>
                    </li>
                    <li className="ul-ch">
                        <a className='ul-link' href="#"> Contacto </a>
                    </li>
                </ul>
            {/* </nav> */}

        </div>
    );
}

export default Nav;