import './languages.css';
import './responsive.css';
const Languages = () => {
    return(
        <div className="Languages">
            <h3 className="h3-lan">Languages and <span className="orange">Tools</span></h3>
            <div className="tool-container">
                    {/* HTML */}
                <div className="tool">
                    <h3>HTML</h3>
                    <img className="icon-lan" src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="html" />
                </div>

                {/* CSS */}
                <div className="tool">
                    <h3>CSS</h3>
                    <img className="icon-lan" src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="css" />
                </div>

                {/* JS */}
                <div className="tool">
                    <h3>JavaScript</h3>
                    <img className="icon-lan" src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="js" />
                </div>

                {/* Reactjs */}
                <div className="tool">
                    <h3>ReactJS</h3>
                    <img className="icon-lan" src="https://cdn-icons-png.flaticon.com/512/919/919851.png" alt="react" />
                </div>
            </div>
        </div>
    );
}

export default Languages;