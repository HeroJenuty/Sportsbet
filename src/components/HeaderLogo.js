import React from 'react';

const HeaderLogo = props => {
    return (
        <div className="row d-flex">
            <div className="col">
                    <div className="header-logos d-flex align-items-center">
                        <div className="partner d-flex">
                            <div className="partner-name">
                                <i className="fa fa-shield-alt"></i>
                                <span>Main Club Partner</span>
                            </div>
                        </div>
                        <div className="sponsor d-flex">
                            <div className="sponsor-name d-flex text-align-center">
                                <i className="fa fa-chess-rook"></i>
                                <span>Official Shirt Sponsor</span></div>
                        </div>
                    </div>
            </div>

            <div className="col d-flex justify-content-end">
                <div className="login-buttons">
                    <button type="button" className="btn btn-primary signin-button">Sing in</button>
                    <button type="button" className="btn btn-primary register-button">Register</button>
                </div>
            </div>
        </div>

    )
}

export default HeaderLogo;