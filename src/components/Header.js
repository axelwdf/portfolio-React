import './header.css';
import Typical from 'react-typical';
function Header() {
    return (
        <div className="Header">
            {/* title */}
            <h1 className='h1'>
                `<span className="orange">This</span> is my portfolio :)`
            </h1>
            <p>
                <Typical 
                    className='typical'
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                    'Web Developer', 
                    1000, 
                    'Ethical Hacker', 
                    1000,
                    'Programmer', 
                    1000
                ]}
                />
            </p>
        </div>
    );
}

export default Header;