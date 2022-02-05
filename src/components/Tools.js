import './tools.css';
const Tools = () => {
    return(
        <div className="Tool">
            <div className="tool-container">
                    {/* github */}
                <div className="tool">
                    <h3>GitHub</h3>
                    <img className='icon-lan' src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="github" />
                </div>

                {/* git */}
                <div className="tool">
                    <h3>Git</h3>
                    <img className='icon-lan' src="https://cdn-icons.flaticon.com/png/512/1240/premium/1240970.png?token=exp=1643853484~hmac=3f7cd4933fa89830182e05fc9f2bf2be" alt="git" />
                </div>

            </div>
        </div>
    );
}

export default Tools;