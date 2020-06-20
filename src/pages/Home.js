import React from 'react';
import MainSection from '../components/MainSection';
import PromoContainer from '../components/promo-banner/PromoContainer';
import HeaderLogo from '../components/HeaderLogo';
import Categories from '../components/Categories';
import Popular from '../components/Popular';
import GameProviders from '../components/GameProviders';
import Footer from '../components/Footer';

class Home extends React.Component {


    render() {
        return <>
            <div className="row">
                <div className="col">
                    <HeaderLogo />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <PromoContainer />
                </div>
            </div>
            <div className="sport-categories">
                Sport Categories
            </div>
            <div className="row">
                <div className="col">
                    <Categories />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <Popular />
                </div>
            </div>
            <div className="sport-categories">
                Game Providers
            </div>
            <div className="row mt-5">
                <div className="col">
                    <GameProviders />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <Footer />
                </div>
            </div>
        </>
    }
}



export default Home;


