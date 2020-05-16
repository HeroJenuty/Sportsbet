import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const Popular = props => {
    return (

        <div className="carousel">
            <div className="title">
                <h5>Popular</h5>

                <div class="carousel slide" data-ride="carousel">

                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner">
                        <div className="carousle-item active">
                            <div className="image-box">
                                <img src="https://sportsbet-io.imgix.net/sportsbet-io/portals/home-app/assets/product_card-livecasino.png?auto=compress%2Cformat&ixlib=react-9.0.1&w=100" alt="Frist Slide"></img>
                                <div className="text-box">Poker</div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="image-box">
                                <img src="https://sportsbet-io.imgix.net/sportsbet-io/portals/home-app/assets/product_card-poker.png?auto=compress%2Cformat&ixlib=react-9.0.1&w=100" alt="Second Slide"></img>
                                <div className="text-box">Bombay Club</div>
                            </div>
                        </div>

                        <div class="carousel-item">
                            <div className="image-box">
                                <img src="https://sportsbet-io.imgix.net/sportsbet-io/portals/home-app/assets/product_card-bombayclub2.png?auto=compress%2Cformat&ixlib=react-9.0.1&w=100" alt="Third Slide"></img>
                                <div className="text-box">Live dealer</div>
                            </div>
                        </div>
                    </div>

                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>



    )

}

export default Popular;